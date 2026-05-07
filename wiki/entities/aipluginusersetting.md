---
logical: "aipluginusersetting"
display: "AIPluginUserSetting"
entitySetName: "aipluginusersettings"
primaryId: "aipluginusersettingid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **13** · Read-only: **12**

### Writable

`AIPluginUserSettingId`, `ImportSequenceNumber`, `IsDefaultEnvironment`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `SystemUser`, `TemplateIndex`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginUserSetting_SystemUser_Syst` | [systemuser](systemuser.md) | `systemuser` | `SystemUser` |
| `business_unit_aipluginusersetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aipluginusersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginusersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginusersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginusersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aipluginusersetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aipluginusersetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aipluginusersetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginusersetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginusersetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginusersetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `aipluginusersetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `aipluginusersetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginusersetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aipluginusersetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginusersetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aipluginusersetting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aipluginusersetting.md) on 2026-05-06.