---
logical: "msdyn_aiodlabel_msdyn_aiconfiguration"
display: "msdyn_aiodlabel_msdyn_aiconfiguration"
entitySetName: "msdyn_aiodlabel_msdyn_aiconfigurationset"
primaryId: "msdyn_aiodlabel_msdyn_aiconfigurationid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_aiodlabel_msdyn_aiconfiguration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiodlabel_msdyn_aiconfiguration` |
| Display name | msdyn_aiodlabel_msdyn_aiconfiguration |
| Schema name | `msdyn_aiodlabel_msdyn_aiconfiguration` |
| Entity set (Web API) | `msdyn_aiodlabel_msdyn_aiconfigurationset` |
| Primary id attribute | `msdyn_aiodlabel_msdyn_aiconfigurationid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiodlabel_msdyn_aiconfigurationset?$select=&$top=10
GET /api/data/v9.2/msdyn_aiodlabel_msdyn_aiconfigurationset(<guid>)
POST /api/data/v9.2/msdyn_aiodlabel_msdyn_aiconfigurationset
PATCH /api/data/v9.2/msdyn_aiodlabel_msdyn_aiconfigurationset(<guid>)
DELETE /api/data/v9.2/msdyn_aiodlabel_msdyn_aiconfigurationset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_aiconfigurationid`, `msdyn_aiodlabel_msdyn_aiconfigurationid`, `msdyn_aiodlabelid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiodlabel_msdyn_aiconfiguration` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | _n/a_ | `msdyn_aiodlabel_msdyn_aiconfiguration` |

## Source

Generated from [msdyn_aiodlabel_msdyn_aiconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiodlabel_msdyn_aiconfiguration')) on 2026-05-07.