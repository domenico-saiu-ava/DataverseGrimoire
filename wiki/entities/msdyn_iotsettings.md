---
logical: "msdyn_iotsettings"
display: "IoT Settings"
entitySetName: "msdyn_iotsettingses"
primaryId: "msdyn_iotsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotsettings` |
| Display name | IoT Settings |
| Display (plural) | IoT Settings |
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

Writable: **22** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_CommandNameProperty`, `msdyn_CommandParametersProperty`, `msdyn_DefaultIoTProviderInstance`, `msdyn_defaultiotsource`, `msdyn_DeploymentAppURL`, `msdyn_devicedatapullfrequency`, `msdyn_EnableIoTSuggestions`, `msdyn_EnhancedBackgroundProcessing`, `msdyn_IoTAlertAggregationRule`, `msdyn_iotsettingsId`, `msdyn_name`, `msdyn_NextDeviceDataPullTime`, `msdyn_ScheduledDeviceDataPull`, `msdyn_ShowWelcome`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotsettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_iotproviderinstance_msdyn_iotsettings_DefaultIoTProviderInstance` | [msdyn_iotproviderinstance](msdyn_iotproviderinstance.md) | `msdyn_defaultiotproviderinstance` | `msdyn_DefaultIoTProviderInstance` |
| `owner_msdyn_iotsettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotsettings` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotsettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotsettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotsettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotsettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotsettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotsettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotsettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotsettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotsettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_iotsettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotsettings.md) on 2026-05-06.