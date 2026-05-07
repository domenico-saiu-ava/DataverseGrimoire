---
logical: "msdyn_migrationtracker"
display: "Migration tracker"
entitySetName: "msdyn_migrationtrackers"
primaryId: "msdyn_migrationtrackerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Migration tracker

Entity that tracks the migration process of legacy to modern SLA/ARC items

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_migrationtracker` |
| Display name | Migration tracker |
| Display (plural) | Migration trackers |
| Schema name | `msdyn_migrationtracker` |
| Entity set (Web API) | `msdyn_migrationtrackers` |
| Primary id attribute | `msdyn_migrationtrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_migrationtrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_migrationtrackers(<guid>)
POST /api/data/v9.2/msdyn_migrationtrackers
PATCH /api/data/v9.2/msdyn_migrationtrackers(<guid>)
DELETE /api/data/v9.2/msdyn_migrationtrackers(<guid>)
```

## Attributes

Writable: **30** · Read-only: **16**

### Writable

`CorrelationId`, `ImportSequenceNumber`, `msdyn_CorrelationId`, `msdyn_IsMigrationComplete`, `msdyn_LegacyConvertRuleId`, `msdyn_LegacyConvertRuleItemId`, `msdyn_LegacyRuleIdType`, `msdyn_LegacyRuleItemIdType`, `msdyn_LegacySLAId`, `msdyn_LegacySLAItemId`, `msdyn_MigrationStatus`, `msdyn_MigrationStatusException`, `msdyn_MigrationStatusReason`, `msdyn_migrationtrackerId`, `msdyn_MigrationType`, `msdyn_ModernConvertRuleId`, `msdyn_ModernConvertRuleItemId`, `msdyn_ModernRuleIdType`, `msdyn_ModernRuleItemIdType`, `msdyn_ModernSLAId`, `msdyn_ModernSLAItemId`, `msdyn_Name`, `msdyn_Objecttypecode`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_LegacyRuleIdName`, `msdyn_LegacyRuleItemIdName`, `msdyn_ModernRuleIdName`, `msdyn_ModernRuleItemIdName`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_migrationtracker` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_migrationtracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_migrationtracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_migrationtracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_migrationtracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_migrationtracker_LegacySLA_sla` | [sla](sla.md) | `msdyn_legacyslaid` | `msdyn_LegacySLAId` |
| `msdyn_migrationtracker_LegacySLAItem_slaitem` | [slaitem](slaitem.md) | `msdyn_legacyslaitemid` | `msdyn_LegacySLAItemId` |
| `msdyn_migrationtracker_ModernSLA_sla` | [sla](sla.md) | `msdyn_modernslaid` | `msdyn_ModernSLAId` |
| `msdyn_migrationtracker_ModernSLAItem_slaitem` | [slaitem](slaitem.md) | `msdyn_modernslaitemid` | `msdyn_ModernSLAItemId` |
| `owner_msdyn_migrationtracker` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_migrationtracker` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_migrationtracker` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_migrationtracker_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_migrationtracker_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_migrationtracker_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_migrationtracker_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_migrationtracker_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_migrationtracker_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_migrationtracker_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_migrationtracker_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_migrationtracker.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_migrationtracker.md) on 2026-05-06.