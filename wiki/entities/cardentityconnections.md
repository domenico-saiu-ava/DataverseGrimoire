---
logical: "cardentityconnections"
display: "cardentityconnections"
entitySetName: "cardentityconnectionsset"
primaryId: "cardentityconnectionsid"
tableType: "Standard"
ownership: "None"
---

# cardentityconnections

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cardentityconnections` |
| Display name | cardentityconnections |
| Schema name | `cardentityconnections` |
| Entity set (Web API) | `cardentityconnectionsset` |
| Primary id attribute | `cardentityconnectionsid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/cardentityconnectionsset?$select=&$top=10
GET /api/data/v9.2/cardentityconnectionsset(<guid>)
POST /api/data/v9.2/cardentityconnectionsset
PATCH /api/data/v9.2/cardentityconnectionsset(<guid>)
DELETE /api/data/v9.2/cardentityconnectionsset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`cardentityconnectionsId`, `cardid`, `ComponentIdUnique`, `ComponentState`, `entityid`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `card_entity_connections` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [cardentityconnections.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/cardentityconnections.md) on 2026-05-06.