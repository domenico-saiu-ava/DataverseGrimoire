---
logical: "msdyncrm_buttonstyle"
display: "Button style"
entitySetName: "msdyncrm_buttonstyles"
primaryId: "msdyncrm_buttonstyleid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Button style

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_buttonstyle` |
| Display name | Button style |
| Display (plural) | Buttons style |
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

Writable: **41** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_alignment`, `msdyncrm_autowidth`, `msdyncrm_bordercolor`, `msdyncrm_bordersize`, `msdyncrm_borderstyle`, `msdyncrm_buttoncolor`, `msdyncrm_buttonstyleId`, `msdyncrm_buttontext`, `msdyncrm_emailcolorpalette`, `msdyncrm_fittotext`, `msdyncrm_fontfamily`, `msdyncrm_fontitalicstyle`, `msdyncrm_fontsize`, `msdyncrm_fontweight`, `msdyncrm_height`, `msdyncrm_linkto`, `msdyncrm_marginbottom`, `msdyncrm_marginleft`, `msdyncrm_marginright`, `msdyncrm_margintop`, `msdyncrm_name`, `msdyncrm_paddingbottom`, `msdyncrm_paddingleft`, `msdyncrm_paddingright`, `msdyncrm_paddingtop`, `msdyncrm_roundedcorners`, `msdyncrm_target`, `msdyncrm_textdecoration`, `msdyncrm_textfontstyle`, `msdyncrm_textstylecolor`, `msdyncrm_tracking`, `msdyncrm_verticalalign`, `msdyncrm_width`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_buttonstyle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_buttonstyle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_buttonstyle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_buttonstyle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_buttonstyle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_buttonstyle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_buttonstyle` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_buttonstyle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_buttonstyle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_buttonstyle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_buttonstyle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_buttonstyle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_buttonstyle_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_buttonstyle_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_buttonstyle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_buttonstyle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_buttonstyle.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_buttonstyle.md) on 2026-05-06.