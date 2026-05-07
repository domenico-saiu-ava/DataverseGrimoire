---
logical: "msdyn_evaluationcriteria"
display: "Criteri di valutazione"
entitySetName: "msdyn_evaluationcriterias"
primaryId: "msdyn_evaluationcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Criteri di valutazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationcriteria` |
| Display name | Criteri di valutazione |
| Display (plural) | Criteri di valutazione |
| Schema name | `msdyn_EvaluationCriteria` |
| Entity set (Web API) | `msdyn_evaluationcriterias` |
| Primary id attribute | `msdyn_evaluationcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationcriterias(<guid>)
POST /api/data/v9.2/msdyn_evaluationcriterias
PATCH /api/data/v9.2/msdyn_evaluationcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationcriterias(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_activeversion`, `msdyn_criteriajson`, `msdyn_description`, `msdyn_evaluationcriteriaid`, `msdyn_languagecode`, `msdyn_name`, `msdyn_numberofassociatedplans`, `msdyn_numberofquestions`, `msdyn_parentevaluationcriteria`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluationcriteria_ActiveVersion_msdyn_evaluationcriteriaversion` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `msdyn_activeversion` | `msdyn_ActiveVersion` |
| `msdyn_evaluationcriteria_ParentEvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_parentevaluationcriteria` | `msdyn_ParentEvaluationCriteria` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationcriteria_SyncErrors` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteria` |
| `msdyn_evaluationcriteria_AsyncOperations` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteria` |
| `msdyn_evaluationcriteria_MailboxTrackingFolders` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteria` |
| `msdyn_evaluationcriteria_UserEntityInstanceDatas` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `objectid` | `objectid_msdyn_evaluationcriteria` |
| `msdyn_evaluationcriteria_ProcessSession` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteria` |
| `msdyn_evaluationcriteria_BulkDeleteFailures` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteria` |
| `msdyn_evaluationcriteria_PrincipalObjectAttributeAccesses` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `objectid` | `objectid_msdyn_evaluationcriteria` |
| `msdyn_evaluation_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluationcategory_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluationcriteria_ParentEvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_parentevaluationcriteria` | `msdyn_ParentEvaluationCriteria` |
| `msdyn_evaluationcriteriaversion_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluationplan_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluationplanrun_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluationquestion_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluationsimulationrun_msdyn_evaluationcriteria_msdyn_regardingobjectId` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_regardingobjectid` | `msdyn_regardingobjectid_msdyn_evaluationcriteria` |


## Source

Generated from [msdyn_evaluationcriteria (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationcriteria')) on 2026-05-07.