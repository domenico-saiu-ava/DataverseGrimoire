---
logical: "agentprompt"
display: "Prompt agente"
entitySetName: "agentprompts"
primaryId: "agentpromptid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Prompt agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agentprompt` |
| Display name | Prompt agente |
| Display (plural) | Prompt agente |
| Schema name | `agentprompt` |
| Entity set (Web API) | `agentprompts` |
| Primary id attribute | `agentpromptid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agentprompts?$select=name&$top=10
GET /api/data/v9.2/agentprompts(<guid>)
POST /api/data/v9.2/agentprompts
PATCH /api/data/v9.2/agentprompts(<guid>)
DELETE /api/data/v9.2/agentprompts(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`agenticscenario`, `agentid`, `agentpromptid`, `basepromptid`, `experimentmetadata`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `parentpromptid`, `partitionid`, `prompttext`, `prompttexthash`, `status`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agentprompt_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agentprompt_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agentprompt_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agentprompt_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agentprompt` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agentprompt` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agentprompt` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agentprompt` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `agentprompt_agenticscenario_agenticscenario` | [agenticscenario](agenticscenario.md) | `agenticscenario` | `agenticscenario` |



## Source

Generated from [agentprompt (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agentprompt')) on 2026-05-07.