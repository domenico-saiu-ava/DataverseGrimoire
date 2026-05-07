---
logical: "msdyn_wemschedulejob"
display: "Processo di pianificazione WEM"
entitySetName: "msdyn_wemschedulejobs"
primaryId: "msdyn_wemschedulejobid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Processo di pianificazione WEM

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemschedulejob` |
| Display name | Processo di pianificazione WEM |
| Display (plural) | Processi di pianificazione WEM |
| Schema name | `msdyn_WEMScheduleJob` |
| Entity set (Web API) | `msdyn_wemschedulejobs` |
| Primary id attribute | `msdyn_wemschedulejobid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemschedulejobs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemschedulejobs(<guid>)
POST /api/data/v9.2/msdyn_wemschedulejobs
PATCH /api/data/v9.2/msdyn_wemschedulejobs(<guid>)
DELETE /api/data/v9.2/msdyn_wemschedulejobs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_aireasoning`, `msdyn_jobacceptancestatus`, `msdyn_jobtype`, `msdyn_mefjobrunid`, `msdyn_name`, `msdyn_runconfig`, `msdyn_sourceinstanceid`, `msdyn_wemjobstatus`, `msdyn_wemschedulejobid`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_exportfile`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ElasticFileAttachment_msdyn_WEMScheduleJob_msdyn_exportfile` | [elasticfileattachment](elasticfileattachment.md) | `msdyn_exportfile` | `msdyn_exportfile` |
| `lk_msdyn_wemschedulejob_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemschedulejob_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemschedulejob_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemschedulejob_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemschedulejob` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemschedulejob` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemschedulejob` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemschedulejob` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemschedulejob_msdyn_wemschedulejobdetail_wemschedulejobid` | [msdyn_wemschedulejob](msdyn_wemschedulejob.md) | `msdyn_wemschedulejobid` | `msdyn_wemschedulejobid` |
| `msdyn_wemschedulejob_ElasticFileAttachments` | [msdyn_wemschedulejob](msdyn_wemschedulejob.md) | `objectid` | `objectid_msdyn_wemschedulejob` |


## Source

Generated from [msdyn_wemschedulejob (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemschedulejob')) on 2026-05-07.