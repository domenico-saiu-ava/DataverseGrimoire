---
logical: "mcpserver"
display: "MCPServer"
entitySetName: "mcpservers"
primaryId: "mcpserverid"
primaryName: "displayname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **26** · Read-only: **18**

### Writable

`Meta`, `audience`, `baseserverid`, `configuration`, `description`, `displayname`, `flags`, `hostname`, `importsequencenumber`, `instructions`, `iscustom`, `iscustomizable`, `isremote`, `managedidentityid`, `mcpserverid`, `name`, `overriddencreatedon`, `ownerid`, `relativepath`, `resourceandscope`, `scope`, `servertype`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `iconid`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `serverurl`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ImageDescriptor_MCPServer_Icon` | [imagedescriptor](imagedescriptor.md) | `iconid` | `iconid_imagedescriptor` |
| `lk_mcpserver_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mcpserver_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mcpserver_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mcpserver_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_mcpserver` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_mcpserver` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_mcpserver` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_mcpserver` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ManagedIdentity_MCPServer_ManagedIdentityId` | [managedidentity](managedidentity.md) | `managedidentityid` | `ManagedIdentityId` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `MCPResource_MCPServer_MCPServer` | [mcpserver](mcpserver.md) | `mcpserverid` | `MCPServer` |
| `MCPPrompt_MCPServer_MCPServer` | [mcpserver](mcpserver.md) | `mcpserverid` | `MCPServer` |
| `mcpserver_SyncErrors` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcpserver_AsyncOperations` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcpserver_MailboxTrackingFolders` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcpserver_UserEntityInstanceDatas` | [mcpserver](mcpserver.md) | `objectid` | `objectid_mcpserver` |
| `mcpserver_ProcessSession` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcpserver_BulkDeleteFailures` | [mcpserver](mcpserver.md) | `regardingobjectid` | `regardingobjectid_mcpserver` |
| `mcpserver_PrincipalObjectAttributeAccesses` | [mcpserver](mcpserver.md) | `objectid` | `objectid_mcpserver` |
| `MCPTool_MCPServer_MCPServer` | [mcpserver](mcpserver.md) | `mcpserverid` | `MCPServer` |
| `mcpserver_appelement_objectid` | [mcpserver](mcpserver.md) | `objectid` | `objectid` |


## Source

Generated from [mcpserver (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mcpserver')) on 2026-05-07.