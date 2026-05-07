---
logical: "stagedentityrelationship"
display: "Relazione entità di staging"
entitySetName: "stagedentityrelationships"
primaryId: "stagedentityrelationshipid"
primaryName: "schemaname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Relazione entità di staging

Archivia i metadati della relazione entità di staging da elaborare in modo asincrono.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedentityrelationship` |
| Display name | Relazione entità di staging |
| Display (plural) | Relazioni entità di staging |
| Schema name | `StagedEntityRelationship` |
| Entity set (Web API) | `stagedentityrelationships` |
| Primary id attribute | `stagedentityrelationshipid` |
| Primary name attribute | `schemaname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedentityrelationships?$select=schemaname&$top=10
GET /api/data/v9.2/stagedentityrelationships(<guid>)
POST /api/data/v9.2/stagedentityrelationships
PATCH /api/data/v9.2/stagedentityrelationships(<guid>)
DELETE /api/data/v9.2/stagedentityrelationships(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`componentstate`, `importsequencenumber`, `metadatadescription`, `overriddencreatedon`, `overwritetime`, `schemaname`, `solutionid`, `stagedentityrelationshipid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedentityrelationship_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedentityrelationship_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedentityrelationship_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedentityrelationship_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedentityrelationship_SyncErrors` | [stagedentityrelationship](stagedentityrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationship` |
| `stagedentityrelationship_AsyncOperations` | [stagedentityrelationship](stagedentityrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationship` |
| `stagedentityrelationship_MailboxTrackingFolders` | [stagedentityrelationship](stagedentityrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationship` |
| `stagedentityrelationship_UserEntityInstanceDatas` | [stagedentityrelationship](stagedentityrelationship.md) | `objectid` | `objectid_stagedentityrelationship` |
| `stagedentityrelationship_ProcessSession` | [stagedentityrelationship](stagedentityrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationship` |
| `stagedentityrelationship_BulkDeleteFailures` | [stagedentityrelationship](stagedentityrelationship.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationship` |
| `stagedentityrelationship_PrincipalObjectAttributeAccesses` | [stagedentityrelationship](stagedentityrelationship.md) | `objectid` | `objectid_stagedentityrelationship` |


## Source

Generated from [stagedentityrelationship (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedentityrelationship')) on 2026-05-07.