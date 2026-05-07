---
logical: "msdyn_iotproviderinstance"
display: "IoT Provider Instance"
entitySetName: "msdyn_iotproviderinstances"
primaryId: "msdyn_iotproviderinstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# IoT Provider Instance

An instance of an IoT Provider.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iotproviderinstance` |
| Display name | IoT Provider Instance |
| Display (plural) | IoT Provider Instances |
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_IoTProvider`, `msdyn_iotproviderinstanceId`, `msdyn_name`, `msdyn_ProviderInstanceId`, `msdyn_TimeSeriesInsightsURL`, `msdyn_URL`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iotproviderinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iotproviderinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iotproviderinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iotproviderinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iotproviderinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_iotprovider_msdyn_iotproviderinstance_IoTProvider` | [msdyn_iotprovider](msdyn_iotprovider.md) | `msdyn_iotprovider` | `msdyn_IoTProvider` |
| `owner_msdyn_iotproviderinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iotproviderinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iotproviderinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iotproviderinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotproviderinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotproviderinstance_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iotproviderinstance_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iotproviderinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotproviderinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iotproviderinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iotproviderinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_iotproviderinstance_msdyn_iotdevice_IoTProviderInstance` | _n/a_ | `msdyn_iotproviderinstance` | _n/a_ |
| `msdyn_msdyn_iotproviderinstance_msdyn_iotsettings_DefaultIoTProviderInstance` | _n/a_ | `msdyn_defaultiotproviderinstance` | _n/a_ |


## Source

Generated from [msdyn_iotproviderinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iotproviderinstance.md) on 2026-05-06.