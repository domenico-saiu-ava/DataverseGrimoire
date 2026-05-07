---
logical: "msdynmkt_metadatastorestate"
display: "Metadata Store State"
entitySetName: "msdynmkt_metadatastorestates"
primaryId: "msdynmkt_metadatastorestateid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Metadata Store State

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_metadatastorestate` |
| Display name | Metadata Store State |
| Display (plural) | Metadata Store States |
| Schema name | `msdynmkt_metadatastorestate` |
| Entity set (Web API) | `msdynmkt_metadatastorestates` |
| Primary id attribute | `msdynmkt_metadatastorestateid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_metadatastorestates?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_metadatastorestates(<guid>)
POST /api/data/v9.2/msdynmkt_metadatastorestates
PATCH /api/data/v9.2/msdynmkt_metadatastorestates(<guid>)
DELETE /api/data/v9.2/msdynmkt_metadatastorestates(<guid>)
```

## Attributes

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_CjoEventsLastCheckedOnTimestamp`, `msdynmkt_DataverseTableLastCheckedOnTimestamp`, `msdynmkt_MaxStoreAgeInSeconds`, `msdynmkt_metadatastorestateId`, `msdynmkt_name`, `msdynmkt_StoreMajorVersion`, `msdynmkt_StoreMinorVersion`, `msdynmkt_StoreState`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_metadatastorestate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_metadatastorestate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_metadatastorestate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_metadatastorestate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_metadatastorestate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_metadatastorestate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_metadatastorestate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_metadatastorestate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_metadatastorestate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadatastorestate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadatastorestate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_metadatastorestate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_metadatastorestate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadatastorestate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_metadatastorestate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_metadatastorestate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_metadatastorestate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_metadatastorestate.md) on 2026-05-06.