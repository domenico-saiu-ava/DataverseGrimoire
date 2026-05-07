---
logical: "msdyn_conversationtopicsummary"
display: "Conversation Topic Summary"
entitySetName: "msdyn_conversationtopicsummaries"
primaryId: "msdyn_conversationtopicsummaryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Conversation Topic Summary

Conversation Topic Summary Entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationtopicsummary` |
| Display name | Conversation Topic Summary |
| Display (plural) | Conversation Topic Summaries |
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

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_ConversationCount`, `msdyn_ConversationCoveragePercentage`, `msdyn_conversationtopicsummaryId`, `msdyn_name`, `msdyn_RefreshTime`, `msdyn_TopicCount`, `msdyn_topictraininglanguage`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationtopicsummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtopicsummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtopicsummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtopicsummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_conversationtopicsummary` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtopicsummary_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopicsummary_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopicsummary_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopicsummary_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationtopicsummary_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtopicsummary_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationtopicsummary.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationtopicsummary.md) on 2026-05-06.