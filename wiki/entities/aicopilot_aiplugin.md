---
logical: "aicopilot_aiplugin"
display: "aicopilot_aiplugin"
entitySetName: "aicopilot_aipluginset"
primaryId: "aicopilot_aipluginid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`AICopilot_AIPluginId`, `aicopilotid`, `aipluginid`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AICoPilot_AIPlugin_AIPlugin` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [aicopilot_aiplugin.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aicopilot_aiplugin.md) on 2026-05-06.