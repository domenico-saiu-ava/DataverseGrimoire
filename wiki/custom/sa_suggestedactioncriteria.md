---
logical: "sa_suggestedactioncriteria"
display: "Suggested Action Criteria"
entitySetName: "sa_suggestedactioncriterias"
primaryId: "sa_suggestedactioncriteriaid"
primaryName: "sa_appid"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **17** · Read-only: **1**

### Writable

`createdby`, `createdon`, `createdonbehalfby`, `importsequencenumber`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overriddencreatedon`, `sa_appid`, `sa_criterialist`, `sa_suggestedactioncriteriaid`, `sa_tableid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sa_suggestedactioncriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sa_suggestedactioncriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sa_suggestedactioncriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sa_suggestedactioncriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_sa_suggestedactioncriteria` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sa_suggestedactioncriteria_SyncErrors` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `sa_suggestedactioncriteria_AsyncOperations` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `sa_suggestedactioncriteria_MailboxTrackingFolders` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `sa_suggestedactioncriteria_UserEntityInstanceDatas` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `objectid` | `objectid_sa_suggestedactioncriteria` |
| `sa_suggestedactioncriteria_ProcessSession` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `sa_suggestedactioncriteria_BulkDeleteFailures` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `regardingobjectid` | `regardingobjectid_sa_suggestedactioncriteria` |
| `sa_suggestedactioncriteria_PrincipalObjectAttributeAccesses` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `objectid` | `objectid_sa_suggestedactioncriteria` |
| `sa_suggestedaction_CriteriaId_sa_suggestedactioncriteria` | [sa_suggestedactioncriteria](sa_suggestedactioncriteria.md) | `sa_criteriaid` | `sa_CriteriaId` |


## Source

Generated from [sa_suggestedactioncriteria (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sa_suggestedactioncriteria')) on 2026-05-07.