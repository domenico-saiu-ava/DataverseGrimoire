---
logical: "recentlyused"
display: "Utilizzato di recente"
entitySetName: "recentlyused"
primaryId: "recentlyusedid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Utilizzato di recente

Tabella di dati utilizzata più di recente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `recentlyused` |
| Display name | Utilizzato di recente |
| Display (plural) | Utilizzato di recente |
| Schema name | `recentlyused` |
| Entity set (Web API) | `recentlyused` |
| Primary id attribute | `recentlyusedid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/recentlyused?$select=name&$top=10
GET /api/data/v9.2/recentlyused(<guid>)
POST /api/data/v9.2/recentlyused
PATCH /api/data/v9.2/recentlyused(<guid>)
DELETE /api/data/v9.2/recentlyused(<guid>)
```

## Attributes

Writable: **18** · Read-only: **11**

### Writable

`appid`, `imageurl`, `importsequencenumber`, `name`, `objectid`, `objectpartitionid`, `objecttype`, `objecttypedisplayname`, `objecttypeid`, `overriddencreatedon`, `ownerid`, `partitionid`, `recentlyusedid`, `recordurl`, `subtitle`, `title`, `ttlinseconds`, `userid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `lastaccessed`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_recentlyused_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_recentlyused_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_recentlyused_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_recentlyused_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_recentlyused` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_recentlyused` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_recentlyused` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_recentlyused` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [recentlyused (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='recentlyused')) on 2026-05-07.