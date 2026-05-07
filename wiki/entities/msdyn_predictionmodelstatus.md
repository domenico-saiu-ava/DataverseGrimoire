---
logical: "msdyn_predictionmodelstatus"
display: "Prediction Model Status"
entitySetName: "msdyn_predictionmodelstatuses"
primaryId: "msdyn_predictionmodelstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Prediction Model Status

Stores metadata about predictive models

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictionmodelstatus` |
| Display name | Prediction Model Status |
| Display (plural) | Prediction Model Statuses |
| Schema name | `msdyn_predictionmodelstatus` |
| Entity set (Web API) | `msdyn_predictionmodelstatuses` |
| Primary id attribute | `msdyn_predictionmodelstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictionmodelstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictionmodelstatuses(<guid>)
POST /api/data/v9.2/msdyn_predictionmodelstatuses
PATCH /api/data/v9.2/msdyn_predictionmodelstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_predictionmodelstatuses(<guid>)
```

## Attributes

Writable: **44** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ChangeGradesOnRetrain`, `msdyn_ComputationConfig`, `msdyn_ComputationFrequency`, `msdyn_ConfigVersion`, `msdyn_Created`, `msdyn_DockerImageName`, `msdyn_ExplanationPath`, `msdyn_GradeDefinition`, `msdyn_IsCurrent`, `msdyn_IslandUrl`, `msdyn_isnewentityadditionopted`, `msdyn_IsScheduled`, `msdyn_Message`, `msdyn_ModelId`, `msdyn_ModelPath`, `msdyn_modelsource`, `msdyn_ModelVersion`, `msdyn_name`, `msdyn_NextComputation`, `msdyn_PredictionGuid`, `msdyn_predictionmodelstatusId`, `msdyn_PredictionName`, `msdyn_PredictionType`, `msdyn_PsmOpted`, `msdyn_PublishOnTrain`, `msdyn_RetryCounter`, `msdyn_SignalsUsed`, `msdyn_Status`, `msdyn_TestSetCount`, `msdyn_TimeoutPeriodInMinutes`, `msdyn_TrainingAccuracy`, `msdyn_TrainingAuc`, `msdyn_TrainingConfig`, `msdyn_TrainingSetCount`, `msdyn_UseBPFAsFilter`, `msdyn_ValidationSetCount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_predictionmodelstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_predictionmodelstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictionmodelstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictionmodelstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictionmodelstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_predictionmodelstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_predictionmodelstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_predictionmodelstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictionmodelstatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictionmodelstatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictionmodelstatus_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_predictionmodelstatus_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_predictionmodelstatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictionmodelstatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_predictionmodelstatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictionmodelstatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_predictionmodelstatus.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_predictionmodelstatus.md) on 2026-05-06.