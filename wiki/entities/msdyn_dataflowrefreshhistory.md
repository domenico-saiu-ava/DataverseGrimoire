---
logical: "msdyn_dataflowrefreshhistory"
display: "DataflowRefreshHistory"
entitySetName: "msdyn_dataflowrefreshhistories"
primaryId: "msdyn_dataflowrefreshhistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# DataflowRefreshHistory

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataflowrefreshhistory` |
| Display name | DataflowRefreshHistory |
| Display (plural) | DataflowRefreshHistories |
| Schema name | `msdyn_dataflowrefreshhistory` |
| Entity set (Web API) | `msdyn_dataflowrefreshhistories` |
| Primary id attribute | `msdyn_dataflowrefreshhistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataflowrefreshhistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataflowrefreshhistories(<guid>)
POST /api/data/v9.2/msdyn_dataflowrefreshhistories
PATCH /api/data/v9.2/msdyn_dataflowrefreshhistories(<guid>)
DELETE /api/data/v9.2/msdyn_dataflowrefreshhistories(<guid>)
```

## Attributes

Writable: **20** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_DataflowId`, `msdyn_DataflowName`, `msdyn_dataflowrefreshhistoryId`, `msdyn_EndTime`, `msdyn_ErrorInfoJson`, `msdyn_JobId`, `msdyn_Name`, `msdyn_RefreshStatus`, `msdyn_RefreshType`, `msdyn_RequestId`, `msdyn_StartTime`, `msdyn_TransactionId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dataflowrefreshhistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dataflowrefreshhistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflowrefreshhistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflowrefreshhistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflowrefreshhistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_dataflowrefreshhistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dataflowrefreshhistory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dataflowrefreshhistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflowrefreshhistory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowrefreshhistory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowrefreshhistory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dataflowrefreshhistory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dataflowrefreshhistory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataflowrefreshhistory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowrefreshhistory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_EntityRefreshHistory_DataflowHistor` | _n/a_ | `msdyn_dataflowhistorylookup` | _n/a_ |


## Source

Generated from [msdyn_dataflowrefreshhistory.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_dataflowrefreshhistory.md) on 2026-05-06.