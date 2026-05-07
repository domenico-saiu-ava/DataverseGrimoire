---
logical: "cardentityconnections"
display: "cardentityconnections"
entitySetName: "cardentityconnectionsset"
primaryId: "cardentityconnectionsid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`cardentityconnectionsid`, `cardid`, `componentidunique`, `componentstate`, `entityid`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `card_entity_connections` | [card](card.md) | _n/a_ | `card_entity_connections` |

## Source

Generated from [cardentityconnections (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cardentityconnections')) on 2026-05-07.