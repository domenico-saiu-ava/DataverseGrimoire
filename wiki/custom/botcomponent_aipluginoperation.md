---
logical: "botcomponent_aipluginoperation"
display: "botcomponent_aipluginoperation"
entitySetName: "botcomponent_aipluginoperationset"
primaryId: "botcomponent_aipluginoperationid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# botcomponent_aipluginoperation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `botcomponent_aipluginoperation` |
| Display name | botcomponent_aipluginoperation |
| Schema name | `botcomponent_aipluginoperation` |
| Entity set (Web API) | `botcomponent_aipluginoperationset` |
| Primary id attribute | `botcomponent_aipluginoperationid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/botcomponent_aipluginoperationset?$select=&$top=10
GET /api/data/v9.2/botcomponent_aipluginoperationset(<guid>)
POST /api/data/v9.2/botcomponent_aipluginoperationset
PATCH /api/data/v9.2/botcomponent_aipluginoperationset(<guid>)
DELETE /api/data/v9.2/botcomponent_aipluginoperationset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`aipluginoperationid`, `botcomponent_aipluginoperationid`, `botcomponentid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_aipluginoperation` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_aipluginoperation` |

## Source

Generated from [botcomponent_aipluginoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='botcomponent_aipluginoperation')) on 2026-05-07.