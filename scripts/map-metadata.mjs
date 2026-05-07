function localizedLabel(label) {
  if (!label) return null;
  const user = label.UserLocalizedLabel?.Label;
  if (user) return user;
  const first = label.LocalizedLabels?.[0]?.Label;
  return first || null;
}

function describe(desc) {
  return localizedLabel(desc) || '';
}

function ownershipName(value) {
  if (typeof value === 'string') return value;
  switch (value) {
    case 0: return 'None';
    case 1: return 'UserOwned';
    case 2: return 'TeamOwned';
    case 4: return 'BusinessOwned';
    case 8: return 'OrganizationOwned';
    default: return value != null ? String(value) : null;
  }
}

function tableTypeName(value) {
  if (typeof value === 'string') return value;
  return value != null ? String(value) : null;
}

function partitionAttributes(attrs) {
  const writable = [];
  const readonly = [];
  if (!Array.isArray(attrs)) return { writable, readonly };
  for (const a of attrs) {
    if (a.AttributeOf) continue;
    if (!a.LogicalName) continue;
    const isWritable = a.IsValidForCreate === true || a.IsValidForUpdate === true;
    if (isWritable) writable.push(a.LogicalName);
    else readonly.push(a.LogicalName);
  }
  writable.sort();
  readonly.sort();
  return { writable, readonly };
}

function mapDirectionalRelationships(rels) {
  if (!Array.isArray(rels)) return [];
  return rels
    .map((r) => ({
      name: r.SchemaName || r.RelationshipId || '',
      target: r.ReferencedEntity || null,
      referencedAttribute: r.ReferencedAttribute || null,
      referencingAttribute: r.ReferencingAttribute || null,
      navigation: r.ReferencingEntityNavigationPropertyName || null,
    }))
    .filter((r) => r.name);
}

function mapManyToManyRelationships(rels, selfLogical) {
  if (!Array.isArray(rels)) return [];
  return rels
    .map((r) => {
      const e1 = r.Entity1LogicalName || null;
      const e2 = r.Entity2LogicalName || null;
      const target = e1 && e1 !== selfLogical ? e1 : e2;
      const navigation = e1 && e1 !== selfLogical
        ? r.Entity1NavigationPropertyName
        : r.Entity2NavigationPropertyName;
      return {
        name: r.SchemaName || '',
        target: target || null,
        referencedAttribute: r.IntersectAttribute || null,
        referencingAttribute: null,
        navigation: navigation || null,
      };
    })
    .filter((r) => r.name);
}

export function mapEntityDefinition(odata) {
  const logical = odata.LogicalName;
  const display = localizedLabel(odata.DisplayName) || logical;
  const displayPlural = localizedLabel(odata.DisplayCollectionName) || null;

  const attrs = odata.Attributes || [];
  const { writable, readonly } = partitionAttributes(attrs);

  return {
    logical,
    display,
    displayPlural,
    schemaName: odata.SchemaName || null,
    entitySetName: odata.EntitySetName || null,
    primaryIdAttribute: odata.PrimaryIdAttribute || null,
    primaryNameAttribute: odata.PrimaryNameAttribute || null,
    tableType: tableTypeName(odata.TableType),
    ownership: ownershipName(odata.OwnershipType),
    description: describe(odata.Description),
    writableAttributes: writable,
    readonlyAttributes: readonly,
    manyToOne: mapDirectionalRelationships(odata.ManyToOneRelationships),
    oneToMany: mapDirectionalRelationships(odata.OneToManyRelationships),
    manyToMany: mapManyToManyRelationships(odata.ManyToManyRelationships, logical),
  };
}
