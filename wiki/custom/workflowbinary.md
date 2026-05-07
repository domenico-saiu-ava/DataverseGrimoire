---
logical: "workflowbinary"
display: "Dati binari flusso di lavoro"
entitySetName: "workflowbinaries"
primaryId: "workflowbinaryid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dati binari flusso di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workflowbinary` |
| Display name | Dati binari flusso di lavoro |
| Display (plural) | Dati binari flusso di lavoro |
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

Writable: **17** · Read-only: **17**

### Writable

`flowsessionid`, `importsequencenumber`, `iscustomizable`, `metadata`, `mimetype`, `name`, `overriddencreatedon`, `ownerid`, `process`, `reference`, `referencename`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`, `workflowbinaryid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `data`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_workflowbinary_Data` | [fileattachment](fileattachment.md) | `data` | `data` |
| `flowsession_workflowbinary_FlowSessionId` | [flowsession](flowsession.md) | `flowsessionid` | `FlowSessionId` |
| `workflow_workflowbinary_Process` | [workflow](workflow.md) | `process` | `Process` |
| `lk_workflowbinary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_workflowbinary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_workflowbinary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_workflowbinary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_workflowbinary` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_workflowbinary` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_workflowbinary` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_workflowbinary` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `workflowbinary_FileAttachments` | [workflowbinary](workflowbinary.md) | `objectid` | `objectid_workflowbinary` |
| `workflowbinary_SyncErrors` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowbinary_AsyncOperations` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowbinary_MailboxTrackingFolders` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowbinary_UserEntityInstanceDatas` | [workflowbinary](workflowbinary.md) | `objectid` | `objectid_workflowbinary` |
| `workflowbinary_ProcessSession` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowbinary_BulkDeleteFailures` | [workflowbinary](workflowbinary.md) | `regardingobjectid` | `regardingobjectid_workflowbinary` |
| `workflowbinary_PrincipalObjectAttributeAccesses` | [workflowbinary](workflowbinary.md) | `objectid` | `objectid_workflowbinary` |


## Source

Generated from [workflowbinary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='workflowbinary')) on 2026-05-07.