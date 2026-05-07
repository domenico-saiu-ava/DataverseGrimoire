---
logical: "msdyncrm_generalstyles"
display: "General styles"
entitySetName: "msdyncrm_generalstyleses"
primaryId: "msdyncrm_generalstylesid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# General styles

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_generalstyles` |
| Display name | General styles |
| Display (plural) | General styles |
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

Writable: **49** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_bordercolor`, `msdyncrm_bordersize`, `msdyncrm_borderstyle`, `msdyncrm_buttoncolor`, `msdyncrm_dividercolor`, `msdyncrm_dividerlinestyle`, `msdyncrm_dividersize`, `msdyncrm_dividerstyle`, `msdyncrm_emailcolorpalette`, `msdyncrm_emailwidth`, `msdyncrm_font`, `msdyncrm_fontsize`, `msdyncrm_generalstylesId`, `msdyncrm_heading1color`, `msdyncrm_heading1font`, `msdyncrm_heading1size`, `msdyncrm_heading2color`, `msdyncrm_heading2font`, `msdyncrm_heading2size`, `msdyncrm_heading3color`, `msdyncrm_heading3font`, `msdyncrm_heading3size`, `msdyncrm_innerbackgroundcolor`, `msdyncrm_lineheight`, `msdyncrm_name`, `msdyncrm_outerbackgroundcolor`, `msdyncrm_paragraphcolor`, `msdyncrm_paragraphfont`, `msdyncrm_paragraphsize`, `msdyncrm_plaintextfullwidth`, `msdyncrm_roundedcorners`, `msdyncrm_textdecoration`, `msdyncrm_textfontweight`, `msdyncrm_textitalicstyle`, `msdyncrm_textlinkfontweight`, `msdyncrm_textlinkitalicstyle`, `msdyncrm_textlinkstylecolor`, `msdyncrm_textlinkstylefont`, `msdyncrm_textlinktextdecoration`, `msdyncrm_textstylecolor`, `msdyncrm_textstylefont`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_generalstyles` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_generalstyles_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_generalstyles_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_generalstyles_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_generalstyles_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_generalstyles` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_generalstyles` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_generalstyles` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_generalstyles_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_generalstyles_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_generalstyles_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_generalstyles_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_generalstyles_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_generalstyles_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_generalstyles_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_generalstyles_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_generalstyles.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_generalstyles.md) on 2026-05-06.