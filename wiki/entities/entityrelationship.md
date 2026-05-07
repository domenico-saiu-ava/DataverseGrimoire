---
logical: "entityrelationship"
display: "Entity Relationship"
entitySetName: "entityrelationships"
primaryId: "entityrelationshipid"
primaryName: "schemaname"
tableType: "Standard"
ownership: "None"
---

# Entity Relationship

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entityrelationship` |
| Display name | Entity Relationship |
| Display (plural) | Entity Relationships |
| Schema name | `EntityRelationship` |
| Entity set (Web API) | `entityrelationships` |
| Primary id attribute | `entityrelationshipid` |
| Primary name attribute | `schemaname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entityrelationships?$select=schemaname&$top=10
GET /api/data/v9.2/entityrelationships(<guid>)
POST /api/data/v9.2/entityrelationships
PATCH /api/data/v9.2/entityrelationships(<guid>)
DELETE /api/data/v9.2/entityrelationships(<guid>)
```

## Attributes

Writable: **2** · Read-only: **3**

### Writable

`EntityRelationshipId`, `SchemaName`

### Read-only

`ComponentState`, `OverwriteTime`, `SolutionId`

## Relationships


### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityrelationship_config` | _n/a_ | `entityrelationshipid` | _n/a_ |


## Source

Generated from [entityrelationship.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/entityrelationship.md) on 2026-05-06.