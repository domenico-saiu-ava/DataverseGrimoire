---
logical: "msdyn_appinsightsmetadata"
display: "App Insights Metadata"
entitySetName: "msdyn_appinsightsmetadatas"
primaryId: "msdyn_appinsightsmetadataid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# App Insights Metadata

Metadata for App Insights Platform components

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appinsightsmetadata` |
| Display name | App Insights Metadata |
| Display (plural) | App Insights Metadatas |
| Schema name | `msdyn_appinsightsmetadata` |
| Entity set (Web API) | `msdyn_appinsightsmetadatas` |
| Primary id attribute | `msdyn_appinsightsmetadataid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appinsightsmetadatas?$select=name&$top=10
GET /api/data/v9.2/msdyn_appinsightsmetadatas(<guid>)
POST /api/data/v9.2/msdyn_appinsightsmetadatas
PATCH /api/data/v9.2/msdyn_appinsightsmetadatas(<guid>)
DELETE /api/data/v9.2/msdyn_appinsightsmetadatas(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_appinsightsmetadataId`, `msdyn_partitionkey`, `msdyn_payload`, `msdyn_payloadserialization`, `msdyn_typename`, `name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_appinsightsmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appinsightsmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appinsightsmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appinsightsmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_appinsightsmetadata` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appinsightsmetadata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appinsightsmetadata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appinsightsmetadata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_appinsightsmetadata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_appinsightsmetadata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appinsightsmetadata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_appinsightsmetadata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appinsightsmetadata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_appinsightsmetadata.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_appinsightsmetadata.md) on 2026-05-06.