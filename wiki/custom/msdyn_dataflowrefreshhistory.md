---
logical: "msdyn_dataflowrefreshhistory"
display: "DataflowRefreshHistory"
entitySetName: "msdyn_dataflowrefreshhistories"
primaryId: "msdyn_dataflowrefreshhistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **19** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_dataflowid`, `msdyn_dataflowname`, `msdyn_dataflowrefreshhistoryid`, `msdyn_endtime`, `msdyn_errorinfojson`, `msdyn_jobid`, `msdyn_name`, `msdyn_refreshstatus`, `msdyn_refreshtype`, `msdyn_requestid`, `msdyn_starttime`, `msdyn_transactionid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataflowrefreshhistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflowrefreshhistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflowrefreshhistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflowrefreshhistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataflowrefreshhistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataflowrefreshhistory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataflowrefreshhistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataflowrefreshhistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflowrefreshhistory_SyncErrors` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowrefreshhistory_DuplicateMatchingRecord` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowrefreshhistory_DuplicateBaseRecord` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `baserecordid` | `baserecordid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowrefreshhistory_AsyncOperations` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowrefreshhistory_MailboxTrackingFolders` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowrefreshhistory_UserEntityInstanceDatas` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `objectid` | `objectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowrefreshhistory_ProcessSession` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowrefreshhistory_BulkDeleteFailures` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowrefreshhistory_PrincipalObjectAttributeAccesses` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `objectid` | `objectid_msdyn_dataflowrefreshhistory` |
| `msdyn_EntityRefreshHistory_DataflowHistor` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `msdyn_dataflowhistorylookup` | `msdyn_DataflowHistoryLookup` |


## Source

Generated from [msdyn_dataflowrefreshhistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataflowrefreshhistory')) on 2026-05-07.