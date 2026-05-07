---
logical: "msdyn_teamschatsuggestion"
display: "Microsoft Teams chat suggestion"
entitySetName: "msdyn_teamschatsuggestions"
primaryId: "msdyn_teamschatsuggestionid"
primaryName: "msdyn_teamschatsuggestionname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Microsoft Teams chat suggestion

For internal use only

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_teamschatsuggestion` |
| Display name | Microsoft Teams chat suggestion |
| Display (plural) | Microsoft Teams chat suggestions |
| Schema name | `msdyn_teamschatsuggestion` |
| Entity set (Web API) | `msdyn_teamschatsuggestions` |
| Primary id attribute | `msdyn_teamschatsuggestionid` |
| Primary name attribute | `msdyn_teamschatsuggestionname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_teamschatsuggestions?$select=msdyn_teamschatsuggestionname&$top=10
GET /api/data/v9.2/msdyn_teamschatsuggestions(<guid>)
POST /api/data/v9.2/msdyn_teamschatsuggestions
PATCH /api/data/v9.2/msdyn_teamschatsuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_teamschatsuggestions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_computationstate`, `msdyn_computedon`, `msdyn_regardingobjectid`, `msdyn_regardingobjectname`, `msdyn_suggestions`, `msdyn_teamschatsuggestionid`, `msdyn_teamschatsuggestionname`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_teamschatsuggestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_teamschatsuggestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_teamschatsuggestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_teamschatsuggestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_teamschatsuggestion_SyncErrors` | [msdyn_teamschatsuggestion](msdyn_teamschatsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatsuggestion` |
| `msdyn_teamschatsuggestion_AsyncOperations` | [msdyn_teamschatsuggestion](msdyn_teamschatsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatsuggestion` |
| `msdyn_teamschatsuggestion_MailboxTrackingFolders` | [msdyn_teamschatsuggestion](msdyn_teamschatsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatsuggestion` |
| `msdyn_teamschatsuggestion_UserEntityInstanceDatas` | [msdyn_teamschatsuggestion](msdyn_teamschatsuggestion.md) | `objectid` | `objectid_msdyn_teamschatsuggestion` |
| `msdyn_teamschatsuggestion_ProcessSession` | [msdyn_teamschatsuggestion](msdyn_teamschatsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatsuggestion` |
| `msdyn_teamschatsuggestion_BulkDeleteFailures` | [msdyn_teamschatsuggestion](msdyn_teamschatsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_teamschatsuggestion` |
| `msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses` | [msdyn_teamschatsuggestion](msdyn_teamschatsuggestion.md) | `objectid` | `objectid_msdyn_teamschatsuggestion` |


## Source

Generated from [msdyn_teamschatsuggestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_teamschatsuggestion')) on 2026-05-07.