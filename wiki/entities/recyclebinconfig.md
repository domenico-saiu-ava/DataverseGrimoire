---
logical: "recyclebinconfig"
display: "Restore Deleted Records Configuration"
entitySetName: "recyclebinconfigs"
primaryId: "recyclebinconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Restore Deleted Records Configuration

Holds Restore Deleted Records configuration for entities

## Identity

| Property | Value |
| --- | --- |
| Logical name | `recyclebinconfig` |
| Display name | Restore Deleted Records Configuration |
| Display (plural) | Restore Deleted Records Configurations |
| Schema name | `RecycleBinConfig` |
| Entity set (Web API) | `recyclebinconfigs` |
| Primary id attribute | `recyclebinconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/recyclebinconfigs?$select=name&$top=10
GET /api/data/v9.2/recyclebinconfigs(<guid>)
POST /api/data/v9.2/recyclebinconfigs
PATCH /api/data/v9.2/recyclebinconfigs(<guid>)
DELETE /api/data/v9.2/recyclebinconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`CleanupIntervalInDays`, `ExtensionOfRecordId`, `ImportSequenceNumber`, `IsCustomizable`, `IsReadyForRecycleBin`, `Name`, `OverriddenCreatedOn`, `RecycleBinConfigId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`BinTableName`, `ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_recyclebinconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_recyclebinconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_recyclebinconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_recyclebinconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_recyclebinconfig` | [organization](organization.md) | `organizationid` | `organizationid` |
| `recyclebinconfig_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `recyclebinconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recyclebinconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recyclebinconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recyclebinconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `recyclebinconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recyclebinconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [recyclebinconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/recyclebinconfig.md) on 2026-05-06.