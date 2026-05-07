---
logical: "msdyncrm_columnstyle"
display: "Column style"
entitySetName: "msdyncrm_columnstyles"
primaryId: "msdyncrm_columnstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Column style

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_columnstyle` |
| Display name | Column style |
| Display (plural) | Columns style |
| Schema name | `msdyncrm_columnstyle` |
| Entity set (Web API) | `msdyncrm_columnstyles` |
| Primary id attribute | `msdyncrm_columnstyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_columnstyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_columnstyles(<guid>)
POST /api/data/v9.2/msdyncrm_columnstyles
PATCH /api/data/v9.2/msdyncrm_columnstyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_columnstyles(<guid>)
```

## Attributes

Writable: **33** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_alignment`, `msdyncrm_assetsprovider`, `msdyncrm_backgroundcolor`, `msdyncrm_backgroundimage`, `msdyncrm_backgroundimagefileid`, `msdyncrm_backgroundpositionx`, `msdyncrm_backgroundpositiony`, `msdyncrm_backgroundsize`, `msdyncrm_bordercolor`, `msdyncrm_bordersize`, `msdyncrm_borderstyle`, `msdyncrm_columnstyleId`, `msdyncrm_emailcolorpalette`, `msdyncrm_image`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_verticalalign`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_columnstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_columnstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_columnstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_columnstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_columnstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_columnstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_columnstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_columnstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_columnstyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_columnstyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_columnstyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_columnstyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_columnstyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_columnstyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_columnstyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_columnstyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_columnstyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_columnstyle.md) on 2026-05-06.