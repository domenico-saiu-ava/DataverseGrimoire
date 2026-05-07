---
logical: "mcpresourcecontent"
display: "MCPResourceContent"
entitySetName: "mcpresourcecontents"
primaryId: "mcpresourcecontentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# MCPResourceContent

MCPResourceContents component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mcpresourcecontent` |
| Display name | MCPResourceContent |
| Display (plural) | MCPResourceContents |
| Schema name | `MCPResourceContent` |
| Entity set (Web API) | `mcpresourcecontents` |
| Primary id attribute | `mcpresourcecontentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mcpresourcecontents?$select=name&$top=10
GET /api/data/v9.2/mcpresourcecontents(<guid>)
POST /api/data/v9.2/mcpresourcecontents
PATCH /api/data/v9.2/mcpresourcecontents(<guid>)
DELETE /api/data/v9.2/mcpresourcecontents(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`flags`, `importsequencenumber`, `iscustomizable`, `mcpresourcecontentid`, `mcpresourceid`, `mimeType`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `text`, `timezoneruleversionnumber`, `uri`, `utcconversiontimezonecode`

### Read-only

`blob`, `componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `textblob`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mcpresourcecontent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mcpresourcecontent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mcpresourcecontent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mcpresourcecontent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_mcpresourcecontent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_mcpresourcecontent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_mcpresourcecontent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_mcpresourcecontent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_MCPResourceContent_Blob` | [fileattachment](fileattachment.md) | `blob` | `blob` |
| `MCPResourceContent_MCPResource_MCPResource` | [mcpresource](mcpresource.md) | `mcpresourceid` | `MCPResource` |
| `FileAttachment_MCPResourceContent_TextBlob` | [fileattachment](fileattachment.md) | `textblob` | `textblob` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mcpresourcecontent_SyncErrors` | [mcpresourcecontent](mcpresourcecontent.md) | `regardingobjectid` | `regardingobjectid_mcpresourcecontent` |
| `mcpresourcecontent_AsyncOperations` | [mcpresourcecontent](mcpresourcecontent.md) | `regardingobjectid` | `regardingobjectid_mcpresourcecontent` |
| `mcpresourcecontent_MailboxTrackingFolders` | [mcpresourcecontent](mcpresourcecontent.md) | `regardingobjectid` | `regardingobjectid_mcpresourcecontent` |
| `mcpresourcecontent_UserEntityInstanceDatas` | [mcpresourcecontent](mcpresourcecontent.md) | `objectid` | `objectid_mcpresourcecontent` |
| `mcpresourcecontent_ProcessSession` | [mcpresourcecontent](mcpresourcecontent.md) | `regardingobjectid` | `regardingobjectid_mcpresourcecontent` |
| `mcpresourcecontent_BulkDeleteFailures` | [mcpresourcecontent](mcpresourcecontent.md) | `regardingobjectid` | `regardingobjectid_mcpresourcecontent` |
| `mcpresourcecontent_PrincipalObjectAttributeAccesses` | [mcpresourcecontent](mcpresourcecontent.md) | `objectid` | `objectid_mcpresourcecontent` |
| `mcpresourcecontent_FileAttachments` | [mcpresourcecontent](mcpresourcecontent.md) | `objectid` | `objectid_mcpresourcecontent` |


## Source

Generated from [mcpresourcecontent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mcpresourcecontent')) on 2026-05-07.