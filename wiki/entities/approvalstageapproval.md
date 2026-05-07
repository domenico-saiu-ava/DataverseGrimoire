---
logical: "approvalstageapproval"
display: "Approval Stage Approval"
entitySetName: "approvalstageapprovals"
primaryId: "approvalstageapprovalid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Approval Stage Approval

The approval stage in multi-stage approvals

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalstageapproval` |
| Display name | Approval Stage Approval |
| Display (plural) | Approval Stage Approvals |
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

Writable: **22** · Read-only: **12**

### Writable

`AllowCancel`, `AllowReassign`, `Approval`, `approvalstageapprovalId`, `CustomFields`, `Details`, `ImportSequenceNumber`, `ItemLink`, `ItemLinkDescription`, `ModelId`, `ModelType`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Result`, `SendEmailNotification`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Title`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageapproval_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |
| `business_unit_approvalstageapproval` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_approvalstageapproval_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalstageapproval_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalstageapproval_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalstageapproval_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_approvalstageapproval` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_approvalstageapproval` | [team](team.md) | `owningteam` | `owningteam` |
| `user_approvalstageapproval` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageapproval_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `approvalstageapproval_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageapproval_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageapproval_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `approvalstageapproval_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `approvalstageapproval_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageapproval_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `approvalstageapproval_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageapproval_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageorder_stageapproval_approvalstageapproval` | _n/a_ | `stageapproval` | _n/a_ |


## Source

Generated from [approvalstageapproval.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/approvalstageapproval.md) on 2026-05-06.