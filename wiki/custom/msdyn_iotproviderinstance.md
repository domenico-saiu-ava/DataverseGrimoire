---
logical: "msdyn_iotproviderinstance"
display: "Istanza del provider IoT"
entitySetName: "msdyn_iotproviderinstances"
primaryId: "msdyn_iotproviderinstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Istanza del provider IoT

Istanza di un provider IoT.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotproviderinstance` |
| Display name | Istanza del provider IoT |
| Display (plural) | Istanze del provider IoT |
| Schema name | `msdyn_iotproviderinstance` |
| Entity set (Web API) | `msdyn_iotproviderinstances` |
| Primary id attribute | `msdyn_iotproviderinstanceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotproviderinstances?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotproviderinstances(<guid>)
POST /api/data/v9.2/msdyn_iotproviderinstances
PATCH /api/data/v9.2/msdyn_iotproviderinstances(<guid>)
DELETE /api/data/v9.2/msdyn_iotproviderinstances(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_iotprovider`, `msdyn_iotproviderinstanceid`, `msdyn_name`, `msdyn_providerinstanceid`, `msdyn_timeseriesinsightsurl`, `msdyn_url`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotproviderinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotproviderinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotproviderinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotproviderinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotproviderinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotproviderinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotproviderinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotproviderinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_iotprovider_msdyn_iotproviderinstance_IoTProvider` | [msdyn_iotprovider](msdyn_iotprovider.md) | `msdyn_iotprovider` | `msdyn_IoTProvider` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotproviderinstance_SyncErrors` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotproviderinstance` |
| `msdyn_iotproviderinstance_DuplicateMatchingRecord` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotproviderinstance` |
| `msdyn_iotproviderinstance_DuplicateBaseRecord` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `baserecordid` | `baserecordid_msdyn_iotproviderinstance` |
| `msdyn_iotproviderinstance_AsyncOperations` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotproviderinstance` |
| `msdyn_iotproviderinstance_MailboxTrackingFolders` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotproviderinstance` |
| `msdyn_iotproviderinstance_UserEntityInstanceDatas` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `objectid` | `objectid_msdyn_iotproviderinstance` |
| `msdyn_iotproviderinstance_ProcessSession` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotproviderinstance` |
| `msdyn_iotproviderinstance_BulkDeleteFailures` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotproviderinstance` |
| `msdyn_iotproviderinstance_PrincipalObjectAttributeAccesses` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `objectid` | `objectid_msdyn_iotproviderinstance` |
| `msdyn_msdyn_iotproviderinstance_msdyn_iotdevice_IoTProviderInstance` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `msdyn_iotproviderinstance` | `msdyn_IoTProviderInstance` |
| `msdyn_msdyn_iotproviderinstance_msdyn_iotsettings_DefaultIoTProviderInstance` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `msdyn_defaultiotproviderinstance` | `msdyn_DefaultIoTProviderInstance` |


## Source

Generated from [msdyn_iotproviderinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotproviderinstance')) on 2026-05-07.