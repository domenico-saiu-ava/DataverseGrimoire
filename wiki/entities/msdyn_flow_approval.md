---
logical: "msdyn_flow_approval"
display: "Approval"
entitySetName: "msdyn_flow_approvals"
primaryId: "msdyn_flow_approvalid"
primaryName: "msdyn_flow_approval_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Approval

An approval.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_approval` |
| Display name | Approval |
| Display (plural) | Approvals |
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

Writable: **41** · Read-only: **12**

### Writable

`CurrentStage`, `ImportSequenceNumber`, `msdyn_flow_approval_additionalfields`, `msdyn_flow_approval_allowreassign`, `msdyn_flow_approval_approvalstagekey`, `msdyn_flow_approval_basicapprovalmodel`, `msdyn_flow_approval_category`, `msdyn_flow_approval_completedon`, `msdyn_flow_approval_currentstepnumber`, `msdyn_flow_approval_details`, `msdyn_flow_approval_dueon`, `msdyn_flow_approval_expireson`, `msdyn_flow_approval_itemlink`, `msdyn_flow_approval_itemlinkdescription`, `msdyn_flow_approval_itemlinkhash`, `msdyn_flow_approval_modelid`, `msdyn_flow_approval_modeltype`, `msdyn_flow_approval_name`, `msdyn_flow_approval_partneridhash`, `msdyn_flow_approval_partnermetadata`, `msdyn_flow_approval_priority`, `msdyn_flow_approval_requesttype`, `msdyn_flow_approval_result`, `msdyn_flow_approval_sendemail`, `msdyn_flow_approval_source`, `msdyn_flow_approval_stage`, `msdyn_flow_approval_tags`, `msdyn_flow_approval_templateformid`, `msdyn_flow_approval_templateid`, `msdyn_flow_approval_templateresponseId`, `msdyn_flow_approval_title`, `msdyn_flow_approvalId`, `new_msdyn_flow_approval_allowcancel`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProcessId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flow_approval` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flow_approval_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_approval_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_approval_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_approval_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_flow_approval_currentstage_approvalstageorder` | [approvalstageorder](approvalstageorder.md) | `currentstage` | `currentstage` |
| `msdyn_flow_basicapprovalmodelrelationship_approval` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `msdyn_flow_approval_basicapprovalmodel` | `msdyn_flow_approval_basicapprovalmodel` |
| `owner_msdyn_flow_approval` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flow_approval` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flow_approval` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageapproval_approval_msdyn_flow_approval` | _n/a_ | `approval` | _n/a_ |
| `approvalstagecondition_approval_msdyn_flow_approval` | _n/a_ | `approval` | _n/a_ |
| `approvalstageintelligent_approval_msdyn_flow_approval` | _n/a_ | `approval` | _n/a_ |
| `approvalstageorder_approval_msdyn_flow_approval` | _n/a_ | `approval` | _n/a_ |
| `msdyn_flow_approval_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_approval_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approval_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approval_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flow_approval_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flow_approval_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approval_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_approval_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approval_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalrelationship_approvalrequests` | _n/a_ | `msdyn_flow_approvalrequest_approval` | _n/a_ |
| `msdyn_flow_approvalrelationship_approvalresponses` | _n/a_ | `msdyn_flow_approvalresponse_approval` | _n/a_ |
| `msdyn_flow_approvalrelationship_approvalsteps` | _n/a_ | `msdyn_flow_approvalstep_approval` | _n/a_ |
| `msdyn_flow_approvalrelationship_flowapprovals` | _n/a_ | `msdyn_flow_flowapproval_approval` | _n/a_ |


## Source

Generated from [msdyn_flow_approval.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_flow_approval.md) on 2026-05-06.