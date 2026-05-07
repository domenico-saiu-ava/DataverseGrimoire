---
logical: "msdyn_forecastingcache"
display: "Forecasting Cache"
entitySetName: "msdyn_forecastingcaches"
primaryId: "msdyn_forecastingcacheid"
primaryName: "msdyn_cachekey"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`importsequencenumber`, `msdyn_cachekey`, `msdyn_cachevalue`, `msdyn_forecastingcacheid`, `msdyn_keyexpiresat`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastingcache_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastingcache_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastingcache_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastingcache_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_forecastingcache` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastingcache_SyncErrors` | [msdyn_forecastingcache](msdyn_forecastingcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastingcache` |
| `msdyn_forecastingcache_AsyncOperations` | [msdyn_forecastingcache](msdyn_forecastingcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastingcache` |
| `msdyn_forecastingcache_MailboxTrackingFolders` | [msdyn_forecastingcache](msdyn_forecastingcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastingcache` |
| `msdyn_forecastingcache_UserEntityInstanceDatas` | [msdyn_forecastingcache](msdyn_forecastingcache.md) | `objectid` | `objectid_msdyn_forecastingcache` |
| `msdyn_forecastingcache_ProcessSession` | [msdyn_forecastingcache](msdyn_forecastingcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastingcache` |
| `msdyn_forecastingcache_BulkDeleteFailures` | [msdyn_forecastingcache](msdyn_forecastingcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastingcache` |
| `msdyn_forecastingcache_PrincipalObjectAttributeAccesses` | [msdyn_forecastingcache](msdyn_forecastingcache.md) | `objectid` | `objectid_msdyn_forecastingcache` |


## Source

Generated from [msdyn_forecastingcache (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_forecastingcache')) on 2026-05-07.