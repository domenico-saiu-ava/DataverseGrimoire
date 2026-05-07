---
logical: "agenticscenario"
display: "Scenario agentico"
entitySetName: "agenticscenarios"
primaryId: "agenticscenarioid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Scenario agentico

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agenticscenario` |
| Display name | Scenario agentico |
| Display (plural) | Scenari agentici |
| Schema name | `agenticscenario` |
| Entity set (Web API) | `agenticscenarios` |
| Primary id attribute | `agenticscenarioid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agenticscenarios?$select=name&$top=10
GET /api/data/v9.2/agenticscenarios(<guid>)
POST /api/data/v9.2/agenticscenarios
PATCH /api/data/v9.2/agenticscenarios(<guid>)
DELETE /api/data/v9.2/agenticscenarios(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`agenticscenarioid`, `configuration`, `description`, `importsequencenumber`, `isimplicit`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `taskreviewers`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agenticscenario_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agenticscenario_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agenticscenario_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agenticscenario_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agenticscenario` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agenticscenario` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agenticscenario` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agenticscenario` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `agenticscenario_taskreviewers_team` | [team](team.md) | `taskreviewers` | `taskreviewers` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `agentprompt_agenticscenario_agenticscenario` | [agenticscenario](agenticscenario.md) | `agenticscenario` | `agenticscenario` |
| `agenttask_agenticscenario_agenticscenario` | [agenticscenario](agenticscenario.md) | `agenticscenario` | `agenticscenario` |
| `agentmemory_agenticscenario_agenticscenario` | [agenticscenario](agenticscenario.md) | `agenticscenario` | `agenticscenario` |


## Source

Generated from [agenticscenario (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agenticscenario')) on 2026-05-07.