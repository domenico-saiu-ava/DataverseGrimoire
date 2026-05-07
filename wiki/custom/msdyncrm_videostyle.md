---
logical: "msdyncrm_videostyle"
display: "Stile video"
entitySetName: "msdyncrm_videostyles"
primaryId: "msdyncrm_videostyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile video

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_videostyle` |
| Display name | Stile video |
| Display (plural) | Stili video |
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

Writable: **31** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_alignment`, `msdyncrm_alttext`, `msdyncrm_autowidth`, `msdyncrm_height`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_noalttext`, `msdyncrm_originalheight`, `msdyncrm_originalwidth`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_source`, `msdyncrm_thumbnail`, `msdyncrm_verticalalign`, `msdyncrm_videoid`, `msdyncrm_videostyleid`, `msdyncrm_videourl`, `msdyncrm_width`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_videostyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_videostyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_videostyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_videostyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_videostyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_videostyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_videostyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_videostyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyncrm_msdyncrm_videostyle_msdyncrm_videostyle_videoid` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `msdyncrm_videoid` | `msdyncrm_videoid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_videostyle_SyncErrors` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_videostyle` |
| `msdyncrm_videostyle_DuplicateMatchingRecord` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_videostyle` |
| `msdyncrm_videostyle_DuplicateBaseRecord` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `baserecordid` | `baserecordid_msdyncrm_videostyle` |
| `msdyncrm_videostyle_AsyncOperations` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_videostyle` |
| `msdyncrm_videostyle_MailboxTrackingFolders` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_videostyle` |
| `msdyncrm_videostyle_UserEntityInstanceDatas` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `objectid` | `objectid_msdyncrm_videostyle` |
| `msdyncrm_videostyle_ProcessSession` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_videostyle` |
| `msdyncrm_videostyle_BulkDeleteFailures` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_videostyle` |
| `msdyncrm_videostyle_PrincipalObjectAttributeAccesses` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `objectid` | `objectid_msdyncrm_videostyle` |
| `msdyncrm_msdyncrm_videostyle_msdyncrm_videostyle_videoid` | [msdyncrm_videostyle](msdyncrm_videostyle.md) | `msdyncrm_videoid` | `msdyncrm_videoid` |


## Source

Generated from [msdyncrm_videostyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_videostyle')) on 2026-05-07.