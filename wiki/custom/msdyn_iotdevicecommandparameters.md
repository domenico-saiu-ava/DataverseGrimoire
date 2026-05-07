---
logical: "msdyn_iotdevicecommandparameters"
display: "msdyn_iotdevicecommandparameters"
entitySetName: "msdyn_iotdevicecommandparametersset"
primaryId: "msdyn_iotdevicecommandparametersid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_iotdevicecommandparameters

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicecommandparameters` |
| Display name | msdyn_iotdevicecommandparameters |
| Schema name | `msdyn_iotdevicecommandparameters` |
| Entity set (Web API) | `msdyn_iotdevicecommandparametersset` |
| Primary id attribute | `msdyn_iotdevicecommandparametersid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdevicecommandparametersset?$select=&$top=10
GET /api/data/v9.2/msdyn_iotdevicecommandparametersset(<guid>)
POST /api/data/v9.2/msdyn_iotdevicecommandparametersset
PATCH /api/data/v9.2/msdyn_iotdevicecommandparametersset(<guid>)
DELETE /api/data/v9.2/msdyn_iotdevicecommandparametersset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_iotdevicecommanddefinitionid`, `msdyn_iotdevicecommandparametersid`, `msdyn_iotpropertydefinitionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecommandparameters` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | _n/a_ | `msdyn_iotdevicecommandparameters` |

## Source

Generated from [msdyn_iotdevicecommandparameters (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdevicecommandparameters')) on 2026-05-07.