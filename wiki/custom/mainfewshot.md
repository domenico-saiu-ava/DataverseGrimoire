---
logical: "mainfewshot"
display: "MainFewShot"
entitySetName: "mainfewshots"
primaryId: "mainfewshotid"
primaryName: "query"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# MainFewShot

Questa entità Fewshot verrà aggiornata solo durante l'installazione della soluzione.

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

`category`, `comment`, `entitytype`, `importsequencenumber`, `iscustomizable`, `mainfewshotid`, `objectpartitionid`, `overriddencreatedon`, `query`, `rephrase`, `savedqueryversionnumber`, `savedqueryviewid`, `standardsql`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mainfewshot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mainfewshot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mainfewshot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mainfewshot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_mainfewshot` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mainfewshot_SyncErrors` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `mainfewshot_AsyncOperations` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `mainfewshot_MailboxTrackingFolders` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `mainfewshot_UserEntityInstanceDatas` | [mainfewshot](mainfewshot.md) | `objectid` | `objectid_mainfewshot` |
| `mainfewshot_ProcessSession` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `mainfewshot_BulkDeleteFailures` | [mainfewshot](mainfewshot.md) | `regardingobjectid` | `regardingobjectid_mainfewshot` |
| `mainfewshot_PrincipalObjectAttributeAccesses` | [mainfewshot](mainfewshot.md) | `objectid` | `objectid_mainfewshot` |


## Source

Generated from [mainfewshot (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mainfewshot')) on 2026-05-07.