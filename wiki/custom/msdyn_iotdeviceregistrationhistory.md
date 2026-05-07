---
logical: "msdyn_iotdeviceregistrationhistory"
display: "Cronologia di registrazione dispositivo IoT"
entitySetName: "msdyn_iotdeviceregistrationhistories"
primaryId: "msdyn_iotdeviceregistrationhistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cronologia di registrazione dispositivo IoT

Tiene traccia degli impegni di registrazione in un dispositivo IoT.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdeviceregistrationhistory` |
| Display name | Cronologia di registrazione dispositivo IoT |
| Display (plural) | Cronologia di registrazione dispositivo IoT |
| Schema name | `msdyn_iotdeviceregistrationhistory` |
| Entity set (Web API) | `msdyn_iotdeviceregistrationhistories` |
| Primary id attribute | `msdyn_iotdeviceregistrationhistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdeviceregistrationhistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdeviceregistrationhistories(<guid>)
POST /api/data/v9.2/msdyn_iotdeviceregistrationhistories
PATCH /api/data/v9.2/msdyn_iotdeviceregistrationhistories(<guid>)
DELETE /api/data/v9.2/msdyn_iotdeviceregistrationhistories(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_action`, `msdyn_device`, `msdyn_iotdeviceregistrationhistoryid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotdeviceregistrationhistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdeviceregistrationhistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdeviceregistrationhistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdeviceregistrationhistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotdeviceregistrationhistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotdeviceregistrationhistory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotdeviceregistrationhistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotdeviceregistrationhistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdeviceregistrationhistory_SyncErrors` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_DuplicateMatchingRecord` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_DuplicateBaseRecord` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `baserecordid` | `baserecordid_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_AsyncOperations` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_MailboxTrackingFolders` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_UserEntityInstanceDatas` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `objectid` | `objectid_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_ProcessSession` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_BulkDeleteFailures` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_PrincipalObjectAttributeAccesses` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `objectid` | `objectid_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_connections1` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `record1id` | `record1id_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_connections2` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `record2id` | `record2id_msdyn_iotdeviceregistrationhistory` |
| `msdyn_iotdeviceregistrationhistory_Annotations` | [msdyn_iotdeviceregistrationhistory](msdyn_iotdeviceregistrationhistory.md) | `objectid` | `objectid_msdyn_iotdeviceregistrationhistory` |


## Source

Generated from [msdyn_iotdeviceregistrationhistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdeviceregistrationhistory')) on 2026-05-07.