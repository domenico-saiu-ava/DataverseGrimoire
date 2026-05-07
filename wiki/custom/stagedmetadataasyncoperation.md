---
logical: "stagedmetadataasyncoperation"
display: "Operazione asincrona sui metadati di staging"
entitySetName: "stagedmetadataasyncoperations"
primaryId: "stagedmetadataasyncoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Operazione asincrona sui metadati di staging

Archivia i metadati dell'entità di staging da elaborare prima della creazione completa.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedmetadataasyncoperation` |
| Display name | Operazione asincrona sui metadati di staging |
| Display (plural) | Operazioni asincrone sui metadati di staging |
| Schema name | `StagedMetadataAsyncOperation` |
| Entity set (Web API) | `stagedmetadataasyncoperations` |
| Primary id attribute | `stagedmetadataasyncoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedmetadataasyncoperations?$select=name&$top=10
GET /api/data/v9.2/stagedmetadataasyncoperations(<guid>)
POST /api/data/v9.2/stagedmetadataasyncoperations
PATCH /api/data/v9.2/stagedmetadataasyncoperations(<guid>)
DELETE /api/data/v9.2/stagedmetadataasyncoperations(<guid>)
```

## Attributes

Writable: **6** · Read-only: **14**

### Writable

`importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`asyncjobstatus`, `asyncoperationid`, `componenttype`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `name`, `objectid`, `stagedmetadataasyncoperationid`, `unprocesseddependencies`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedmetadataasyncoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedmetadataasyncoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedmetadataasyncoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedmetadataasyncoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedmetadataasyncoperation_SyncErrors` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagedmetadataasyncoperation_AsyncOperations` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagedmetadataasyncoperation_MailboxTrackingFolders` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagedmetadataasyncoperation_UserEntityInstanceDatas` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `objectid` | `objectid_stagedmetadataasyncoperation` |
| `stagedmetadataasyncoperation_ProcessSession` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagedmetadataasyncoperation_BulkDeleteFailures` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `regardingobjectid` | `regardingobjectid_stagedmetadataasyncoperation` |
| `stagedmetadataasyncoperation_PrincipalObjectAttributeAccesses` | [stagedmetadataasyncoperation](stagedmetadataasyncoperation.md) | `objectid` | `objectid_stagedmetadataasyncoperation` |


## Source

Generated from [stagedmetadataasyncoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedmetadataasyncoperation')) on 2026-05-07.