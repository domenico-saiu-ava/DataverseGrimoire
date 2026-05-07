---
logical: "msdynmkt_infobipchannelinstance"
display: "Infobip channel instance"
entitySetName: "msdynmkt_infobipchannelinstances"
primaryId: "msdynmkt_infobipchannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Infobip channel instance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_infobipchannelinstance` |
| Display name | Infobip channel instance |
| Display (plural) | Infobip channel instances |
| Schema name | `msdynmkt_infobipchannelinstance` |
| Entity set (Web API) | `msdynmkt_infobipchannelinstances` |
| Primary id attribute | `msdynmkt_infobipchannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_infobipchannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_infobipchannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_infobipchannelinstances
PATCH /api/data/v9.2/msdynmkt_infobipchannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_infobipchannelinstances(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_infobipchannelinstanceId`, `msdynmkt_name`, `msdynmkt_type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_infobipchannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_infobipchannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_infobipchannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_infobipchannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_infobipchannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_infobipchannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_infobipchannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_infobipchannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_infobipchannelinstance` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_infobipchannelinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_infobipchannelinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_infobipchannelinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_infobipchannelinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_infobipchannelinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_infobipchannelinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_infobipchannelinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_infobipchannelinstance.md) on 2026-05-06.