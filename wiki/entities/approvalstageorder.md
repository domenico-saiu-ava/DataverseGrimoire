---
logical: "approvalstageorder"
display: "Approval Stage Order"
entitySetName: "approvalstageorders"
primaryId: "approvalstageorderid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Approval Stage Order

The order of the stages in multi-stage approvals.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalstageorder` |
| Display name | Approval Stage Order |
| Display (plural) | Approval Stage Orders |
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

Writable: **16** · Read-only: **12**

### Writable

`Approval`, `approvalstageorderId`, `ImportSequenceNumber`, `Name`, `OrderNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `StageApproval`, `StageCondition`, `StageIntelligent`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageorder_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |
| `approvalstageorder_stageapproval_approvalstageapproval` | [approvalstageapproval](approvalstageapproval.md) | `stageapproval` | `stageapproval` |
| `approvalstageorder_stagecondition_approvalstagecondition` | [approvalstagecondition](approvalstagecondition.md) | `stagecondition` | `stagecondition` |
| `approvalstageorder_stageintelligent_approvalstageintelligent` | [approvalstageintelligent](approvalstageintelligent.md) | `stageintelligent` | `stageintelligent` |
| `business_unit_approvalstageorder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_approvalstageorder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalstageorder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalstageorder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalstageorder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_approvalstageorder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_approvalstageorder` | [team](team.md) | `owningteam` | `owningteam` |
| `user_approvalstageorder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstageorder_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageorder_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageorder_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `approvalstageorder_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `approvalstageorder_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageorder_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `approvalstageorder_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageorder_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approval_currentstage_approvalstageorder` | _n/a_ | `currentstage` | _n/a_ |


## Source

Generated from [approvalstageorder.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/approvalstageorder.md) on 2026-05-06.