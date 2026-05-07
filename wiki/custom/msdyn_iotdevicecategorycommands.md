---
logical: "msdyn_iotdevicecategorycommands"
display: "msdyn_iotdevicecategorycommands"
entitySetName: "msdyn_iotdevicecategorycommandsset"
primaryId: "msdyn_iotdevicecategorycommandsid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_iotdevicecategorycommands

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicecategorycommands` |
| Display name | msdyn_iotdevicecategorycommands |
| Schema name | `msdyn_iotdevicecategorycommands` |
| Entity set (Web API) | `msdyn_iotdevicecategorycommandsset` |
| Primary id attribute | `msdyn_iotdevicecategorycommandsid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdevicecategorycommandsset?$select=&$top=10
GET /api/data/v9.2/msdyn_iotdevicecategorycommandsset(<guid>)
POST /api/data/v9.2/msdyn_iotdevicecategorycommandsset
PATCH /api/data/v9.2/msdyn_iotdevicecategorycommandsset(<guid>)
DELETE /api/data/v9.2/msdyn_iotdevicecategorycommandsset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_iotdevicecategorycommandsid`, `msdyn_iotdevicecategoryid`, `msdyn_iotdevicecommanddefinitionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecategorycommands` | [msdyn_iotdevicecategory](msdyn_iotdevicecategory.md) | _n/a_ | `msdyn_iotdevicecategorycommands` |

## Source

Generated from [msdyn_iotdevicecategorycommands (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdevicecategorycommands')) on 2026-05-07.