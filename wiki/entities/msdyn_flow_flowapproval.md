---
logical: "msdyn_flow_flowapproval"
display: "Flow Approval"
entitySetName: "msdyn_flow_flowapprovals"
primaryId: "msdyn_flow_flowapprovalid"
primaryName: "msdyn_flow_flowapproval_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Approval

Microsoft Flow data attached to an approval.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_flowapproval` |
| Display name | Flow Approval |
| Display (plural) | Flow Approvals |
| Schema name | `msdyn_flow_flowapproval` |
| Entity set (Web API) | `msdyn_flow_flowapprovals` |
| Primary id attribute | `msdyn_flow_flowapprovalid` |
| Primary name attribute | `msdyn_flow_flowapproval_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_flowapprovals?$select=msdyn_flow_flowapproval_name&$top=10
GET /api/data/v9.2/msdyn_flow_flowapprovals(<guid>)
POST /api/data/v9.2/msdyn_flow_flowapprovals
PATCH /api/data/v9.2/msdyn_flow_flowapprovals(<guid>)
DELETE /api/data/v9.2/msdyn_flow_flowapprovals(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_flow_flowapproval_approval`, `msdyn_flow_flowapproval_flowculture`, `msdyn_flow_flowapproval_flowid`, `msdyn_flow_flowapproval_flowname`, `msdyn_flow_flowapproval_flownotificationuri`, `msdyn_flow_flowapproval_flowrunsequenceid`, `msdyn_flow_flowapproval_name`, `msdyn_flow_flowapproval_sendflowemail`, `msdyn_flow_flowapproval_sendflowpush`, `msdyn_flow_flowapprovalId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flow_flowapproval` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flow_flowapproval_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_flowapproval_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_flowapproval_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_flowapproval_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_flow_approvalrelationship_flowapprovals` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_flowapproval_approval` | `msdyn_flow_flowapproval_approval` |
| `owner_msdyn_flow_flowapproval` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flow_flowapproval` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flow_flowapproval` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_flowapproval_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_flowapproval_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_flowapproval_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flow_flowapproval_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flow_flowapproval_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_flowapproval_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_flowapproval_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_flowapproval_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_flow_flowapproval.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_flow_flowapproval.md) on 2026-05-06.