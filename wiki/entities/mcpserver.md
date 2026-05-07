---
logical: "mcpserver"
display: "MCPServer"
entitySetName: "mcpservers"
primaryId: "mcpserverid"
primaryName: "displayname"
tableType: "Standard"
ownership: "UserOwned"
---

# MCPServer

MCPServers component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mcpserver` |
| Display name | MCPServer |
| Display (plural) | MCPServers |
| Schema name | `MCPServer` |
| Entity set (Web API) | `mcpservers` |
| Primary id attribute | `mcpserverid` |
| Primary name attribute | `displayname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mcpservers?$select=displayname&$top=10
GET /api/data/v9.2/mcpservers(<guid>)
POST /api/data/v9.2/mcpservers
PATCH /api/data/v9.2/mcpservers(<guid>)
DELETE /api/data/v9.2/mcpservers(<guid>)
```

## Attributes

Writable: **21** · Read-only: **21**

### Writable

`Audience`, `Configuration`, `Description`, `DisplayName`, `Icon`, `ImportSequenceNumber`, `Instructions`, `IsCustomizable`, `IsRemote`, `MCPServerId`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `RelativePath`, `Scope`, `ServerType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Icon_Timestamp`, `Icon_URL`, `IconId`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_mcpserver` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_mcpserver_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mcpserver_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mcpserver_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mcpserver_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_mcpserver` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_mcpserver` | [team](team.md) | `owningteam` | `owningteam` |
| `user_mcpserver` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mcpserver_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mcpserver_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mcpserver_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mcpserver_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `mcpserver_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mcpserver_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `MCPTool_MCPServer_MCPServer` | _n/a_ | `mcpserverid` | _n/a_ |


## Source

Generated from [mcpserver.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mcpserver.md) on 2026-05-06.