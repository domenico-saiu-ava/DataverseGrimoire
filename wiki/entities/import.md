---
logical: "import"
display: "Data Import"
entitySetName: "imports"
primaryId: "importid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Import

Status and ownership information for an import job.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `import` |
| Display name | Data Import |
| Display (plural) | Data Imports |
| Schema name | `Import` |
| Entity set (Web API) | `imports` |
| Primary id attribute | `importid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/imports?$select=name&$top=10
GET /api/data/v9.2/imports(<guid>)
POST /api/data/v9.2/imports
PATCH /api/data/v9.2/imports(<guid>)
DELETE /api/data/v9.2/imports(<guid>)
```

## Attributes

Writable: **9** · Read-only: **13**

### Writable

`EMailAddress`, `ImportId`, `IsImport`, `ModeCode`, `Name`, `OwnerId`, `OwnerIdType`, `SendNotification`, `StatusCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Sequence`, `StateCode`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BusinessUnit_Imports` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_import_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_import_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_importbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_importbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `owner_imports` | [owner](owner.md) | `ownerid` | `ownerid` |
| `SystemUser_Imports` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_Imports` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Import_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Import_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Import_ImportFile` | _n/a_ | `importid` | _n/a_ |


## Source

Generated from [import.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/import.md) on 2026-05-06.