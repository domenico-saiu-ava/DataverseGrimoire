---
logical: "aipluginusersetting"
display: "AIPluginUserSetting"
entitySetName: "aipluginusersettings"
primaryId: "aipluginusersettingid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AIPluginUserSetting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginusersetting` |
| Display name | AIPluginUserSetting |
| Display (plural) | AIPluginUserSetting |
| Schema name | `AIPluginUserSetting` |
| Entity set (Web API) | `aipluginusersettings` |
| Primary id attribute | `aipluginusersettingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginusersettings?$select=name&$top=10
GET /api/data/v9.2/aipluginusersettings(<guid>)
POST /api/data/v9.2/aipluginusersettings
PATCH /api/data/v9.2/aipluginusersettings(<guid>)
DELETE /api/data/v9.2/aipluginusersettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`aipluginusersettingid`, `importsequencenumber`, `isdefaultenvironment`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `systemuser`, `templateindex`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aipluginusersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginusersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginusersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginusersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aipluginusersetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aipluginusersetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aipluginusersetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aipluginusersetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `AIPluginUserSetting_SystemUser_Syst` | [systemuser](systemuser.md) | `systemuser` | `SystemUser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginusersetting_SyncErrors` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `aipluginusersetting_DuplicateMatchingRecord` | [aipluginusersetting](aipluginusersetting.md) | `duplicaterecordid` | `duplicaterecordid_aipluginusersetting` |
| `aipluginusersetting_DuplicateBaseRecord` | [aipluginusersetting](aipluginusersetting.md) | `baserecordid` | `baserecordid_aipluginusersetting` |
| `aipluginusersetting_AsyncOperations` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `aipluginusersetting_MailboxTrackingFolders` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `aipluginusersetting_UserEntityInstanceDatas` | [aipluginusersetting](aipluginusersetting.md) | `objectid` | `objectid_aipluginusersetting` |
| `aipluginusersetting_ProcessSession` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `aipluginusersetting_BulkDeleteFailures` | [aipluginusersetting](aipluginusersetting.md) | `regardingobjectid` | `regardingobjectid_aipluginusersetting` |
| `aipluginusersetting_PrincipalObjectAttributeAccesses` | [aipluginusersetting](aipluginusersetting.md) | `objectid` | `objectid_aipluginusersetting` |


## Source

Generated from [aipluginusersetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aipluginusersetting')) on 2026-05-07.