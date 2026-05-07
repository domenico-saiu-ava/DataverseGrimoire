---
logical: "approvalstageorder"
display: "Ordine fase di approvazione"
entitySetName: "approvalstageorders"
primaryId: "approvalstageorderid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ordine fase di approvazione

Ordine delle fasi nelle approvazioni in più fasi.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalstageorder` |
| Display name | Ordine fase di approvazione |
| Display (plural) | Ordini fase di approvazione |
| Schema name | `approvalstageorder` |
| Entity set (Web API) | `approvalstageorders` |
| Primary id attribute | `approvalstageorderid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/approvalstageorders?$select=name&$top=10
GET /api/data/v9.2/approvalstageorders(<guid>)
POST /api/data/v9.2/approvalstageorders
PATCH /api/data/v9.2/approvalstageorders(<guid>)
DELETE /api/data/v9.2/approvalstageorders(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`approval`, `approvalstageorderid`, `importsequencenumber`, `name`, `ordernumber`, `overriddencreatedon`, `ownerid`, `stageapproval`, `stagecondition`, `stageintelligent`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_approvalstageorder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalstageorder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalstageorder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalstageorder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_approvalstageorder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_approvalstageorder` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_approvalstageorder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_approvalstageorder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `approvalstageorder_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |
| `approvalstageorder_stageapproval_approvalstageapproval` | [approvalstageapproval](approvalstageapproval.md) | `stageapproval` | `stageapproval` |
| `approvalstageorder_stagecondition_approvalstagecondition` | [approvalstagecondition](approvalstagecondition.md) | `stagecondition` | `stagecondition` |
| `approvalstageorder_stageintelligent_approvalstageintelligent` | [approvalstageintelligent](approvalstageintelligent.md) | `stageintelligent` | `stageintelligent` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageorder_SyncErrors` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `approvalstageorder_DuplicateMatchingRecord` | [approvalstageorder](approvalstageorder.md) | `duplicaterecordid` | `duplicaterecordid_approvalstageorder` |
| `approvalstageorder_DuplicateBaseRecord` | [approvalstageorder](approvalstageorder.md) | `baserecordid` | `baserecordid_approvalstageorder` |
| `approvalstageorder_AsyncOperations` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `approvalstageorder_MailboxTrackingFolders` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `approvalstageorder_UserEntityInstanceDatas` | [approvalstageorder](approvalstageorder.md) | `objectid` | `objectid_approvalstageorder` |
| `approvalstageorder_ProcessSession` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `approvalstageorder_BulkDeleteFailures` | [approvalstageorder](approvalstageorder.md) | `regardingobjectid` | `regardingobjectid_approvalstageorder` |
| `approvalstageorder_PrincipalObjectAttributeAccesses` | [approvalstageorder](approvalstageorder.md) | `objectid` | `objectid_approvalstageorder` |
| `msdyn_flow_approval_currentstage_approvalstageorder` | [approvalstageorder](approvalstageorder.md) | `currentstage` | `currentstage` |


## Source

Generated from [approvalstageorder (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='approvalstageorder')) on 2026-05-07.