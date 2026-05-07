---
logical: "msdyn_aibfeedbackloop"
display: "AI Builder Feedback Loop"
entitySetName: "msdyn_aibfeedbackloops"
primaryId: "msdyn_aibfeedbackloopid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **11** · Read-only: **16**

### Writable

`ImportSequenceNumber`, `msdyn_AIBFeedbackLoopId`, `msdyn_AIModelId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_PredictionInput`, `msdyn_PredictionInput_Name`, `msdyn_PredictionResult`, `msdyn_PredictionResult_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aibfeedbackloop` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AIBFeedbackLoop_msdyn_PredictionInput` | [fileattachment](fileattachment.md) | `msdyn_predictioninput` | `msdyn_predictioninput` |
| `FileAttachment_msdyn_AIBFeedbackLoop_msdyn_PredictionResult` | [fileattachment](fileattachment.md) | `msdyn_predictionresult` | `msdyn_predictionresult` |
| `lk_msdyn_aibfeedbackloop_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibfeedbackloop_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibfeedbackloop_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibfeedbackloop_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_AIBFeedbackLoop_msdyn_AIModel` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |
| `owner_msdyn_aibfeedbackloop` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aibfeedbackloop` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aibfeedbackloop` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibfeedbackloop_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfeedbackloop_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfeedbackloop_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aibfeedbackloop_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aibfeedbackloop_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aibfeedbackloop_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfeedbackloop_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aibfeedbackloop_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfeedbackloop_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aibfeedbackloop.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aibfeedbackloop.md) on 2026-05-06.