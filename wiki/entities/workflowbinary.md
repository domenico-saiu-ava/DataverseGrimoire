---
logical: "workflowbinary"
display: "Workflow Binary"
entitySetName: "workflowbinaries"
primaryId: "workflowbinaryid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Workflow Binary

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workflowbinary` |
| Display name | Workflow Binary |
| Display (plural) | Workflow Binaries |
| Schema name | `workflowbinary` |
| Entity set (Web API) | `workflowbinaries` |
| Primary id attribute | `workflowbinaryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/workflowbinaries?$select=name&$top=10
GET /api/data/v9.2/workflowbinaries(<guid>)
POST /api/data/v9.2/workflowbinaries
PATCH /api/data/v9.2/workflowbinaries(<guid>)
DELETE /api/data/v9.2/workflowbinaries(<guid>)
```

## Attributes

Writable: **18** · Read-only: **20**

### Writable

`FlowSessionId`, `ImportSequenceNumber`, `IsCustomizable`, `Metadata`, `MimeType`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Process`, `Reference`, `ReferenceName`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`, `workflowbinaryId`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Data`, `Data_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_workflowbinary` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_workflowbinary_Data` | [fileattachment](fileattachment.md) | `data` | `data` |
| `flowsession_workflowbinary_FlowSessionId` | [flowsession](flowsession.md) | `flowsessionid` | `FlowSessionId` |
| `lk_workflowbinary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_workflowbinary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_workflowbinary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_workflowbinary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_workflowbinary` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_workflowbinary` | [team](team.md) | `owningteam` | `owningteam` |
| `user_workflowbinary` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `workflow_workflowbinary_Process` | [workflow](workflow.md) | `process` | `Process` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workflowbinary_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workflowbinary_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workflowbinary_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `workflowbinary_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workflowbinary_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `workflowbinary_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workflowbinary_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [workflowbinary.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/workflowbinary.md) on 2026-05-06.