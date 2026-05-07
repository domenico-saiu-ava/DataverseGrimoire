---
logical: "msdyn_distributedlock"
display: "Distributed Lock"
entitySetName: "msdyn_distributedlocks"
primaryId: "msdyn_distributedlockid"
primaryName: "msdyn_resourceid"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`ImportSequenceNumber`, `msdyn_distributedlockId`, `msdyn_forecastconfigurationid`, `msdyn_lockacquiredat`, `msdyn_lockexpiresat`, `msdyn_lockownerid`, `msdyn_resourceid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_distributedlock_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_distributedlock_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_distributedlock_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_distributedlock_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecastconfiguration_msdyn_distributedlock_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `organization_msdyn_distributedlock` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_distributedlock_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_distributedlock_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_distributedlock_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_distributedlock_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_distributedlock_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_distributedlock_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_distributedlock.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_distributedlock.md) on 2026-05-06.