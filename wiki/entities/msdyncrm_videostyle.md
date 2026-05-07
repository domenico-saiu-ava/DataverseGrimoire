---
logical: "msdyncrm_videostyle"
display: "Video style"
entitySetName: "msdyncrm_videostyles"
primaryId: "msdyncrm_videostyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Video style

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_videostyle` |
| Display name | Video style |
| Display (plural) | Video styles |
| Schema name | `msdyncrm_videostyle` |
| Entity set (Web API) | `msdyncrm_videostyles` |
| Primary id attribute | `msdyncrm_videostyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_videostyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_videostyles(<guid>)
POST /api/data/v9.2/msdyncrm_videostyles
PATCH /api/data/v9.2/msdyncrm_videostyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_videostyles(<guid>)
```

## Attributes

Writable: **32** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_alignment`, `msdyncrm_alttext`, `msdyncrm_autowidth`, `msdyncrm_height`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_noalttext`, `msdyncrm_originalheight`, `msdyncrm_originalwidth`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_source`, `msdyncrm_thumbnail`, `msdyncrm_verticalalign`, `msdyncrm_videoId`, `msdyncrm_videostyleId`, `msdyncrm_videourl`, `msdyncrm_width`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_videostyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_videostyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_videostyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_videostyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_videostyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyncrm_msdyncrm_videostyle_msdyncrm_videostyle_videoid` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `msdyncrm_videoid` | `msdyncrm_videoid` |
| `owner_msdyncrm_videostyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_videostyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_videostyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_msdyncrm_videostyle_msdyncrm_videostyle_videoid` | _n/a_ | `msdyncrm_videoid` | _n/a_ |
| `msdyncrm_videostyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_videostyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_videostyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_videostyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_videostyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_videostyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_videostyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_videostyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_videostyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_videostyle.md) on 2026-05-06.