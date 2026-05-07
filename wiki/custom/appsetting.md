---
logical: "appsetting"
display: "Impostazione dell'app basata su modello"
entitySetName: "appsettings"
primaryId: "appsettingid"
primaryName: "displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione dell'app basata su modello

Contiene il valore della definizione delle impostazioni dell'app associata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appsetting` |
| Display name | Impostazione dell'app basata su modello |
| Display (plural) | Impostazioni dell'app basata su modello |
| Schema name | `AppSetting` |
| Entity set (Web API) | `appsettings` |
| Primary id attribute | `appsettingid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appsettings?$select=displayname&$top=10
GET /api/data/v9.2/appsettings(<guid>)
POST /api/data/v9.2/appsettings
PATCH /api/data/v9.2/appsettings(<guid>)
DELETE /api/data/v9.2/appsettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **17**

### Writable

`appsettingid`, `displayname`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `parentappmoduleid`, `settingdefinitionid`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `value`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `description`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `statecode`, `statuscode`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appsetting` | [organization](organization.md) | `organizationid` | `organizationid` |
| `settingdefinition_appsetting_settingdefinitionid` | [settingdefinition](settingdefinition.md) | `settingdefinitionid` | `settingdefinitionid` |
| `appmodule_appsetting_parentappmoduleid` | [appmodule](appmodule.md) | `parentappmoduleid` | `parentappmoduleid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appsetting_SyncErrors` | [appsetting](appsetting.md) | `regardingobjectid` | `regardingobjectid_appsetting` |
| `appsetting_AsyncOperations` | [appsetting](appsetting.md) | `regardingobjectid` | `regardingobjectid_appsetting` |
| `appsetting_MailboxTrackingFolders` | [appsetting](appsetting.md) | `regardingobjectid` | `regardingobjectid_appsetting` |
| `appsetting_UserEntityInstanceDatas` | [appsetting](appsetting.md) | `objectid` | `objectid_appsetting` |
| `appsetting_ProcessSession` | [appsetting](appsetting.md) | `regardingobjectid` | `regardingobjectid_appsetting` |
| `appsetting_BulkDeleteFailures` | [appsetting](appsetting.md) | `regardingobjectid` | `regardingobjectid_appsetting` |
| `appsetting_PrincipalObjectAttributeAccesses` | [appsetting](appsetting.md) | `objectid` | `objectid_appsetting` |


## Source

Generated from [appsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appsetting')) on 2026-05-07.