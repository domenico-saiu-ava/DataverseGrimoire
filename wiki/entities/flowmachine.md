---
logical: "flowmachine"
display: "Flow Machine"
entitySetName: "flowmachines"
primaryId: "flowmachineid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flow Machine

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachine` |
| Display name | Flow Machine |
| Display (plural) | Flow Machines |
| Schema name | `flowmachine` |
| Entity set (Web API) | `flowmachines` |
| Primary id attribute | `flowmachineid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowmachines?$select=name&$top=10
GET /api/data/v9.2/flowmachines(<guid>)
POST /api/data/v9.2/flowmachines
PATCH /api/data/v9.2/flowmachines(<guid>)
DELETE /api/data/v9.2/flowmachines(<guid>)
```

## Attributes

Writable: **26** · Read-only: **13**

### Writable

`AgentVersion`, `ConnectivityConfiguration`, `Description`, `FlowMachineGroupId`, `FlowMachineImageVersionId`, `FlowMachineNetworkId`, `HostedMachineError`, `HostedMachineState`, `HostingType`, `ImportSequenceNumber`, `KeyDeliveryStatus`, `KeyReceivedDate`, `LastHeartbeatDate`, `LastKnownPictureInPictureSupport`, `MachineMetadata`, `name`, `OvercapacitySince`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `SessionCapacity`, `SnapshotStartedAt`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `flowmachineId`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_flowmachine` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowmachine_flowmachineimageversion` | [flowmachineimageversion](flowmachineimageversion.md) | `flowmachineimageversionid` | `FlowMachineImageVersionId` |
| `flowmachine_flowmachinenetwork` | [flowmachinenetwork](flowmachinenetwork.md) | `flowmachinenetworkid` | `FlowMachineNetworkId` |
| `flowmachinegroup_flowmachine` | [flowmachinegroup](flowmachinegroup.md) | `flowmachinegroupid` | `FlowMachineGroupId` |
| `lk_flowmachine_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachine_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachine_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachine_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_flowmachine` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_flowmachine` | [team](team.md) | `owningteam` | `owningteam` |
| `user_flowmachine` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowcapacityassignment_flowmachine` | _n/a_ | `regarding` | _n/a_ |
| `flowevent_flowmachine` | _n/a_ | `parentobjectid` | _n/a_ |
| `flowmachine_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachine_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachine_flowlog_flowmachineid` | _n/a_ | `flowmachineid` | _n/a_ |
| `flowmachine_flowsession_MachineId` | _n/a_ | `machineid` | _n/a_ |
| `flowmachine_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachine_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `flowmachine_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachine_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `flowmachineimageversion_flowmachine` | _n/a_ | `sourcemachineid` | _n/a_ |


## Source

Generated from [flowmachine.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/flowmachine.md) on 2026-05-06.