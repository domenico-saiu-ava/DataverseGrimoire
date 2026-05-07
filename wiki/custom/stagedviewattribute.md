---
logical: "stagedviewattribute"
display: "Relazione di staging"
entitySetName: "stagedviewattributes"
primaryId: "stagedviewattributeid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Relazione di staging

Archivia i metadati della relazione di staging da elaborare in modo asincrono.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedviewattribute` |
| Display name | Relazione di staging |
| Display (plural) | Relazioni di staging |
| Schema name | `StagedViewAttribute` |
| Entity set (Web API) | `stagedviewattributes` |
| Primary id attribute | `stagedviewattributeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedviewattributes?$select=name&$top=10
GET /api/data/v9.2/stagedviewattributes(<guid>)
POST /api/data/v9.2/stagedviewattributes
PATCH /api/data/v9.2/stagedviewattributes(<guid>)
DELETE /api/data/v9.2/stagedviewattributes(<guid>)
```

## Attributes

Writable: **16** · Read-only: **7**

### Writable

`attributeid`, `componentstate`, `importsequencenumber`, `metadatadescription`, `name`, `overriddencreatedon`, `overwritetime`, `relationshipid`, `remoteattributeid`, `solutionid`, `stagedviewattributeid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedviewattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedviewattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedviewattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedviewattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedviewattribute_SyncErrors` | [stagedviewattribute](stagedviewattribute.md) | `regardingobjectid` | `regardingobjectid_stagedviewattribute` |
| `stagedviewattribute_AsyncOperations` | [stagedviewattribute](stagedviewattribute.md) | `regardingobjectid` | `regardingobjectid_stagedviewattribute` |
| `stagedviewattribute_MailboxTrackingFolders` | [stagedviewattribute](stagedviewattribute.md) | `regardingobjectid` | `regardingobjectid_stagedviewattribute` |
| `stagedviewattribute_UserEntityInstanceDatas` | [stagedviewattribute](stagedviewattribute.md) | `objectid` | `objectid_stagedviewattribute` |
| `stagedviewattribute_ProcessSession` | [stagedviewattribute](stagedviewattribute.md) | `regardingobjectid` | `regardingobjectid_stagedviewattribute` |
| `stagedviewattribute_BulkDeleteFailures` | [stagedviewattribute](stagedviewattribute.md) | `regardingobjectid` | `regardingobjectid_stagedviewattribute` |
| `stagedviewattribute_PrincipalObjectAttributeAccesses` | [stagedviewattribute](stagedviewattribute.md) | `objectid` | `objectid_stagedviewattribute` |


## Source

Generated from [stagedviewattribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedviewattribute')) on 2026-05-07.