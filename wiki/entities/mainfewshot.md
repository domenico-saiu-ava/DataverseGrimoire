---
logical: "mainfewshot"
display: "MainFewShot"
entitySetName: "mainfewshots"
primaryId: "mainfewshotid"
primaryName: "query"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# MainFewShot

This fewshot entity will only be updated during solution installation.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mainfewshot` |
| Display name | MainFewShot |
| Display (plural) | MainFewShot |
| Schema name | `mainfewshot` |
| Entity set (Web API) | `mainfewshots` |
| Primary id attribute | `mainfewshotid` |
| Primary name attribute | `query` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mainfewshots?$select=query&$top=10
GET /api/data/v9.2/mainfewshots(<guid>)
POST /api/data/v9.2/mainfewshots
PATCH /api/data/v9.2/mainfewshots(<guid>)
DELETE /api/data/v9.2/mainfewshots(<guid>)
```

## Attributes

Writable: **18** · Read-only: **14**

### Writable

`Category`, `Comment`, `EntityType`, `ImportSequenceNumber`, `IsCustomizable`, `mainfewshotId`, `ObjectPartitionId`, `OverriddenCreatedOn`, `Query`, `Rephrase`, `SavedQueryVersionNumber`, `SavedQueryViewId`, `StandardSQL`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mainfewshot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mainfewshot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mainfewshot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mainfewshot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_mainfewshot` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mainfewshot_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mainfewshot_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mainfewshot_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mainfewshot_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `mainfewshot_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mainfewshot_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mainfewshot.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mainfewshot.md) on 2026-05-06.