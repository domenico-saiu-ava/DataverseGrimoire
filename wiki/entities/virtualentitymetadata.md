---
logical: "virtualentitymetadata"
display: "Virtual Entity  Metadata"
entitySetName: "virtualentitymetadatas"
primaryId: "virtualentitymetadataid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Virtual Entity  Metadata

Holds  metadata values for virtual entities

## Identity

| Property | Value |
| --- | --- |
| Logical name | `virtualentitymetadata` |
| Display name | Virtual Entity  Metadata |
| Display (plural) | Virtual Entity  Metadatas |
| Schema name | `VirtualEntityMetadata` |
| Entity set (Web API) | `virtualentitymetadatas` |
| Primary id attribute | `virtualentitymetadataid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/virtualentitymetadatas?$select=name&$top=10
GET /api/data/v9.2/virtualentitymetadatas(<guid>)
POST /api/data/v9.2/virtualentitymetadatas
PATCH /api/data/v9.2/virtualentitymetadatas(<guid>)
DELETE /api/data/v9.2/virtualentitymetadatas(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`ExtensionOfRecordId`, `ImportSequenceNumber`, `IsAttachmentsSupported`, `IsChangedFieldsEnabledForUpdateEvent`, `IsCustomizable`, `IsOnExternalCreatedEnabled`, `IsOnExternalDeletedEnabled`, `IsOnExternalUpdatedEnabled`, `Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `VirtualEntityMetadataId`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_virtualentitymetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_virtualentitymetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_virtualentitymetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_virtualentitymetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_virtualentitymetadata` | [organization](organization.md) | `organizationid` | `organizationid` |
| `virtualentitymetadata_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `virtualentitymetadata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `virtualentitymetadata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `virtualentitymetadata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `virtualentitymetadata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `virtualentitymetadata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `virtualentitymetadata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [virtualentitymetadata.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/virtualentitymetadata.md) on 2026-05-06.