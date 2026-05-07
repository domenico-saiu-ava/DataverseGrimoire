---
logical: "msdyn_suggestionsmodelsummary"
display: "Riepilogo modelli di suggerimenti"
entitySetName: "msdyn_suggestionsmodelsummaries"
primaryId: "msdyn_suggestionsmodelsummaryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Riepilogo modelli di suggerimenti

Entità riepilogo modelli di suggerimenti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionsmodelsummary` |
| Display name | Riepilogo modelli di suggerimenti |
| Display (plural) | Riepiloghi modelli di suggerimenti |
| Schema name | `msdyn_suggestionsmodelsummary` |
| Entity set (Web API) | `msdyn_suggestionsmodelsummaries` |
| Primary id attribute | `msdyn_suggestionsmodelsummaryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionsmodelsummaries?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestionsmodelsummaries(<guid>)
POST /api/data/v9.2/msdyn_suggestionsmodelsummaries
PATCH /api/data/v9.2/msdyn_suggestionsmodelsummaries(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionsmodelsummaries(<guid>)
```

## Attributes

Writable: **18** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_caseprocesseddatetime`, `msdyn_caserecordsproccessed`, `msdyn_caseretraineddatetime`, `msdyn_iscasetrainingsucceeded`, `msdyn_iskbtrainingsucceeded`, `msdyn_kbarticlesprocessed`, `msdyn_kbprocesseddatetime`, `msdyn_kbretraineddatetime`, `msdyn_name`, `msdyn_suggestionsmodelsummaryid`, `msdyn_traineddatetime`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestionsmodelsummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionsmodelsummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionsmodelsummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionsmodelsummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_suggestionsmodelsummary` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionsmodelsummary_SyncErrors` | [msdyn_suggestionsmodelsummary](msdyn_suggestionsmodelsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsmodelsummary` |
| `msdyn_suggestionsmodelsummary_AsyncOperations` | [msdyn_suggestionsmodelsummary](msdyn_suggestionsmodelsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsmodelsummary` |
| `msdyn_suggestionsmodelsummary_MailboxTrackingFolders` | [msdyn_suggestionsmodelsummary](msdyn_suggestionsmodelsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsmodelsummary` |
| `msdyn_suggestionsmodelsummary_UserEntityInstanceDatas` | [msdyn_suggestionsmodelsummary](msdyn_suggestionsmodelsummary.md) | `objectid` | `objectid_msdyn_suggestionsmodelsummary` |
| `msdyn_suggestionsmodelsummary_ProcessSession` | [msdyn_suggestionsmodelsummary](msdyn_suggestionsmodelsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsmodelsummary` |
| `msdyn_suggestionsmodelsummary_BulkDeleteFailures` | [msdyn_suggestionsmodelsummary](msdyn_suggestionsmodelsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsmodelsummary` |
| `msdyn_suggestionsmodelsummary_PrincipalObjectAttributeAccesses` | [msdyn_suggestionsmodelsummary](msdyn_suggestionsmodelsummary.md) | `objectid` | `objectid_msdyn_suggestionsmodelsummary` |


## Source

Generated from [msdyn_suggestionsmodelsummary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestionsmodelsummary')) on 2026-05-07.