---
logical: "appconfig"
display: "App Configuration"
entitySetName: "appconfigs"
primaryId: "appconfigid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# App Configuration

Contains a mapping between an app configuration instance and an app, which defines the properties that can be customized for the app. Optionally, also contains navigation setting for an app. For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appconfig` |
| Display name | App Configuration |
| Display (plural) | App Configuration |
| Schema name | `AppConfig` |
| Entity set (Web API) | `appconfigs` |
| Primary id attribute | `appconfigid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appconfigs?$select=&$top=10
GET /api/data/v9.2/appconfigs(<guid>)
POST /api/data/v9.2/appconfigs
PATCH /api/data/v9.2/appconfigs(<guid>)
DELETE /api/data/v9.2/appconfigs(<guid>)
```

## Attributes

Writable: **6** · Read-only: **16**

### Writable

`AppConfigIdUnique`, `AppConfigImportXml`, `AppModuleId`, `IntroducedVersion`, `StateCode`, `StatusCode`

### Read-only

`AppConfigId`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ImportSequenceNumber`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverriddenCreatedOn`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appmodule_appconfig` | [appmodule](appmodule.md) | `appmoduleid` | `appmodule_appconfig` |
| `lk_appconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `appconfig_createdby` |
| `lk_appconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `appconfig_createdonbehalfby` |
| `lk_appconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `appconfig_modifiedby` |
| `lk_appconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `appconfig_modifiedonbehalfby` |
| `organization_appconfig` | [organization](organization.md) | `organizationid` | `organization_appconfig` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appconfig_appconfiginstance` | _n/a_ | `appconfigid` | _n/a_ |
| `navigationsetting_appconfig` | _n/a_ | `appconfigid` | _n/a_ |


## Source

Generated from [appconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appconfig.md) on 2026-05-06.