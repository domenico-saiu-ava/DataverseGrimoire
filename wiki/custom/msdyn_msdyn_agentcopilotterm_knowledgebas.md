---
logical: "msdyn_msdyn_agentcopilotterm_knowledgebas"
display: "msdyn_msdyn_agentcopilotterm_knowledgebas"
entitySetName: "msdyn_msdyn_agentcopilotterm_knowledgebasset"
primaryId: "msdyn_msdyn_agentcopilotterm_knowledgebasid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_agentcopilotterm_knowledgebas

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_agentcopilotterm_knowledgebas` |
| Display name | msdyn_msdyn_agentcopilotterm_knowledgebas |
| Schema name | `msdyn_msdyn_agentcopilotterm_knowledgebas` |
| Entity set (Web API) | `msdyn_msdyn_agentcopilotterm_knowledgebasset` |
| Primary id attribute | `msdyn_msdyn_agentcopilotterm_knowledgebasid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgebasset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgebasset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgebasset
PATCH /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgebasset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgebasset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`knowledgebaserecordid`, `msdyn_agentcopilottermid`, `msdyn_msdyn_agentcopilotterm_knowledgebasid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcopilotterm_knowledgebaserecord` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_msdyn_agentcopilotterm_knowledgebas (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_agentcopilotterm_knowledgebas')) on 2026-05-07.