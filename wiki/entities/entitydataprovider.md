---
logical: "entitydataprovider"
display: "Virtual Entity Data Provider"
entitySetName: "entitydataproviders"
primaryId: "entitydataproviderid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Virtual Entity Data Provider

Developers can register plug-ins on a data provider to enable data access for virtual entities in the system.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitydataprovider` |
| Display name | Virtual Entity Data Provider |
| Display (plural) | Virtual Entity Data Providers |
| Schema name | `EntityDataProvider` |
| Entity set (Web API) | `entitydataproviders` |
| Primary id attribute | `entitydataproviderid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/entitydataproviders?$select=name&$top=10
GET /api/data/v9.2/entitydataproviders(<guid>)
POST /api/data/v9.2/entitydataproviders
PATCH /api/data/v9.2/entitydataproviders(<guid>)
DELETE /api/data/v9.2/entitydataproviders(<guid>)
```

## Attributes

Writable: **27** · Read-only: **7**

### Writable

`ArchivePlugin`, `BulkArchivePlugin`, `BulkRetainPlugin`, `CreateMultiplePlugin`, `CreatePlugin`, `DataSourceLogicalName`, `DeleteMultiplePlugin`, `DeletePlugin`, `Description`, `EntityDataProviderId`, `IntroducedVersion`, `IsCustomizable`, `LookupExpansionEnabled`, `Name`, `PurgeArchivedContentPlugin`, `PurgeRetainedContentPlugin`, `RetainPlugin`, `RetrieveEntityChangesPlugin`, `RetrieveMultiplePlugin`, `RetrievePlugin`, `RollbackRetainPlugin`, `UpdateMultiplePlugin`, `UpdatePlugin`, `UpsertMultiplePlugin`, `UpsertPlugin`, `ValidateArchiveConfigPlugin`, `ValidateRetentionConfigPlugin`

### Read-only

`ComponentState`, `EntityDataProviderIdUnique`, `IsManaged`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organization_entitydataprovider` | [organization](organization.md) | `organizationid` | `organizationid` |



## Source

Generated from [entitydataprovider.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/entitydataprovider.md) on 2026-05-06.