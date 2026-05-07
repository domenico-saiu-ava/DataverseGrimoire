---
logical: "msdyn_iotdevicecommand"
display: "Comando dispositivo IoT"
entitySetName: "msdyn_iotdevicecommands"
primaryId: "msdyn_iotdevicecommandid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Comando dispositivo IoT

Rappresenta un messaggio in uscita su un dispositivo connesso a un provider IoT.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicecommand` |
| Display name | Comando dispositivo IoT |
| Display (plural) | Comandi dispositivo IoT |
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

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_command`, `msdyn_commandstatus`, `msdyn_commandstatusreason`, `msdyn_customerasset`, `msdyn_device`, `msdyn_deviceid`, `msdyn_iotdevicecommandid`, `msdyn_message`, `msdyn_name`, `msdyn_parentalert`, `msdyn_sendtoallconnecteddevices`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_customerasset_msdyn_iotdevicecommand_CustomerAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_CustomerAsset` |
| `lk_msdyn_iotdevicecommand_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicecommand_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicecommand_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicecommand_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotdevicecommand` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotdevicecommand` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotdevicecommand` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotdevicecommand` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_iotalert_msdyn_iotdevicecommand_ParentAlert` | [msdyn_iotalert](msdyn_iotalert.md) | `msdyn_parentalert` | `msdyn_ParentAlert` |
| `msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |
| `msdyn_msdyn_iotdevicecommanddefinition_msdyn_iotdevicecommand_Command` | [msdyn_iotdevicecommanddefinition](msdyn_iotdevicecommanddefinition.md) | `msdyn_command` | `msdyn_Command` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `msdyn_lastcommandsent` | `msdyn_LastCommandSent` |
| `msdyn_iotdevicecommand_SyncErrors` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_DuplicateMatchingRecord` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_DuplicateBaseRecord` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `baserecordid` | `baserecordid_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_AsyncOperations` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_MailboxTrackingFolders` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_UserEntityInstanceDatas` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `objectid` | `objectid_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_ProcessSession` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_BulkDeleteFailures` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `objectid` | `objectid_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_connections1` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `record1id` | `record1id_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_connections2` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `record2id` | `record2id_msdyn_iotdevicecommand` |
| `msdyn_iotdevicecommand_Annotations` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `objectid` | `objectid_msdyn_iotdevicecommand` |
| `msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `msdyn_lastcommandsent` | `msdyn_LastCommandSent` |
| `msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent` | [msdyn_iotdevicecommand](msdyn_iotdevicecommand.md) | `msdyn_lastcommandsent` | `msdyn_LastCommandSent` |


## Source

Generated from [msdyn_iotdevicecommand (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdevicecommand')) on 2026-05-07.