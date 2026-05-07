---
logical: "stagedentityrelationshiprelationships"
display: "Relazioni relazione entità di staging"
entitySetName: "stagedentityrelationshiprelationships"
primaryId: "stagedentityrelationshiprelationshipsid"
primaryName: "schemaname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Relazioni relazione entità di staging

Archivia i metadati delle relazioni di relazione entità di staging da elaborare in modo asincrono.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedentityrelationshiprelationships` |
| Display name | Relazioni relazione entità di staging |
| Display (plural) | Relazioni relazione entità di staging |
| Schema name | `StagedEntityRelationshipRelationships` |
| Entity set (Web API) | `stagedentityrelationshiprelationships` |
| Primary id attribute | `stagedentityrelationshiprelationshipsid` |
| Primary name attribute | `schemaname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedentityrelationshiprelationships?$select=schemaname&$top=10
GET /api/data/v9.2/stagedentityrelationshiprelationships(<guid>)
POST /api/data/v9.2/stagedentityrelationshiprelationships
PATCH /api/data/v9.2/stagedentityrelationshiprelationships(<guid>)
DELETE /api/data/v9.2/stagedentityrelationshiprelationships(<guid>)
```

## Attributes

Writable: **15** · Read-only: **7**

### Writable

`componentstate`, `entityrelationshipid`, `importsequencenumber`, `metadatadescription`, `overriddencreatedon`, `overwritetime`, `relationshipid`, `schemaname`, `solutionid`, `stagedentityrelationshiprelationshipsid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedentityrelationshiprelationships_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedentityrelationshiprelationships_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedentityrelationshiprelationships_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedentityrelationshiprelationships_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedentityrelationshiprelationships_SyncErrors` | [stagedentityrelationshiprelationships](stagedentityrelationshiprelationships.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprelationships` |
| `stagedentityrelationshiprelationships_AsyncOperations` | [stagedentityrelationshiprelationships](stagedentityrelationshiprelationships.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprelationships` |
| `stagedentityrelationshiprelationships_MailboxTrackingFolders` | [stagedentityrelationshiprelationships](stagedentityrelationshiprelationships.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprelationships` |
| `stagedentityrelationshiprelationships_UserEntityInstanceDatas` | [stagedentityrelationshiprelationships](stagedentityrelationshiprelationships.md) | `objectid` | `objectid_stagedentityrelationshiprelationships` |
| `stagedentityrelationshiprelationships_ProcessSession` | [stagedentityrelationshiprelationships](stagedentityrelationshiprelationships.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprelationships` |
| `stagedentityrelationshiprelationships_BulkDeleteFailures` | [stagedentityrelationshiprelationships](stagedentityrelationshiprelationships.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprelationships` |
| `stagedentityrelationshiprelationships_PrincipalObjectAttributeAccesses` | [stagedentityrelationshiprelationships](stagedentityrelationshiprelationships.md) | `objectid` | `objectid_stagedentityrelationshiprelationships` |


## Source

Generated from [stagedentityrelationshiprelationships (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedentityrelationshiprelationships')) on 2026-05-07.