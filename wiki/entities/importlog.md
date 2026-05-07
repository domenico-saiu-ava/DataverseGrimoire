---
logical: "importlog"
display: "Import Log"
entitySetName: "importlogs"
primaryId: "importlogid"
tableType: "Standard"
ownership: "UserOwned"
---

# Import Log

Failure reason and other detailed information for a record that failed to import.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `importlog` |
| Display name | Import Log |
| Display (plural) | ImportLogs |
| Schema name | `ImportLog` |
| Entity set (Web API) | `importlogs` |
| Primary id attribute | `importlogid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/importlogs?$select=&$top=10
GET /api/data/v9.2/importlogs(<guid>)
POST /api/data/v9.2/importlogs
PATCH /api/data/v9.2/importlogs(<guid>)
DELETE /api/data/v9.2/importlogs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`AdditionalInfo`, `ColumnValue`, `ErrorDescription`, `ErrorNumber`, `HeaderColumn`, `ImportDataId`, `ImportFileId`, `ImportLogId`, `LineNumber`, `LogPhaseCode`, `OwnerId`, `OwnerIdType`, `StatusCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SequenceNumber`, `StateCode`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BusinessUnit_ImportLogs` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImportLog_ImportData` | [importdata](importdata.md) | `importdataid` | `importdataid` |
| `ImportLog_ImportFile` | [importfile](importfile.md) | `importfileid` | `importfileid` |
| `lk_importlog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_importlog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_importlogbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_importlogbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `owner_importlogs` | [owner](owner.md) | `ownerid` | `ownerid` |
| `SystemUser_ImportLogs` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ImportLogs` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ImportLog_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ImportLog_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [importlog.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/importlog.md) on 2026-05-06.