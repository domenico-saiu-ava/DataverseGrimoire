---
logical: "msdyncrm_layoutstyle"
display: "Stile layout"
entitySetName: "msdyncrm_layoutstyles"
primaryId: "msdyncrm_layoutstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile layout

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_layoutstyle` |
| Display name | Stile layout |
| Display (plural) | Stili layout |
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

Writable: **37** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_assetsprovider`, `msdyncrm_backgroundimage`, `msdyncrm_backgroundimagefileid`, `msdyncrm_backgroundpositionx`, `msdyncrm_backgroundpositiony`, `msdyncrm_backgroundsize`, `msdyncrm_backgroundtype`, `msdyncrm_bordercolor`, `msdyncrm_bordersize`, `msdyncrm_borderstyle`, `msdyncrm_borderstyle2`, `msdyncrm_desktop`, `msdyncrm_emailcolorpalette`, `msdyncrm_equal`, `msdyncrm_image`, `msdyncrm_layout`, `msdyncrm_layoutstyleid`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_mobile`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_sectionbackgroundcolor`, `msdyncrm_wrap`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_layoutstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_layoutstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_layoutstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_layoutstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_layoutstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_layoutstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_layoutstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_layoutstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_layoutstyle_SyncErrors` | [msdyncrm_layoutstyle](msdyncrm_layoutstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_layoutstyle` |
| `msdyncrm_layoutstyle_DuplicateMatchingRecord` | [msdyncrm_layoutstyle](msdyncrm_layoutstyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_layoutstyle` |
| `msdyncrm_layoutstyle_DuplicateBaseRecord` | [msdyncrm_layoutstyle](msdyncrm_layoutstyle.md) | `baserecordid` | `baserecordid_msdyncrm_layoutstyle` |
| `msdyncrm_layoutstyle_AsyncOperations` | [msdyncrm_layoutstyle](msdyncrm_layoutstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_layoutstyle` |
| `msdyncrm_layoutstyle_MailboxTrackingFolders` | [msdyncrm_layoutstyle](msdyncrm_layoutstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_layoutstyle` |
| `msdyncrm_layoutstyle_UserEntityInstanceDatas` | [msdyncrm_layoutstyle](msdyncrm_layoutstyle.md) | `objectid` | `objectid_msdyncrm_layoutstyle` |
| `msdyncrm_layoutstyle_ProcessSession` | [msdyncrm_layoutstyle](msdyncrm_layoutstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_layoutstyle` |
| `msdyncrm_layoutstyle_BulkDeleteFailures` | [msdyncrm_layoutstyle](msdyncrm_layoutstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_layoutstyle` |
| `msdyncrm_layoutstyle_PrincipalObjectAttributeAccesses` | [msdyncrm_layoutstyle](msdyncrm_layoutstyle.md) | `objectid` | `objectid_msdyncrm_layoutstyle` |


## Source

Generated from [msdyncrm_layoutstyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_layoutstyle')) on 2026-05-07.