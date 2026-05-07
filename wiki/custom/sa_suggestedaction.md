---
logical: "sa_suggestedaction"
display: "Suggested Action"
entitySetName: "sa_suggestedactions"
primaryId: "sa_suggestedactionid"
primaryName: "sa_actiontitle"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **25** · Read-only: **1**

### Writable

`createdby`, `createdon`, `createdonbehalfby`, `importsequencenumber`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overriddencreatedon`, `sa_actionexecutionsteps`, `sa_actiontitle`, `sa_appid`, `sa_completedby`, `sa_completedon`, `sa_criteriaid`, `sa_generatortag`, `sa_makeractionname`, `sa_rationale`, `sa_rowid`, `sa_suggestedactionid`, `sa_tableid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`versionnumber`

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

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sa_suggestedaction_SyncErrors` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedaction_AsyncOperations` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedaction_MailboxTrackingFolders` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedaction_UserEntityInstanceDatas` | [sa_suggestedaction](sa_suggestedaction.md) | `objectid` | `objectid_sa_suggestedaction` |
| `sa_suggestedaction_ProcessSession` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedaction_BulkDeleteFailures` | [sa_suggestedaction](sa_suggestedaction.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedaction` |
| `sa_suggestedaction_PrincipalObjectAttributeAccesses` | [sa_suggestedaction](sa_suggestedaction.md) | `objectid` | `objectid_sa_suggestedaction` |


## Source

Generated from [sa_suggestedaction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sa_suggestedaction')) on 2026-05-07.