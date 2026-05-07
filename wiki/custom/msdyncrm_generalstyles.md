---
logical: "msdyncrm_generalstyles"
display: "Stili generali"
entitySetName: "msdyncrm_generalstyleses"
primaryId: "msdyncrm_generalstylesid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stili generali

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_generalstyles` |
| Display name | Stili generali |
| Display (plural) | Stili generali |
| Schema name | `msdyncrm_generalstyles` |
| Entity set (Web API) | `msdyncrm_generalstyleses` |
| Primary id attribute | `msdyncrm_generalstylesid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_generalstyleses?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_generalstyleses(<guid>)
POST /api/data/v9.2/msdyncrm_generalstyleses
PATCH /api/data/v9.2/msdyncrm_generalstyleses(<guid>)
DELETE /api/data/v9.2/msdyncrm_generalstyleses(<guid>)
```

## Attributes

Writable: **48** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_bordercolor`, `msdyncrm_bordersize`, `msdyncrm_borderstyle`, `msdyncrm_buttoncolor`, `msdyncrm_dividercolor`, `msdyncrm_dividerlinestyle`, `msdyncrm_dividersize`, `msdyncrm_dividerstyle`, `msdyncrm_emailcolorpalette`, `msdyncrm_emailwidth`, `msdyncrm_font`, `msdyncrm_fontsize`, `msdyncrm_generalstylesid`, `msdyncrm_heading1color`, `msdyncrm_heading1font`, `msdyncrm_heading1size`, `msdyncrm_heading2color`, `msdyncrm_heading2font`, `msdyncrm_heading2size`, `msdyncrm_heading3color`, `msdyncrm_heading3font`, `msdyncrm_heading3size`, `msdyncrm_innerbackgroundcolor`, `msdyncrm_lineheight`, `msdyncrm_name`, `msdyncrm_outerbackgroundcolor`, `msdyncrm_paragraphcolor`, `msdyncrm_paragraphfont`, `msdyncrm_paragraphsize`, `msdyncrm_plaintextfullwidth`, `msdyncrm_roundedcorners`, `msdyncrm_textdecoration`, `msdyncrm_textfontweight`, `msdyncrm_textitalicstyle`, `msdyncrm_textlinkfontweight`, `msdyncrm_textlinkitalicstyle`, `msdyncrm_textlinkstylecolor`, `msdyncrm_textlinkstylefont`, `msdyncrm_textlinktextdecoration`, `msdyncrm_textstylecolor`, `msdyncrm_textstylefont`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_generalstyles_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_generalstyles_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_generalstyles_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_generalstyles_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_generalstyles` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_generalstyles` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_generalstyles` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_generalstyles` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_generalstyles_SyncErrors` | [msdyncrm_generalstyles](msdyncrm_generalstyles.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_generalstyles` |
| `msdyncrm_generalstyles_DuplicateMatchingRecord` | [msdyncrm_generalstyles](msdyncrm_generalstyles.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_generalstyles` |
| `msdyncrm_generalstyles_DuplicateBaseRecord` | [msdyncrm_generalstyles](msdyncrm_generalstyles.md) | `baserecordid` | `baserecordid_msdyncrm_generalstyles` |
| `msdyncrm_generalstyles_AsyncOperations` | [msdyncrm_generalstyles](msdyncrm_generalstyles.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_generalstyles` |
| `msdyncrm_generalstyles_MailboxTrackingFolders` | [msdyncrm_generalstyles](msdyncrm_generalstyles.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_generalstyles` |
| `msdyncrm_generalstyles_UserEntityInstanceDatas` | [msdyncrm_generalstyles](msdyncrm_generalstyles.md) | `objectid` | `objectid_msdyncrm_generalstyles` |
| `msdyncrm_generalstyles_ProcessSession` | [msdyncrm_generalstyles](msdyncrm_generalstyles.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_generalstyles` |
| `msdyncrm_generalstyles_BulkDeleteFailures` | [msdyncrm_generalstyles](msdyncrm_generalstyles.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_generalstyles` |
| `msdyncrm_generalstyles_PrincipalObjectAttributeAccesses` | [msdyncrm_generalstyles](msdyncrm_generalstyles.md) | `objectid` | `objectid_msdyncrm_generalstyles` |


## Source

Generated from [msdyncrm_generalstyles (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_generalstyles')) on 2026-05-07.