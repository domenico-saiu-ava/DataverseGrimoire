---
logical: "msdyn_predictioncomputationoperation"
display: "Prediction Computation Operation"
entitySetName: "msdyn_predictioncomputationoperations"
primaryId: "msdyn_predictioncomputationoperationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Prediction Computation Operation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictioncomputationoperation` |
| Display name | Prediction Computation Operation |
| Display (plural) | Prediction Computation Operations |
| Schema name | `msdyn_predictioncomputationoperation` |
| Entity set (Web API) | `msdyn_predictioncomputationoperations` |
| Primary id attribute | `msdyn_predictioncomputationoperationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictioncomputationoperations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictioncomputationoperations(<guid>)
POST /api/data/v9.2/msdyn_predictioncomputationoperations
PATCH /api/data/v9.2/msdyn_predictioncomputationoperations(<guid>)
DELETE /api/data/v9.2/msdyn_predictioncomputationoperations(<guid>)
```

## Attributes

Writable: **28** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ComputationTriggerId`, `msdyn_Created`, `msdyn_DockerImageName`, `msdyn_ExpiryDateTime`, `msdyn_ExplanationPath`, `msdyn_Finished`, `msdyn_IslandUrl`, `msdyn_JobId`, `msdyn_ModelId`, `msdyn_ModelPath`, `msdyn_name`, `msdyn_OperationGuid`, `msdyn_OperationId`, `msdyn_predictioncomputationoperationId`, `msdyn_PredictionGuid`, `msdyn_PredictionName`, `msdyn_ResultPath`, `msdyn_RetryCounter`, `msdyn_State`, `msdyn_TimeSpentCrmSyncSiJobId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_predictioncomputationoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_predictioncomputationoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictioncomputationoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictioncomputationoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictioncomputationoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_predictioncomputationoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_predictioncomputationoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_predictioncomputationoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictioncomputationoperation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictioncomputationoperation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictioncomputationoperation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_predictioncomputationoperation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_predictioncomputationoperation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictioncomputationoperation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_predictioncomputationoperation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictioncomputationoperation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_predictioncomputationoperation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_predictioncomputationoperation.md) on 2026-05-06.