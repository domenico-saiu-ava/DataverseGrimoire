---
logical: "msdyncrm_buttonstyle"
display: "Stile pulsante"
entitySetName: "msdyncrm_buttonstyles"
primaryId: "msdyncrm_buttonstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stile pulsante

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_buttonstyle` |
| Display name | Stile pulsante |
| Display (plural) | Stile pulsanti |
| Schema name | `msdyncrm_buttonstyle` |
| Entity set (Web API) | `msdyncrm_buttonstyles` |
| Primary id attribute | `msdyncrm_buttonstyleid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_buttonstyles?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_buttonstyles(<guid>)
POST /api/data/v9.2/msdyncrm_buttonstyles
PATCH /api/data/v9.2/msdyncrm_buttonstyles(<guid>)
DELETE /api/data/v9.2/msdyncrm_buttonstyles(<guid>)
```

## Attributes

Writable: **40** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_alignment`, `msdyncrm_autowidth`, `msdyncrm_bordercolor`, `msdyncrm_bordersize`, `msdyncrm_borderstyle`, `msdyncrm_buttoncolor`, `msdyncrm_buttonstyleid`, `msdyncrm_buttontext`, `msdyncrm_emailcolorpalette`, `msdyncrm_fittotext`, `msdyncrm_fontfamily`, `msdyncrm_fontitalicstyle`, `msdyncrm_fontsize`, `msdyncrm_fontweight`, `msdyncrm_height`, `msdyncrm_linkto`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_target`, `msdyncrm_textdecoration`, `msdyncrm_textfontstyle`, `msdyncrm_textstylecolor`, `msdyncrm_tracking`, `msdyncrm_verticalalign`, `msdyncrm_width`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_buttonstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_buttonstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_buttonstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_buttonstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_buttonstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_buttonstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_buttonstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_buttonstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_buttonstyle_SyncErrors` | [msdyncrm_buttonstyle](msdyncrm_buttonstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_buttonstyle` |
| `msdyncrm_buttonstyle_DuplicateMatchingRecord` | [msdyncrm_buttonstyle](msdyncrm_buttonstyle.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_buttonstyle` |
| `msdyncrm_buttonstyle_DuplicateBaseRecord` | [msdyncrm_buttonstyle](msdyncrm_buttonstyle.md) | `baserecordid` | `baserecordid_msdyncrm_buttonstyle` |
| `msdyncrm_buttonstyle_AsyncOperations` | [msdyncrm_buttonstyle](msdyncrm_buttonstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_buttonstyle` |
| `msdyncrm_buttonstyle_MailboxTrackingFolders` | [msdyncrm_buttonstyle](msdyncrm_buttonstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_buttonstyle` |
| `msdyncrm_buttonstyle_UserEntityInstanceDatas` | [msdyncrm_buttonstyle](msdyncrm_buttonstyle.md) | `objectid` | `objectid_msdyncrm_buttonstyle` |
| `msdyncrm_buttonstyle_ProcessSession` | [msdyncrm_buttonstyle](msdyncrm_buttonstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_buttonstyle` |
| `msdyncrm_buttonstyle_BulkDeleteFailures` | [msdyncrm_buttonstyle](msdyncrm_buttonstyle.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_buttonstyle` |
| `msdyncrm_buttonstyle_PrincipalObjectAttributeAccesses` | [msdyncrm_buttonstyle](msdyncrm_buttonstyle.md) | `objectid` | `objectid_msdyncrm_buttonstyle` |


## Source

Generated from [msdyncrm_buttonstyle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_buttonstyle')) on 2026-05-07.