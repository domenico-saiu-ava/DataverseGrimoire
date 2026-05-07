---
logical: "attribute"
display: "Attribute"
entitySetName: "attributes"
primaryId: "attributeid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Attribute

## Identity

| Property | Value |
| --- | --- |
| Logical name | `attribute` |
| Display name | Attribute |
| Display (plural) | Attributes |
| Schema name | `Attribute` |
| Entity set (Web API) | `attributes` |
| Primary id attribute | `attributeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/attributes?$select=name&$top=10
GET /api/data/v9.2/attributes(<guid>)
POST /api/data/v9.2/attributes
PATCH /api/data/v9.2/attributes(<guid>)
DELETE /api/data/v9.2/attributes(<guid>)
```

## Attributes

Writable: **8** · Read-only: **7**

### Writable

`AttributeId`, `ExternalName`, `LogicalName`, `ManagedPropertyLogicalName`, `ManagedPropertyParentAttributeName`, `Name`, `PhysicalName`, `TableColumnName`

### Read-only

`AttributeOf`, `AttributeTypeId`, `ComponentState`, `OverwriteTime`, `SolutionId`, `ValidForReadAPI`, `VersionNumber`

## Relationships


### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attribute_dvfilesearchattribute` | _n/a_ | `attribute` | _n/a_ |
| `attribute_dvtablesearchattribute` | _n/a_ | `attribute` | _n/a_ |
| `attribute_sensitivitylabelattributemapping_AttributeId` | _n/a_ | `attributeid` | _n/a_ |
| `attribute_solutioncomponentattrconfig` | _n/a_ | `attributeid` | _n/a_ |
| `attributeclusterconfig_extensionofrecordid_attribute` | _n/a_ | `extensionofrecordid` | _n/a_ |
| `emailaddressconfiguration_attribute_AttributeId` | _n/a_ | `attributeid` | _n/a_ |
| `referencedattribute_relationshipattribute` | _n/a_ | `referencedattributeid` | _n/a_ |
| `referencingattribute_relationshipattribute` | _n/a_ | `referencingattributeid` | _n/a_ |


## Source

Generated from [attribute.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/attribute.md) on 2026-05-06.