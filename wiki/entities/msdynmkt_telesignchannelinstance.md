---
logical: "msdynmkt_telesignchannelinstance"
display: "TeleSign channel instance"
entitySetName: "msdynmkt_telesignchannelinstances"
primaryId: "msdynmkt_telesignchannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# TeleSign channel instance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_telesignchannelinstance` |
| Display name | TeleSign channel instance |
| Display (plural) | TeleSign channel instances |
| Schema name | `msdynmkt_telesignchannelinstance` |
| Entity set (Web API) | `msdynmkt_telesignchannelinstances` |
| Primary id attribute | `msdynmkt_telesignchannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_telesignchannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_telesignchannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_telesignchannelinstances
PATCH /api/data/v9.2/msdynmkt_telesignchannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_telesignchannelinstances(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_name`, `msdynmkt_telesignchannelinstanceId`, `msdynmkt_type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_telesignchannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_telesignchannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_telesignchannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_telesignchannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_telesignchannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_telesignchannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_telesignchannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_telesignchannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_telesignchannelinstance` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_telesignchannelinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_telesignchannelinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_telesignchannelinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_telesignchannelinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_telesignchannelinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_telesignchannelinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_telesignchannelinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_telesignchannelinstance.md) on 2026-05-06.