---
logical: "intelligentmemory"
display: "IntelligentMemory"
entitySetName: "intelligentmemories"
primaryId: "intelligentmemoryid"
primaryName: "intelligentmemoryname"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# IntelligentMemory

Rappresenta le memorie intelligenti utilizzate nel sistema.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `intelligentmemory` |
| Display name | IntelligentMemory |
| Display (plural) | IntelligentMemories |
| Schema name | `IntelligentMemory` |
| Entity set (Web API) | `intelligentmemories` |
| Primary id attribute | `intelligentmemoryid` |
| Primary name attribute | `intelligentmemoryname` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/intelligentmemories?$select=intelligentmemoryname&$top=10
GET /api/data/v9.2/intelligentmemories(<guid>)
POST /api/data/v9.2/intelligentmemories
PATCH /api/data/v9.2/intelligentmemories(<guid>)
DELETE /api/data/v9.2/intelligentmemories(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `intelligentmemoryid`, `intelligentmemoryname`, `memorykind`, `memorysource`, `memorytype`, `overriddencreatedon`, `ownerid`, `partitionid`, `predicate`, `privacylevel`, `recordversion`, `sourceid`, `subject`, `targetobject`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_intelligentmemory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_intelligentmemory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_intelligentmemory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_intelligentmemory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_intelligentmemory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_intelligentmemory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_intelligentmemory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_intelligentmemory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [intelligentmemory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='intelligentmemory')) on 2026-05-07.