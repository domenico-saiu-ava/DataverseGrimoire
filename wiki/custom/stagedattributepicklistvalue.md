---
logical: "stagedattributepicklistvalue"
display: "Valore elenco a discesa attributo di staging"
entitySetName: "stagedattributepicklistvalues"
primaryId: "stagedattributepicklistvalueid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valore elenco a discesa attributo di staging

Archivia i metadati del valore di elenco a discesa dell'attributo di staging da elaborare in modo asincrono.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedattributepicklistvalue` |
| Display name | Valore elenco a discesa attributo di staging |
| Display (plural) | Valori elenco a discesa attributo di staging. |
| Schema name | `StagedAttributePicklistValue` |
| Entity set (Web API) | `stagedattributepicklistvalues` |
| Primary id attribute | `stagedattributepicklistvalueid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedattributepicklistvalues?$select=name&$top=10
GET /api/data/v9.2/stagedattributepicklistvalues(<guid>)
POST /api/data/v9.2/stagedattributepicklistvalues
PATCH /api/data/v9.2/stagedattributepicklistvalues(<guid>)
DELETE /api/data/v9.2/stagedattributepicklistvalues(<guid>)
```

## Attributes

Writable: **14** · Read-only: **7**

### Writable

`componentstate`, `importsequencenumber`, `metadatadescription`, `name`, `optionsetid`, `overriddencreatedon`, `overwritetime`, `solutionid`, `stagedattributepicklistvalueid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedattributepicklistvalue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedattributepicklistvalue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedattributepicklistvalue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedattributepicklistvalue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedattributepicklistvalue_SyncErrors` | [stagedattributepicklistvalue](stagedattributepicklistvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributepicklistvalue` |
| `stagedattributepicklistvalue_AsyncOperations` | [stagedattributepicklistvalue](stagedattributepicklistvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributepicklistvalue` |
| `stagedattributepicklistvalue_MailboxTrackingFolders` | [stagedattributepicklistvalue](stagedattributepicklistvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributepicklistvalue` |
| `stagedattributepicklistvalue_UserEntityInstanceDatas` | [stagedattributepicklistvalue](stagedattributepicklistvalue.md) | `objectid` | `objectid_stagedattributepicklistvalue` |
| `stagedattributepicklistvalue_ProcessSession` | [stagedattributepicklistvalue](stagedattributepicklistvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributepicklistvalue` |
| `stagedattributepicklistvalue_BulkDeleteFailures` | [stagedattributepicklistvalue](stagedattributepicklistvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributepicklistvalue` |
| `stagedattributepicklistvalue_PrincipalObjectAttributeAccesses` | [stagedattributepicklistvalue](stagedattributepicklistvalue.md) | `objectid` | `objectid_stagedattributepicklistvalue` |


## Source

Generated from [stagedattributepicklistvalue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedattributepicklistvalue')) on 2026-05-07.