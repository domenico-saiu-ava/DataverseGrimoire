---
logical: "toolinggateway"
display: "ToolingGateway"
entitySetName: "toolinggateways"
primaryId: "toolinggatewayid"
primaryName: "displayname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ToolingGateway

ToolingGateways component (For Internal use only)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `toolinggateway` |
| Display name | ToolingGateway |
| Display (plural) | ToolingGateways |
| Schema name | `ToolingGateway` |
| Entity set (Web API) | `toolinggateways` |
| Primary id attribute | `toolinggatewayid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/toolinggateways?$select=displayname&$top=10
GET /api/data/v9.2/toolinggateways(<guid>)
POST /api/data/v9.2/toolinggateways
PATCH /api/data/v9.2/toolinggateways(<guid>)
DELETE /api/data/v9.2/toolinggateways(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`agentuserobjectid`, `displayname`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `toolinggatewayid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_toolinggateway_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_toolinggateway_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_toolinggateway_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_toolinggateway_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_toolinggateway` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_toolinggateway` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_toolinggateway` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_toolinggateway` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `toolinggateway_SyncErrors` | [toolinggateway](toolinggateway.md) | `regardingobjectid` | `regardingobjectid_toolinggateway` |
| `toolinggateway_AsyncOperations` | [toolinggateway](toolinggateway.md) | `regardingobjectid` | `regardingobjectid_toolinggateway` |
| `toolinggateway_MailboxTrackingFolders` | [toolinggateway](toolinggateway.md) | `regardingobjectid` | `regardingobjectid_toolinggateway` |
| `toolinggateway_UserEntityInstanceDatas` | [toolinggateway](toolinggateway.md) | `objectid` | `objectid_toolinggateway` |
| `toolinggateway_ProcessSession` | [toolinggateway](toolinggateway.md) | `regardingobjectid` | `regardingobjectid_toolinggateway` |
| `toolinggateway_BulkDeleteFailures` | [toolinggateway](toolinggateway.md) | `regardingobjectid` | `regardingobjectid_toolinggateway` |
| `toolinggateway_PrincipalObjectAttributeAccesses` | [toolinggateway](toolinggateway.md) | `objectid` | `objectid_toolinggateway` |
| `ToolingGatewayMCPServer_ToolingGateway_ToolingGateway` | [toolinggateway](toolinggateway.md) | `toolinggatewayid` | `ToolingGateway` |


## Source

Generated from [toolinggateway (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='toolinggateway')) on 2026-05-07.