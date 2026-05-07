---
logical: "msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4"
display: "msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4"
entitySetName: "msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4set"
primaryId: "msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4id"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` |
| Display name | msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4 |
| Schema name | `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` |
| Entity set (Web API) | `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4set` |
| Primary id attribute | `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4id` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4set?$select=&$top=10
GET /api/data/v9.2/msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4set(<guid>)
POST /api/data/v9.2/msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4set
PATCH /api/data/v9.2/msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4set(<guid>)
DELETE /api/data/v9.2/msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4set(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdynmkt_compliancesettings4id`, `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4id`, `msdynmkt_purposeid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` | [msdynmkt_purpose](msdynmkt_purpose.md) | _n/a_ | `msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4` |

## Source

Generated from [msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4 (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4')) on 2026-05-07.