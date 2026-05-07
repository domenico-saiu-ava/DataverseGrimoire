---
logical: "msdyn_flow_approval"
display: "Approvazione"
entitySetName: "msdyn_flow_approvals"
primaryId: "msdyn_flow_approvalid"
primaryName: "msdyn_flow_approval_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Approvazione

Approvazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_approval` |
| Display name | Approvazione |
| Display (plural) | Approvazioni |
| Schema name | `msdyn_flow_approval` |
| Entity set (Web API) | `msdyn_flow_approvals` |
| Primary id attribute | `msdyn_flow_approvalid` |
| Primary name attribute | `msdyn_flow_approval_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_approvals?$select=msdyn_flow_approval_name&$top=10
GET /api/data/v9.2/msdyn_flow_approvals(<guid>)
POST /api/data/v9.2/msdyn_flow_approvals
PATCH /api/data/v9.2/msdyn_flow_approvals(<guid>)
DELETE /api/data/v9.2/msdyn_flow_approvals(<guid>)
```

## Attributes

Writable: **40** · Read-only: **10**

### Writable

`currentstage`, `importsequencenumber`, `msdyn_flow_approval_additionalfields`, `msdyn_flow_approval_allowcancel`, `msdyn_flow_approval_allowreassign`, `msdyn_flow_approval_approvalstagekey`, `msdyn_flow_approval_basicapprovalmodel`, `msdyn_flow_approval_category`, `msdyn_flow_approval_completedon`, `msdyn_flow_approval_currentstepnumber`, `msdyn_flow_approval_details`, `msdyn_flow_approval_dueon`, `msdyn_flow_approval_expireson`, `msdyn_flow_approval_itemlink`, `msdyn_flow_approval_itemlinkdescription`, `msdyn_flow_approval_itemlinkhash`, `msdyn_flow_approval_modelid`, `msdyn_flow_approval_modeltype`, `msdyn_flow_approval_name`, `msdyn_flow_approval_partneridhash`, `msdyn_flow_approval_partnermetadata`, `msdyn_flow_approval_priority`, `msdyn_flow_approval_requesttype`, `msdyn_flow_approval_result`, `msdyn_flow_approval_sendemail`, `msdyn_flow_approval_source`, `msdyn_flow_approval_stage`, `msdyn_flow_approval_tags`, `msdyn_flow_approval_templateformid`, `msdyn_flow_approval_templateid`, `msdyn_flow_approval_templateresponseid`, `msdyn_flow_approval_title`, `msdyn_flow_approvalid`, `overriddencreatedon`, `ownerid`, `processid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flow_approval_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_approval_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_approval_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_approval_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flow_approval` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flow_approval` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flow_approval` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flow_approval` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_flow_approval_currentstage_approvalstageorder` | [approvalstageorder](approvalstageorder.md) | `currentstage` | `currentstage` |
| `msdyn_flow_basicapprovalmodelrelationship_approval` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `msdyn_flow_approval_basicapprovalmodel` | `msdyn_flow_approval_basicapprovalmodel` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_approval_SyncErrors` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approval_DuplicateMatchingRecord` | [msdyn_flow_approval](msdyn_flow_approval.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_approval` |
| `msdyn_flow_approval_DuplicateBaseRecord` | [msdyn_flow_approval](msdyn_flow_approval.md) | `baserecordid` | `baserecordid_msdyn_flow_approval` |
| `msdyn_flow_approval_AsyncOperations` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approval_MailboxTrackingFolders` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approval_UserEntityInstanceDatas` | [msdyn_flow_approval](msdyn_flow_approval.md) | `objectid` | `objectid_msdyn_flow_approval` |
| `msdyn_flow_approval_ProcessSession` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approval_BulkDeleteFailures` | [msdyn_flow_approval](msdyn_flow_approval.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approval` |
| `msdyn_flow_approval_PrincipalObjectAttributeAccesses` | [msdyn_flow_approval](msdyn_flow_approval.md) | `objectid` | `objectid_msdyn_flow_approval` |
| `msdyn_flow_approval_Annotations` | [msdyn_flow_approval](msdyn_flow_approval.md) | `objectid` | `objectid_msdyn_flow_approval` |
| `approvalstageapproval_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |
| `approvalstagecondition_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |
| `approvalstageorder_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |
| `approvalstageintelligent_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |
| `msdyn_flow_approvalrelationship_approvalrequests` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_approvalrequest_approval` | `msdyn_flow_approvalrequest_approval` |
| `msdyn_flow_approvalrelationship_approvalresponses` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_approvalresponse_approval` | `msdyn_flow_approvalresponse_approval` |
| `msdyn_flow_approvalrelationship_approvalsteps` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_approvalstep_approval` | `msdyn_flow_approvalstep_approval` |
| `msdyn_flow_approvalrelationship_flowapprovals` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_flowapproval_approval` | `msdyn_flow_flowapproval_approval` |


## Source

Generated from [msdyn_flow_approval (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_approval')) on 2026-05-07.