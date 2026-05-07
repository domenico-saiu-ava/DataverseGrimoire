import matter from 'gray-matter';

const PROPERTY_KEYS = [
  'DisplayName',
  'DisplayCollectionName',
  'SchemaName',
  'CollectionSchemaName',
  'EntitySetName',
  'LogicalName',
  'LogicalCollectionName',
  'PrimaryIdAttribute',
  'PrimaryNameAttribute',
  'TableType',
  'OwnershipType',
];

const RELATIONSHIP_SECTIONS = {
  manyToOne: '## Many-to-One relationships',
  oneToMany: '## One-to-Many relationships',
  manyToMany: '## Many-to-Many relationships',
};

const ATTRIBUTE_SECTIONS = {
  writable: '## Writable columns/attributes',
  readonly: '## Read-only columns/attributes',
};

const cleanCell = (s) => s.replace(/`/g, '').replace(/\*\*/g, '').trim();

function sectionSlice(body, header, nextHeaders) {
  const start = body.indexOf(header);
  if (start === -1) return null;
  const after = start + header.length;
  let end = body.length;
  for (const h of nextHeaders) {
    const idx = body.indexOf(h, after);
    if (idx !== -1 && idx < end) end = idx;
  }
  return body.slice(after, end);
}

function parseProperties(body) {
  const section = sectionSlice(body, '## Properties', ['## Writable columns', '## Read-only columns', '## Many-to-One', '## One-to-Many', '## Many-to-Many']);
  if (!section) return {};
  const out = {};
  const re = /^\|\s*\*\*([A-Za-z]+)\*\*\s*\|\s*([^|]+?)\s*\|\s*$/gm;
  let m;
  while ((m = re.exec(section)) !== null) {
    const key = m[1];
    const val = cleanCell(m[2]);
    if (PROPERTY_KEYS.includes(key)) out[key] = val;
  }
  return out;
}

function parseAttributeList(body, sectionHeader) {
  const nextHeaders = ['## Writable columns', '## Read-only columns', '## Many-to-One', '## One-to-Many', '## Many-to-Many', '\n### '];
  const idx = body.indexOf(sectionHeader);
  if (idx === -1) return [];
  const after = idx + sectionHeader.length;
  let end = body.length;
  for (const h of nextHeaders) {
    const i = body.indexOf(h, after);
    if (i !== -1 && i < end) end = i;
  }
  const slice = body.slice(after, end);
  const out = [];
  const re = /^- \[([^\]]+)\]\(#BKMK_[^)]+\)\s*$/gm;
  let m;
  while ((m = re.exec(slice)) !== null) out.push(m[1]);
  return out;
}

function parseRelationshipBlocks(body, header) {
  const nextHeaders = Object.values(RELATIONSHIP_SECTIONS).filter((h) => h !== header);
  const section = sectionSlice(body, header, nextHeaders);
  if (!section) return [];
  const out = [];
  const blockRe = /### <a name="BKMK_[^"]+"><\/a>\s*([A-Za-z0-9_]+)\s*\n([\s\S]*?)(?=\n### |\n## |$)/g;
  let m;
  while ((m = blockRe.exec(section)) !== null) {
    const name = m[1];
    const block = m[2];
    const refEntity = (block.match(/\|ReferencedEntity\|\s*`?([^`|\n]+)`?\s*\|/) || [])[1]?.trim();
    const refAttr = (block.match(/\|ReferencedAttribute\|\s*`?([^`|\n]+)`?\s*\|/) || [])[1]?.trim();
    const refingAttr = (block.match(/\|ReferencingAttribute\|\s*`?([^`|\n]+)`?\s*\|/) || [])[1]?.trim();
    const navProp = (block.match(/\|ReferencingEntityNavigationPropertyName\|\s*`?([^`|\n]+)`?\s*\|/) || [])[1]?.trim();
    const m2mTarget = (block.match(/\|IntersectAttribute\|\s*`?([^`|\n]+)`?\s*\|/) || [])[1]?.trim();
    out.push({
      name,
      target: refEntity || m2mTarget || null,
      referencedAttribute: refAttr || null,
      referencingAttribute: refingAttr || null,
      navigation: navProp || null,
    });
  }
  return out;
}

function parseDescription(body) {
  const headerIdx = body.indexOf('# ');
  if (headerIdx === -1) return '';
  const afterHeader = body.indexOf('\n', headerIdx) + 1;
  const sectionStart = body.indexOf('## ', afterHeader);
  const block = body.slice(afterHeader, sectionStart === -1 ? body.length : sectionStart).trim();
  return block.split(/\n\s*\n/)[0].trim();
}

export function parseEntity(markdown, filename) {
  const parsed = matter(markdown);
  const body = parsed.content;
  const props = parseProperties(body);
  const description = parseDescription(body);
  const writable = parseAttributeList(body, ATTRIBUTE_SECTIONS.writable);
  const readonly = parseAttributeList(body, ATTRIBUTE_SECTIONS.readonly);
  const manyToOne = parseRelationshipBlocks(body, RELATIONSHIP_SECTIONS.manyToOne);
  const oneToMany = parseRelationshipBlocks(body, RELATIONSHIP_SECTIONS.oneToMany);
  const manyToMany = parseRelationshipBlocks(body, RELATIONSHIP_SECTIONS.manyToMany);

  const logical = props.LogicalName || filename.replace(/\.md$/, '');
  return {
    logical,
    display: props.DisplayName || logical,
    displayPlural: props.DisplayCollectionName || null,
    schemaName: props.SchemaName || null,
    entitySetName: props.EntitySetName || null,
    primaryIdAttribute: props.PrimaryIdAttribute || null,
    primaryNameAttribute: props.PrimaryNameAttribute || null,
    tableType: props.TableType || null,
    ownership: props.OwnershipType || null,
    description,
    title: parsed.data.title || null,
    frontmatterDescription: parsed.data.description || null,
    writableAttributes: writable,
    readonlyAttributes: readonly,
    manyToOne,
    oneToMany,
    manyToMany,
  };
}
