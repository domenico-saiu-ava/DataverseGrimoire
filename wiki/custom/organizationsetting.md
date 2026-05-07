---
logical: "organizationsetting"
display: "Impostazione organizzazione"
entitySetName: "organizationsettings"
primaryId: "organizationsettingid"
primaryName: "displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione organizzazione

Contiene il valore della definizione dell'impostazione dell'organizzazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `organizationsetting` |
| Display name | Impostazione organizzazione |
| Display (plural) | Impostazioni organizzazione |
| Schema name | `OrganizationSetting` |
| Entity set (Web API) | `organizationsettings` |
| Primary id attribute | `organizationsettingid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/organizationsettings?$select=displayname&$top=10
GET /api/data/v9.2/organizationsettings(<guid>)
POST /api/data/v9.2/organizationsettings
PATCH /api/data/v9.2/organizationsettings(<guid>)
DELETE /api/data/v9.2/organizationsettings(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`displayname`, `importsequencenumber`, `iscustomizable`, `organizationsettingid`, `overriddencreatedon`, `settingdefinitionid`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `value`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `statecode`, `statuscode`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_organizationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_organizationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_organizationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_organizationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_organizationsetting` | [organization](organization.md) | `organizationid` | `organizationid` |
| `settingdefinition_organizationsetting_settingdefinitionid` | [settingdefinition](settingdefinition.md) | `settingdefinitionid` | `settingdefinitionid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organizationsetting_SyncErrors` | [organizationsetting](organizationsetting.md) | `regardingobjectid` | `regardingobjectid_organizationsetting` |
| `organizationsetting_AsyncOperations` | [organizationsetting](organizationsetting.md) | `regardingobjectid` | `regardingobjectid_organizationsetting` |
| `organizationsetting_MailboxTrackingFolders` | [organizationsetting](organizationsetting.md) | `regardingobjectid` | `regardingobjectid_organizationsetting` |
| `organizationsetting_UserEntityInstanceDatas` | [organizationsetting](organizationsetting.md) | `objectid` | `objectid_organizationsetting` |
| `organizationsetting_ProcessSession` | [organizationsetting](organizationsetting.md) | `regardingobjectid` | `regardingobjectid_organizationsetting` |
| `organizationsetting_BulkDeleteFailures` | [organizationsetting](organizationsetting.md) | `regardingobjectid` | `regardingobjectid_organizationsetting` |
| `organizationsetting_PrincipalObjectAttributeAccesses` | [organizationsetting](organizationsetting.md) | `objectid` | `objectid_organizationsetting` |


## Source

Generated from [organizationsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='organizationsetting')) on 2026-05-07.