---
logical: "msdynmkt_twiliochannelinstanceaccount"
display: "Twilio channel instance account"
entitySetName: "msdynmkt_twiliochannelinstanceaccounts"
primaryId: "msdynmkt_twiliochannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Twilio channel instance account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_twiliochannelinstanceaccount` |
| Display name | Twilio channel instance account |
| Display (plural) | Twilio channel instance accounts |
| Schema name | `msdynmkt_twiliochannelinstanceaccount` |
| Entity set (Web API) | `msdynmkt_twiliochannelinstanceaccounts` |
| Primary id attribute | `msdynmkt_twiliochannelinstanceaccountid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_twiliochannelinstanceaccounts?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_twiliochannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdynmkt_twiliochannelinstanceaccounts
PATCH /api/data/v9.2/msdynmkt_twiliochannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdynmkt_twiliochannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_accountsid`, `msdynmkt_authtoken`, `msdynmkt_messagingservicesid`, `msdynmkt_name`, `msdynmkt_twiliochannelinstanceaccountId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_twiliochannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_twiliochannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_twiliochannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_twiliochannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_twiliochannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_twiliochannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_twiliochannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_twiliochannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_twiliochannelinstanceaccount` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_twiliochannelinstanceaccount_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_twiliochannelinstanceaccount_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_twiliochannelinstanceaccount_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_twiliochannelinstanceaccount_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_twiliochannelinstanceaccount_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_twiliochannelinstanceaccount_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_twiliochannelinstanceaccount.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_twiliochannelinstanceaccount.md) on 2026-05-06.