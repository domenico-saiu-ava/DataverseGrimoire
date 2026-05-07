---
logical: "workflowmetadata"
display: "Workflow Metadata"
entitySetName: "workflowmetadata"
primaryId: "workflowmetadataid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Workflow Metadata

Metadata associated with workflows

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workflowmetadata` |
| Display name | Workflow Metadata |
| Display (plural) | Workflow Metadata |
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

Writable: **16** · Read-only: **20**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PropertyKey`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`, `Value`, `ValueType`, `WorkflowId`, `WorkflowMetadataId`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FileValue`, `FileValue_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_workflowmetadata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_WorkflowMetadata_FileValue` | [fileattachment](fileattachment.md) | `filevalue` | `filevalue` |
| `lk_workflowmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_workflowmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_workflowmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_workflowmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_workflowmetadata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_workflowmetadata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_workflowmetadata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `workflowmetadata_WorkflowId_workflow` | [workflow](workflow.md) | `workflowid` | `WorkflowId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workflowmetadata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workflowmetadata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workflowmetadata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `workflowmetadata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `workflowmetadata_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `workflowmetadata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workflowmetadata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `workflowmetadata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workflowmetadata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [workflowmetadata.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/workflowmetadata.md) on 2026-05-06.