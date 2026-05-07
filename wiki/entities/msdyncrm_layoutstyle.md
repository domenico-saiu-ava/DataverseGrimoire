---
logical: "msdyncrm_layoutstyle"
display: "Layout Style"
entitySetName: "msdyncrm_layoutstyles"
primaryId: "msdyncrm_layoutstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Layout Style

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_layoutstyle` |
| Display name | Layout Style |
| Display (plural) | Layout styles |
| Schema name | `msdyncrm_layoutstyle` |
| Entity set (Web API) | `msdyncrm_layoutstyles` |
| Primary id attribute | `msdyncrm_layoutstyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_layoutstyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_layoutstyles(<guid>)
POST /api/data/v9.2/msdyncrm_layoutstyles
PATCH /api/data/v9.2/msdyncrm_layoutstyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_layoutstyles(<guid>)
```

## Attributes

Writable: **38** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_assetsprovider`, `msdyncrm_backgroundimage`, `msdyncrm_backgroundimagefileid`, `msdyncrm_backgroundpositionx`, `msdyncrm_backgroundpositiony`, `msdyncrm_backgroundsize`, `msdyncrm_backgroundtype`, `msdyncrm_bordercolor`, `msdyncrm_bordersize`, `msdyncrm_borderstyle`, `msdyncrm_borderstyle2`, `msdyncrm_desktop`, `msdyncrm_emailcolorpalette`, `msdyncrm_equal`, `msdyncrm_image`, `msdyncrm_layout`, `msdyncrm_layoutstyleId`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_mobile`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_sectionbackgroundcolor`, `msdyncrm_wrap`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_layoutstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_layoutstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_layoutstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_layoutstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_layoutstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_layoutstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_layoutstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_layoutstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_layoutstyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_layoutstyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_layoutstyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_layoutstyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_layoutstyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_layoutstyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_layoutstyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_layoutstyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_layoutstyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_layoutstyle.md) on 2026-05-06.