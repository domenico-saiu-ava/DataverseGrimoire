---
logical: "msdyn_msdyn_agentcopilotterm_knowledgeart"
display: "msdyn_msdyn_agentcopilotterm_knowledgeart"
entitySetName: "msdyn_msdyn_agentcopilotterm_knowledgeartset"
primaryId: "msdyn_msdyn_agentcopilotterm_knowledgeartid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_agentcopilotterm_knowledgeart

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_agentcopilotterm_knowledgeart` |
| Display name | msdyn_msdyn_agentcopilotterm_knowledgeart |
| Schema name | `msdyn_msdyn_agentcopilotterm_knowledgeart` |
| Entity set (Web API) | `msdyn_msdyn_agentcopilotterm_knowledgeartset` |
| Primary id attribute | `msdyn_msdyn_agentcopilotterm_knowledgeartid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgeartset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgeartset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgeartset
PATCH /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgeartset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_agentcopilotterm_knowledgeartset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`knowledgearticleid`, `msdyn_agentcopilottermid`, `msdyn_msdyn_agentcopilotterm_knowledgeartid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_agentcopilotterm_knowledgearticle` | [msdyn_agentcopilotterm](msdyn_agentcopilotterm.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_msdyn_agentcopilotterm_knowledgeart (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_agentcopilotterm_knowledgeart')) on 2026-05-07.