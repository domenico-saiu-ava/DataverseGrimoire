---
logical: "msdyn_evaluationplan"
display: "Piano di valutazione"
entitySetName: "msdyn_evaluationplans"
primaryId: "msdyn_evaluationplanid"
primaryName: "msdyn_planname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Piano di valutazione

Include la configurazione per l'esecuzione di valutazioni in blocco per un'entità.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationplan` |
| Display name | Piano di valutazione |
| Display (plural) | Piani di valutazione |
| Schema name | `msdyn_EvaluationPlan` |
| Entity set (Web API) | `msdyn_evaluationplans` |
| Primary id attribute | `msdyn_evaluationplanid` |
| Primary name attribute | `msdyn_planname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationplans?$select=msdyn_planname&$top=10
GET /api/data/v9.2/msdyn_evaluationplans(<guid>)
POST /api/data/v9.2/msdyn_evaluationplans
PATCH /api/data/v9.2/msdyn_evaluationplans(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationplans(<guid>)
```

## Attributes

Writable: **28** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_assignedto`, `msdyn_description`, `msdyn_duedate`, `msdyn_evaluationcriteria`, `msdyn_evaluationfilterrulesxml`, `msdyn_evaluationmethod`, `msdyn_evaluationplanid`, `msdyn_evaluationtriggerconfig`, `msdyn_event`, `msdyn_frequency`, `msdyn_occurrence`, `msdyn_planenddate`, `msdyn_planname`, `msdyn_planstartdate`, `msdyn_rankrecordsbyfieldlogicalname`, `msdyn_recordtype`, `msdyn_samplingmode`, `msdyn_samplingvalue`, `msdyn_selectionstrategy`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationplan_EvaluationTriggerConfig_msdyn_evaluationtriggerconfig` | [msdyn_evaluationtriggerconfig](msdyn_evaluationtriggerconfig.md) | `msdyn_evaluationtriggerconfig` | `msdyn_EvaluationTriggerConfig` |
| `lk_msdyn_evaluationplan_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationplan_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationplan_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationplan_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationplan` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationplan` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationplan` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationplan` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluationplan_AssignedTo_systemuser` | [systemuser](systemuser.md) | `msdyn_assignedto` | `msdyn_AssignedTo` |
| `msdyn_evaluationplan_AssignedTo_team` | [team](team.md) | `msdyn_assignedto` | `msdyn_AssignedTo` |
| `msdyn_evaluationplan_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluation_EvaluationPlan_msdyn_evaluationplan` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `msdyn_evaluationplan` | `msdyn_EvaluationPlan` |
| `msdyn_evaluationnotificationconfiguration_msdyn_evaluationplan` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `msdyn_evaluationplanid` | `msdyn_evaluationplanid` |
| `msdyn_evaluationplan_SyncErrors` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplan` |
| `msdyn_evaluationplan_DuplicateMatchingRecord` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_evaluationplan` |
| `msdyn_evaluationplan_DuplicateBaseRecord` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `baserecordid` | `baserecordid_msdyn_evaluationplan` |
| `msdyn_evaluationplan_AsyncOperations` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplan` |
| `msdyn_evaluationplan_MailboxTrackingFolders` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplan` |
| `msdyn_evaluationplan_UserEntityInstanceDatas` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `objectid` | `objectid_msdyn_evaluationplan` |
| `msdyn_evaluationplan_ProcessSession` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplan` |
| `msdyn_evaluationplan_BulkDeleteFailures` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationplan` |
| `msdyn_evaluationplan_PrincipalObjectAttributeAccesses` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `objectid` | `objectid_msdyn_evaluationplan` |
| `msdyn_evaluationplanrun_EvaluationPlan_msdyn_evaluationplan` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `msdyn_evaluationplan` | `msdyn_EvaluationPlan` |


## Source

Generated from [msdyn_evaluationplan (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationplan')) on 2026-05-07.