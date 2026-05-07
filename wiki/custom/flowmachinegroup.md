---
logical: "flowmachinegroup"
display: "Gruppo di computer del flusso"
entitySetName: "flowmachinegroups"
primaryId: "flowmachinegroupid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Gruppo di computer del flusso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowmachinegroup` |
| Display name | Gruppo di computer del flusso |
| Display (plural) | Gruppi di computer del flusso |
| Schema name | `flowmachinegroup` |
| Entity set (Web API) | `flowmachinegroups` |
| Primary id attribute | `flowmachinegroupid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowmachinegroups?$select=name&$top=10
GET /api/data/v9.2/flowmachinegroups(<guid>)
POST /api/data/v9.2/flowmachinegroups
PATCH /api/data/v9.2/flowmachinegroups(<guid>)
DELETE /api/data/v9.2/flowmachinegroups(<guid>)
```

## Attributes

Writable: **35** · Read-only: **17**

### Writable

`description`, `disconnectionplannedon`, `domainsetting`, `flowgrouptype`, `flowmachineimage`, `flowmachinenetwork`, `groupmetadata`, `importsequencenumber`, `iscustomizable`, `keycreationdate`, `keyexpirygraceperiod`, `keyvalidityperiod`, `lastrundate`, `managedversion`, `managementtype`, `maxmanagedmachinecount`, `name`, `overriddencreatedon`, `ownerid`, `passwordchangedby`, `passwordchangeddate`, `preferredqueuingtype`, `primarykeypackage`, `primarypublickey`, `provisioningerror`, `provisioningstate`, `rotationstartedby`, `secondarykeypackage`, `secondarypublickey`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `trytoreusewindowssession`, `usagetype`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `flowmachinegroupid`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowmachinegroup_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowmachinegroup_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowmachinegroup_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowmachinegroup_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowmachinegroup` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowmachinegroup` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowmachinegroup` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowmachinegroup` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `flowmachinegroup_PasswordChangedBy` | [systemuser](systemuser.md) | `passwordchangedby` | `PasswordChangedBy` |
| `flowmachinegroup_RotationStartedBy` | [systemuser](systemuser.md) | `rotationstartedby` | `RotationStartedBy` |
| `flowmachinegroup_flowmachineimage` | [flowmachineimage](flowmachineimage.md) | `flowmachineimage` | `flowmachineimage` |
| `flowmachinegroup_flowmachinenetwork` | [flowmachinenetwork](flowmachinenetwork.md) | `flowmachinenetwork` | `flowmachinenetwork` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowmachinegroup_flowlog_parentobjectid` | [flowmachinegroup](flowmachinegroup.md) | `parentobjectid` | `parentobjectid_flowmachinegroup` |
| `flowmachinegroup_flowlog_flowmachinegroupid` | [flowmachinegroup](flowmachinegroup.md) | `flowmachinegroupid` | `flowmachinegroupid` |
| `flowmachinegroup_SyncErrors` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachinegroup_DuplicateMatchingRecord` | [flowmachinegroup](flowmachinegroup.md) | `duplicaterecordid` | `duplicaterecordid_flowmachinegroup` |
| `flowmachinegroup_DuplicateBaseRecord` | [flowmachinegroup](flowmachinegroup.md) | `baserecordid` | `baserecordid_flowmachinegroup` |
| `flowmachinegroup_AsyncOperations` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachinegroup_MailboxTrackingFolders` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachinegroup_UserEntityInstanceDatas` | [flowmachinegroup](flowmachinegroup.md) | `objectid` | `objectid_flowmachinegroup` |
| `flowmachinegroup_ProcessSession` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachinegroup_BulkDeleteFailures` | [flowmachinegroup](flowmachinegroup.md) | `regardingobjectid` | `regardingobjectid_flowmachinegroup` |
| `flowmachinegroup_PrincipalObjectAttributeAccesses` | [flowmachinegroup](flowmachinegroup.md) | `objectid` | `objectid_flowmachinegroup` |
| `flowmachinegroup_flowmachine` | [flowmachinegroup](flowmachinegroup.md) | `flowmachinegroupid` | `FlowMachineGroupId` |
| `flowmachinegroup_flowsession_MachineGroupId` | [flowmachinegroup](flowmachinegroup.md) | `machinegroupid` | `MachineGroupId` |
| `flowevent_flowmachinegroup` | [flowmachinegroup](flowmachinegroup.md) | `parentobjectid` | `parentobjectid_flowmachinegroup` |
| `flowcapacityassignment_flowmachinegroup` | [flowmachinegroup](flowmachinegroup.md) | `regarding` | `regarding_flowmachinegroup` |
| `flowcredentialapplication_flowmachinegroup` | [flowmachinegroup](flowmachinegroup.md) | `flowmachinegroupid` | `flowmachinegroupid` |


## Source

Generated from [flowmachinegroup (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowmachinegroup')) on 2026-05-07.