---
logical: "msdyn_forecastingcache"
display: "Forecasting Cache"
entitySetName: "msdyn_forecastingcaches"
primaryId: "msdyn_forecastingcacheid"
primaryName: "msdyn_cachekey"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Forecasting Cache

Forecasting Cache

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastingcache` |
| Display name | Forecasting Cache |
| Display (plural) | Forecasting Cache |
| Schema name | `msdyn_forecastingcache` |
| Entity set (Web API) | `msdyn_forecastingcaches` |
| Primary id attribute | `msdyn_forecastingcacheid` |
| Primary name attribute | `msdyn_cachekey` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastingcaches?$select=msdyn_cachekey&$top=10
GET /api/data/v9.2/msdyn_forecastingcaches(<guid>)
POST /api/data/v9.2/msdyn_forecastingcaches
PATCH /api/data/v9.2/msdyn_forecastingcaches(<guid>)
DELETE /api/data/v9.2/msdyn_forecastingcaches(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_cachekey`, `msdyn_cachevalue`, `msdyn_forecastingcacheId`, `msdyn_keyexpiresat`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastingcache_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastingcache_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastingcache_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastingcache_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_forecastingcache` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastingcache_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastingcache_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastingcache_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastingcache_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_forecastingcache_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastingcache_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_forecastingcache.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_forecastingcache.md) on 2026-05-06.