---
logical: "msdynmkt_byoacschannelinstance"
display: "ACS channel instance"
entitySetName: "msdynmkt_byoacschannelinstances"
primaryId: "msdynmkt_byoacschannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# ACS channel instance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_byoacschannelinstance` |
| Display name | ACS channel instance |
| Display (plural) | ACS channel instances |
| Schema name | `msdynmkt_byoacschannelinstance` |
| Entity set (Web API) | `msdynmkt_byoacschannelinstances` |
| Primary id attribute | `msdynmkt_byoacschannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_byoacschannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_byoacschannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_byoacschannelinstances
PATCH /api/data/v9.2/msdynmkt_byoacschannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_byoacschannelinstances(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_byoacschannelinstanceId`, `msdynmkt_name`, `msdynmkt_type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_byoacschannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_byoacschannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_byoacschannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_byoacschannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_byoacschannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_byoacschannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_byoacschannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_byoacschannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_byoacschannelinstance` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_byoacschannelinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_byoacschannelinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_byoacschannelinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_byoacschannelinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_byoacschannelinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_byoacschannelinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_byoacschannelinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_byoacschannelinstance.md) on 2026-05-06.