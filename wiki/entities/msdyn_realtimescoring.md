---
logical: "msdyn_realtimescoring"
display: "Real Time Scoring"
entitySetName: "msdyn_realtimescorings"
primaryId: "msdyn_realtimescoringid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Real Time Scoring

Stores meta data information for real time scoring.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_realtimescoring` |
| Display name | Real Time Scoring |
| Display (plural) | Real Time Scorings |
| Schema name | `msdyn_realtimescoring` |
| Entity set (Web API) | `msdyn_realtimescorings` |
| Primary id attribute | `msdyn_realtimescoringid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_realtimescorings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_realtimescorings(<guid>)
POST /api/data/v9.2/msdyn_realtimescorings
PATCH /api/data/v9.2/msdyn_realtimescorings(<guid>)
DELETE /api/data/v9.2/msdyn_realtimescorings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_LastCreatedOn`, `msdyn_LastVersionNumber`, `msdyn_name`, `msdyn_PredictionName`, `msdyn_realtimescoringId`, `msdyn_TrainingConfig`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_realtimescoring` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_realtimescoring_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_realtimescoring_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_realtimescoring_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_realtimescoring_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_realtimescoring` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_realtimescoring` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_realtimescoring` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_realtimescoring_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_realtimescoring_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_realtimescoring_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_realtimescoring_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_realtimescoring_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_realtimescoring_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_realtimescoring_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_realtimescoring_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_realtimescoring.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_realtimescoring.md) on 2026-05-06.