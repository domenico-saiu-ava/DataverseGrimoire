---
logical: "msdyn_casetopicsummary"
display: "Case Topic Summary"
entitySetName: "msdyn_casetopicsummaries"
primaryId: "msdyn_casetopicsummaryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Case Topic Summary

Case Topic Summary Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casetopicsummary` |
| Display name | Case Topic Summary |
| Display (plural) | Case Topic Summaries |
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

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_CaseCount`, `msdyn_CaseCoveragePercentage`, `msdyn_casetopicsummaryId`, `msdyn_name`, `msdyn_RefreshTime`, `msdyn_TopicCount`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casetopicsummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casetopicsummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casetopicsummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casetopicsummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casetopicsummary` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casetopicsummary_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopicsummary_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopicsummary_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopicsummary_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_casetopicsummary_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_casetopicsummary_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_casetopicsummary.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_casetopicsummary.md) on 2026-05-06.