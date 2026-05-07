---
logical: "msdyn_realtimescoringoperation"
display: "Real Time Scoring Operation"
entitySetName: "msdyn_realtimescoringoperations"
primaryId: "msdyn_realtimescoringoperationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Real Time Scoring Operation

Stores metadata for real time scoring job.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_realtimescoringoperation` |
| Display name | Real Time Scoring Operation |
| Display (plural) | Real Time Scoring Operations |
| Schema name | `msdyn_realtimescoringoperation` |
| Entity set (Web API) | `msdyn_realtimescoringoperations` |
| Primary id attribute | `msdyn_realtimescoringoperationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_realtimescoringoperations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_realtimescoringoperations(<guid>)
POST /api/data/v9.2/msdyn_realtimescoringoperations
PATCH /api/data/v9.2/msdyn_realtimescoringoperations(<guid>)
DELETE /api/data/v9.2/msdyn_realtimescoringoperations(<guid>)
```

## Attributes

Writable: **27** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Created`, `msdyn_DockerImageName`, `msdyn_ExpiryDateTime`, `msdyn_ExplanationPath`, `msdyn_Finished`, `msdyn_IslandUrl`, `msdyn_JobId`, `msdyn_ModelId`, `msdyn_ModelPath`, `msdyn_name`, `msdyn_OperationGuid`, `msdyn_OperationId`, `msdyn_PredictionGuid`, `msdyn_PredictionName`, `msdyn_realtimescoringoperationId`, `msdyn_RetryCounter`, `msdyn_RtsAdditionalParameters`, `msdyn_RtsTriggerId`, `msdyn_State`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_realtimescoringoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_realtimescoringoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_realtimescoringoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_realtimescoringoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_realtimescoringoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_realtimescoringoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_realtimescoringoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_realtimescoringoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_realtimescoringoperation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_realtimescoringoperation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_realtimescoringoperation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_realtimescoringoperation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_realtimescoringoperation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_realtimescoringoperation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_realtimescoringoperation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_realtimescoringoperation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_realtimescoringoperation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_realtimescoringoperation.md) on 2026-05-06.