---
logical: "msdyn_predictionscheduledoperation"
display: "Prediction Scheduled Operation"
entitySetName: "msdyn_predictionscheduledoperations"
primaryId: "msdyn_predictionscheduledoperationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Prediction Scheduled Operation

Contains meta-data about the scheduled operations.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictionscheduledoperation` |
| Display name | Prediction Scheduled Operation |
| Display (plural) | Prediction Scheduled Operations |
| Schema name | `msdyn_predictionscheduledoperation` |
| Entity set (Web API) | `msdyn_predictionscheduledoperations` |
| Primary id attribute | `msdyn_predictionscheduledoperationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictionscheduledoperations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictionscheduledoperations(<guid>)
POST /api/data/v9.2/msdyn_predictionscheduledoperations
PATCH /api/data/v9.2/msdyn_predictionscheduledoperations(<guid>)
DELETE /api/data/v9.2/msdyn_predictionscheduledoperations(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AdditionalDetails`, `msdyn_Created`, `msdyn_name`, `msdyn_NextScheduledTime`, `msdyn_OperationConfig`, `msdyn_OperationId`, `msdyn_OperationType`, `msdyn_predictionscheduledoperationId`, `msdyn_RegardingObjectId`, `msdyn_RetryCounter`, `msdyn_ScheduledIntervalInMinutes`, `msdyn_SchedulingCount`, `msdyn_Status`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_predictionscheduledoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_predictionscheduledoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictionscheduledoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictionscheduledoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictionscheduledoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_predictionscheduledoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_predictionscheduledoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_predictionscheduledoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictionscheduledoperation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictionscheduledoperation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictionscheduledoperation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_predictionscheduledoperation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_predictionscheduledoperation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictionscheduledoperation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_predictionscheduledoperation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictionscheduledoperation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_predictionscheduledoperation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_predictionscheduledoperation.md) on 2026-05-06.