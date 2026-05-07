---
logical: "agentmemory"
display: "Memoria agente"
entitySetName: "agentmemories"
primaryId: "agentmemoryid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Memoria agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agentmemory` |
| Display name | Memoria agente |
| Display (plural) | Memorie agenti |
| Schema name | `agentmemory` |
| Entity set (Web API) | `agentmemories` |
| Primary id attribute | `agentmemoryid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agentmemories?$select=name&$top=10
GET /api/data/v9.2/agentmemories(<guid>)
POST /api/data/v9.2/agentmemories
PATCH /api/data/v9.2/agentmemories(<guid>)
DELETE /api/data/v9.2/agentmemories(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`agenticscenario`, `agentid`, `agentinput`, `agentmemoryid`, `data`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `promptid`, `sessionid`, `signals`, `sourceid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agentmemory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agentmemory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agentmemory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agentmemory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agentmemory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agentmemory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agentmemory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agentmemory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `agentmemory_agenticscenario_agenticscenario` | [agenticscenario](agenticscenario.md) | `agenticscenario` | `agenticscenario` |



## Source

Generated from [agentmemory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agentmemory')) on 2026-05-07.