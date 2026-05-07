---
logical: "agenttask"
display: "Attività agente"
entitySetName: "agenttasks"
primaryId: "agenttaskid"
primaryName: "title"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attività agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agenttask` |
| Display name | Attività agente |
| Display (plural) | Attività agente |
| Schema name | `agenttask` |
| Entity set (Web API) | `agenttasks` |
| Primary id attribute | `agenttaskid` |
| Primary name attribute | `title` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agenttasks?$select=title&$top=10
GET /api/data/v9.2/agenttasks(<guid>)
POST /api/data/v9.2/agenttasks
PATCH /api/data/v9.2/agenttasks(<guid>)
DELETE /api/data/v9.2/agenttasks(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`agentfeeditemid`, `agenticscenario`, `agenttaskid`, `assignedto`, `context`, `data`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `partitionid`, `priority`, `requestedby`, `state`, `title`, `ttlinseconds`, `type`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agenttask_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agenttask_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agenttask_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agenttask_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agenttask` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agenttask` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agenttask` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agenttask` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `agentfeeditem_agenttask_agentfeeditemid` | [agentfeeditem](agentfeeditem.md) | `agentfeeditemid` | `agentfeeditemid` |
| `agenttask_agenticscenario_agenticscenario` | [agenticscenario](agenticscenario.md) | `agenticscenario` | `agenticscenario` |



## Source

Generated from [agenttask (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agenttask')) on 2026-05-07.