---
logical: "indexedtrait"
display: "indexedtrait"
entitySetName: "indexedtraits"
primaryId: "indexedtraitid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# indexedtrait

## Identity

| Property | Value |
| --- | --- |
| Logical name | `indexedtrait` |
| Display name | indexedtrait |
| Display (plural) | indexedtraits |
| Schema name | `indexedtrait` |
| Entity set (Web API) | `indexedtraits` |
| Primary id attribute | `indexedtraitid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/indexedtraits?$select=name&$top=10
GET /api/data/v9.2/indexedtraits(<guid>)
POST /api/data/v9.2/indexedtraits
PATCH /api/data/v9.2/indexedtraits(<guid>)
DELETE /api/data/v9.2/indexedtraits(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`alternativekey`, `detailedcontents`, `filtercriteria`, `importsequencenumber`, `indexedtraitid`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `properties`, `searchcontents`, `traittype`, `ttlinseconds`, `userid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_indexedtrait_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_indexedtrait_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_indexedtrait_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_indexedtrait_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_indexedtrait` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_indexedtrait` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_indexedtrait` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_indexedtrait` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [indexedtrait (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='indexedtrait')) on 2026-05-07.