---
logical: "appusersetting"
display: "Impostazione utente dell'app basata su modello"
entitySetName: "appusersettings"
primaryId: "appusersettingid"
primaryName: "displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione utente dell'app basata su modello

Contiene il valore della definizione dell'impostazione utente dell'app associata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appusersetting` |
| Display name | Impostazione utente dell'app basata su modello |
| Display (plural) | Impostazioni utente dell'app basata su modello |
| Schema name | `AppUserSetting` |
| Entity set (Web API) | `appusersettings` |
| Primary id attribute | `appusersettingid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appusersettings?$select=displayname&$top=10
GET /api/data/v9.2/appusersettings(<guid>)
POST /api/data/v9.2/appusersettings
PATCH /api/data/v9.2/appusersettings(<guid>)
DELETE /api/data/v9.2/appusersettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`appusersettingid`, `displayname`, `importsequencenumber`, `overriddencreatedon`, `parentappmoduleid`, `settingdefinitionid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `userid`, `utcconversiontimezonecode`, `value`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appusersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appusersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appusersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appusersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appusersetting` | [organization](organization.md) | `organizationid` | `organizationid` |
| `settingdefinition_appusersetting_settingdefinitionid` | [settingdefinition](settingdefinition.md) | `settingdefinitionid` | `settingdefinitionid` |
| `appmodule_appusersetting_parentappmoduleid` | [appmodule](appmodule.md) | `parentappmoduleid` | `parentappmoduleid` |
| `systemuser_appusersetting_userId` | [systemuser](systemuser.md) | `userid` | `UserId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appusersetting_SyncErrors` | [appusersetting](appusersetting.md) | `regardingobjectid` | `regardingobjectid_appusersetting` |
| `appusersetting_AsyncOperations` | [appusersetting](appusersetting.md) | `regardingobjectid` | `regardingobjectid_appusersetting` |
| `appusersetting_MailboxTrackingFolders` | [appusersetting](appusersetting.md) | `regardingobjectid` | `regardingobjectid_appusersetting` |
| `appusersetting_UserEntityInstanceDatas` | [appusersetting](appusersetting.md) | `objectid` | `objectid_appusersetting` |
| `appusersetting_ProcessSession` | [appusersetting](appusersetting.md) | `regardingobjectid` | `regardingobjectid_appusersetting` |
| `appusersetting_BulkDeleteFailures` | [appusersetting](appusersetting.md) | `regardingobjectid` | `regardingobjectid_appusersetting` |
| `appusersetting_PrincipalObjectAttributeAccesses` | [appusersetting](appusersetting.md) | `objectid` | `objectid_appusersetting` |


## Source

Generated from [appusersetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appusersetting')) on 2026-05-07.