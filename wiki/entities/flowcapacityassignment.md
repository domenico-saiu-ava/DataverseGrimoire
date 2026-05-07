---
logical: "flowcapacityassignment"
display: "Flow Capacity Assignment"
entitySetName: "flowcapacityassignments"
primaryId: "flowcapacityassignmentid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Capacity Assignment

Capacity assignment for usage in Power Automate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowcapacityassignment` |
| Display name | Flow Capacity Assignment |
| Display (plural) | Flow Capacity Assignments |
| Schema name | `flowcapacityassignment` |
| Entity set (Web API) | `flowcapacityassignments` |
| Primary id attribute | `flowcapacityassignmentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowcapacityassignments?$select=name&$top=10
GET /api/data/v9.2/flowcapacityassignments(<guid>)
POST /api/data/v9.2/flowcapacityassignments
PATCH /api/data/v9.2/flowcapacityassignments(<guid>)
DELETE /api/data/v9.2/flowcapacityassignments(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`AllocationOrigin`, `AllowAutoAllocation`, `CapacityOverage`, `CapacitySource`, `CapacityType`, `Count`, `flowcapacityassignmentId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `regarding`, `regardingIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowcapacityassignment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowcapacityassignment_flowmachine` | [flowmachine](flowmachine.md) | `regarding` | `regarding_flowmachine` |
| `flowcapacityassignment_flowmachinegroup` | [flowmachinegroup](flowmachinegroup.md) | `regarding` | `regarding_flowmachinegroup` |
| `flowcapacityassignment_msdyn_pminferredtask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regarding` | `regarding_msdyn_pminferredtask` |
| `flowcapacityassignment_workflow` | [workflow](workflow.md) | `regarding` | `regarding_workflow` |
| `lk_flowcapacityassignment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowcapacityassignment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowcapacityassignment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowcapacityassignment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowcapacityassignment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowcapacityassignment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowcapacityassignment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowcapacityassignment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowcapacityassignment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowcapacityassignment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowcapacityassignment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowcapacityassignment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowcapacityassignment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [flowcapacityassignment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowcapacityassignment.md) on 2026-05-06.