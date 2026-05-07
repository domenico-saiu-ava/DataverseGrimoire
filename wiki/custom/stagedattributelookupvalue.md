---
logical: "stagedattributelookupvalue"
display: "Valore ricerca attributo di staging"
entitySetName: "stagedattributelookupvalues"
primaryId: "stagedattributelookupvalueid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valore ricerca attributo di staging

Archivia i metadati del valore di ricerca dell'attributo di staging da elaborare in modo asincrono.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedattributelookupvalue` |
| Display name | Valore ricerca attributo di staging |
| Display (plural) | Valori ricerca attributo di staging |
| Schema name | `StagedAttributeLookupValue` |
| Entity set (Web API) | `stagedattributelookupvalues` |
| Primary id attribute | `stagedattributelookupvalueid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/stagedattributelookupvalues?$select=name&$top=10
GET /api/data/v9.2/stagedattributelookupvalues(<guid>)
POST /api/data/v9.2/stagedattributelookupvalues
PATCH /api/data/v9.2/stagedattributelookupvalues(<guid>)
DELETE /api/data/v9.2/stagedattributelookupvalues(<guid>)
```

## Attributes

Writable: **15** · Read-only: **7**

### Writable

`attributeid`, `componentstate`, `entityid`, `importsequencenumber`, `metadatadescription`, `name`, `overriddencreatedon`, `overwritetime`, `solutionid`, `stagedattributelookupvalueid`, `stagingexecutioncontextid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedattributelookupvalue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedattributelookupvalue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedattributelookupvalue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedattributelookupvalue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `stagedattributelookupvalue_SyncErrors` | [stagedattributelookupvalue](stagedattributelookupvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributelookupvalue` |
| `stagedattributelookupvalue_AsyncOperations` | [stagedattributelookupvalue](stagedattributelookupvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributelookupvalue` |
| `stagedattributelookupvalue_MailboxTrackingFolders` | [stagedattributelookupvalue](stagedattributelookupvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributelookupvalue` |
| `stagedattributelookupvalue_UserEntityInstanceDatas` | [stagedattributelookupvalue](stagedattributelookupvalue.md) | `objectid` | `objectid_stagedattributelookupvalue` |
| `stagedattributelookupvalue_ProcessSession` | [stagedattributelookupvalue](stagedattributelookupvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributelookupvalue` |
| `stagedattributelookupvalue_BulkDeleteFailures` | [stagedattributelookupvalue](stagedattributelookupvalue.md) | `regardingobjectid` | `regardingobjectid_stagedattributelookupvalue` |
| `stagedattributelookupvalue_PrincipalObjectAttributeAccesses` | [stagedattributelookupvalue](stagedattributelookupvalue.md) | `objectid` | `objectid_stagedattributelookupvalue` |


## Source

Generated from [stagedattributelookupvalue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedattributelookupvalue')) on 2026-05-07.