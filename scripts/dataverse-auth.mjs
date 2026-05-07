import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const AUTH_DIR = path.join(ROOT, '.cache', 'auth');

const PUBLIC_CLIENT_ID = '51f81489-12ee-4a9e-aaae-a2591f45987d';
const AUTHORITY = 'https://login.microsoftonline.com/common/oauth2/v2.0';
const TOKEN_URL = `${AUTHORITY}/token`;
const DEVICECODE_URL = `${AUTHORITY}/devicecode`;
const SAFETY_MARGIN_MS = 60_000;

function envHost(envUrl) {
  return new URL(envUrl).host.toLowerCase();
}

function tokenPath(envUrl) {
  return path.join(AUTH_DIR, `${envHost(envUrl)}.json`);
}

function scopeFor(envUrl) {
  const u = new URL(envUrl);
  return `${u.protocol}//${u.host}/.default offline_access`;
}

async function readCache(envUrl) {
  try {
    const raw = await fs.readFile(tokenPath(envUrl), 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeCache(envUrl, data) {
  await fs.mkdir(AUTH_DIR, { recursive: true });
  const file = tokenPath(envUrl);
  await fs.writeFile(file, JSON.stringify(data, null, 2), 'utf8');
  try { await fs.chmod(file, 0o600); } catch { /* best-effort on Windows */ }
}

async function postForm(url, params) {
  const body = new URLSearchParams(params).toString();
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body,
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = { raw: text }; }
  return { ok: res.ok, status: res.status, json };
}

async function deviceCodeFlow(envUrl) {
  const start = await postForm(DEVICECODE_URL, {
    client_id: PUBLIC_CLIENT_ID,
    scope: scopeFor(envUrl),
  });
  if (!start.ok) {
    throw new Error(`devicecode failed (${start.status}): ${JSON.stringify(start.json)}`);
  }
  const { device_code, user_code, verification_uri, expires_in, interval } = start.json;
  console.log('');
  console.log('========================================================');
  console.log(`  Apri:        ${verification_uri}`);
  console.log(`  Codice:      ${user_code}`);
  console.log(`  Scade tra:   ${Math.round(expires_in / 60)} min`);
  console.log('========================================================');
  console.log(`[auth] in attesa del login per ${envHost(envUrl)}…`);

  const pollIntervalMs = (interval || 5) * 1000;
  const deadline = Date.now() + (expires_in || 900) * 1000;

  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, pollIntervalMs));
    const r = await postForm(TOKEN_URL, {
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
      client_id: PUBLIC_CLIENT_ID,
      device_code,
    });
    if (r.ok) return r.json;
    const err = r.json?.error;
    if (err === 'authorization_pending') continue;
    if (err === 'slow_down') {
      await new Promise((res) => setTimeout(res, pollIntervalMs));
      continue;
    }
    if (err === 'expired_token' || err === 'access_denied') {
      throw new Error(`device flow rejected: ${err} — ${r.json?.error_description || ''}`);
    }
    throw new Error(`token poll failed (${r.status}): ${JSON.stringify(r.json)}`);
  }
  throw new Error('device code expired before user authenticated');
}

async function refreshTokens(envUrl, refreshToken) {
  const r = await postForm(TOKEN_URL, {
    grant_type: 'refresh_token',
    client_id: PUBLIC_CLIENT_ID,
    refresh_token: refreshToken,
    scope: scopeFor(envUrl),
  });
  if (!r.ok) throw new Error(`refresh failed (${r.status}): ${r.json?.error_description || JSON.stringify(r.json)}`);
  return r.json;
}

function persistFromTokenResponse(envUrl, tok) {
  return {
    envUrl,
    envHost: envHost(envUrl),
    access_token: tok.access_token,
    refresh_token: tok.refresh_token,
    expires_at: Date.now() + (tok.expires_in || 3600) * 1000 - SAFETY_MARGIN_MS,
    obtained_at: new Date().toISOString(),
  };
}

export async function getAccessToken(envUrl) {
  if (!envUrl) throw new Error('envUrl is required');
  const cached = await readCache(envUrl);

  if (cached?.access_token && cached.expires_at && cached.expires_at > Date.now()) {
    return cached.access_token;
  }

  if (cached?.refresh_token) {
    try {
      const refreshed = await refreshTokens(envUrl, cached.refresh_token);
      const data = persistFromTokenResponse(envUrl, refreshed);
      await writeCache(envUrl, data);
      console.log(`[auth] refreshed token for ${envHost(envUrl)}`);
      return data.access_token;
    } catch (err) {
      console.warn(`[auth] refresh failed (${err.message}), falling back to device flow`);
    }
  }

  const tok = await deviceCodeFlow(envUrl);
  const data = persistFromTokenResponse(envUrl, tok);
  await writeCache(envUrl, data);
  console.log(`[auth] token cached for ${envHost(envUrl)}`);
  return data.access_token;
}

export async function logout(envUrl) {
  const file = tokenPath(envUrl);
  try {
    await fs.rm(file);
    console.log(`[auth] removed token cache: ${path.relative(ROOT, file)}`);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
    console.log(`[auth] no cached token for ${envHost(envUrl)}`);
  }
}
