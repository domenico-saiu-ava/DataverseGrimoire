---
logical: "msdyn_wemschedulejobdetail"
display: "Dettagli processo di pianificazione WEM"
entitySetName: "msdyn_wemschedulejobdetails"
primaryId: "msdyn_wemschedulejobdetailid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dettagli processo di pianificazione WEM

Identificatore univoco delle istanze di entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemschedulejobdetail` |
| Display name | Dettagli processo di pianificazione WEM |
| Display (plural) | Dettagli processo di pianificazione WEM |
| Schema name | `msdyn_WEMScheduleJobDetail` |
| Entity set (Web API) | `msdyn_wemschedulejobdetails` |
| Primary id attribute | `msdyn_wemschedulejobdetailid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemschedulejobdetails?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemschedulejobdetails(<guid>)
POST /api/data/v9.2/msdyn_wemschedulejobdetails
PATCH /api/data/v9.2/msdyn_wemschedulejobdetails(<guid>)
DELETE /api/data/v9.2/msdyn_wemschedulejobdetails(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agent`, `msdyn_detailmessage`, `msdyn_message`, `msdyn_name`, `msdyn_postdata`, `msdyn_predata`, `msdyn_wemschedulejobdetailid`, `msdyn_wemschedulejobid`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookableresource_msdyn_wemschedulejobdetail_agent` | [bookableresource](bookableresource.md) | `msdyn_agent` | `msdyn_agent` |
| `msdyn_wemschedulejob_msdyn_wemschedulejobdetail_wemschedulejobid` | [msdyn_wemschedulejob](msdyn_wemschedulejob.md) | `msdyn_wemschedulejobid` | `msdyn_wemschedulejobid` |
| `lk_msdyn_wemschedulejobdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemschedulejobdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemschedulejobdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemschedulejobdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemschedulejobdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemschedulejobdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemschedulejobdetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemschedulejobdetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_wemschedulejobdetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemschedulejobdetail')) on 2026-05-07.