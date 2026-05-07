---
logical: "msdyn_systemuser_msdyn_omnichannelqueue"
display: "msdyn_systemuser_msdyn_omnichannelqueue"
entitySetName: "msdyn_systemuser_msdyn_omnichannelqueueset"
primaryId: "msdyn_systemuser_msdyn_omnichannelqueueid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_systemuser_msdyn_omnichannelqueue

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_systemuser_msdyn_omnichannelqueue` |
| Display name | msdyn_systemuser_msdyn_omnichannelqueue |
| Schema name | `msdyn_systemuser_msdyn_omnichannelqueue` |
| Entity set (Web API) | `msdyn_systemuser_msdyn_omnichannelqueueset` |
| Primary id attribute | `msdyn_systemuser_msdyn_omnichannelqueueid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_systemuser_msdyn_omnichannelqueueset?$select=&$top=10
GET /api/data/v9.2/msdyn_systemuser_msdyn_omnichannelqueueset(<guid>)
POST /api/data/v9.2/msdyn_systemuser_msdyn_omnichannelqueueset
PATCH /api/data/v9.2/msdyn_systemuser_msdyn_omnichannelqueueset(<guid>)
DELETE /api/data/v9.2/msdyn_systemuser_msdyn_omnichannelqueueset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_omnichannelqueueid`, `msdyn_systemuser_msdyn_omnichannelqueueid`, `systemuserid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_systemuser_msdyn_omnichannelqueue` | [systemuser](systemuser.md) | _n/a_ | `msdyn_systemuser_msdyn_omnichannelqueue` |

## Source

Generated from [msdyn_systemuser_msdyn_omnichannelqueue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_systemuser_msdyn_omnichannelqueue')) on 2026-05-07.