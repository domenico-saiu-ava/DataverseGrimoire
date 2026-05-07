---
logical: "flowmachine"
display: "Computer del flusso"
entitySetName: "flowmachines"
primaryId: "flowmachineid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Computer del flusso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachine` |
| Display name | Computer del flusso |
| Display (plural) | Computer del flusso |
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

Writable: **25** · Read-only: **11**

### Writable

`agentversion`, `connectivityconfiguration`, `description`, `flowmachinegroupid`, `flowmachineimageversionid`, `flowmachinenetworkid`, `hostedmachineerror`, `hostedmachinestate`, `hostingtype`, `importsequencenumber`, `keydeliverystatus`, `keyreceiveddate`, `lastheartbeatdate`, `lastknownpictureinpicturesupport`, `machinemetadata`, `name`, `overcapacitysince`, `overriddencreatedon`, `ownerid`, `sessioncapacity`, `snapshotstartedat`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `flowmachineid`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowmachine_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachine_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachine_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachine_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowmachine` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowmachine` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowmachine` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowmachine` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowmachinegroup_flowmachine` | [flowmachinegroup](flowmachinegroup.md) | `flowmachinegroupid` | `FlowMachineGroupId` |
| `flowmachine_flowmachineimageversion` | [flowmachineimageversion](flowmachineimageversion.md) | `flowmachineimageversionid` | `FlowMachineImageVersionId` |
| `flowmachine_flowmachinenetwork` | [flowmachinenetwork](flowmachinenetwork.md) | `flowmachinenetworkid` | `FlowMachineNetworkId` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowmachine_flowlog_flowmachineid` | [flowmachine](flowmachine.md) | `flowmachineid` | `flowmachineid` |
| `flowmachine_SyncErrors` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachine_AsyncOperations` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachine_MailboxTrackingFolders` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachine_UserEntityInstanceDatas` | [flowmachine](flowmachine.md) | `objectid` | `objectid_flowmachine` |
| `flowmachine_ProcessSession` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachine_BulkDeleteFailures` | [flowmachine](flowmachine.md) | `regardingobjectid` | `regardingobjectid_flowmachine` |
| `flowmachine_PrincipalObjectAttributeAccesses` | [flowmachine](flowmachine.md) | `objectid` | `objectid_flowmachine` |
| `flowmachine_flowsession_MachineId` | [flowmachine](flowmachine.md) | `machineid` | `MachineId` |
| `flowevent_flowmachine` | [flowmachine](flowmachine.md) | `parentobjectid` | `parentobjectid_flowmachine` |
| `flowcapacityassignment_flowmachine` | [flowmachine](flowmachine.md) | `regarding` | `regarding_flowmachine` |
| `flowmachineimageversion_flowmachine` | [flowmachine](flowmachine.md) | `sourcemachineid` | `sourcemachineid_flowmachine` |


## Source

Generated from [flowmachine (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowmachine')) on 2026-05-07.