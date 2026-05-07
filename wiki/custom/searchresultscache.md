---
logical: "searchresultscache"
display: "SearchResultsCache"
entitySetName: "searchresultscaches"
primaryId: "searchresultscacheid"
primaryName: "searchrequesthash"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SearchResultsCache

Memorizza i risultati della ricerca nella cache interna

## Identity

| Property | Value |
| --- | --- |
| Logical name | `searchresultscache` |
| Display name | SearchResultsCache |
| Display (plural) | SearchResultsCaches |
| Schema name | `SearchResultsCache` |
| Entity set (Web API) | `searchresultscaches` |
| Primary id attribute | `searchresultscacheid` |
| Primary name attribute | `searchrequesthash` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/searchresultscaches?$select=searchrequesthash&$top=10
GET /api/data/v9.2/searchresultscaches(<guid>)
POST /api/data/v9.2/searchresultscaches
PATCH /api/data/v9.2/searchresultscaches(<guid>)
DELETE /api/data/v9.2/searchresultscaches(<guid>)
```

## Attributes

Writable: **7** · Read-only: **7**

### Writable

`importsequencenumber`, `overriddencreatedon`, `partitionid`, `searchrequesthash`, `searchresultscacheid`, `searchresultscacheitem`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_searchresultscache_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_searchresultscache_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_searchresultscache_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_searchresultscache_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [searchresultscache (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='searchresultscache')) on 2026-05-07.