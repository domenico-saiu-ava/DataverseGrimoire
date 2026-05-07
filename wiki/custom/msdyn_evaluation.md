---
logical: "msdyn_evaluation"
display: "Valutazione"
entitySetName: "msdyn_evaluations"
primaryId: "msdyn_evaluationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valutazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluation` |
| Display name | Valutazione |
| Display (plural) | Valutazioni |
| Schema name | `msdyn_Evaluation` |
| Entity set (Web API) | `msdyn_evaluations` |
| Primary id attribute | `msdyn_evaluationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluations(<guid>)
POST /api/data/v9.2/msdyn_evaluations
PATCH /api/data/v9.2/msdyn_evaluations(<guid>)
DELETE /api/data/v9.2/msdyn_evaluations(<guid>)
```

## Attributes

Writable: **34** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_additionaldetails`, `msdyn_agentenddate`, `msdyn_agentresponsejson`, `msdyn_createtype`, `msdyn_criticalquestionstatus`, `msdyn_errordetails`, `msdyn_evaluationcriteria`, `msdyn_evaluationcriteriaparentversion`, `msdyn_evaluationcriteriaversion`, `msdyn_evaluationextension`, `msdyn_evaluationid`, `msdyn_evaluationmethod`, `msdyn_evaluationplan`, `msdyn_evaluationplanrun`, `msdyn_evaluatorcompletiondate`, `msdyn_evaluatorduedate`, `msdyn_name`, `msdyn_qualityagentstatus`, `msdyn_regardingobjectid`, `msdyn_regardingobjectowner`, `msdyn_relatedrecordtype`, `msdyn_requestedby`, `msdyn_responsejson`, `msdyn_schema`, `msdyn_score`, `msdyn_scorejson`, `msdyn_scoringenabledoncreation`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluation_EvaluationPlanRun_msdyn_evaluationplanrun` | [msdyn_evaluationplanrun](msdyn_evaluationplanrun.md) | `msdyn_evaluationplanrun` | `msdyn_EvaluationPlanRun` |
| `lk_msdyn_evaluation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluation_EvaluationPlan_msdyn_evaluationplan` | [msdyn_evaluationplan](msdyn_evaluationplan.md) | `msdyn_evaluationplan` | `msdyn_EvaluationPlan` |
| `msdyn_msdyn_evaluation_msdyn_ocliveworkitem_msdyn_RegardingObjectId` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId_msdyn_ocliveworkitem` |
| `msdyn_evaluation_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `msdyn_evaluation_EvaluationExtension_msdyn_evaluationextension` | [msdyn_evaluationextension](msdyn_evaluationextension.md) | `msdyn_evaluationextension` | `msdyn_EvaluationExtension` |
| `msdyn_evaluation_RequestedBy_systemuser` | [systemuser](systemuser.md) | `msdyn_requestedby` | `msdyn_RequestedBy` |
| `msdyn_msdyn_evaluation_incident_msdyn_RegardingObjectId` | [incident](incident.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId_incident` |
| `msdyn_evaluation_systemuser_msdyn_RegardingObjectOwner` | [systemuser](systemuser.md) | `msdyn_regardingobjectowner` | `msdyn_RegardingObjectOwner` |
| `msdyn_evaluation_team_msdyn_RegardingObjectOwner` | [team](team.md) | `msdyn_regardingobjectowner` | `msdyn_RegardingObjectOwner` |
| `msdyn_msdyn_evaluation_email_msdyn_RegardingObjectId` | [email](email.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId_email` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluation_SyncErrors` | [msdyn_evaluation](msdyn_evaluation.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluation` |
| `msdyn_evaluation_AsyncOperations` | [msdyn_evaluation](msdyn_evaluation.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluation` |
| `msdyn_evaluation_MailboxTrackingFolders` | [msdyn_evaluation](msdyn_evaluation.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluation` |
| `msdyn_evaluation_UserEntityInstanceDatas` | [msdyn_evaluation](msdyn_evaluation.md) | `objectid` | `objectid_msdyn_evaluation` |
| `msdyn_evaluation_ProcessSession` | [msdyn_evaluation](msdyn_evaluation.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluation` |
| `msdyn_evaluation_BulkDeleteFailures` | [msdyn_evaluation](msdyn_evaluation.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluation` |
| `msdyn_evaluation_PrincipalObjectAttributeAccesses` | [msdyn_evaluation](msdyn_evaluation.md) | `objectid` | `objectid_msdyn_evaluation` |


## Source

Generated from [msdyn_evaluation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluation')) on 2026-05-07.