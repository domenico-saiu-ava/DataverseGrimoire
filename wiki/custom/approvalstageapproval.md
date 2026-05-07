---
logical: "approvalstageapproval"
display: "Approvazione fase di approvazione"
entitySetName: "approvalstageapprovals"
primaryId: "approvalstageapprovalid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Approvazione fase di approvazione

Fase di approvazione nelle approvazioni in più fasi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalstageapproval` |
| Display name | Approvazione fase di approvazione |
| Display (plural) | Approvazioni fase di approvazione |
| Schema name | `approvalstageapproval` |
| Entity set (Web API) | `approvalstageapprovals` |
| Primary id attribute | `approvalstageapprovalid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/approvalstageapprovals?$select=name&$top=10
GET /api/data/v9.2/approvalstageapprovals(<guid>)
POST /api/data/v9.2/approvalstageapprovals
PATCH /api/data/v9.2/approvalstageapprovals(<guid>)
DELETE /api/data/v9.2/approvalstageapprovals(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`allowcancel`, `allowreassign`, `approval`, `approvalstageapprovalid`, `customfields`, `details`, `importsequencenumber`, `itemlink`, `itemlinkdescription`, `modelid`, `modeltype`, `name`, `overriddencreatedon`, `ownerid`, `result`, `sendemailnotification`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `title`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_approvalstageapproval_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalstageapproval_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalstageapproval_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalstageapproval_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_approvalstageapproval` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_approvalstageapproval` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_approvalstageapproval` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_approvalstageapproval` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `approvalstageapproval_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageapproval_SyncErrors` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstageapproval_DuplicateMatchingRecord` | [approvalstageapproval](approvalstageapproval.md) | `duplicaterecordid` | `duplicaterecordid_approvalstageapproval` |
| `approvalstageapproval_DuplicateBaseRecord` | [approvalstageapproval](approvalstageapproval.md) | `baserecordid` | `baserecordid_approvalstageapproval` |
| `approvalstageapproval_AsyncOperations` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstageapproval_MailboxTrackingFolders` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstageapproval_UserEntityInstanceDatas` | [approvalstageapproval](approvalstageapproval.md) | `objectid` | `objectid_approvalstageapproval` |
| `approvalstageapproval_ProcessSession` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstageapproval_BulkDeleteFailures` | [approvalstageapproval](approvalstageapproval.md) | `regardingobjectid` | `regardingobjectid_approvalstageapproval` |
| `approvalstageapproval_PrincipalObjectAttributeAccesses` | [approvalstageapproval](approvalstageapproval.md) | `objectid` | `objectid_approvalstageapproval` |
| `approvalstageapproval_Annotations` | [approvalstageapproval](approvalstageapproval.md) | `objectid` | `objectid_approvalstageapproval` |
| `approvalstageorder_stageapproval_approvalstageapproval` | [approvalstageapproval](approvalstageapproval.md) | `stageapproval` | `stageapproval` |


## Source

Generated from [approvalstageapproval (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='approvalstageapproval')) on 2026-05-07.