---
logical: "relationshipattribute"
display: "Relationship Attribute"
entitySetName: "relationshipattributes"
primaryId: "relationshipattributeid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Relationship Attribute

Stores relationship attributes mapping for Multi-predicate relationship

## Identity

| Property | Value |
| --- | --- |
| Logical name | `relationshipattribute` |
| Display name | Relationship Attribute |
| Display (plural) | Relationship Attributes |
| Schema name | `RelationshipAttribute` |
| Entity set (Web API) | `relationshipattributes` |
| Primary id attribute | `relationshipattributeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/relationshipattributes?$select=name&$top=10
GET /api/data/v9.2/relationshipattributes(<guid>)
POST /api/data/v9.2/relationshipattributes
PATCH /api/data/v9.2/relationshipattributes(<guid>)
DELETE /api/data/v9.2/relationshipattributes(<guid>)
```

## Attributes

Writable: **6** · Read-only: **8**

### Writable

`IsCustomizable`, `Name`, `ReferencedAttributeId`, `ReferencingAttributeId`, `RelationshipAttributeId`, `RelationshipId`

### Read-only

`ComponentIdUnique`, `ComponentState`, `IsManaged`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organization_relationshipattribute` | [organization](organization.md) | `organizationid` | `organizationid` |
| `referencedattribute_relationshipattribute` | [attribute](attribute.md) | `referencedattributeid` | `referencedattributeid_relationshipattribute` |
| `referencingattribute_relationshipattribute` | [attribute](attribute.md) | `referencingattributeid` | `referencingattributeid_relationshipattribute` |
| `relationship_relationshipattribute` | [relationship](relationship.md) | `relationshipid` | `relationshipid_relationshipattribute` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `relationshipattribute_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `relationshipattribute_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `relationshipattribute_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `relationshipattribute_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `relationshipattribute_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [relationshipattribute.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/relationshipattribute.md) on 2026-05-06.