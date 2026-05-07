---
logical: "importmap"
display: "Data Map"
entitySetName: "importmaps"
primaryId: "importmapid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Map

Data map used in import.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `importmap` |
| Display name | Data Map |
| Display (plural) | Data Maps |
| Schema name | `ImportMap` |
| Entity set (Web API) | `importmaps` |
| Primary id attribute | `importmapid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/importmaps?$select=name&$top=10
GET /api/data/v9.2/importmaps(<guid>)
POST /api/data/v9.2/importmaps
PATCH /api/data/v9.2/importmaps(<guid>)
DELETE /api/data/v9.2/importmaps(<guid>)
```

## Attributes

Writable: **17** · Read-only: **19**

### Writable

`Description`, `EntitiesPerFile`, `ImportMapId`, `ImportMapType`, `IntroducedVersion`, `IsWizardCreated`, `MapCustomizations`, `Name`, `OwnerId`, `OwnerIdType`, `Source`, `SourceType`, `SourceUserIdentifierForSourceCRMUserLink`, `SourceUserIdentifierForSourceDataSourceUserLink`, `StateCode`, `StatusCode`, `TargetUserIdentifierForSourceCRMUserLink`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ImportMapIdUnique`, `IsManaged`, `IsValidForImport`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `TargetEntity`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BusinessUnit_ImportMaps` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_importmap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_importmap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_importmapbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_importmapbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `owner_importmaps` | [owner](owner.md) | `ownerid` | `ownerid` |
| `SystemUser_ImportMaps` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ImportMaps` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ColumnMapping_ImportMap` | _n/a_ | `importmapid` | _n/a_ |
| `ImportEntityMapping_ImportMap` | _n/a_ | `importmapid` | _n/a_ |
| `ImportMap_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ImportMap_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ImportMap_ImportFile` | _n/a_ | `importmapid` | _n/a_ |
| `ImportMap_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `OwnerMapping_ImportMap` | _n/a_ | `importmapid` | _n/a_ |
| `TransformationMapping_ImportMap` | _n/a_ | `importmapid` | _n/a_ |


## Source

Generated from [importmap.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/importmap.md) on 2026-05-06.