---
logical: "sa_suggestedactioncriteria"
display: "Suggested Action Criteria"
entitySetName: "sa_suggestedactioncriterias"
primaryId: "sa_suggestedactioncriteriaid"
primaryName: "sa_appid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Suggested Action Criteria

This table contains records of suggested action criteria.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sa_suggestedactioncriteria` |
| Display name | Suggested Action Criteria |
| Display (plural) | Suggested Action Criteria |
| Schema name | `sa_SuggestedActionCriteria` |
| Entity set (Web API) | `sa_suggestedactioncriterias` |
| Primary id attribute | `sa_suggestedactioncriteriaid` |
| Primary name attribute | `sa_appid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sa_suggestedactioncriterias?$select=sa_appid&$top=10
GET /api/data/v9.2/sa_suggestedactioncriterias(<guid>)
POST /api/data/v9.2/sa_suggestedactioncriterias
PATCH /api/data/v9.2/sa_suggestedactioncriterias(<guid>)
DELETE /api/data/v9.2/sa_suggestedactioncriterias(<guid>)
```

## Attributes

Writable: **17** · Read-only: **0**

### Writable

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ImportSequenceNumber`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverriddenCreatedOn`, `sa_AppID`, `sa_CriteriaList`, `sa_SuggestedActionCriteriaId`, `sa_TableId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sa_suggestedactioncriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sa_suggestedactioncriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sa_suggestedactioncriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sa_suggestedactioncriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_sa_suggestedactioncriteria` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sa_suggestedaction_CriteriaId_sa_suggestedactioncriteria` | _n/a_ | `sa_criteriaid` | _n/a_ |
| `sa_suggestedactioncriteria_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sa_suggestedactioncriteria_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sa_suggestedactioncriteria_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sa_suggestedactioncriteria_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `sa_suggestedactioncriteria_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sa_suggestedactioncriteria_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sa_suggestedactioncriteria.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sa_suggestedactioncriteria.md) on 2026-05-06.