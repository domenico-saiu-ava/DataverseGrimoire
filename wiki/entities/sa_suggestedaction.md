---
logical: "sa_suggestedaction"
display: "Suggested Action"
entitySetName: "sa_suggestedactions"
primaryId: "sa_suggestedactionid"
primaryName: "sa_actiontitle"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Suggested Action

This table contains records of suggested actions with execution details.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sa_suggestedaction` |
| Display name | Suggested Action |
| Display (plural) | Suggested Actions |
| Schema name | `sa_SuggestedAction` |
| Entity set (Web API) | `sa_suggestedactions` |
| Primary id attribute | `sa_suggestedactionid` |
| Primary name attribute | `sa_actiontitle` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sa_suggestedactions?$select=sa_actiontitle&$top=10
GET /api/data/v9.2/sa_suggestedactions(<guid>)
POST /api/data/v9.2/sa_suggestedactions
PATCH /api/data/v9.2/sa_suggestedactions(<guid>)
DELETE /api/data/v9.2/sa_suggestedactions(<guid>)
```

## Attributes

Writable: **25** · Read-only: **0**

### Writable

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ImportSequenceNumber`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverriddenCreatedOn`, `sa_ActionExecutionSteps`, `sa_ActionTitle`, `sa_AppId`, `sa_CompletedBy`, `sa_CompletedOn`, `sa_CriteriaId`, `sa_GeneratorTag`, `sa_MakerActionName`, `sa_Rationale`, `sa_RowID`, `sa_SuggestedActionId`, `sa_TableID`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sa_suggestedaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sa_suggestedaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sa_suggestedaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sa_suggestedaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_sa_suggestedaction` | [organization](organization.md) | `organizationid` | `organizationid` |
| `sa_suggestedaction_CompletedBy_systemuser` | [systemuser](systemuser.md) | `sa_completedby` | `sa_CompletedBy` |
| `sa_suggestedaction_CriteriaId_sa_suggestedactioncriteria` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `sa_criteriaid` | `sa_CriteriaId` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sa_suggestedaction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sa_suggestedaction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sa_suggestedaction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sa_suggestedaction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `sa_suggestedaction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sa_suggestedaction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sa_suggestedaction.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sa_suggestedaction.md) on 2026-05-06.