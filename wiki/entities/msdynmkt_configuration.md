---
logical: "msdynmkt_configuration"
display: "Configuration"
entitySetName: "msdynmkt_configurations"
primaryId: "msdynmkt_configurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_configuration` |
| Display name | Configuration |
| Display (plural) | Configurations |
| Schema name | `msdynmkt_configuration` |
| Entity set (Web API) | `msdynmkt_configurations` |
| Primary id attribute | `msdynmkt_configurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_configurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_configurations(<guid>)
POST /api/data/v9.2/msdynmkt_configurations
PATCH /api/data/v9.2/msdynmkt_configurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_configurations(<guid>)
```

## Attributes

Writable: **22** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_ciconnectedon`, `msdynmkt_ciprovisionjobid`, `msdynmkt_cistatus`, `msdynmkt_configcacheexpirationdate`, `msdynmkt_ConfigCacheExpirationPeriodInMs`, `msdynmkt_configurationId`, `msdynmkt_default`, `msdynmkt_DiscoveryEndpointUrl`, `msdynmkt_httptimeout`, `msdynmkt_maxretryattempts`, `msdynmkt_name`, `msdynmkt_organization_config`, `msdynmkt_tokenauthenticationresource`, `msdynmkt_UseBasicAuth`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_configuration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_configuration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_configuration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_configuration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_configuration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_configuration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_configuration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_configuration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_configuration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_configuration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_configuration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_configuration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_configuration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_configuration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_configuration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_configuration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_configuration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_configuration.md) on 2026-05-06.