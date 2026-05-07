---
logical: "workflowmetadata"
display: "Metadati flusso di lavoro"
entitySetName: "workflowmetadata"
primaryId: "workflowmetadataid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Metadati flusso di lavoro

Metadati associati ai flussi di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workflowmetadata` |
| Display name | Metadati flusso di lavoro |
| Display (plural) | Metadati flusso di lavoro |
| Schema name | `WorkflowMetadata` |
| Entity set (Web API) | `workflowmetadata` |
| Primary id attribute | `workflowmetadataid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/workflowmetadata?$select=name&$top=10
GET /api/data/v9.2/workflowmetadata(<guid>)
POST /api/data/v9.2/workflowmetadata
PATCH /api/data/v9.2/workflowmetadata(<guid>)
DELETE /api/data/v9.2/workflowmetadata(<guid>)
```

## Attributes

Writable: **15** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `propertykey`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`, `value`, `valuetype`, `workflowid`, `workflowmetadataid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `filevalue`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_workflowmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_workflowmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_workflowmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_workflowmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_workflowmetadata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_workflowmetadata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_workflowmetadata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_workflowmetadata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_WorkflowMetadata_FileValue` | [fileattachment](fileattachment.md) | `filevalue` | `filevalue` |
| `workflowmetadata_WorkflowId_workflow` | [workflow](workflow.md) | `workflowid` | `WorkflowId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workflowmetadata_SyncErrors` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workflowmetadata_DuplicateMatchingRecord` | [workflowmetadata](workflowmetadata.md) | `duplicaterecordid` | `duplicaterecordid_workflowmetadata` |
| `workflowmetadata_DuplicateBaseRecord` | [workflowmetadata](workflowmetadata.md) | `baserecordid` | `baserecordid_workflowmetadata` |
| `workflowmetadata_AsyncOperations` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workflowmetadata_MailboxTrackingFolders` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workflowmetadata_UserEntityInstanceDatas` | [workflowmetadata](workflowmetadata.md) | `objectid` | `objectid_workflowmetadata` |
| `workflowmetadata_ProcessSession` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workflowmetadata_BulkDeleteFailures` | [workflowmetadata](workflowmetadata.md) | `regardingobjectid` | `regardingobjectid_workflowmetadata` |
| `workflowmetadata_PrincipalObjectAttributeAccesses` | [workflowmetadata](workflowmetadata.md) | `objectid` | `objectid_workflowmetadata` |
| `workflowmetadata_FileAttachments` | [workflowmetadata](workflowmetadata.md) | `objectid` | `objectid_workflowmetadata` |


## Source

Generated from [workflowmetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='workflowmetadata')) on 2026-05-07.