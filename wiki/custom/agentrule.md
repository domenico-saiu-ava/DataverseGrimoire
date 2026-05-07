---
logical: "agentrule"
display: "Agent Rule"
entitySetName: "agentrules"
primaryId: "agentruleid"
primaryName: "displayname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Agent Rule

Agent Rule for event and schedule-based instruction activation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agentrule` |
| Display name | Agent Rule |
| Display (plural) | Agent Rules |
| Schema name | `AgentRule` |
| Entity set (Web API) | `agentrules` |
| Primary id attribute | `agentruleid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agentrules?$select=displayname&$top=10
GET /api/data/v9.2/agentrules(<guid>)
POST /api/data/v9.2/agentrules
PATCH /api/data/v9.2/agentrules(<guid>)
DELETE /api/data/v9.2/agentrules(<guid>)
```

## Attributes

Writable: **16** · Read-only: **4**

### Writable

`agentruleid`, `agentuserid`, `description`, `displayname`, `eventtype`, `importsequencenumber`, `logic`, `mcppromptid`, `name`, `overriddencreatedon`, `ownerid`, `ruledefinition`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `user_agentrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agentrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agentrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agentrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `AgentRule_MCPPrompt_MCPPrompt` | [mcpprompt](mcpprompt.md) | `mcppromptid` | `MCPPrompt` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `agentrule_SyncErrors` | [agentrule](agentrule.md) | `regardingobjectid` | `regardingobjectid_agentrule` |
| `agentrule_AsyncOperations` | [agentrule](agentrule.md) | `regardingobjectid` | `regardingobjectid_agentrule` |
| `agentrule_MailboxTrackingFolders` | [agentrule](agentrule.md) | `regardingobjectid` | `regardingobjectid_agentrule` |
| `agentrule_UserEntityInstanceDatas` | [agentrule](agentrule.md) | `objectid` | `objectid_agentrule` |
| `agentrule_ProcessSession` | [agentrule](agentrule.md) | `regardingobjectid` | `regardingobjectid_agentrule` |
| `agentrule_BulkDeleteFailures` | [agentrule](agentrule.md) | `regardingobjectid` | `regardingobjectid_agentrule` |
| `agentrule_PrincipalObjectAttributeAccesses` | [agentrule](agentrule.md) | `objectid` | `objectid_agentrule` |


## Source

Generated from [agentrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agentrule')) on 2026-05-07.