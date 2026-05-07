---
logical: "msdyncrm_imagestyle"
display: "Stile immagine"
entitySetName: "msdyncrm_imagestyles"
primaryId: "msdyncrm_imagestyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile immagine

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_imagestyle` |
| Display name | Stile immagine |
| Display (plural) | Stile immagine |
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

Writable: **33** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_align`, `msdyncrm_alttext`, `msdyncrm_autowidth`, `msdyncrm_emailtext`, `msdyncrm_fileid`, `msdyncrm_fit`, `msdyncrm_height`, `msdyncrm_imagesource`, `msdyncrm_imagestyleid`, `msdyncrm_link`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_noalttext`, `msdyncrm_originalheight`, `msdyncrm_originalwidth`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_tracking`, `msdyncrm_verticalalign`, `msdyncrm_width`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_imagestyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_imagestyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_imagestyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_imagestyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_imagestyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_imagestyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_imagestyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_imagestyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_imagestyle_SyncErrors` | [msdyncrm_imagestyle](msdyncrm_imagestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_imagestyle` |
| `msdyncrm_imagestyle_DuplicateMatchingRecord` | [msdyncrm_imagestyle](msdyncrm_imagestyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_imagestyle` |
| `msdyncrm_imagestyle_DuplicateBaseRecord` | [msdyncrm_imagestyle](msdyncrm_imagestyle.md) | `baserecordid` | `baserecordid_msdyncrm_imagestyle` |
| `msdyncrm_imagestyle_AsyncOperations` | [msdyncrm_imagestyle](msdyncrm_imagestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_imagestyle` |
| `msdyncrm_imagestyle_MailboxTrackingFolders` | [msdyncrm_imagestyle](msdyncrm_imagestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_imagestyle` |
| `msdyncrm_imagestyle_UserEntityInstanceDatas` | [msdyncrm_imagestyle](msdyncrm_imagestyle.md) | `objectid` | `objectid_msdyncrm_imagestyle` |
| `msdyncrm_imagestyle_ProcessSession` | [msdyncrm_imagestyle](msdyncrm_imagestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_imagestyle` |
| `msdyncrm_imagestyle_BulkDeleteFailures` | [msdyncrm_imagestyle](msdyncrm_imagestyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_imagestyle` |
| `msdyncrm_imagestyle_PrincipalObjectAttributeAccesses` | [msdyncrm_imagestyle](msdyncrm_imagestyle.md) | `objectid` | `objectid_msdyncrm_imagestyle` |


## Source

Generated from [msdyncrm_imagestyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_imagestyle')) on 2026-05-07.