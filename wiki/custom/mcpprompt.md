---
logical: "mcpprompt"
display: "MCPPrompt"
entitySetName: "mcpprompts"
primaryId: "mcppromptid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# MCPPrompt

MCPPrompts component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mcpprompt` |
| Display name | MCPPrompt |
| Display (plural) | MCPPrompts |
| Schema name | `MCPPrompt` |
| Entity set (Web API) | `mcpprompts` |
| Primary id attribute | `mcppromptid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mcpprompts?$select=name&$top=10
GET /api/data/v9.2/mcpprompts(<guid>)
POST /api/data/v9.2/mcpprompts
PATCH /api/data/v9.2/mcpprompts(<guid>)
DELETE /api/data/v9.2/mcpprompts(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`Meta`, `arguments`, `description`, `flags`, `importsequencenumber`, `iscustomizable`, `mcppromptid`, `mcpserverid`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `template`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mcpprompt_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mcpprompt_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mcpprompt_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mcpprompt_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_mcpprompt` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_mcpprompt` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_mcpprompt` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_mcpprompt` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `MCPPrompt_MCPServer_MCPServer` | [mcpserver](mcpserver.md) | `mcpserverid` | `MCPServer` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mcpprompt_SyncErrors` | [mcpprompt](mcpprompt.md) | `regardingobjectid` | `regardingobjectid_mcpprompt` |
| `mcpprompt_AsyncOperations` | [mcpprompt](mcpprompt.md) | `regardingobjectid` | `regardingobjectid_mcpprompt` |
| `mcpprompt_MailboxTrackingFolders` | [mcpprompt](mcpprompt.md) | `regardingobjectid` | `regardingobjectid_mcpprompt` |
| `mcpprompt_UserEntityInstanceDatas` | [mcpprompt](mcpprompt.md) | `objectid` | `objectid_mcpprompt` |
| `mcpprompt_ProcessSession` | [mcpprompt](mcpprompt.md) | `regardingobjectid` | `regardingobjectid_mcpprompt` |
| `mcpprompt_BulkDeleteFailures` | [mcpprompt](mcpprompt.md) | `regardingobjectid` | `regardingobjectid_mcpprompt` |
| `mcpprompt_PrincipalObjectAttributeAccesses` | [mcpprompt](mcpprompt.md) | `objectid` | `objectid_mcpprompt` |
| `AgentRule_MCPPrompt_MCPPrompt` | [mcpprompt](mcpprompt.md) | `mcppromptid` | `MCPPrompt` |


## Source

Generated from [mcpprompt (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mcpprompt')) on 2026-05-07.