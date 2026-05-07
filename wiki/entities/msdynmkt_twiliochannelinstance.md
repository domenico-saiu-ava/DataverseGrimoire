---
logical: "msdynmkt_twiliochannelinstance"
display: "Twilio channel instance"
entitySetName: "msdynmkt_twiliochannelinstances"
primaryId: "msdynmkt_twiliochannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Twilio channel instance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_twiliochannelinstance` |
| Display name | Twilio channel instance |
| Display (plural) | Twilio channel instances |
| Schema name | `msdynmkt_twiliochannelinstance` |
| Entity set (Web API) | `msdynmkt_twiliochannelinstances` |
| Primary id attribute | `msdynmkt_twiliochannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_twiliochannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_twiliochannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_twiliochannelinstances
PATCH /api/data/v9.2/msdynmkt_twiliochannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_twiliochannelinstances(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_name`, `msdynmkt_twiliochannelinstanceId`, `msdynmkt_type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_twiliochannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_twiliochannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_twiliochannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_twiliochannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_twiliochannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_twiliochannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_twiliochannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_twiliochannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_twiliochannelinstance` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_twiliochannelinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_twiliochannelinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_twiliochannelinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_twiliochannelinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_twiliochannelinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_twiliochannelinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_twiliochannelinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_twiliochannelinstance.md) on 2026-05-06.