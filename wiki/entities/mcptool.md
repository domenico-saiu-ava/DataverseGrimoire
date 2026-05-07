---
logical: "mcptool"
display: "MCPTool"
entitySetName: "mcptools"
primaryId: "mcptoolid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **23** · Read-only: **18**

### Writable

`Annotations`, `BackendToolType`, `ConnectorId`, `CustomAPIId`, `Description`, `HTTPMethod`, `ImportSequenceNumber`, `InputSchema`, `IsCustomizable`, `MCPServerId`, `MCPToolId`, `Name`, `OperationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `RelativePath`, `SdkMessagePairId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Title`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_mcptool` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_mcptool_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mcptool_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mcptool_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mcptool_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `MCPTool_CustomAPI_CustomAPI` | [customapi](customapi.md) | `customapiid` | `CustomAPI` |
| `MCPTool_MCPServer_MCPServer` | [mcpserver](mcpserver.md) | `mcpserverid` | `MCPServer` |
| `owner_mcptool` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_mcptool` | [team](team.md) | `owningteam` | `owningteam` |
| `user_mcptool` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mcptool_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mcptool_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mcptool_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mcptool_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `mcptool_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mcptool_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mcptool.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mcptool.md) on 2026-05-06.