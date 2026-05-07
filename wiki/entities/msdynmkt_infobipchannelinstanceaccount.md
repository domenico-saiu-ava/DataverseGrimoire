---
logical: "msdynmkt_infobipchannelinstanceaccount"
display: "Infobip channel instance account"
entitySetName: "msdynmkt_infobipchannelinstanceaccounts"
primaryId: "msdynmkt_infobipchannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Infobip channel instance account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_infobipchannelinstanceaccount` |
| Display name | Infobip channel instance account |
| Display (plural) | Infobip channel instance accounts |
| Schema name | `msdynmkt_infobipchannelinstanceaccount` |
| Entity set (Web API) | `msdynmkt_infobipchannelinstanceaccounts` |
| Primary id attribute | `msdynmkt_infobipchannelinstanceaccountid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_infobipchannelinstanceaccounts?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_infobipchannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdynmkt_infobipchannelinstanceaccounts
PATCH /api/data/v9.2/msdynmkt_infobipchannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdynmkt_infobipchannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_apibaseurl`, `msdynmkt_apikey`, `msdynmkt_infobipchannelinstanceaccountId`, `msdynmkt_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_infobipchannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_infobipchannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_infobipchannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_infobipchannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_infobipchannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_infobipchannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_infobipchannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_infobipchannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_infobipchannelinstanceaccount` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_infobipchannelinstanceaccount_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_infobipchannelinstanceaccount_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_infobipchannelinstanceaccount_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_infobipchannelinstanceaccount_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_infobipchannelinstanceaccount_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_infobipchannelinstanceaccount_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_infobipchannelinstanceaccount.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_infobipchannelinstanceaccount.md) on 2026-05-06.