---
logical: "msdynmkt_consentsubmitbutton"
display: "Pulsante Invia"
entitySetName: "msdynmkt_consentsubmitbuttons"
primaryId: "msdynmkt_consentsubmitbuttonid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Pulsante Invia

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentsubmitbutton` |
| Display name | Pulsante Invia |
| Display (plural) | Pulsante Invia |
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

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_bordercolor`, `msdynmkt_bordersize`, `msdynmkt_borderstyle`, `msdynmkt_buttoncolor`, `msdynmkt_buttontext`, `msdynmkt_consentsubmitbuttonid`, `msdynmkt_fontfamily`, `msdynmkt_fontitalicstyle`, `msdynmkt_fontsize`, `msdynmkt_fontweight`, `msdynmkt_name`, `msdynmkt_roundedcorners`, `msdynmkt_textdecoration`, `msdynmkt_textstylecolor`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consentsubmitbutton_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentsubmitbutton_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentsubmitbutton_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentsubmitbutton_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_consentsubmitbutton` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_consentsubmitbutton` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_consentsubmitbutton` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_consentsubmitbutton` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentsubmitbutton_SyncErrors` | [msdynmkt_consentsubmitbutton](msdynmkt_consentsubmitbutton.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentsubmitbutton` |
| `msdynmkt_consentsubmitbutton_DuplicateMatchingRecord` | [msdynmkt_consentsubmitbutton](msdynmkt_consentsubmitbutton.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_consentsubmitbutton` |
| `msdynmkt_consentsubmitbutton_DuplicateBaseRecord` | [msdynmkt_consentsubmitbutton](msdynmkt_consentsubmitbutton.md) | `baserecordid` | `baserecordid_msdynmkt_consentsubmitbutton` |
| `msdynmkt_consentsubmitbutton_AsyncOperations` | [msdynmkt_consentsubmitbutton](msdynmkt_consentsubmitbutton.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentsubmitbutton` |
| `msdynmkt_consentsubmitbutton_MailboxTrackingFolders` | [msdynmkt_consentsubmitbutton](msdynmkt_consentsubmitbutton.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentsubmitbutton` |
| `msdynmkt_consentsubmitbutton_UserEntityInstanceDatas` | [msdynmkt_consentsubmitbutton](msdynmkt_consentsubmitbutton.md) | `objectid` | `objectid_msdynmkt_consentsubmitbutton` |
| `msdynmkt_consentsubmitbutton_ProcessSession` | [msdynmkt_consentsubmitbutton](msdynmkt_consentsubmitbutton.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentsubmitbutton` |
| `msdynmkt_consentsubmitbutton_BulkDeleteFailures` | [msdynmkt_consentsubmitbutton](msdynmkt_consentsubmitbutton.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentsubmitbutton` |
| `msdynmkt_consentsubmitbutton_PrincipalObjectAttributeAccesses` | [msdynmkt_consentsubmitbutton](msdynmkt_consentsubmitbutton.md) | `objectid` | `objectid_msdynmkt_consentsubmitbutton` |


## Source

Generated from [msdynmkt_consentsubmitbutton (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_consentsubmitbutton')) on 2026-05-07.