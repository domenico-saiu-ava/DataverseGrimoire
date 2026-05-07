---
logical: "msdyn_distributedlock"
display: "Distributed Lock"
entitySetName: "msdyn_distributedlocks"
primaryId: "msdyn_distributedlockid"
primaryName: "msdyn_resourceid"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Distributed Lock

Distributed Locks

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_distributedlock` |
| Display name | Distributed Lock |
| Display (plural) | Distributed Locks |
| Schema name | `msdyn_distributedlock` |
| Entity set (Web API) | `msdyn_distributedlocks` |
| Primary id attribute | `msdyn_distributedlockid` |
| Primary name attribute | `msdyn_resourceid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_distributedlocks?$select=msdyn_resourceid&$top=10
GET /api/data/v9.2/msdyn_distributedlocks(<guid>)
POST /api/data/v9.2/msdyn_distributedlocks
PATCH /api/data/v9.2/msdyn_distributedlocks(<guid>)
DELETE /api/data/v9.2/msdyn_distributedlocks(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_distributedlockid`, `msdyn_forecastconfigurationid`, `msdyn_lockacquiredat`, `msdyn_lockexpiresat`, `msdyn_lockownerid`, `msdyn_resourceid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_distributedlock_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_distributedlock_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_distributedlock_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_distributedlock_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_distributedlock` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_distributedlock_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_distributedlock_SyncErrors` | [msdyn_distributedlock](msdyn_distributedlock.md) | `regardingobjectid` | `regardingobjectid_msdyn_distributedlock` |
| `msdyn_distributedlock_AsyncOperations` | [msdyn_distributedlock](msdyn_distributedlock.md) | `regardingobjectid` | `regardingobjectid_msdyn_distributedlock` |
| `msdyn_distributedlock_MailboxTrackingFolders` | [msdyn_distributedlock](msdyn_distributedlock.md) | `regardingobjectid` | `regardingobjectid_msdyn_distributedlock` |
| `msdyn_distributedlock_UserEntityInstanceDatas` | [msdyn_distributedlock](msdyn_distributedlock.md) | `objectid` | `objectid_msdyn_distributedlock` |
| `msdyn_distributedlock_ProcessSession` | [msdyn_distributedlock](msdyn_distributedlock.md) | `regardingobjectid` | `regardingobjectid_msdyn_distributedlock` |
| `msdyn_distributedlock_BulkDeleteFailures` | [msdyn_distributedlock](msdyn_distributedlock.md) | `regardingobjectid` | `regardingobjectid_msdyn_distributedlock` |
| `msdyn_distributedlock_PrincipalObjectAttributeAccesses` | [msdyn_distributedlock](msdyn_distributedlock.md) | `objectid` | `objectid_msdyn_distributedlock` |


## Source

Generated from [msdyn_distributedlock (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_distributedlock')) on 2026-05-07.