---
logical: "viewasexamplequestion"
display: "ViewAsExampleQuestion"
entitySetName: "viewasexamplequestions"
primaryId: "viewasexamplequestionid"
primaryName: "query"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# ViewAsExampleQuestion

This fewshot is converted by view

## Identity

| Property | Value |
| --- | --- |
| Logical name | `viewasexamplequestion` |
| Display name | ViewAsExampleQuestion |
| Display (plural) | ViewAsExampleQuestion |
| Schema name | `viewasexamplequestion` |
| Entity set (Web API) | `viewasexamplequestions` |
| Primary id attribute | `viewasexamplequestionid` |
| Primary name attribute | `query` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/viewasexamplequestions?$select=query&$top=10
GET /api/data/v9.2/viewasexamplequestions(<guid>)
POST /api/data/v9.2/viewasexamplequestions
PATCH /api/data/v9.2/viewasexamplequestions(<guid>)
DELETE /api/data/v9.2/viewasexamplequestions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`Comment`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `Query`, `Rephrase`, `SavedQueryVersionNumber`, `SavedQueryViewId`, `StandardSQL`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `viewasexamplequestionId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_viewasexamplequestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_viewasexamplequestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_viewasexamplequestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_viewasexamplequestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_viewasexamplequestion` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `viewasexamplequestion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `viewasexamplequestion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `viewasexamplequestion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `viewasexamplequestion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `viewasexamplequestion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `viewasexamplequestion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [viewasexamplequestion.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/viewasexamplequestion.md) on 2026-05-06.