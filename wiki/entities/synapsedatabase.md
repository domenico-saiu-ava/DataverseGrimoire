---
logical: "synapsedatabase"
display: "Synapse Database"
entitySetName: "synapsedatabases"
primaryId: "synapsedatabaseid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Synapse Database

This entity represents an external Synapse database and its associated datalake folder link.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapsedatabase` |
| Display name | Synapse Database |
| Display (plural) | Synapse Databases |
| Schema name | `synapsedatabase` |
| Entity set (Web API) | `synapsedatabases` |
| Primary id attribute | `synapsedatabaseid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/synapsedatabases?$select=name&$top=10
GET /api/data/v9.2/synapsedatabases(<guid>)
POST /api/data/v9.2/synapsedatabases
PATCH /api/data/v9.2/synapsedatabases(<guid>)
DELETE /api/data/v9.2/synapsedatabases(<guid>)
```

## Attributes

Writable: **25** · Read-only: **18**

### Writable

`DatabaseName`, `datalakefolder`, `DevelopmentEndpoint`, `ImportSequenceNumber`, `IsCustomizable`, `LakehouseConnectionId`, `LakehouseId`, `LakehouseWorkspaceId`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ResourceGroup`, `SchemaPrefix`, `ServerlessSqlEndpoint`, `SparkPoolConfig`, `statecode`, `statuscode`, `Subscription`, `synapsedatabaseId`, `Tenant`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`, `WorkspaceName`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_synapsedatabase` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_synapsedatabase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapsedatabase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapsedatabase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapsedatabase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_synapsedatabase` | [owner](owner.md) | `ownerid` | `ownerid` |
| `synapsedatabases` | [datalakefolder](datalakefolder.md) | `datalakefolder` | `datalakefolder` |
| `team_synapsedatabase` | [team](team.md) | `owningteam` | `owningteam` |
| `user_synapsedatabase` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapsedatabase_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapsedatabase_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapsedatabase_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `synapsedatabase_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `synapsedatabase_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapsedatabase_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `synapsedatabase_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapsedatabase_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [synapsedatabase.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/synapsedatabase.md) on 2026-05-06.