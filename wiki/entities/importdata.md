---
logical: "importdata"
display: "Import Data"
entitySetName: "importdataset"
primaryId: "importdataid"
primaryName: "data"
tableType: "Standard"
ownership: "UserOwned"
---

# Import Data

Unprocessed data from imported files.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `importdata` |
| Display name | Import Data |
| Display (plural) | Import Data |
| Schema name | `ImportData` |
| Entity set (Web API) | `importdataset` |
| Primary id attribute | `importdataid` |
| Primary name attribute | `data` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/importdataset?$select=data&$top=10
GET /api/data/v9.2/importdataset(<guid>)
POST /api/data/v9.2/importdataset
PATCH /api/data/v9.2/importdataset(<guid>)
DELETE /api/data/v9.2/importdataset(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`Data`, `ErrorType`, `HasError`, `ImportDataId`, `ImportFileId`, `LineNumber`, `OwnerId`, `OwnerIdType`, `RecordId`, `StatusCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `StateCode`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BusinessUnit_ImportData` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImportFile_ImportData` | [importfile](importfile.md) | `importfileid` | `importfileid` |
| `lk_importdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_importdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_importdatabase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_importdatabase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `owner_importdatas` | [owner](owner.md) | `ownerid` | `ownerid` |
| `SystemUser_ImportData` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ImportData` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ImportData_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ImportData_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ImportLog_ImportData` | _n/a_ | `importdataid` | _n/a_ |


## Source

Generated from [importdata.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/importdata.md) on 2026-05-06.