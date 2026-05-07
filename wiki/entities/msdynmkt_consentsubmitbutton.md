---
logical: "msdynmkt_consentsubmitbutton"
display: "Submit Button"
entitySetName: "msdynmkt_consentsubmitbuttons"
primaryId: "msdynmkt_consentsubmitbuttonid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Submit Button

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentsubmitbutton` |
| Display name | Submit Button |
| Display (plural) | Submit Button |
| Schema name | `msdynmkt_consentsubmitbutton` |
| Entity set (Web API) | `msdynmkt_consentsubmitbuttons` |
| Primary id attribute | `msdynmkt_consentsubmitbuttonid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentsubmitbuttons?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_consentsubmitbuttons(<guid>)
POST /api/data/v9.2/msdynmkt_consentsubmitbuttons
PATCH /api/data/v9.2/msdynmkt_consentsubmitbuttons(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentsubmitbuttons(<guid>)
```

## Attributes

Writable: **22** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_bordercolor`, `msdynmkt_bordersize`, `msdynmkt_borderstyle`, `msdynmkt_buttoncolor`, `msdynmkt_buttontext`, `msdynmkt_consentsubmitbuttonId`, `msdynmkt_fontfamily`, `msdynmkt_fontitalicstyle`, `msdynmkt_fontsize`, `msdynmkt_fontweight`, `msdynmkt_name`, `msdynmkt_roundedcorners`, `msdynmkt_textdecoration`, `msdynmkt_textstylecolor`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_consentsubmitbutton` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_consentsubmitbutton_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentsubmitbutton_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentsubmitbutton_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentsubmitbutton_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_consentsubmitbutton` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_consentsubmitbutton` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_consentsubmitbutton` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentsubmitbutton_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentsubmitbutton_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentsubmitbutton_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_consentsubmitbutton_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_consentsubmitbutton_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentsubmitbutton_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_consentsubmitbutton_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentsubmitbutton_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_consentsubmitbutton.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_consentsubmitbutton.md) on 2026-05-06.