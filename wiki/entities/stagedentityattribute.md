---
logical: "stagedentityattribute"
display: "Staged Entity Attribute"
entitySetName: "stagedentityattributes"
primaryId: "stagedentityattributeid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Staged Entity Attribute

Stores staged entity attribute metadata to be processed in async.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedentityattribute` |
| Display name | Staged Entity Attribute |
| Display (plural) | Staged Entity Attribute |
| Schema name | `StagedEntityAttribute` |
| Entity set (Web API) | `stagedentityattributes` |
| Primary id attribute | `stagedentityattributeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedentityattributes?$select=name&$top=10
GET /api/data/v9.2/stagedentityattributes(<guid>)
POST /api/data/v9.2/stagedentityattributes
PATCH /api/data/v9.2/stagedentityattributes(<guid>)
DELETE /api/data/v9.2/stagedentityattributes(<guid>)
```

## Attributes

Writable: **24** · Read-only: **8**

### Writable

`AttributeDescription`, `AttributeOf`, `AttributeTypeId`, `ComponentState`, `EntityId`, `ExternalName`, `HasMultipleLabels`, `ImportSequenceNumber`, `IsLogical`, `IsPKAttribute`, `LogicalName`, `Name`, `OriginalLocalizedDescription`, `OriginalLocalizedName`, `OverriddenCreatedOn`, `PhysicalName`, `SolutionId`, `StagedEntityAttributeId`, `StagingExecutionContextId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `ValidForReadAPI`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedentityattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedentityattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedentityattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedentityattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedentityattribute_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedentityattribute_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedentityattribute_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedentityattribute_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `stagedentityattribute_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `stagedentityattribute_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [stagedentityattribute.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/stagedentityattribute.md) on 2026-05-06.