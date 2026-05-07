---
logical: "mcptool"
display: "MCPTool"
entitySetName: "mcptools"
primaryId: "mcptoolid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# MCPTool

MCPTools component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mcptool` |
| Display name | MCPTool |
| Display (plural) | MCPTools |
| Schema name | `MCPTool` |
| Entity set (Web API) | `mcptools` |
| Primary id attribute | `mcptoolid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mcptools?$select=name&$top=10
GET /api/data/v9.2/mcptools(<guid>)
POST /api/data/v9.2/mcptools
PATCH /api/data/v9.2/mcptools(<guid>)
DELETE /api/data/v9.2/mcptools(<guid>)
```

## Attributes

Writable: **30** · Read-only: **16**

### Writable

`Meta`, `annotations`, `backendtooltype`, `basetoolid`, `billingconfiguration`, `connectorid`, `customapiid`, `description`, `flags`, `hostname`, `httpmethod`, `importsequencenumber`, `inputschema`, `iscustom`, `iscustomizable`, `mcpserverid`, `mcptoolid`, `name`, `operationid`, `outputschema`, `overriddencreatedon`, `ownerid`, `relativepath`, `resourceandscope`, `sdkmessagepairid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `title`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mcptool_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mcptool_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mcptool_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mcptool_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_mcptool` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_mcptool` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_mcptool` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_mcptool` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `MCPTool_MCPServer_MCPServer` | [mcpserver](mcpserver.md) | `mcpserverid` | `MCPServer` |
| `MCPTool_CustomAPI_CustomAPI` | [customapi](customapi.md) | `customapiid` | `CustomAPI` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mcptool_SyncErrors` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `mcptool_AsyncOperations` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `mcptool_MailboxTrackingFolders` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `mcptool_UserEntityInstanceDatas` | [mcptool](mcptool.md) | `objectid` | `objectid_mcptool` |
| `mcptool_ProcessSession` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `mcptool_BulkDeleteFailures` | [mcptool](mcptool.md) | `regardingobjectid` | `regardingobjectid_mcptool` |
| `mcptool_PrincipalObjectAttributeAccesses` | [mcptool](mcptool.md) | `objectid` | `objectid_mcptool` |


## Source

Generated from [mcptool (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mcptool')) on 2026-05-07.