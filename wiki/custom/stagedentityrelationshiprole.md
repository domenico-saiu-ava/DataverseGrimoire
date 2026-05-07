---
logical: "stagedentityrelationshiprole"
display: "Ruolo relazione entità di staging"
entitySetName: "stagedentityrelationshiproles"
primaryId: "stagedentityrelationshiproleid"
primaryName: "schemaname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ruolo relazione entità di staging

Archivia i metadati del ruolo relazione entità di staging da elaborare in modo asincrono.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedentityrelationshiprole` |
| Display name | Ruolo relazione entità di staging |
| Display (plural) | Ruoli relazione entità di staging |
| Schema name | `StagedEntityRelationshipRole` |
| Entity set (Web API) | `stagedentityrelationshiproles` |
| Primary id attribute | `stagedentityrelationshiproleid` |
| Primary name attribute | `schemaname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedentityrelationshiproles?$select=schemaname&$top=10
GET /api/data/v9.2/stagedentityrelationshiproles(<guid>)
POST /api/data/v9.2/stagedentityrelationshiproles
PATCH /api/data/v9.2/stagedentityrelationshiproles(<guid>)
DELETE /api/data/v9.2/stagedentityrelationshiproles(<guid>)
```

## Attributes

Writable: **15** · Read-only: **7**

### Writable

`componentstate`, `entityid`, `entityrelationshipid`, `importsequencenumber`, `metadatadescription`, `overriddencreatedon`, `overwritetime`, `schemaname`, `solutionid`, `stagedentityrelationshiproleid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedentityrelationshiprole_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedentityrelationshiprole_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedentityrelationshiprole_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedentityrelationshiprole_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedentityrelationshiprole_SyncErrors` | [stagedentityrelationshiprole](stagedentityrelationshiprole.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprole` |
| `stagedentityrelationshiprole_AsyncOperations` | [stagedentityrelationshiprole](stagedentityrelationshiprole.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprole` |
| `stagedentityrelationshiprole_MailboxTrackingFolders` | [stagedentityrelationshiprole](stagedentityrelationshiprole.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprole` |
| `stagedentityrelationshiprole_UserEntityInstanceDatas` | [stagedentityrelationshiprole](stagedentityrelationshiprole.md) | `objectid` | `objectid_stagedentityrelationshiprole` |
| `stagedentityrelationshiprole_ProcessSession` | [stagedentityrelationshiprole](stagedentityrelationshiprole.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprole` |
| `stagedentityrelationshiprole_BulkDeleteFailures` | [stagedentityrelationshiprole](stagedentityrelationshiprole.md) | `regardingobjectid` | `regardingobjectid_stagedentityrelationshiprole` |
| `stagedentityrelationshiprole_PrincipalObjectAttributeAccesses` | [stagedentityrelationshiprole](stagedentityrelationshiprole.md) | `objectid` | `objectid_stagedentityrelationshiprole` |


## Source

Generated from [stagedentityrelationshiprole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedentityrelationshiprole')) on 2026-05-07.