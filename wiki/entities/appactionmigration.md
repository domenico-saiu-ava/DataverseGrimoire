---
logical: "appactionmigration"
display: "App Action Migration"
entitySetName: "appactionmigrations"
primaryId: "appactionmigrationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# App Action Migration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appactionmigration` |
| Display name | App Action Migration |
| Display (plural) | App Action Migrations |
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

`appactionmigrationId`, `ImportSequenceNumber`, `IsCustomizable`, `IsMigrated`, `name`, `OverriddenCreatedOn`, `SolutionUniqueName`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appactionmigration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appactionmigration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appactionmigration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appactionmigration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appactionmigration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appactionmigration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appactionmigration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appactionmigration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appactionmigration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `appactionmigration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appactionmigration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [appactionmigration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appactionmigration.md) on 2026-05-06.