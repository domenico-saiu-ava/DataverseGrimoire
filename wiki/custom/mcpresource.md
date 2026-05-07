---
logical: "mcpresource"
display: "MCPResource"
entitySetName: "mcpresources"
primaryId: "mcpresourceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# MCPResource

MCPResources component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mcpresource` |
| Display name | MCPResource |
| Display (plural) | MCPResources |
| Schema name | `MCPResource` |
| Entity set (Web API) | `mcpresources` |
| Primary id attribute | `mcpresourceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mcpresources?$select=name&$top=10
GET /api/data/v9.2/mcpresources(<guid>)
POST /api/data/v9.2/mcpresources
PATCH /api/data/v9.2/mcpresources(<guid>)
DELETE /api/data/v9.2/mcpresources(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`Meta`, `description`, `flags`, `importsequencenumber`, `iscustomizable`, `mcpresourceid`, `mcpserverid`, `mimeType`, `name`, `overriddencreatedon`, `ownerid`, `size`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `title`, `uri`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mcpresource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mcpresource_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mcpresource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mcpresource_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_mcpresource` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_mcpresource` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_mcpresource` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_mcpresource` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `MCPResource_MCPServer_MCPServer` | [mcpserver](mcpserver.md) | `mcpserverid` | `MCPServer` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mcpresource_SyncErrors` | [mcpresource](mcpresource.md) | `regardingobjectid` | `regardingobjectid_mcpresource` |
| `mcpresource_AsyncOperations` | [mcpresource](mcpresource.md) | `regardingobjectid` | `regardingobjectid_mcpresource` |
| `mcpresource_MailboxTrackingFolders` | [mcpresource](mcpresource.md) | `regardingobjectid` | `regardingobjectid_mcpresource` |
| `mcpresource_UserEntityInstanceDatas` | [mcpresource](mcpresource.md) | `objectid` | `objectid_mcpresource` |
| `mcpresource_ProcessSession` | [mcpresource](mcpresource.md) | `regardingobjectid` | `regardingobjectid_mcpresource` |
| `mcpresource_BulkDeleteFailures` | [mcpresource](mcpresource.md) | `regardingobjectid` | `regardingobjectid_mcpresource` |
| `mcpresource_PrincipalObjectAttributeAccesses` | [mcpresource](mcpresource.md) | `objectid` | `objectid_mcpresource` |
| `MCPResourceContent_MCPResource_MCPResource` | [mcpresource](mcpresource.md) | `mcpresourceid` | `MCPResource` |


## Source

Generated from [mcpresource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mcpresource')) on 2026-05-07.