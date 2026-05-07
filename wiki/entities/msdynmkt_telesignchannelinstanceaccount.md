---
logical: "msdynmkt_telesignchannelinstanceaccount"
display: "TeleSign channel instance account"
entitySetName: "msdynmkt_telesignchannelinstanceaccounts"
primaryId: "msdynmkt_telesignchannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# TeleSign channel instance account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_telesignchannelinstanceaccount` |
| Display name | TeleSign channel instance account |
| Display (plural) | TeleSign channel instance accounts |
| Schema name | `msdynmkt_telesignchannelinstanceaccount` |
| Entity set (Web API) | `msdynmkt_telesignchannelinstanceaccounts` |
| Primary id attribute | `msdynmkt_telesignchannelinstanceaccountid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_telesignchannelinstanceaccounts?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_telesignchannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdynmkt_telesignchannelinstanceaccounts
PATCH /api/data/v9.2/msdynmkt_telesignchannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdynmkt_telesignchannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_apikey`, `msdynmkt_customerid`, `msdynmkt_name`, `msdynmkt_telesignchannelinstanceaccountId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_telesignchannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_telesignchannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_telesignchannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_telesignchannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_telesignchannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_telesignchannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_telesignchannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_telesignchannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_telesignchannelinstanceaccount` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_telesignchannelinstanceaccount_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_telesignchannelinstanceaccount_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_telesignchannelinstanceaccount_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_telesignchannelinstanceaccount_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_telesignchannelinstanceaccount_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_telesignchannelinstanceaccount_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_telesignchannelinstanceaccount.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_telesignchannelinstanceaccount.md) on 2026-05-06.