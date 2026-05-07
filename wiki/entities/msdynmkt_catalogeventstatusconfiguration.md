---
logical: "msdynmkt_catalogeventstatusconfiguration"
display: "CatalogEventStatusConfiguration"
entitySetName: "msdynmkt_catalogeventstatusconfigurations"
primaryId: "msdynmkt_catalogeventstatusconfigurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# CatalogEventStatusConfiguration

Status configuration for events in a catalog.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_catalogeventstatusconfiguration` |
| Display name | CatalogEventStatusConfiguration |
| Display (plural) | CatalogEventStatusConfigurations |
| Schema name | `msdynmkt_catalogeventstatusconfiguration` |
| Entity set (Web API) | `msdynmkt_catalogeventstatusconfigurations` |
| Primary id attribute | `msdynmkt_catalogeventstatusconfigurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations(<guid>)
POST /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations
PATCH /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_catalogeventstatusconfigurationId`, `msdynmkt_catalogid`, `msdynmkt_eventmetadatastatus`, `msdynmkt_iconwebresourceid`, `msdynmkt_name`, `msdynmkt_uniquename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_catalogeventstatusconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_catalogeventstatusconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_catalogeventstatusconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_catalogeventstatusconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_catalogeventstatusconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_catalog_catalogeventstatusconfiguration` | [catalog](catalog.md) | `msdynmkt_catalogid` | `msdynmkt_catalogid` |
| `owner_msdynmkt_catalogeventstatusconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_catalogeventstatusconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_catalogeventstatusconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_catalogeventstatusconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_catalogeventstatusconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_catalogeventstatusconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_catalogeventstatusconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_catalogeventstatusconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_catalogeventstatusconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_catalogeventstatusconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_catalogeventstatusconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_catalogeventstatusconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_catalogeventstatusconfiguration.md) on 2026-05-06.