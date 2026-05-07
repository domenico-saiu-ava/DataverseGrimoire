---
logical: "msdyn_evaluationplanrun"
display: "Esecuzione piano di valutazione"
entitySetName: "msdyn_evaluationplanruns"
primaryId: "msdyn_evaluationplanrunid"
primaryName: "msdyn_planname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Esecuzione piano di valutazione

Contiene la configurazione per la creazione di valutazioni in blocco per il piano di valutazione 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationplanrun` |
| Display name | Esecuzione piano di valutazione |
| Display (plural) | Esecuzioni piano di valutazione |
| Schema name | `msdyn_EvaluationPlanRun` |
| Entity set (Web API) | `msdyn_evaluationplanruns` |
| Primary id attribute | `msdyn_evaluationplanrunid` |
| Primary name attribute | `msdyn_planname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationplanruns?$select=msdyn_planname&$top=10
GET /api/data/v9.2/msdyn_evaluationplanruns(<guid>)
POST /api/data/v9.2/msdyn_evaluationplanruns
PATCH /api/data/v9.2/msdyn_evaluationplanruns(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationplanruns(<guid>)
```

## Attributes

Writable: **25** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_assignedto`, `msdyn_duedate`, `msdyn_evaluationcriteria`, `msdyn_evaluationmethod`, `msdyn_evaluationplan`, `msdyn_evaluationplanenddate`, `msdyn_evaluationplanrunid`, `msdyn_evaluationplanstartdate`, `msdyn_filterrulesxml`, `msdyn_pageindex`, `msdyn_paginationmarker`, `msdyn_planname`, `msdyn_recordscountidentifiedbycondition`, `msdyn_recordscountidentifiedbysampling`, `msdyn_recordsidentificationcompletedon`, `msdyn_recordtype`, `msdyn_samplingconfiguration`, `msdyn_totalrecordsdiscovered`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationplanrun_AssignedTo_systemuser` | [systemuser](systemuser.md) | `msdyn_assignedto` | `msdyn_AssignedTo` |
| `lk_msdyn_evaluationplanrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationplanrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationplanrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationplanrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationplanrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationplanrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationplanrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationplanrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluationplanrun_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluationplanrun_EvaluationPlan_msdyn_evaluationplan` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `msdyn_evaluationplan` | `msdyn_EvaluationPlan` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluation_EvaluationPlanRun_msdyn_evaluationplanrun` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `msdyn_evaluationplanrun` | `msdyn_EvaluationPlanRun` |
| `msdyn_evaluationplanrun_SyncErrors` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanrun` |
| `msdyn_evaluationplanrun_DuplicateMatchingRecord` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_evaluationplanrun` |
| `msdyn_evaluationplanrun_DuplicateBaseRecord` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `baserecordid` | `baserecordid_msdyn_evaluationplanrun` |
| `msdyn_evaluationplanrun_AsyncOperations` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanrun` |
| `msdyn_evaluationplanrun_MailboxTrackingFolders` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanrun` |
| `msdyn_evaluationplanrun_UserEntityInstanceDatas` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `objectid` | `objectid_msdyn_evaluationplanrun` |
| `msdyn_evaluationplanrun_ProcessSession` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanrun` |
| `msdyn_evaluationplanrun_BulkDeleteFailures` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplanrun` |
| `msdyn_evaluationplanrun_PrincipalObjectAttributeAccesses` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `objectid` | `objectid_msdyn_evaluationplanrun` |
| `msdyn_evaluationplanbatch_EvaluationPlanRun_msdyn_evaluationplanrun` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `msdyn_evaluationplanrun` | `msdyn_EvaluationPlanRun` |


## Source

Generated from [msdyn_evaluationplanrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationplanrun')) on 2026-05-07.