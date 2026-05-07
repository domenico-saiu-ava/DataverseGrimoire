---
logical: "stagedentity"
display: "Staged Entity"
entitySetName: "stagedentities"
primaryId: "stagedentityid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Staged Entity

Stores staged entity metadata to be processed before fully created.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedentity` |
| Display name | Staged Entity |
| Display (plural) | Staged Entities |
| Schema name | `StagedEntity` |
| Entity set (Web API) | `stagedentities` |
| Primary id attribute | `stagedentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedentities?$select=name&$top=10
GET /api/data/v9.2/stagedentities(<guid>)
POST /api/data/v9.2/stagedentities
PATCH /api/data/v9.2/stagedentities(<guid>)
DELETE /api/data/v9.2/stagedentities(<guid>)
```

## Attributes

Writable: **21** · Read-only: **7**

### Writable

`CollectionName`, `DataproviderId`, `DatasourceId`, `EntityDescription`, `EntitySetName`, `ExternalCollectionName`, `ExternalName`, `ImportSequenceNumber`, `LogicalCollectionName`, `LogicalName`, `Name`, `OriginalLocalizedCollectionName`, `OriginalLocalizedDescription`, `OriginalLocalizedName`, `OverriddenCreatedOn`, `PhysicalName`, `StagedEntityId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `stagedentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [stagedentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/stagedentity.md) on 2026-05-06.