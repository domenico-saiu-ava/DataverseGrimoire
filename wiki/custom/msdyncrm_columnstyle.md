---
logical: "msdyncrm_columnstyle"
display: "Stile colonna"
entitySetName: "msdyncrm_columnstyles"
primaryId: "msdyncrm_columnstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile colonna

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_columnstyle` |
| Display name | Stile colonna |
| Display (plural) | Stile colonne |
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

Writable: **32** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_alignment`, `msdyncrm_assetsprovider`, `msdyncrm_backgroundcolor`, `msdyncrm_backgroundimage`, `msdyncrm_backgroundimagefileid`, `msdyncrm_backgroundpositionx`, `msdyncrm_backgroundpositiony`, `msdyncrm_backgroundsize`, `msdyncrm_bordercolor`, `msdyncrm_bordersize`, `msdyncrm_borderstyle`, `msdyncrm_columnstyleid`, `msdyncrm_emailcolorpalette`, `msdyncrm_image`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_verticalalign`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_columnstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_columnstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_columnstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_columnstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_columnstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_columnstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_columnstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_columnstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_columnstyle_SyncErrors` | [msdyncrm_columnstyle](msdyncrm_columnstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_columnstyle` |
| `msdyncrm_columnstyle_DuplicateMatchingRecord` | [msdyncrm_columnstyle](msdyncrm_columnstyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_columnstyle` |
| `msdyncrm_columnstyle_DuplicateBaseRecord` | [msdyncrm_columnstyle](msdyncrm_columnstyle.md) | `baserecordid` | `baserecordid_msdyncrm_columnstyle` |
| `msdyncrm_columnstyle_AsyncOperations` | [msdyncrm_columnstyle](msdyncrm_columnstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_columnstyle` |
| `msdyncrm_columnstyle_MailboxTrackingFolders` | [msdyncrm_columnstyle](msdyncrm_columnstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_columnstyle` |
| `msdyncrm_columnstyle_UserEntityInstanceDatas` | [msdyncrm_columnstyle](msdyncrm_columnstyle.md) | `objectid` | `objectid_msdyncrm_columnstyle` |
| `msdyncrm_columnstyle_ProcessSession` | [msdyncrm_columnstyle](msdyncrm_columnstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_columnstyle` |
| `msdyncrm_columnstyle_BulkDeleteFailures` | [msdyncrm_columnstyle](msdyncrm_columnstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_columnstyle` |
| `msdyncrm_columnstyle_PrincipalObjectAttributeAccesses` | [msdyncrm_columnstyle](msdyncrm_columnstyle.md) | `objectid` | `objectid_msdyncrm_columnstyle` |


## Source

Generated from [msdyncrm_columnstyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_columnstyle')) on 2026-05-07.