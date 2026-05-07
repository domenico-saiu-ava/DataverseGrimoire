---
logical: "msdyn_aievaluationrun"
display: "AI Evaluation Run"
entitySetName: "msdyn_aievaluationruns"
primaryId: "msdyn_aievaluationrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Evaluation Run

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aievaluationrun` |
| Display name | AI Evaluation Run |
| Display (plural) | AI Evaluation Run |
| Schema name | `msdyn_AIEvaluationRun` |
| Entity set (Web API) | `msdyn_aievaluationruns` |
| Primary id attribute | `msdyn_aievaluationrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aievaluationruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aievaluationruns(<guid>)
POST /api/data/v9.2/msdyn_aievaluationruns
PATCH /api/data/v9.2/msdyn_aievaluationruns(<guid>)
DELETE /api/data/v9.2/msdyn_aievaluationruns(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_additionalresponsemetadata`, `msdyn_aievaluationconfigurationid`, `msdyn_aievaluationrunid`, `msdyn_airunobjectid`, `msdyn_airunobjecttype`, `msdyn_comment`, `msdyn_completedon`, `msdyn_errormessage`, `msdyn_evaluationresult`, `msdyn_name`, `msdyn_runduration`, `msdyn_runstatus`, `msdyn_startedon`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aievaluationrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aievaluationrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aievaluationrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aievaluationrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aievaluationrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aievaluationrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aievaluationrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aievaluationrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_aievaluationconfiguration_msdyn_aievaluationrun` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `msdyn_aievaluationconfigurationid` | `msdyn_AIEvaluationConfigurationId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aievaluationrun_SyncErrors` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievaluationrun_AsyncOperations` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievaluationrun_MailboxTrackingFolders` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievaluationrun_UserEntityInstanceDatas` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `objectid` | `objectid_msdyn_aievaluationrun` |
| `msdyn_aievaluationrun_ProcessSession` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievaluationrun_BulkDeleteFailures` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievaluationrun` |
| `msdyn_aievaluationrun_PrincipalObjectAttributeAccesses` | [msdyn_aievaluationrun](msdyn_aievaluationrun.md) | `objectid` | `objectid_msdyn_aievaluationrun` |


## Source

Generated from [msdyn_aievaluationrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aievaluationrun')) on 2026-05-07.