---
logical: "entityanalyticsconfig"
display: "Entity Analytics Config"
entitySetName: "entityanalyticsconfigs"
primaryId: "entityanalyticsconfigid"
primaryName: "parententitylogicalname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Entity Analytics Config

This entity contains information about which entities are enabled for Azure Data Lake Services integration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entityanalyticsconfig` |
| Display name | Entity Analytics Config |
| Display (plural) | Entity Analytics Config |
| Schema name | `EntityAnalyticsConfig` |
| Entity set (Web API) | `entityanalyticsconfigs` |
| Primary id attribute | `entityanalyticsconfigid` |
| Primary name attribute | `parententitylogicalname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/entityanalyticsconfigs?$select=parententitylogicalname&$top=10
GET /api/data/v9.2/entityanalyticsconfigs(<guid>)
POST /api/data/v9.2/entityanalyticsconfigs
PATCH /api/data/v9.2/entityanalyticsconfigs(<guid>)
DELETE /api/data/v9.2/entityanalyticsconfigs(<guid>)
```

## Attributes

Writable: **6** · Read-only: **10**

### Writable

`EntityAnalyticsConfigId`, `EntityDataSource`, `IsEnabledForADLS`, `IsEnabledForTimeSeries`, `ParentEntityId`, `ParentEntityLogicalName`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedOn`, `IsManaged`, `ModifiedOn`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entity_entityanalyticsconfig` | [entity](entity.md) | `parententityid` | `parententityid` |
| `organization_entityanalyticsconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityanalyticsconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityanalyticsconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityanalyticsconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityanalyticsconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entityanalyticsconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [entityanalyticsconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/entityanalyticsconfig.md) on 2026-05-06.