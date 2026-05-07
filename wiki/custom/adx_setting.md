---
logical: "adx_setting"
display: "Impostazione"
entitySetName: "adx_settings"
primaryId: "adx_settingid"
primaryName: "adx_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_setting` |
| Display name | Impostazione |
| Display (plural) | Impostazioni |
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

Writable: **12** · Read-only: **10**

### Writable

`adx_description`, `adx_encryptedcontent`, `adx_name`, `adx_settingid`, `adx_value`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_adx_setting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adx_setting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adx_setting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adx_setting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_adx_setting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_adx_setting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_adx_setting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_adx_setting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_setting_SyncErrors` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_setting_AsyncOperations` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_setting_MailboxTrackingFolders` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_setting_UserEntityInstanceDatas` | [adx_setting](adx_setting.md) | `objectid` | `objectid_adx_setting` |
| `adx_setting_ProcessSession` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_setting_BulkDeleteFailures` | [adx_setting](adx_setting.md) | `regardingobjectid` | `regardingobjectid_adx_setting` |
| `adx_setting_PrincipalObjectAttributeAccesses` | [adx_setting](adx_setting.md) | `objectid` | `objectid_adx_setting` |


## Source

Generated from [adx_setting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_setting')) on 2026-05-07.