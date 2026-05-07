---
logical: "settingdefinition"
display: "Definizione delle impostazioni"
entitySetName: "settingdefinitions"
primaryId: "settingdefinitionid"
primaryName: "displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione delle impostazioni

Contiene le definizioni delle impostazioni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `settingdefinition` |
| Display name | Definizione delle impostazioni |
| Display (plural) | Definizioni delle impostazioni |
| Schema name | `SettingDefinition` |
| Entity set (Web API) | `settingdefinitions` |
| Primary id attribute | `settingdefinitionid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/settingdefinitions?$select=displayname&$top=10
GET /api/data/v9.2/settingdefinitions(<guid>)
POST /api/data/v9.2/settingdefinitions
PATCH /api/data/v9.2/settingdefinitions(<guid>)
DELETE /api/data/v9.2/settingdefinitions(<guid>)
```

## Attributes

Writable: **19** · Read-only: **15**

### Writable

`datatype`, `defaultvalue`, `description`, `displayname`, `importsequencenumber`, `informationurl`, `iscustomizable`, `ishidden`, `isoverridable`, `isplatform`, `overridablelevel`, `overriddencreatedon`, `releaselevel`, `settingdefinitionid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `ispreview`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_settingdefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_settingdefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_settingdefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_settingdefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_settingdefinition` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `settingdefinition_SyncErrors` | [settingdefinition](settingdefinition.md) | `regardingobjectid` | `regardingobjectid_settingdefinition` |
| `settingdefinition_AsyncOperations` | [settingdefinition](settingdefinition.md) | `regardingobjectid` | `regardingobjectid_settingdefinition` |
| `settingdefinition_MailboxTrackingFolders` | [settingdefinition](settingdefinition.md) | `regardingobjectid` | `regardingobjectid_settingdefinition` |
| `settingdefinition_UserEntityInstanceDatas` | [settingdefinition](settingdefinition.md) | `objectid` | `objectid_settingdefinition` |
| `settingdefinition_ProcessSession` | [settingdefinition](settingdefinition.md) | `regardingobjectid` | `regardingobjectid_settingdefinition` |
| `settingdefinition_BulkDeleteFailures` | [settingdefinition](settingdefinition.md) | `regardingobjectid` | `regardingobjectid_settingdefinition` |
| `settingdefinition_PrincipalObjectAttributeAccesses` | [settingdefinition](settingdefinition.md) | `objectid` | `objectid_settingdefinition` |
| `settingdefinition_appsetting_settingdefinitionid` | [settingdefinition](settingdefinition.md) | `settingdefinitionid` | `settingdefinitionid` |
| `settingdefinition_appusersetting_settingdefinitionid` | [settingdefinition](settingdefinition.md) | `settingdefinitionid` | `settingdefinitionid` |
| `settingdefinition_organizationsetting_settingdefinitionid` | [settingdefinition](settingdefinition.md) | `settingdefinitionid` | `settingdefinitionid` |


## Source

Generated from [settingdefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='settingdefinition')) on 2026-05-07.