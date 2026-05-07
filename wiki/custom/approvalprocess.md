---
logical: "approvalprocess"
display: "Processo di approvazione"
entitySetName: "approvalprocesses"
primaryId: "approvalprocessid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Processo di approvazione

Processo di approvazione per approvazioni in più fasi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalprocess` |
| Display name | Processo di approvazione |
| Display (plural) | Processi di approvazione |
| Schema name | `approvalprocess` |
| Entity set (Web API) | `approvalprocesses` |
| Primary id attribute | `approvalprocessid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/approvalprocesses?$select=name&$top=10
GET /api/data/v9.2/approvalprocesses(<guid>)
POST /api/data/v9.2/approvalprocesses
PATCH /api/data/v9.2/approvalprocesses(<guid>)
DELETE /api/data/v9.2/approvalprocesses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`approvalprocessid`, `importsequencenumber`, `introducedversion`, `iscustomizable`, `metadataversion`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `inputs`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `stages`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_approvalprocess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalprocess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalprocess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalprocess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_approvalprocess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_approvalprocess` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_approvalprocess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_approvalprocess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_approvalprocess_Inputs` | [fileattachment](fileattachment.md) | `inputs` | `inputs` |
| `FileAttachment_approvalprocess_Stages` | [fileattachment](fileattachment.md) | `stages` | `stages` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalprocess_SyncErrors` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalprocess_DuplicateMatchingRecord` | [approvalprocess](approvalprocess.md) | `duplicaterecordid` | `duplicaterecordid_approvalprocess` |
| `approvalprocess_DuplicateBaseRecord` | [approvalprocess](approvalprocess.md) | `baserecordid` | `baserecordid_approvalprocess` |
| `approvalprocess_AsyncOperations` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalprocess_MailboxTrackingFolders` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalprocess_UserEntityInstanceDatas` | [approvalprocess](approvalprocess.md) | `objectid` | `objectid_approvalprocess` |
| `approvalprocess_ProcessSession` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalprocess_BulkDeleteFailures` | [approvalprocess](approvalprocess.md) | `regardingobjectid` | `regardingobjectid_approvalprocess` |
| `approvalprocess_PrincipalObjectAttributeAccesses` | [approvalprocess](approvalprocess.md) | `objectid` | `objectid_approvalprocess` |
| `approvalprocess_FileAttachments` | [approvalprocess](approvalprocess.md) | `objectid` | `objectid_approvalprocess` |
| `approvalprocess_Annotations` | [approvalprocess](approvalprocess.md) | `objectid` | `objectid_approvalprocess` |


## Source

Generated from [approvalprocess (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='approvalprocess')) on 2026-05-07.