---
logical: "msdynmkt_mocksmsproviderchannelinstance"
display: "MockSmsProvider channel instance"
entitySetName: "msdynmkt_mocksmsproviderchannelinstances"
primaryId: "msdynmkt_mocksmsproviderchannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# MockSmsProvider channel instance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_mocksmsproviderchannelinstance` |
| Display name | MockSmsProvider channel instance |
| Display (plural) | MockSmsProvider channel instances |
| Schema name | `msdynmkt_mocksmsproviderchannelinstance` |
| Entity set (Web API) | `msdynmkt_mocksmsproviderchannelinstances` |
| Primary id attribute | `msdynmkt_mocksmsproviderchannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances
PATCH /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_mocksmsproviderchannelinstanceId`, `msdynmkt_name`, `msdynmkt_type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_mocksmsproviderchannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_mocksmsproviderchannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_mocksmsproviderchannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_mocksmsproviderchannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_mocksmsproviderchannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_mocksmsproviderchannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_mocksmsproviderchannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_mocksmsproviderchannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_mocksmsproviderchannelinstance` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_mocksmsproviderchannelinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_mocksmsproviderchannelinstance.md) on 2026-05-06.