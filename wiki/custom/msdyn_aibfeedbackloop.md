---
logical: "msdyn_aibfeedbackloop"
display: "AI Builder Feedback Loop"
entitySetName: "msdyn_aibfeedbackloops"
primaryId: "msdyn_aibfeedbackloopid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Builder Feedback Loop

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aibfeedbackloop` |
| Display name | AI Builder Feedback Loop |
| Display (plural) | AI Builder Feedback Loops |
| Schema name | `msdyn_AIBFeedbackLoop` |
| Entity set (Web API) | `msdyn_aibfeedbackloops` |
| Primary id attribute | `msdyn_aibfeedbackloopid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aibfeedbackloops?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aibfeedbackloops(<guid>)
POST /api/data/v9.2/msdyn_aibfeedbackloops
PATCH /api/data/v9.2/msdyn_aibfeedbackloops(<guid>)
DELETE /api/data/v9.2/msdyn_aibfeedbackloops(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`importsequencenumber`, `msdyn_aibfeedbackloopid`, `msdyn_aimodelid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_predictioninput`, `msdyn_predictionresult`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aibfeedbackloop_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibfeedbackloop_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibfeedbackloop_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibfeedbackloop_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aibfeedbackloop` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aibfeedbackloop` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aibfeedbackloop` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aibfeedbackloop` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AIBFeedbackLoop_msdyn_PredictionInput` | [fileattachment](fileattachment.md) | `msdyn_predictioninput` | `msdyn_predictioninput` |
| `FileAttachment_msdyn_AIBFeedbackLoop_msdyn_PredictionResult` | [fileattachment](fileattachment.md) | `msdyn_predictionresult` | `msdyn_predictionresult` |
| `msdyn_AIBFeedbackLoop_msdyn_AIModel` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibfeedbackloop_SyncErrors` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_DuplicateMatchingRecord` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_DuplicateBaseRecord` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `baserecordid` | `baserecordid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_AsyncOperations` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_MailboxTrackingFolders` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_UserEntityInstanceDatas` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `objectid` | `objectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_ProcessSession` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_BulkDeleteFailures` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_PrincipalObjectAttributeAccesses` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `objectid` | `objectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_FileAttachments` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `objectid` | `objectid_msdyn_aibfeedbackloop` |


## Source

Generated from [msdyn_aibfeedbackloop (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aibfeedbackloop')) on 2026-05-07.