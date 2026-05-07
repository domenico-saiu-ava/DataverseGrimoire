---
logical: "stagedentity"
display: "Entità di staging"
entitySetName: "stagedentities"
primaryId: "stagedentityid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Entità di staging

Archivia i metadati dell'entità di staging da elaborare prima della creazione completa.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedentity` |
| Display name | Entità di staging |
| Display (plural) | Entità di staging |
| Schema name | `StagedEntity` |
| Entity set (Web API) | `stagedentities` |
| Primary id attribute | `stagedentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedentities?$select=name&$top=10
GET /api/data/v9.2/stagedentities(<guid>)
POST /api/data/v9.2/stagedentities
PATCH /api/data/v9.2/stagedentities(<guid>)
DELETE /api/data/v9.2/stagedentities(<guid>)
```

## Attributes

Writable: **21** · Read-only: **7**

### Writable

`collectionname`, `dataproviderid`, `datasourceid`, `entitydescription`, `entitysetname`, `externalcollectionname`, `externalname`, `importsequencenumber`, `logicalcollectionname`, `logicalname`, `name`, `originallocalizedcollectioname`, `originallocalizedescription`, `originallocalizedname`, `overriddencreatedon`, `physicalname`, `stagedentityid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedentity_SyncErrors` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentity_AsyncOperations` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentity_MailboxTrackingFolders` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentity_UserEntityInstanceDatas` | [stagedentity](stagedentity.md) | `objectid` | `objectid_stagedentity` |
| `stagedentity_ProcessSession` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentity_BulkDeleteFailures` | [stagedentity](stagedentity.md) | `regardingobjectid` | `regardingobjectid_stagedentity` |
| `stagedentity_PrincipalObjectAttributeAccesses` | [stagedentity](stagedentity.md) | `objectid` | `objectid_stagedentity` |


## Source

Generated from [stagedentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedentity')) on 2026-05-07.