---
logical: "msdyn_suggestionsmodelsummary"
display: "Suggestions Model Summary"
entitySetName: "msdyn_suggestionsmodelsummaries"
primaryId: "msdyn_suggestionsmodelsummaryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Suggestions Model Summary

Suggestions Model Summary entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionsmodelsummary` |
| Display name | Suggestions Model Summary |
| Display (plural) | Suggestions Model Summaries |
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

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_CaseProcessedDateTime`, `msdyn_CaseRecordsProccessed`, `msdyn_CaseRetrainedDateTime`, `msdyn_IsCaseTrainingSucceeded`, `msdyn_IsKbTrainingSucceeded`, `msdyn_KbArticlesProcessed`, `msdyn_KbProcessedDateTime`, `msdyn_KbRetrainedDateTime`, `msdyn_name`, `msdyn_suggestionsmodelsummaryId`, `msdyn_TrainedDateTime`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestionsmodelsummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionsmodelsummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionsmodelsummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionsmodelsummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_suggestionsmodelsummary` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionsmodelsummary_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionsmodelsummary_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionsmodelsummary_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionsmodelsummary_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_suggestionsmodelsummary_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_suggestionsmodelsummary_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_suggestionsmodelsummary.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestionsmodelsummary.md) on 2026-05-06.