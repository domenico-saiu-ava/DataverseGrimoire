---
logical: "dvfilesearch"
display: "DVFileSearch"
entitySetName: "dvfilesearchs"
primaryId: "dvfilesearchid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DVFileSearch

DVFileSearches Component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dvfilesearch` |
| Display name | DVFileSearch |
| Display (plural) | DVFileSearches |
| Schema name | `DVFileSearch` |
| Entity set (Web API) | `dvfilesearchs` |
| Primary id attribute | `dvfilesearchid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/dvfilesearchs?$select=name&$top=10
GET /api/data/v9.2/dvfilesearchs(<guid>)
POST /api/data/v9.2/dvfilesearchs
PATCH /api/data/v9.2/dvfilesearchs(<guid>)
DELETE /api/data/v9.2/dvfilesearchs(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`dvfilesearchid`, `dvtablesearch`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_dvfilesearch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dvfilesearch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dvfilesearch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dvfilesearch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_dvfilesearch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_dvfilesearch` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_dvfilesearch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_dvfilesearch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `DVTableSearch_DVFileSearch` | [dvtablesearch](dvtablesearch.md) | `dvtablesearch` | `DVTableSearch` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `dvfilesearch_SyncErrors` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearch_AsyncOperations` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearch_MailboxTrackingFolders` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearch_UserEntityInstanceDatas` | [dvfilesearch](dvfilesearch.md) | `objectid` | `objectid_dvfilesearch` |
| `dvfilesearch_ProcessSession` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearch_BulkDeleteFailures` | [dvfilesearch](dvfilesearch.md) | `regardingobjectid` | `regardingobjectid_dvfilesearch` |
| `dvfilesearch_PrincipalObjectAttributeAccesses` | [dvfilesearch](dvfilesearch.md) | `objectid` | `objectid_dvfilesearch` |
| `DVFileSearch_DVFileSearch_DVFileSearchEnt` | [dvfilesearch](dvfilesearch.md) | `dvfilesearch` | `DVFileSearch` |
| `AIPluginOperation_DVFileSearch_DVFileSear` | [dvfilesearch](dvfilesearch.md) | `dvfilesearch` | `DVFileSearch` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesite_dvfilesearch` | [powerpagesite](powerpagesite.md) | _n/a_ | `powerpagesite_dvfilesearch` |

## Source

Generated from [dvfilesearch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='dvfilesearch')) on 2026-05-07.