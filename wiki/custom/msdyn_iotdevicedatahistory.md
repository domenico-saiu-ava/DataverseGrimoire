---
logical: "msdyn_iotdevicedatahistory"
display: "Cronologia dei dati del dispositivo IoT"
entitySetName: "msdyn_iotdevicedatahistory"
primaryId: "msdyn_iotdevicedatahistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cronologia dei dati del dispositivo IoT

Nome dell'entità che include i dati del dispositivo ogni volta che viene effettuato il pull dei dati del dispositivo tra Dynamics 365 e un provider IoT

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotdevicedatahistory` |
| Display name | Cronologia dei dati del dispositivo IoT |
| Display (plural) | Cronologia dei dati del dispositivo IoT |
| Schema name | `msdyn_iotdevicedatahistory` |
| Entity set (Web API) | `msdyn_iotdevicedatahistory` |
| Primary id attribute | `msdyn_iotdevicedatahistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotdevicedatahistory?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotdevicedatahistory(<guid>)
POST /api/data/v9.2/msdyn_iotdevicedatahistory
PATCH /api/data/v9.2/msdyn_iotdevicedatahistory(<guid>)
DELETE /api/data/v9.2/msdyn_iotdevicedatahistory(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_connectionstate`, `msdyn_connectionstateupdatedtime`, `msdyn_device`, `msdyn_devicereportedproperties`, `msdyn_iotdevicedatahistoryid`, `msdyn_iothubdeviceid`, `msdyn_lastactivitytime`, `msdyn_name`, `msdyn_status`, `msdyn_statusreason`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotdevicedatahistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotdevicedatahistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotdevicedatahistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotdevicedatahistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotdevicedatahistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotdevicedatahistory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotdevicedatahistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotdevicedatahistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device` | [msdyn_iotdevice](msdyn_iotdevice.md) | `msdyn_device` | `msdyn_Device` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotdevicedatahistory_SyncErrors` | [msdyn_iotdevicedatahistory](msdyn_iotdevicedatahistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicedatahistory` |
| `msdyn_iotdevicedatahistory_DuplicateMatchingRecord` | [msdyn_iotdevicedatahistory](msdyn_iotdevicedatahistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotdevicedatahistory` |
| `msdyn_iotdevicedatahistory_DuplicateBaseRecord` | [msdyn_iotdevicedatahistory](msdyn_iotdevicedatahistory.md) | `baserecordid` | `baserecordid_msdyn_iotdevicedatahistory` |
| `msdyn_iotdevicedatahistory_AsyncOperations` | [msdyn_iotdevicedatahistory](msdyn_iotdevicedatahistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicedatahistory` |
| `msdyn_iotdevicedatahistory_MailboxTrackingFolders` | [msdyn_iotdevicedatahistory](msdyn_iotdevicedatahistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicedatahistory` |
| `msdyn_iotdevicedatahistory_UserEntityInstanceDatas` | [msdyn_iotdevicedatahistory](msdyn_iotdevicedatahistory.md) | `objectid` | `objectid_msdyn_iotdevicedatahistory` |
| `msdyn_iotdevicedatahistory_ProcessSession` | [msdyn_iotdevicedatahistory](msdyn_iotdevicedatahistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicedatahistory` |
| `msdyn_iotdevicedatahistory_BulkDeleteFailures` | [msdyn_iotdevicedatahistory](msdyn_iotdevicedatahistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotdevicedatahistory` |
| `msdyn_iotdevicedatahistory_PrincipalObjectAttributeAccesses` | [msdyn_iotdevicedatahistory](msdyn_iotdevicedatahistory.md) | `objectid` | `objectid_msdyn_iotdevicedatahistory` |


## Source

Generated from [msdyn_iotdevicedatahistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotdevicedatahistory')) on 2026-05-07.