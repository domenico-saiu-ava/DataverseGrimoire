---
logical: "uxagentprojectfile"
display: "File di progetto agente UX"
entitySetName: "uxagentprojectfiles"
primaryId: "uxagentprojectfileid"
primaryName: "filename"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# File di progetto agente UX

File in un progetto agente UX.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `uxagentprojectfile` |
| Display name | File di progetto agente UX |
| Display (plural) | File di progetto agente UX |
| Schema name | `uxagentprojectfile` |
| Entity set (Web API) | `uxagentprojectfiles` |
| Primary id attribute | `uxagentprojectfileid` |
| Primary name attribute | `filename` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/uxagentprojectfiles?$select=filename&$top=10
GET /api/data/v9.2/uxagentprojectfiles(<guid>)
POST /api/data/v9.2/uxagentprojectfiles
PATCH /api/data/v9.2/uxagentprojectfiles(<guid>)
DELETE /api/data/v9.2/uxagentprojectfiles(<guid>)
```

## Attributes

Writable: **11** · Read-only: **15**

### Writable

`filename`, `filetype`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `uxagentprojectfileid`, `uxagentprojectid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `filecontent`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_uxagentprojectfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_uxagentprojectfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_uxagentprojectfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_uxagentprojectfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_uxagentprojectfile` | [organization](organization.md) | `organizationid` | `organizationid` |
| `FileAttachment_uxagentprojectfile_FileContent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `uxagentproject_uxagentprojectfile_uxagentprojectid` | [uxagentproject](uxagentproject.md) | `uxagentprojectid` | `uxagentprojectid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `uxagentprojectfile_componentversionnrddatasourceset` | [uxagentprojectfile](uxagentprojectfile.md) | `component` | `component_uxagentprojectfile` |
| `uxagentprojectfile_componentversions` | [uxagentprojectfile](uxagentprojectfile.md) | `component` | `component_uxagentprojectfile` |
| `uxagentprojectfile_componentchangesetversions` | [uxagentprojectfile](uxagentprojectfile.md) | `component` | `component_uxagentprojectfile` |
| `uxagentprojectfile_SyncErrors` | [uxagentprojectfile](uxagentprojectfile.md) | `regardingobjectid` | `regardingobjectid_uxagentprojectfile` |
| `uxagentprojectfile_AsyncOperations` | [uxagentprojectfile](uxagentprojectfile.md) | `regardingobjectid` | `regardingobjectid_uxagentprojectfile` |
| `uxagentprojectfile_MailboxTrackingFolders` | [uxagentprojectfile](uxagentprojectfile.md) | `regardingobjectid` | `regardingobjectid_uxagentprojectfile` |
| `uxagentprojectfile_UserEntityInstanceDatas` | [uxagentprojectfile](uxagentprojectfile.md) | `objectid` | `objectid_uxagentprojectfile` |
| `uxagentprojectfile_ProcessSession` | [uxagentprojectfile](uxagentprojectfile.md) | `regardingobjectid` | `regardingobjectid_uxagentprojectfile` |
| `uxagentprojectfile_BulkDeleteFailures` | [uxagentprojectfile](uxagentprojectfile.md) | `regardingobjectid` | `regardingobjectid_uxagentprojectfile` |
| `uxagentprojectfile_PrincipalObjectAttributeAccesses` | [uxagentprojectfile](uxagentprojectfile.md) | `objectid` | `objectid_uxagentprojectfile` |
| `uxagentprojectfile_FileAttachments` | [uxagentprojectfile](uxagentprojectfile.md) | `objectid` | `objectid_uxagentprojectfile` |
| `agentconversationmessage_uxagentprojectfile` | [uxagentprojectfile](uxagentprojectfile.md) | `regardingobjectid` | `RegardingObjectId_uxagentprojectfile` |


## Source

Generated from [uxagentprojectfile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='uxagentprojectfile')) on 2026-05-07.