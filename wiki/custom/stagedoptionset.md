---
logical: "stagedoptionset"
display: "Set di opzioni di staging"
entitySetName: "stagedoptionsets"
primaryId: "stagedoptionsetid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Set di opzioni di staging

Archivia i metadati del set di opzioni di staging da elaborare in modo asincrono.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedoptionset` |
| Display name | Set di opzioni di staging |
| Display (plural) | Set di opzioni di staging |
| Schema name | `StagedOptionSet` |
| Entity set (Web API) | `stagedoptionsets` |
| Primary id attribute | `stagedoptionsetid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedoptionsets?$select=name&$top=10
GET /api/data/v9.2/stagedoptionsets(<guid>)
POST /api/data/v9.2/stagedoptionsets
PATCH /api/data/v9.2/stagedoptionsets(<guid>)
DELETE /api/data/v9.2/stagedoptionsets(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`componentstate`, `importsequencenumber`, `metadatadescription`, `name`, `overriddencreatedon`, `overwritetime`, `solutionid`, `stagedoptionsetid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedoptionset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedoptionset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedoptionset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedoptionset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedoptionset_SyncErrors` | [stagedoptionset](stagedoptionset.md) | `regardingobjectid` | `regardingobjectid_stagedoptionset` |
| `stagedoptionset_AsyncOperations` | [stagedoptionset](stagedoptionset.md) | `regardingobjectid` | `regardingobjectid_stagedoptionset` |
| `stagedoptionset_MailboxTrackingFolders` | [stagedoptionset](stagedoptionset.md) | `regardingobjectid` | `regardingobjectid_stagedoptionset` |
| `stagedoptionset_UserEntityInstanceDatas` | [stagedoptionset](stagedoptionset.md) | `objectid` | `objectid_stagedoptionset` |
| `stagedoptionset_ProcessSession` | [stagedoptionset](stagedoptionset.md) | `regardingobjectid` | `regardingobjectid_stagedoptionset` |
| `stagedoptionset_BulkDeleteFailures` | [stagedoptionset](stagedoptionset.md) | `regardingobjectid` | `regardingobjectid_stagedoptionset` |
| `stagedoptionset_PrincipalObjectAttributeAccesses` | [stagedoptionset](stagedoptionset.md) | `objectid` | `objectid_stagedoptionset` |


## Source

Generated from [stagedoptionset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedoptionset')) on 2026-05-07.