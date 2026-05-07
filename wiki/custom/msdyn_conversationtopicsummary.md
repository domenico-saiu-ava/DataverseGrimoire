---
logical: "msdyn_conversationtopicsummary"
display: "Riepilogo dell'argomento di conversazione"
entitySetName: "msdyn_conversationtopicsummaries"
primaryId: "msdyn_conversationtopicsummaryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Riepilogo dell'argomento di conversazione

Entità riepilogo dell'argomento di conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationtopicsummary` |
| Display name | Riepilogo dell'argomento di conversazione |
| Display (plural) | Riepiloghi dell'argomento di conversazione |
| Schema name | `msdyn_conversationtopicsummary` |
| Entity set (Web API) | `msdyn_conversationtopicsummaries` |
| Primary id attribute | `msdyn_conversationtopicsummaryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationtopicsummaries?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationtopicsummaries(<guid>)
POST /api/data/v9.2/msdyn_conversationtopicsummaries
PATCH /api/data/v9.2/msdyn_conversationtopicsummaries(<guid>)
DELETE /api/data/v9.2/msdyn_conversationtopicsummaries(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_conversationcount`, `msdyn_conversationcoveragepercentage`, `msdyn_conversationtopicsummaryid`, `msdyn_name`, `msdyn_refreshtime`, `msdyn_topiccount`, `msdyn_topictraininglanguage`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationtopicsummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtopicsummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtopicsummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtopicsummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationtopicsummary` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtopicsummary_SyncErrors` | [msdyn_conversationtopicsummary](msdyn_conversationtopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsummary` |
| `msdyn_conversationtopicsummary_AsyncOperations` | [msdyn_conversationtopicsummary](msdyn_conversationtopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsummary` |
| `msdyn_conversationtopicsummary_MailboxTrackingFolders` | [msdyn_conversationtopicsummary](msdyn_conversationtopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsummary` |
| `msdyn_conversationtopicsummary_UserEntityInstanceDatas` | [msdyn_conversationtopicsummary](msdyn_conversationtopicsummary.md) | `objectid` | `objectid_msdyn_conversationtopicsummary` |
| `msdyn_conversationtopicsummary_ProcessSession` | [msdyn_conversationtopicsummary](msdyn_conversationtopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsummary` |
| `msdyn_conversationtopicsummary_BulkDeleteFailures` | [msdyn_conversationtopicsummary](msdyn_conversationtopicsummary.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtopicsummary` |
| `msdyn_conversationtopicsummary_PrincipalObjectAttributeAccesses` | [msdyn_conversationtopicsummary](msdyn_conversationtopicsummary.md) | `objectid` | `objectid_msdyn_conversationtopicsummary` |


## Source

Generated from [msdyn_conversationtopicsummary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationtopicsummary')) on 2026-05-07.