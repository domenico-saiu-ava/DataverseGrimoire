---
logical: "adx_setting"
display: "Setting"
entitySetName: "adx_settings"
primaryId: "adx_settingid"
primaryName: "adx_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_setting` |
| Display name | Setting |
| Display (plural) | Settings |
| Schema name | `adx_setting` |
| Entity set (Web API) | `adx_settings` |
| Primary id attribute | `adx_settingid` |
| Primary name attribute | `adx_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_settings?$select=adx_name&$top=10
GET /api/data/v9.2/adx_settings(<guid>)
POST /api/data/v9.2/adx_settings
PATCH /api/data/v9.2/adx_settings(<guid>)
DELETE /api/data/v9.2/adx_settings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`adx_description`, `adx_encryptedcontent`, `adx_name`, `adx_settingId`, `adx_value`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_adx_setting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_adx_setting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adx_setting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adx_setting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adx_setting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_adx_setting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_adx_setting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_adx_setting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_setting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_setting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_setting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_setting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `adx_setting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_setting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [adx_setting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/adx_setting.md) on 2026-05-06.