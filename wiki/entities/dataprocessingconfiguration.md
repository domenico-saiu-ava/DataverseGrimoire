---
logical: "dataprocessingconfiguration"
display: "Data Processing configuration"
entitySetName: "dataprocessingconfigurations"
primaryId: "dataprocessingconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Data Processing configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dataprocessingconfiguration` |
| Display name | Data Processing configuration |
| Display (plural) | Data Processing configurations |
| Schema name | `DataProcessingConfiguration` |
| Entity set (Web API) | `dataprocessingconfigurations` |
| Primary id attribute | `dataprocessingconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/dataprocessingconfigurations?$select=name&$top=10
GET /api/data/v9.2/dataprocessingconfigurations(<guid>)
POST /api/data/v9.2/dataprocessingconfigurations
PATCH /api/data/v9.2/dataprocessingconfigurations(<guid>)
DELETE /api/data/v9.2/dataprocessingconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`DataProcessingConfigurationId`, `ExternalDataProcessingConfigurationId`, `ImportSequenceNumber`, `IsCustomizable`, `ModuleConfigurationJson`, `ModuleName`, `ModuleType`, `ModuleVersion`, `Name`, `OverriddenCreatedOn`, `OwningAppId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_dataprocessingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dataprocessingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dataprocessingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dataprocessingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_dataprocessingconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dataprocessingconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dataprocessingconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dataprocessingconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `dataprocessingconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `dataprocessingconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dataprocessingconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `dataprocessingconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `dataprocessingconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [dataprocessingconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/dataprocessingconfiguration.md) on 2026-05-06.