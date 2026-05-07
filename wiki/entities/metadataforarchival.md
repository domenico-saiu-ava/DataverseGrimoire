---
logical: "metadataforarchival"
display: "MetadataForArchival"
entitySetName: "metadataforarchivals"
primaryId: "metadataforarchivalid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# MetadataForArchival

Holds  metadata values of tables for retention

## Identity

| Property | Value |
| --- | --- |
| Logical name | `metadataforarchival` |
| Display name | MetadataForArchival |
| Display (plural) | MetadataForArchival |
| Schema name | `MetadataForArchival` |
| Entity set (Web API) | `metadataforarchivals` |
| Primary id attribute | `metadataforarchivalid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/metadataforarchivals?$select=name&$top=10
GET /api/data/v9.2/metadataforarchivals(<guid>)
POST /api/data/v9.2/metadataforarchivals
PATCH /api/data/v9.2/metadataforarchivals(<guid>)
DELETE /api/data/v9.2/metadataforarchivals(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ExtensionOfRecordId`, `ImportSequenceNumber`, `IsAvailableForArchival`, `IsCustomizable`, `IsReadyForArchival`, `MetadataForArchivalId`, `Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_metadataforarchival_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_metadataforarchival_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_metadataforarchival_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_metadataforarchival_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `metadataforarchival_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |
| `organization_metadataforarchival` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `metadataforarchival_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `metadataforarchival_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `metadataforarchival_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `metadataforarchival_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `metadataforarchival_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `metadataforarchival_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [metadataforarchival.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/metadataforarchival.md) on 2026-05-06.