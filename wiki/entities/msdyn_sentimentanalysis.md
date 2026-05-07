---
logical: "msdyn_sentimentanalysis"
display: "Sentiment analysis"
entitySetName: "msdyn_sentimentanalysises"
primaryId: "msdyn_sentimentanalysisid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sentiment analysis

Sentiment analysis configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sentimentanalysis` |
| Display name | Sentiment analysis |
| Display (plural) | Sentiment analysis |
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

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_additionallanguagesenabled`, `msdyn_agentthreshold`, `msdyn_driversenabled`, `msdyn_enabled`, `msdyn_enableur`, `msdyn_name`, `msdyn_sentimentanalysisId`, `msdyn_supervisorthreshold`, `msdyn_supervisorthresholdalerttimeoutseconds`, `msdyn_thresholdalertsenabled`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sentimentanalysis_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sentimentanalysis_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sentimentanalysis_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sentimentanalysis_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_sentimentanalysis` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sentimentanalysis_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sentimentanalysis_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sentimentanalysis_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sentimentanalysis_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sentimentanalysis_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sentimentanalysis_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sentimentanalysis_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sentimentanalysis.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sentimentanalysis.md) on 2026-05-06.