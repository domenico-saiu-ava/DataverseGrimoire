---
logical: "msdynmkt_vibeschannelinstance"
display: "Vibes channel instance"
entitySetName: "msdynmkt_vibeschannelinstances"
primaryId: "msdynmkt_vibeschannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Vibes channel instance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_vibeschannelinstance` |
| Display name | Vibes channel instance |
| Display (plural) | Vibes channel instances |
| Schema name | `msdynmkt_vibeschannelinstance` |
| Entity set (Web API) | `msdynmkt_vibeschannelinstances` |
| Primary id attribute | `msdynmkt_vibeschannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_vibeschannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_vibeschannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_vibeschannelinstances
PATCH /api/data/v9.2/msdynmkt_vibeschannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_vibeschannelinstances(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_name`, `msdynmkt_type`, `msdynmkt_vibeschannelinstanceId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_vibeschannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_vibeschannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_vibeschannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_vibeschannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_vibeschannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_vibeschannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_vibeschannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_vibeschannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_vibeschannelinstance` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_vibeschannelinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_vibeschannelinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_vibeschannelinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_vibeschannelinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_vibeschannelinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_vibeschannelinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_vibeschannelinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_vibeschannelinstance.md) on 2026-05-06.