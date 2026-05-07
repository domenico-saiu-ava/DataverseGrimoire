---
logical: "msdyn_entityrefreshhistory"
display: "EntityRefreshHistory"
entitySetName: "msdyn_entityrefreshhistories"
primaryId: "msdyn_entityrefreshhistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **26** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_dataflowhistorylookup`, `msdyn_dataflowid`, `msdyn_dataflowname`, `msdyn_endtime`, `msdyn_entityname`, `msdyn_entityrefreshhistoryid`, `msdyn_errorcount`, `msdyn_errorinfoerrorcode`, `msdyn_errorinfoerrormessage`, `msdyn_errorinfoevaluationresultjson`, `msdyn_errorinfoevaluationresultjsonmemo`, `msdyn_errorinfoloadtocdserrorinfojson`, `msdyn_errorinfoloadtocdserrorinfojsonmemo`, `msdyn_insertcount`, `msdyn_name`, `msdyn_refreshstatus`, `msdyn_starttime`, `msdyn_transactionid`, `msdyn_upsertcount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entityrefreshhistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityrefreshhistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityrefreshhistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityrefreshhistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_entityrefreshhistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_entityrefreshhistory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_entityrefreshhistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_entityrefreshhistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_EntityRefreshHistory_DataflowHistor` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `msdyn_dataflowhistorylookup` | `msdyn_DataflowHistoryLookup` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityrefreshhistory_SyncErrors` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_entityrefreshhistory_DuplicateMatchingRecord` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_entityrefreshhistory` |
| `msdyn_entityrefreshhistory_DuplicateBaseRecord` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `baserecordid` | `baserecordid_msdyn_entityrefreshhistory` |
| `msdyn_entityrefreshhistory_AsyncOperations` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_entityrefreshhistory_MailboxTrackingFolders` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_entityrefreshhistory_UserEntityInstanceDatas` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `objectid` | `objectid_msdyn_entityrefreshhistory` |
| `msdyn_entityrefreshhistory_ProcessSession` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_entityrefreshhistory_BulkDeleteFailures` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrefreshhistory` |
| `msdyn_entityrefreshhistory_PrincipalObjectAttributeAccesses` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `objectid` | `objectid_msdyn_entityrefreshhistory` |


## Source

Generated from [msdyn_entityrefreshhistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entityrefreshhistory')) on 2026-05-07.