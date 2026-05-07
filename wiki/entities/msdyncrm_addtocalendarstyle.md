---
logical: "msdyncrm_addtocalendarstyle"
display: "AddToCalendar style"
entitySetName: "msdyncrm_addtocalendarstyles"
primaryId: "msdyncrm_addtocalendarstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AddToCalendar style

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_addtocalendarstyle` |
| Display name | AddToCalendar style |
| Display (plural) | AddToCalendar style |
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

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_addToCalendarChoice`, `msdyncrm_addtocalendarstyleId`, `msdyncrm_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_addtocalendarstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_addtocalendarstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_addtocalendarstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_addtocalendarstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_addtocalendarstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_addtocalendarstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_addtocalendarstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_addtocalendarstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_addtocalendarstyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_addtocalendarstyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_addtocalendarstyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_addtocalendarstyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_addtocalendarstyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_addtocalendarstyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_addtocalendarstyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_addtocalendarstyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_addtocalendarstyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_addtocalendarstyle.md) on 2026-05-06.