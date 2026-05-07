---
logical: "msdyncrm_imagestyle"
display: "imagestyle"
entitySetName: "msdyncrm_imagestyles"
primaryId: "msdyncrm_imagestyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# imagestyle

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_imagestyle` |
| Display name | imagestyle |
| Display (plural) | imagestyle |
| Schema name | `msdyncrm_imagestyle` |
| Entity set (Web API) | `msdyncrm_imagestyles` |
| Primary id attribute | `msdyncrm_imagestyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_imagestyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_imagestyles(<guid>)
POST /api/data/v9.2/msdyncrm_imagestyles
PATCH /api/data/v9.2/msdyncrm_imagestyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_imagestyles(<guid>)
```

## Attributes

Writable: **34** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_align`, `msdyncrm_alttext`, `msdyncrm_autowidth`, `msdyncrm_emailtext`, `msdyncrm_fileid`, `msdyncrm_fit`, `msdyncrm_height`, `msdyncrm_imagesource`, `msdyncrm_imagestyleId`, `msdyncrm_link`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_noalttext`, `msdyncrm_originalheight`, `msdyncrm_originalwidth`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_tracking`, `msdyncrm_verticalalign`, `msdyncrm_width`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_imagestyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_imagestyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_imagestyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_imagestyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_imagestyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_imagestyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_imagestyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_imagestyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_imagestyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_imagestyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_imagestyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_imagestyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_imagestyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_imagestyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_imagestyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_imagestyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_imagestyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_imagestyle.md) on 2026-05-06.