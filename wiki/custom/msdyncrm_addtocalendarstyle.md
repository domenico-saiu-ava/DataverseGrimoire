---
logical: "msdyncrm_addtocalendarstyle"
display: "Stile AddToCalendar"
entitySetName: "msdyncrm_addtocalendarstyles"
primaryId: "msdyncrm_addtocalendarstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile AddToCalendar

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_addtocalendarstyle` |
| Display name | Stile AddToCalendar |
| Display (plural) | Stile AddToCalendar |
| Schema name | `msdyncrm_addtocalendarstyle` |
| Entity set (Web API) | `msdyncrm_addtocalendarstyles` |
| Primary id attribute | `msdyncrm_addtocalendarstyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_addtocalendarstyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_addtocalendarstyles(<guid>)
POST /api/data/v9.2/msdyncrm_addtocalendarstyles
PATCH /api/data/v9.2/msdyncrm_addtocalendarstyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_addtocalendarstyles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_addtocalendarchoice`, `msdyncrm_addtocalendarstyleid`, `msdyncrm_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_addtocalendarstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_addtocalendarstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_addtocalendarstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_addtocalendarstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_addtocalendarstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_addtocalendarstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_addtocalendarstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_addtocalendarstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_addtocalendarstyle_SyncErrors` | [msdyncrm_addtocalendarstyle](msdyncrm_addtocalendarstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_addtocalendarstyle` |
| `msdyncrm_addtocalendarstyle_DuplicateMatchingRecord` | [msdyncrm_addtocalendarstyle](msdyncrm_addtocalendarstyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_addtocalendarstyle` |
| `msdyncrm_addtocalendarstyle_DuplicateBaseRecord` | [msdyncrm_addtocalendarstyle](msdyncrm_addtocalendarstyle.md) | `baserecordid` | `baserecordid_msdyncrm_addtocalendarstyle` |
| `msdyncrm_addtocalendarstyle_AsyncOperations` | [msdyncrm_addtocalendarstyle](msdyncrm_addtocalendarstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_addtocalendarstyle` |
| `msdyncrm_addtocalendarstyle_MailboxTrackingFolders` | [msdyncrm_addtocalendarstyle](msdyncrm_addtocalendarstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_addtocalendarstyle` |
| `msdyncrm_addtocalendarstyle_UserEntityInstanceDatas` | [msdyncrm_addtocalendarstyle](msdyncrm_addtocalendarstyle.md) | `objectid` | `objectid_msdyncrm_addtocalendarstyle` |
| `msdyncrm_addtocalendarstyle_ProcessSession` | [msdyncrm_addtocalendarstyle](msdyncrm_addtocalendarstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_addtocalendarstyle` |
| `msdyncrm_addtocalendarstyle_BulkDeleteFailures` | [msdyncrm_addtocalendarstyle](msdyncrm_addtocalendarstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_addtocalendarstyle` |
| `msdyncrm_addtocalendarstyle_PrincipalObjectAttributeAccesses` | [msdyncrm_addtocalendarstyle](msdyncrm_addtocalendarstyle.md) | `objectid` | `objectid_msdyncrm_addtocalendarstyle` |


## Source

Generated from [msdyncrm_addtocalendarstyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_addtocalendarstyle')) on 2026-05-07.