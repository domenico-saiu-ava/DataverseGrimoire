---
logical: "msdyn_iotdevicecommand"
display: "IoT Device Command"
entitySetName: "msdyn_iotdevicecommands"
primaryId: "msdyn_iotdevicecommandid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Device Command

Represents an outgoing message to a device connected to an IoT provider.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicecommand` |
| Display name | IoT Device Command |
| Display (plural) | IoT Device Commands |
| Schema name | `msdyn_iotdevicecommand` |
| Entity set (Web API) | `msdyn_iotdevicecommands` |
| Primary id attribute | `msdyn_iotdevicecommandid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdevicecommands?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdevicecommands(<guid>)
POST /api/data/v9.2/msdyn_iotdevicecommands
PATCH /api/data/v9.2/msdyn_iotdevicecommands(<guid>)
DELETE /api/data/v9.2/msdyn_iotdevicecommands(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Command`, `msdyn_CommandStatus`, `msdyn_CommandStatusReason`, `msdyn_CustomerAsset`, `msdyn_Device`, `msdyn_DeviceID`, `msdyn_iotdevicecommandId`, `msdyn_Message`, `msdyn_name`, `msdyn_ParentAlert`, `msdyn_SendToAllConnectedDevices`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotdevicecommand` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotdevicecommand_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicecommand_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicecommand_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicecommand_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_customerasset_msdyn_iotdevicecommand_CustomerAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_CustomerAsset` |
| `msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert` | [msdyn_iotalert](msdyn_iotalert.md) | `msdyn_parentalert` | `msdyn_ParentAlert` |
| `msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |
| `msdyn_msdyn_iotdevicecommanddefinition_msdyn_iotdevicecommand_Command` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `msdyn_command` | `msdyn_Command` |
| `owner_msdyn_iotdevicecommand` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotdevicecommand` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotdevicecommand` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicecommand_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdevicecommand_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecommand_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecommand_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_iotdevicecommand_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_iotdevicecommand_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotdevicecommand_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotdevicecommand_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotdevicecommand_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotdevicecommand_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent` | _n/a_ | `msdyn_lastcommandsent` | _n/a_ |
| `msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent` | _n/a_ | `msdyn_lastcommandsent` | _n/a_ |
| `msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent` | _n/a_ | `msdyn_lastcommandsent` | _n/a_ |


## Source

Generated from [msdyn_iotdevicecommand.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotdevicecommand.md) on 2026-05-06.