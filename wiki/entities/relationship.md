---
logical: "relationship"
display: "Relationship Entity"
entitySetName: "relationships"
primaryId: "relationshipid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Relationship Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `relationship` |
| Display name | Relationship Entity |
| Display (plural) | Relationship Entities |
| Schema name | `Relationship` |
| Entity set (Web API) | `relationships` |
| Primary id attribute | `relationshipid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/relationships?$select=name&$top=10
GET /api/data/v9.2/relationships(<guid>)
POST /api/data/v9.2/relationships
PATCH /api/data/v9.2/relationships(<guid>)
DELETE /api/data/v9.2/relationships(<guid>)
```

## Attributes

Writable: **3** · Read-only: **6**

### Writable

`EntityKeyId`, `Name`, `RelationshipId`

### Read-only

`CascadeArchive`, `ComponentState`, `IsRelationshipAttributeDenormalized`, `OverwriteTime`, `SolutionId`, `VersionNumber`

## Relationships


### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `relationship_relationshipattribute` | _n/a_ | `relationshipid` | _n/a_ |


## Source

Generated from [relationship.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/relationship.md) on 2026-05-06.