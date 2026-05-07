---
logical: "makerfewshot"
display: "MakerFewShot"
entitySetName: "makerfewshots"
primaryId: "makerfewshotid"
primaryName: "query"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# MakerFewShot

Questo fewshot viene aggiornato dall'autore per testare le query e dal servizio NL2SQ con i risultati

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

`comment`, `entityscope`, `entityscopecolumn`, `importsequencenumber`, `makerfewshotid`, `overriddencreatedon`, `query`, `rephrase`, `sqlcorrectness`, `standardsql`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_makerfewshot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_makerfewshot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_makerfewshot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_makerfewshot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_makerfewshot` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `makerfewshot_SyncErrors` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `makerfewshot_AsyncOperations` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `makerfewshot_MailboxTrackingFolders` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `makerfewshot_UserEntityInstanceDatas` | [makerfewshot](makerfewshot.md) | `objectid` | `objectid_makerfewshot` |
| `makerfewshot_ProcessSession` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `makerfewshot_BulkDeleteFailures` | [makerfewshot](makerfewshot.md) | `regardingobjectid` | `regardingobjectid_makerfewshot` |
| `makerfewshot_PrincipalObjectAttributeAccesses` | [makerfewshot](makerfewshot.md) | `objectid` | `objectid_makerfewshot` |


## Source

Generated from [makerfewshot (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='makerfewshot')) on 2026-05-07.