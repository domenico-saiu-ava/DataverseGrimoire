---
logical: "msdyn_iotprovider"
display: "Provider IoT"
entitySetName: "msdyn_iotproviders"
primaryId: "msdyn_iotproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Provider IoT

Il provider IoT in cui un dispositivo è registrato e tramite cui si svolgono tutte le interazioni con il dispositivo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotprovider` |
| Display name | Provider IoT |
| Display (plural) | Provider IoT |
| Schema name | `msdyn_iotprovider` |
| Entity set (Web API) | `msdyn_iotproviders` |
| Primary id attribute | `msdyn_iotproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotproviders(<guid>)
POST /api/data/v9.2/msdyn_iotproviders
PATCH /api/data/v9.2/msdyn_iotproviders(<guid>)
DELETE /api/data/v9.2/msdyn_iotproviders(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_getaggregateddevicereadingsaction`, `msdyn_iotproviderid`, `msdyn_iotsource`, `msdyn_name`, `msdyn_pulldevicedataaction`, `msdyn_querydevicereadingsaction`, `msdyn_registeraction`, `msdyn_sendcommandaction`, `msdyn_updatedevicedataaction`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotprovider_SyncErrors` | [msdyn_iotprovider](msdyn_iotprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotprovider` |
| `msdyn_iotprovider_DuplicateMatchingRecord` | [msdyn_iotprovider](msdyn_iotprovider.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotprovider` |
| `msdyn_iotprovider_DuplicateBaseRecord` | [msdyn_iotprovider](msdyn_iotprovider.md) | `baserecordid` | `baserecordid_msdyn_iotprovider` |
| `msdyn_iotprovider_AsyncOperations` | [msdyn_iotprovider](msdyn_iotprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotprovider` |
| `msdyn_iotprovider_MailboxTrackingFolders` | [msdyn_iotprovider](msdyn_iotprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotprovider` |
| `msdyn_iotprovider_UserEntityInstanceDatas` | [msdyn_iotprovider](msdyn_iotprovider.md) | `objectid` | `objectid_msdyn_iotprovider` |
| `msdyn_iotprovider_ProcessSession` | [msdyn_iotprovider](msdyn_iotprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotprovider` |
| `msdyn_iotprovider_BulkDeleteFailures` | [msdyn_iotprovider](msdyn_iotprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotprovider` |
| `msdyn_iotprovider_PrincipalObjectAttributeAccesses` | [msdyn_iotprovider](msdyn_iotprovider.md) | `objectid` | `objectid_msdyn_iotprovider` |
| `msdyn_msdyn_iotprovider_msdyn_iotproviderinstance_IoTProvider` | [msdyn_iotprovider](msdyn_iotprovider.md) | `msdyn_iotprovider` | `msdyn_IoTProvider` |


## Source

Generated from [msdyn_iotprovider (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotprovider')) on 2026-05-07.