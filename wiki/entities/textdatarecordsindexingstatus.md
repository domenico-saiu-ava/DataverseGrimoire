---
logical: "textdatarecordsindexingstatus"
display: "TextDataRecordsIndexingStatus"
entitySetName: "textdatarecordsindexingstatuses"
primaryId: "textdatarecordsindexingstatusid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# TextDataRecordsIndexingStatus

Stores information about unstructured / text data records indexing status

## Identity

| Property | Value |
| --- | --- |
| Logical name | `textdatarecordsindexingstatus` |
| Display name | TextDataRecordsIndexingStatus |
| Display (plural) | TextDataRecordsIndexingStatus |
| Schema name | `textdatarecordsindexingstatus` |
| Entity set (Web API) | `textdatarecordsindexingstatuses` |
| Primary id attribute | `textdatarecordsindexingstatusid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/textdatarecordsindexingstatuses?$select=name&$top=10
GET /api/data/v9.2/textdatarecordsindexingstatuses(<guid>)
POST /api/data/v9.2/textdatarecordsindexingstatuses
PATCH /api/data/v9.2/textdatarecordsindexingstatuses(<guid>)
DELETE /api/data/v9.2/textdatarecordsindexingstatuses(<guid>)
```

## Attributes

Writable: **17** · Read-only: **7**

### Writable

`AttributeName`, `EntityName`, `ImportSequenceNumber`, `IndexingStatus`, `Name`, `ObjectTypeCode`, `OverriddenCreatedOn`, `PartitionId`, `RecordCreatedOnInCrm`, `RecordId`, `RecordModifiedOnInCrm`, `RecordSizeInBytesInCrm`, `RecordSizeInBytesInTextDataIndex`, `RecordVersionNumber`, `TextDataIndexName`, `textdatarecordsindexingstatusId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_textdatarecordsindexingstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_textdatarecordsindexingstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_textdatarecordsindexingstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_textdatarecordsindexingstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [textdatarecordsindexingstatus.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/textdatarecordsindexingstatus.md) on 2026-05-06.