---
logical: "entityclusterconfig"
display: "Entity Cluster Configuration"
entitySetName: "entityclusterconfigs"
primaryId: "entityclusterconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Entity Cluster Configuration

Holds Entity Cluster configuration for entities

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entityclusterconfig` |
| Display name | Entity Cluster Configuration |
| Display (plural) | Entity Cluster Configurations |
| Schema name | `EntityClusterConfig` |
| Entity set (Web API) | `entityclusterconfigs` |
| Primary id attribute | `entityclusterconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/entityclusterconfigs?$select=name&$top=10
GET /api/data/v9.2/entityclusterconfigs(<guid>)
POST /api/data/v9.2/entityclusterconfigs
PATCH /api/data/v9.2/entityclusterconfigs(<guid>)
DELETE /api/data/v9.2/entityclusterconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`ClusterMode`, `DefaultToLocalPartition`, `EntityClusterConfigId`, `ExtensionOfRecordId`, `ImportSequenceNumber`, `IsCustomizable`, `OverriddenCreatedOn`, `ShouldAutoReplicate`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `Name`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityclusterconfig_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |
| `lk_entityclusterconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entityclusterconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entityclusterconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entityclusterconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_entityclusterconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityclusterconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityclusterconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityclusterconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityclusterconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entityclusterconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityclusterconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [entityclusterconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/entityclusterconfig.md) on 2026-05-06.