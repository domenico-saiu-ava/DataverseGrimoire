---
logical: "importfile"
display: "Import Source File"
entitySetName: "importfiles"
primaryId: "importfileid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Import Source File

File name of file used for import.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `importfile` |
| Display name | Import Source File |
| Display (plural) | Imports |
| Schema name | `ImportFile` |
| Entity set (Web API) | `importfiles` |
| Primary id attribute | `importfileid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/importfiles?$select=name&$top=10
GET /api/data/v9.2/importfiles(<guid>)
POST /api/data/v9.2/importfiles
PATCH /api/data/v9.2/importfiles(<guid>)
DELETE /api/data/v9.2/importfiles(<guid>)
```

## Attributes

Writable: **27** · Read-only: **23**

### Writable

`Content`, `DataDelimiterCode`, `EnableDuplicateDetection`, `EntityKeyId`, `FieldDelimiterCode`, `FileTypeCode`, `ImportFileId`, `ImportId`, `ImportMapId`, `IsFirstRowHeader`, `Name`, `OwnerId`, `OwnerIdType`, `ProcessCode`, `RecordsOwnerId`, `RecordsOwnerIdType`, `RelatedEntityColumns`, `Size`, `Source`, `SourceEntityName`, `StateCode`, `StatusCode`, `TargetEntityName`, `TimeZoneRuleVersionNumber`, `UpsertModeCode`, `UseSystemMap`, `UTCConversionTimeZoneCode`

### Read-only

`AdditionalHeaderRow`, `CompletedOn`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FailureCount`, `HeaderRow`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ParsedTableColumnPrefix`, `ParsedTableColumnsNumber`, `ParsedTableName`, `PartialFailureCount`, `ProcessingStatus`, `ProgressCounter`, `SuccessCount`, `TotalCount`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BusinessUnit_ImportFiles` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `Import_ImportFile` | [import](import.md) | `importid` | `importid` |
| `ImportFile_SystemUser` | [systemuser](systemuser.md) | `recordsownerid` | `recordsownerid_systemuser` |
| `ImportFile_Team` | [team](team.md) | `recordsownerid` | `recordsownerid_team` |
| `ImportMap_ImportFile` | [importmap](importmap.md) | `importmapid` | `importmapid` |
| `lk_importfilebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_importfilebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_importfilebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_importfilebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_importfiles` | [owner](owner.md) | `ownerid` | `ownerid` |
| `SystemUser_ImportFiles` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ImportFiles` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ImportFile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ImportFile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ImportFile_ImportData` | _n/a_ | `importfileid` | _n/a_ |
| `ImportLog_ImportFile` | _n/a_ | `importfileid` | _n/a_ |


## Source

Generated from [importfile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/importfile.md) on 2026-05-06.