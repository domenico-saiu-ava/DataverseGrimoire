---
logical: "makerfewshot"
display: "MakerFewShot"
entitySetName: "makerfewshots"
primaryId: "makerfewshotid"
primaryName: "query"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# MakerFewShot

This fewshot is updated by maker for testing the queries and by the NL2SQ with the results

## Identity

| Property | Value |
| --- | --- |
| Logical name | `makerfewshot` |
| Display name | MakerFewShot |
| Display (plural) | MakerFewShot |
| Schema name | `makerfewshot` |
| Entity set (Web API) | `makerfewshots` |
| Primary id attribute | `makerfewshotid` |
| Primary name attribute | `query` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/makerfewshots?$select=query&$top=10
GET /api/data/v9.2/makerfewshots(<guid>)
POST /api/data/v9.2/makerfewshots
PATCH /api/data/v9.2/makerfewshots(<guid>)
DELETE /api/data/v9.2/makerfewshots(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`Comment`, `EntityScope`, `EntityScopeColumn`, `ImportSequenceNumber`, `makerfewshotId`, `OverriddenCreatedOn`, `Query`, `Rephrase`, `SQLCorrectness`, `StandardSQL`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_makerfewshot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_makerfewshot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_makerfewshot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_makerfewshot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_makerfewshot` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `makerfewshot_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `makerfewshot_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `makerfewshot_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `makerfewshot_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `makerfewshot_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `makerfewshot_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [makerfewshot.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/makerfewshot.md) on 2026-05-06.