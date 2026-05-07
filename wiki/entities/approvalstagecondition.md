---
logical: "approvalstagecondition"
display: "Approval Stage Condition"
entitySetName: "approvalstageconditions"
primaryId: "approvalstageconditionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Approval Stage Condition

The condition in multi-stage approvals

## Identity

| Property | Value |
| --- | --- |
| Logical name | `approvalstagecondition` |
| Display name | Approval Stage Condition |
| Display (plural) | Approval Stage Conditions |
| Schema name | `approvalstagecondition` |
| Entity set (Web API) | `approvalstageconditions` |
| Primary id attribute | `approvalstageconditionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/approvalstageconditions?$select=name&$top=10
GET /api/data/v9.2/approvalstageconditions(<guid>)
POST /api/data/v9.2/approvalstageconditions
PATCH /api/data/v9.2/approvalstageconditions(<guid>)
DELETE /api/data/v9.2/approvalstageconditions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`Approval`, `approvalstageconditionId`, `ConditionalLogic`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ResultInfo`, `ResultType`, `ResultValue`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstagecondition_approval_msdyn_flow_approval` | [msdyn_flow_approval](msdyn_flow_approval.md) | `approval` | `approval` |
| `business_unit_approvalstagecondition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_approvalstagecondition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_approvalstagecondition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_approvalstagecondition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_approvalstagecondition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_approvalstagecondition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_approvalstagecondition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_approvalstagecondition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `approvalstagecondition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstagecondition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstagecondition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `approvalstagecondition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `approvalstagecondition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstagecondition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `approvalstagecondition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstagecondition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `approvalstageorder_stagecondition_approvalstagecondition` | _n/a_ | `stagecondition` | _n/a_ |


## Source

Generated from [approvalstagecondition.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/approvalstagecondition.md) on 2026-05-06.