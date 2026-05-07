---
logical: "msdyn_sentimentanalysis"
display: "Analisi del sentiment"
entitySetName: "msdyn_sentimentanalysises"
primaryId: "msdyn_sentimentanalysisid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi del sentiment

Configurazione dell'analisi del sentiment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sentimentanalysis` |
| Display name | Analisi del sentiment |
| Display (plural) | Analisi del sentiment |
| Schema name | `msdyn_sentimentanalysis` |
| Entity set (Web API) | `msdyn_sentimentanalysises` |
| Primary id attribute | `msdyn_sentimentanalysisid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sentimentanalysises?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sentimentanalysises(<guid>)
POST /api/data/v9.2/msdyn_sentimentanalysises
PATCH /api/data/v9.2/msdyn_sentimentanalysises(<guid>)
DELETE /api/data/v9.2/msdyn_sentimentanalysises(<guid>)
```

## Attributes

Writable: **17** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_additionallanguagesenabled`, `msdyn_agentthreshold`, `msdyn_driversenabled`, `msdyn_enabled`, `msdyn_enableur`, `msdyn_name`, `msdyn_sentimentanalysisid`, `msdyn_supervisorthreshold`, `msdyn_supervisorthresholdalerttimeoutseconds`, `msdyn_thresholdalertsenabled`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sentimentanalysis_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sentimentanalysis_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sentimentanalysis_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sentimentanalysis_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_sentimentanalysis` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sentimentanalysis_SyncErrors` | [msdyn_sentimentanalysis](msdyn_sentimentanalysis.md) | `regardingobjectid` | `regardingobjectid_msdyn_sentimentanalysis` |
| `msdyn_sentimentanalysis_DuplicateMatchingRecord` | [msdyn_sentimentanalysis](msdyn_sentimentanalysis.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sentimentanalysis` |
| `msdyn_sentimentanalysis_DuplicateBaseRecord` | [msdyn_sentimentanalysis](msdyn_sentimentanalysis.md) | `baserecordid` | `baserecordid_msdyn_sentimentanalysis` |
| `msdyn_sentimentanalysis_AsyncOperations` | [msdyn_sentimentanalysis](msdyn_sentimentanalysis.md) | `regardingobjectid` | `regardingobjectid_msdyn_sentimentanalysis` |
| `msdyn_sentimentanalysis_MailboxTrackingFolders` | [msdyn_sentimentanalysis](msdyn_sentimentanalysis.md) | `regardingobjectid` | `regardingobjectid_msdyn_sentimentanalysis` |
| `msdyn_sentimentanalysis_UserEntityInstanceDatas` | [msdyn_sentimentanalysis](msdyn_sentimentanalysis.md) | `objectid` | `objectid_msdyn_sentimentanalysis` |
| `msdyn_sentimentanalysis_ProcessSession` | [msdyn_sentimentanalysis](msdyn_sentimentanalysis.md) | `regardingobjectid` | `regardingobjectid_msdyn_sentimentanalysis` |
| `msdyn_sentimentanalysis_BulkDeleteFailures` | [msdyn_sentimentanalysis](msdyn_sentimentanalysis.md) | `regardingobjectid` | `regardingobjectid_msdyn_sentimentanalysis` |
| `msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses` | [msdyn_sentimentanalysis](msdyn_sentimentanalysis.md) | `objectid` | `objectid_msdyn_sentimentanalysis` |


## Source

Generated from [msdyn_sentimentanalysis (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sentimentanalysis')) on 2026-05-07.