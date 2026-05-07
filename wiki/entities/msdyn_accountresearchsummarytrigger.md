---
logical: "msdyn_accountresearchsummarytrigger"
display: "Account Research Summary Trigger"
entitySetName: "msdyn_accountresearchsummarytriggers"
primaryId: "msdyn_accountresearchsummarytriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Account Research Summary Trigger

Account Research Summary Trigger table

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_accountresearchsummarytrigger` |
| Display name | Account Research Summary Trigger |
| Display (plural) | Account Research Summary Triggers |
| Schema name | `msdyn_accountresearchsummarytrigger` |
| Entity set (Web API) | `msdyn_accountresearchsummarytriggers` |
| Primary id attribute | `msdyn_accountresearchsummarytriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_accountresearchsummarytriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_accountresearchsummarytriggers(<guid>)
POST /api/data/v9.2/msdyn_accountresearchsummarytriggers
PATCH /api/data/v9.2/msdyn_accountresearchsummarytriggers(<guid>)
DELETE /api/data/v9.2/msdyn_accountresearchsummarytriggers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_accountresearchsummarytriggerId`, `msdyn_companyidentifier`, `msdyn_input`, `msdyn_name`, `msdyn_retrycount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_accountresearchsummarytrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_accountresearchsummarytrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_accountresearchsummarytrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_accountresearchsummarytrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_accountresearchsummarytrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_accountresearchsummarytrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_accountresearchsummarytrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_accountresearchsummarytrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_accountresearchsummarytrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchsummarytrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchsummarytrigger_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_accountresearchsummarytrigger_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_accountresearchsummarytrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchsummarytrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_accountresearchsummarytrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_accountresearchsummarytrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_accountresearchsummarytrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_accountresearchsummarytrigger.md) on 2026-05-06.