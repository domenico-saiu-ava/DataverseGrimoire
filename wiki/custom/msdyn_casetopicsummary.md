---
logical: "msdyn_casetopicsummary"
display: "Riepilogo argomento del caso"
entitySetName: "msdyn_casetopicsummaries"
primaryId: "msdyn_casetopicsummaryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Riepilogo argomento del caso

Entità riepilogo argomento del caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casetopicsummary` |
| Display name | Riepilogo argomento del caso |
| Display (plural) | Riepiloghi argomento del caso |
| Schema name | `msdyn_casetopicsummary` |
| Entity set (Web API) | `msdyn_casetopicsummaries` |
| Primary id attribute | `msdyn_casetopicsummaryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casetopicsummaries?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casetopicsummaries(<guid>)
POST /api/data/v9.2/msdyn_casetopicsummaries
PATCH /api/data/v9.2/msdyn_casetopicsummaries(<guid>)
DELETE /api/data/v9.2/msdyn_casetopicsummaries(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_casecount`, `msdyn_casecoveragepercentage`, `msdyn_casetopicsummaryid`, `msdyn_name`, `msdyn_refreshtime`, `msdyn_topiccount`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casetopicsummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casetopicsummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casetopicsummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casetopicsummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casetopicsummary` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casetopicsummary_SyncErrors` | [msdyn_casetopicsummary](msdyn_casetopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsummary` |
| `msdyn_casetopicsummary_AsyncOperations` | [msdyn_casetopicsummary](msdyn_casetopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsummary` |
| `msdyn_casetopicsummary_MailboxTrackingFolders` | [msdyn_casetopicsummary](msdyn_casetopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsummary` |
| `msdyn_casetopicsummary_UserEntityInstanceDatas` | [msdyn_casetopicsummary](msdyn_casetopicsummary.md) | `objectid` | `objectid_msdyn_casetopicsummary` |
| `msdyn_casetopicsummary_ProcessSession` | [msdyn_casetopicsummary](msdyn_casetopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsummary` |
| `msdyn_casetopicsummary_BulkDeleteFailures` | [msdyn_casetopicsummary](msdyn_casetopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsummary` |
| `msdyn_casetopicsummary_PrincipalObjectAttributeAccesses` | [msdyn_casetopicsummary](msdyn_casetopicsummary.md) | `objectid` | `objectid_msdyn_casetopicsummary` |


## Source

Generated from [msdyn_casetopicsummary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_casetopicsummary')) on 2026-05-07.