---
logical: "msdyn_reportbookmark"
display: "Report Bookmark"
entitySetName: "msdyn_reportbookmarks"
primaryId: "msdyn_reportbookmarkid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Report Bookmark

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_reportbookmark` |
| Display name | Report Bookmark |
| Display (plural) | Report Bookmarks |
| Schema name | `msdyn_reportbookmark` |
| Entity set (Web API) | `msdyn_reportbookmarks` |
| Primary id attribute | `msdyn_reportbookmarkid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_reportbookmarks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_reportbookmarks(<guid>)
POST /api/data/v9.2/msdyn_reportbookmarks
PATCH /api/data/v9.2/msdyn_reportbookmarks(<guid>)
DELETE /api/data/v9.2/msdyn_reportbookmarks(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_IsDefault`, `msdyn_name`, `msdyn_relatedfeatureid`, `msdyn_relatedreportid`, `msdyn_reportbookmarkId`, `msdyn_State`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_reportbookmark` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_reportbookmark_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_reportbookmark_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_reportbookmark_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_reportbookmark_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_reportbookmark` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_reportbookmark` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_reportbookmark` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_reportbookmark_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_reportbookmark_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_reportbookmark_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_reportbookmark_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_reportbookmark_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_reportbookmark_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_reportbookmark_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_reportbookmark_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_reportbookmark.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_reportbookmark.md) on 2026-05-06.