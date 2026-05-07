---
logical: "synapsedatabase"
display: "Database Synapse"
entitySetName: "synapsedatabases"
primaryId: "synapsedatabaseid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Database Synapse

Questa entità rappresenta un database Synapse esterno e il collegamento alla cartella del datalake associato.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapsedatabase` |
| Display name | Database Synapse |
| Display (plural) | Database Synapse |
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

Writable: **24** · Read-only: **16**

### Writable

`databasename`, `datalakefolder`, `developmentendpoint`, `importsequencenumber`, `iscustomizable`, `lakehouseconnectionid`, `lakehouseid`, `lakehouseworkspaceid`, `name`, `overriddencreatedon`, `ownerid`, `resourcegroup`, `schemaprefix`, `serverlesssqlendpoint`, `sparkpoolconfig`, `statecode`, `statuscode`, `subscription`, `synapsedatabaseid`, `tenant`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `workspacename`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_synapsedatabase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapsedatabase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapsedatabase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapsedatabase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_synapsedatabase` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_synapsedatabase` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_synapsedatabase` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_synapsedatabase` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `synapsedatabases` | [datalakefolder](datalakefolder.md) | `datalakefolder` | `datalakefolder` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapsedatabase_SyncErrors` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapsedatabase_DuplicateMatchingRecord` | [synapsedatabase](synapsedatabase.md) | `duplicaterecordid` | `duplicaterecordid_synapsedatabase` |
| `synapsedatabase_DuplicateBaseRecord` | [synapsedatabase](synapsedatabase.md) | `baserecordid` | `baserecordid_synapsedatabase` |
| `synapsedatabase_AsyncOperations` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapsedatabase_MailboxTrackingFolders` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapsedatabase_UserEntityInstanceDatas` | [synapsedatabase](synapsedatabase.md) | `objectid` | `objectid_synapsedatabase` |
| `synapsedatabase_ProcessSession` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapsedatabase_BulkDeleteFailures` | [synapsedatabase](synapsedatabase.md) | `regardingobjectid` | `regardingobjectid_synapsedatabase` |
| `synapsedatabase_PrincipalObjectAttributeAccesses` | [synapsedatabase](synapsedatabase.md) | `objectid` | `objectid_synapsedatabase` |


## Source

Generated from [synapsedatabase (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='synapsedatabase')) on 2026-05-07.