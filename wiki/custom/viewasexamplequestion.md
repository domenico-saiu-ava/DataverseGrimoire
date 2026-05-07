---
logical: "viewasexamplequestion"
display: "ViewAsExampleQuestion"
entitySetName: "viewasexamplequestions"
primaryId: "viewasexamplequestionid"
primaryName: "query"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ViewAsExampleQuestion

Questo fewshot viene convertito dalla visualizzazione

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

`comment`, `importsequencenumber`, `overriddencreatedon`, `query`, `rephrase`, `savedqueryversionnumber`, `savedqueryviewid`, `standardsql`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `viewasexamplequestionid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_viewasexamplequestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_viewasexamplequestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_viewasexamplequestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_viewasexamplequestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_viewasexamplequestion` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `viewasexamplequestion_SyncErrors` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `viewasexamplequestion_AsyncOperations` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `viewasexamplequestion_MailboxTrackingFolders` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `viewasexamplequestion_UserEntityInstanceDatas` | [viewasexamplequestion](viewasexamplequestion.md) | `objectid` | `objectid_viewasexamplequestion` |
| `viewasexamplequestion_ProcessSession` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `viewasexamplequestion_BulkDeleteFailures` | [viewasexamplequestion](viewasexamplequestion.md) | `regardingobjectid` | `regardingobjectid_viewasexamplequestion` |
| `viewasexamplequestion_PrincipalObjectAttributeAccesses` | [viewasexamplequestion](viewasexamplequestion.md) | `objectid` | `objectid_viewasexamplequestion` |


## Source

Generated from [viewasexamplequestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='viewasexamplequestion')) on 2026-05-07.