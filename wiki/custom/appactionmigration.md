---
logical: "appactionmigration"
display: "Migrazione azione dell'app"
entitySetName: "appactionmigrations"
primaryId: "appactionmigrationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Migrazione azione dell'app

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appactionmigration` |
| Display name | Migrazione azione dell'app |
| Display (plural) | Migrazioni azione dell'app |
| Schema name | `appactionmigration` |
| Entity set (Web API) | `appactionmigrations` |
| Primary id attribute | `appactionmigrationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appactionmigrations?$select=name&$top=10
GET /api/data/v9.2/appactionmigrations(<guid>)
POST /api/data/v9.2/appactionmigrations
PATCH /api/data/v9.2/appactionmigrations(<guid>)
DELETE /api/data/v9.2/appactionmigrations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`appactionmigrationid`, `importsequencenumber`, `iscustomizable`, `ismigrated`, `name`, `overriddencreatedon`, `solutionuniquename`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appactionmigration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appactionmigration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appactionmigration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appactionmigration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appactionmigration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appactionmigration_SyncErrors` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionmigration_AsyncOperations` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionmigration_MailboxTrackingFolders` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionmigration_UserEntityInstanceDatas` | [appactionmigration](appactionmigration.md) | `objectid` | `objectid_appactionmigration` |
| `appactionmigration_ProcessSession` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionmigration_BulkDeleteFailures` | [appactionmigration](appactionmigration.md) | `regardingobjectid` | `regardingobjectid_appactionmigration` |
| `appactionmigration_PrincipalObjectAttributeAccesses` | [appactionmigration](appactionmigration.md) | `objectid` | `objectid_appactionmigration` |


## Source

Generated from [appactionmigration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appactionmigration')) on 2026-05-07.