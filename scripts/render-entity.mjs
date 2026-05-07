function summarizeRelationships(rels, kind) {
  if (!rels || rels.length === 0) return '';
  const lines = [`### ${kind} (${rels.length})`, ''];
  lines.push('| Name | Target entity | Referencing attribute | Navigation property |');
  lines.push('| --- | --- | --- | --- |');
  for (const r of rels) {
    lines.push(`| \`${r.name}\` | ${r.target ? `[${r.target}](${r.target}.md)` : '_n/a_'} | ${r.referencingAttribute ? `\`${r.referencingAttribute}\`` : '_n/a_'} | ${r.navigation ? `\`${r.navigation}\`` : '_n/a_'} |`);
  }
  lines.push('');
  return lines.join('\n');
}

export function renderEntityMd(entity, synonymsForEntity, sourceMeta) {
  const fm = {
    logical: entity.logical,
    display: entity.display,
    entitySetName: entity.entitySetName,
    primaryId: entity.primaryIdAttribute,
    primaryName: entity.primaryNameAttribute,
    tableType: entity.tableType,
    ownership: entity.ownership,
  };
  if (synonymsForEntity) {
    if (synonymsForEntity.it?.length) fm.synonyms_it = synonymsForEntity.it;
    if (synonymsForEntity.en?.length) fm.synonyms_en = synonymsForEntity.en;
  }
  if (sourceMeta?.source) fm.source = sourceMeta.source;
  if (sourceMeta?.envHost) fm.envHost = sourceMeta.envHost;

  const fmYaml = Object.entries(fm)
    .filter(([, v]) => v !== null && v !== undefined && !(Array.isArray(v) && v.length === 0))
    .map(([k, v]) => {
      if (Array.isArray(v)) return `${k}: [${v.map((x) => JSON.stringify(x)).join(', ')}]`;
      return `${k}: ${JSON.stringify(v)}`;
    })
    .join('\n');

  const writeAttrs = entity.writableAttributes;
  const readAttrs = entity.readonlyAttributes;

  const sections = [];
  sections.push(`---\n${fmYaml}\n---\n`);
  sections.push(`# ${entity.display}\n`);
  if (entity.description) sections.push(`${entity.description}\n`);

  sections.push('## Identity\n');
  const idTable = [
    ['Logical name', `\`${entity.logical}\``],
    ['Display name', entity.display],
    ['Display (plural)', entity.displayPlural],
    ['Schema name', entity.schemaName ? `\`${entity.schemaName}\`` : null],
    ['Entity set (Web API)', entity.entitySetName ? `\`${entity.entitySetName}\`` : null],
    ['Primary id attribute', entity.primaryIdAttribute ? `\`${entity.primaryIdAttribute}\`` : null],
    ['Primary name attribute', entity.primaryNameAttribute ? `\`${entity.primaryNameAttribute}\`` : null],
    ['Table type', entity.tableType],
    ['Ownership', entity.ownership],
  ].filter(([, v]) => v);
  sections.push('| Property | Value |');
  sections.push('| --- | --- |');
  for (const [k, v] of idTable) sections.push(`| ${k} | ${v} |`);
  sections.push('');

  if (entity.entitySetName) {
    sections.push('## Web API examples\n');
    sections.push(`\`\`\`http\nGET /api/data/v9.2/${entity.entitySetName}?$select=${entity.primaryNameAttribute || ''}&$top=10\nGET /api/data/v9.2/${entity.entitySetName}(<guid>)\nPOST /api/data/v9.2/${entity.entitySetName}\nPATCH /api/data/v9.2/${entity.entitySetName}(<guid>)\nDELETE /api/data/v9.2/${entity.entitySetName}(<guid>)\n\`\`\`\n`);
  }

  sections.push(`## Attributes\n`);
  sections.push(`Writable: **${writeAttrs.length}** · Read-only: **${readAttrs.length}**\n`);
  if (writeAttrs.length) {
    sections.push('### Writable\n');
    sections.push(writeAttrs.map((a) => `\`${a}\``).join(', '));
    sections.push('');
  }
  if (readAttrs.length) {
    sections.push('### Read-only\n');
    sections.push(readAttrs.map((a) => `\`${a}\``).join(', '));
    sections.push('');
  }

  sections.push('## Relationships\n');
  sections.push(summarizeRelationships(entity.manyToOne, 'Many-to-One'));
  sections.push(summarizeRelationships(entity.oneToMany, 'One-to-Many'));
  sections.push(summarizeRelationships(entity.manyToMany, 'Many-to-Many'));

  sections.push('## Source\n');
  if (sourceMeta?.url) {
    const label = sourceMeta.label || `${entity.logical}.md`;
    sections.push(`Generated from [${label}](${sourceMeta.url}) on ${new Date().toISOString().slice(0, 10)}.`);
  } else {
    sections.push(`Generated on ${new Date().toISOString().slice(0, 10)}.`);
  }

  return sections.join('\n');
}
