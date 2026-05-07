---
logical: "toolinggatewaymcpserver"
display: "ToolingGatewayMCPServer"
entitySetName: "toolinggatewaymcpservers"
primaryId: "toolinggatewaymcpserverid"
primaryName: "displayname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ToolingGatewayMCPServer

ToolingGatewayMCPServer component (For Internal use only)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `toolinggatewaymcpserver` |
| Display name | ToolingGatewayMCPServer |
| Display (plural) | ToolingGatewayMCPServers |
| Schema name | `ToolingGatewayMCPServer` |
| Entity set (Web API) | `toolinggatewaymcpservers` |
| Primary id attribute | `toolinggatewaymcpserverid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/toolinggatewaymcpservers?$select=displayname&$top=10
GET /api/data/v9.2/toolinggatewaymcpservers(<guid>)
POST /api/data/v9.2/toolinggatewaymcpservers
PATCH /api/data/v9.2/toolinggatewaymcpservers(<guid>)
DELETE /api/data/v9.2/toolinggatewaymcpservers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`displayname`, `importsequencenumber`, `mcpserverlogicalname`, `name`, `overriddencreatedon`, `ownerid`, `remotemcpserverlogicalname`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `toolinggatewayid`, `toolinggatewaymcpserverid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_toolinggatewaymcpserver_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_toolinggatewaymcpserver_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_toolinggatewaymcpserver_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_toolinggatewaymcpserver_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_toolinggatewaymcpserver` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_toolinggatewaymcpserver` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_toolinggatewaymcpserver` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_toolinggatewaymcpserver` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ToolingGatewayMCPServer_ToolingGateway_ToolingGateway` | [toolinggateway](toolinggateway.md) | `toolinggatewayid` | `ToolingGateway` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `toolinggatewaymcpserver_SyncErrors` | [toolinggatewaymcpserver](toolinggatewaymcpserver.md) | `regardingobjectid` | `regardingobjectid_toolinggatewaymcpserver` |
| `toolinggatewaymcpserver_AsyncOperations` | [toolinggatewaymcpserver](toolinggatewaymcpserver.md) | `regardingobjectid` | `regardingobjectid_toolinggatewaymcpserver` |
| `toolinggatewaymcpserver_MailboxTrackingFolders` | [toolinggatewaymcpserver](toolinggatewaymcpserver.md) | `regardingobjectid` | `regardingobjectid_toolinggatewaymcpserver` |
| `toolinggatewaymcpserver_UserEntityInstanceDatas` | [toolinggatewaymcpserver](toolinggatewaymcpserver.md) | `objectid` | `objectid_toolinggatewaymcpserver` |
| `toolinggatewaymcpserver_ProcessSession` | [toolinggatewaymcpserver](toolinggatewaymcpserver.md) | `regardingobjectid` | `regardingobjectid_toolinggatewaymcpserver` |
| `toolinggatewaymcpserver_BulkDeleteFailures` | [toolinggatewaymcpserver](toolinggatewaymcpserver.md) | `regardingobjectid` | `regardingobjectid_toolinggatewaymcpserver` |
| `toolinggatewaymcpserver_PrincipalObjectAttributeAccesses` | [toolinggatewaymcpserver](toolinggatewaymcpserver.md) | `objectid` | `objectid_toolinggatewaymcpserver` |


## Source

Generated from [toolinggatewaymcpserver (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='toolinggatewaymcpserver')) on 2026-05-07.