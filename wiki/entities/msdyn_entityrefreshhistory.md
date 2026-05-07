---
logical: "msdyn_entityrefreshhistory"
display: "EntityRefreshHistory"
entitySetName: "msdyn_entityrefreshhistories"
primaryId: "msdyn_entityrefreshhistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# EntityRefreshHistory

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityrefreshhistory` |
| Display name | EntityRefreshHistory |
| Display (plural) | EntityRefreshHistories |
| Schema name | `msdyn_entityrefreshhistory` |
| Entity set (Web API) | `msdyn_entityrefreshhistories` |
| Primary id attribute | `msdyn_entityrefreshhistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityrefreshhistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityrefreshhistories(<guid>)
POST /api/data/v9.2/msdyn_entityrefreshhistories
PATCH /api/data/v9.2/msdyn_entityrefreshhistories(<guid>)
DELETE /api/data/v9.2/msdyn_entityrefreshhistories(<guid>)
```

## Attributes

Writable: **27** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_DataflowHistoryLookup`, `msdyn_DataflowId`, `msdyn_DataflowName`, `msdyn_EndTime`, `msdyn_EntityName`, `msdyn_entityrefreshhistoryId`, `msdyn_ErrorCount`, `msdyn_ErrorInfoErrorCode`, `msdyn_ErrorInfoErrorMessage`, `msdyn_ErrorInfoEvaluationResultJson`, `msdyn_ErrorInfoEvaluationResultJsonMemo`, `msdyn_ErrorInfoLoadToCdsErrorInfoJson`, `msdyn_ErrorInfoLoadToCdsErrorInfoJsonMemo`, `msdyn_InsertCount`, `msdyn_Name`, `msdyn_RefreshStatus`, `msdyn_StartTime`, `msdyn_TransactionId`, `msdyn_UpsertCount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_entityrefreshhistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_entityrefreshhistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityrefreshhistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityrefreshhistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityrefreshhistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_EntityRefreshHistory_DataflowHistor` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `msdyn_dataflowhistorylookup` | `msdyn_DataflowHistoryLookup` |
| `owner_msdyn_entityrefreshhistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_entityrefreshhistory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_entityrefreshhistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityrefreshhistory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityrefreshhistory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityrefreshhistory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_entityrefreshhistory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_entityrefreshhistory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entityrefreshhistory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityrefreshhistory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_entityrefreshhistory.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_entityrefreshhistory.md) on 2026-05-06.