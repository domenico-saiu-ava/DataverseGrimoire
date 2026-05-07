---
logical: "msdynmkt_byoacschannelinstanceaccount"
display: "ACS channel instance account"
entitySetName: "msdynmkt_byoacschannelinstanceaccounts"
primaryId: "msdynmkt_byoacschannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# ACS channel instance account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_byoacschannelinstanceaccount` |
| Display name | ACS channel instance account |
| Display (plural) | ACS channel instance accounts |
| Schema name | `msdynmkt_byoacschannelinstanceaccount` |
| Entity set (Web API) | `msdynmkt_byoacschannelinstanceaccounts` |
| Primary id attribute | `msdynmkt_byoacschannelinstanceaccountid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_byoacschannelinstanceaccounts?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_byoacschannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdynmkt_byoacschannelinstanceaccounts
PATCH /api/data/v9.2/msdynmkt_byoacschannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdynmkt_byoacschannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_byoacschannelinstanceaccountId`, `msdynmkt_name`, `msdynmkt_primaryconnectionstring`, `msdynmkt_secondaryconnectionstring`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_byoacschannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_byoacschannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_byoacschannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_byoacschannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_byoacschannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_byoacschannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_byoacschannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_byoacschannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_byoacschannelinstanceaccount` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_byoacschannelinstanceaccount_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_byoacschannelinstanceaccount_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_byoacschannelinstanceaccount_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_byoacschannelinstanceaccount_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_byoacschannelinstanceaccount_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_byoacschannelinstanceaccount_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_byoacschannelinstanceaccount.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_byoacschannelinstanceaccount.md) on 2026-05-06.