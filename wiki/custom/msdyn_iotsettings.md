---
logical: "msdyn_iotsettings"
display: "Impostazioni IoT"
entitySetName: "msdyn_iotsettingses"
primaryId: "msdyn_iotsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni IoT

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotsettings` |
| Display name | Impostazioni IoT |
| Display (plural) | Impostazioni IoT |
| Schema name | `msdyn_iotsettings` |
| Entity set (Web API) | `msdyn_iotsettingses` |
| Primary id attribute | `msdyn_iotsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iotsettingses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iotsettingses(<guid>)
POST /api/data/v9.2/msdyn_iotsettingses
PATCH /api/data/v9.2/msdyn_iotsettingses(<guid>)
DELETE /api/data/v9.2/msdyn_iotsettingses(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_commandnameproperty`, `msdyn_commandparametersproperty`, `msdyn_defaultiotproviderinstance`, `msdyn_defaultiotsource`, `msdyn_deploymentappurl`, `msdyn_devicedatapullfrequency`, `msdyn_enableiotsuggestions`, `msdyn_enhancedbackgroundprocessing`, `msdyn_iotalertaggregationrule`, `msdyn_iotsettingsid`, `msdyn_name`, `msdyn_nextdevicedatapulltime`, `msdyn_scheduleddevicedatapull`, `msdyn_showwelcome`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_iotsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_iotsettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_iotsettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_iotsettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_iotsettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_iotproviderinstance_msdyn_iotsettings_DefaultIoTProviderInstance` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `msdyn_defaultiotproviderinstance` | `msdyn_DefaultIoTProviderInstance` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotsettings_SyncErrors` | [msdyn_iotsettings](msdyn_iotsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotsettings` |
| `msdyn_iotsettings_DuplicateMatchingRecord` | [msdyn_iotsettings](msdyn_iotsettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_iotsettings` |
| `msdyn_iotsettings_DuplicateBaseRecord` | [msdyn_iotsettings](msdyn_iotsettings.md) | `baserecordid` | `baserecordid_msdyn_iotsettings` |
| `msdyn_iotsettings_AsyncOperations` | [msdyn_iotsettings](msdyn_iotsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotsettings` |
| `msdyn_iotsettings_MailboxTrackingFolders` | [msdyn_iotsettings](msdyn_iotsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotsettings` |
| `msdyn_iotsettings_UserEntityInstanceDatas` | [msdyn_iotsettings](msdyn_iotsettings.md) | `objectid` | `objectid_msdyn_iotsettings` |
| `msdyn_iotsettings_ProcessSession` | [msdyn_iotsettings](msdyn_iotsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotsettings` |
| `msdyn_iotsettings_BulkDeleteFailures` | [msdyn_iotsettings](msdyn_iotsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_iotsettings` |
| `msdyn_iotsettings_PrincipalObjectAttributeAccesses` | [msdyn_iotsettings](msdyn_iotsettings.md) | `objectid` | `objectid_msdyn_iotsettings` |


## Source

Generated from [msdyn_iotsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_iotsettings')) on 2026-05-07.