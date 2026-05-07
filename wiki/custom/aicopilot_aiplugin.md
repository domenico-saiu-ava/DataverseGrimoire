---
logical: "aicopilot_aiplugin"
display: "aicopilot_aiplugin"
entitySetName: "aicopilot_aipluginset"
primaryId: "aicopilot_aipluginid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# aicopilot_aiplugin

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aicopilot_aiplugin` |
| Display name | aicopilot_aiplugin |
| Schema name | `AICopilot_AIPlugin` |
| Entity set (Web API) | `aicopilot_aipluginset` |
| Primary id attribute | `aicopilot_aipluginid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/aicopilot_aipluginset?$select=&$top=10
GET /api/data/v9.2/aicopilot_aipluginset(<guid>)
POST /api/data/v9.2/aicopilot_aipluginset
PATCH /api/data/v9.2/aicopilot_aipluginset(<guid>)
DELETE /api/data/v9.2/aicopilot_aipluginset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`aicopilot_aipluginid`, `aicopilotid`, `aipluginid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AICoPilot_AIPlugin_AIPlugin` | [aiplugin](aiplugin.md) | _n/a_ | `AICopilot_AIPlugin_AIPlugin` |

## Source

Generated from [aicopilot_aiplugin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aicopilot_aiplugin')) on 2026-05-07.