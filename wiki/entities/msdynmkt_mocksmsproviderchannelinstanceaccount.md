---
logical: "msdynmkt_mocksmsproviderchannelinstanceaccount"
display: "MockSmsProvider channel instance account"
entitySetName: "msdynmkt_mocksmsproviderchannelinstanceaccounts"
primaryId: "msdynmkt_mocksmsproviderchannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# MockSmsProvider channel instance account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_mocksmsproviderchannelinstanceaccount` |
| Display name | MockSmsProvider channel instance account |
| Display (plural) | MockSmsProvider channel instance accounts |
| Schema name | `msdynmkt_mocksmsproviderchannelinstanceaccount` |
| Entity set (Web API) | `msdynmkt_mocksmsproviderchannelinstanceaccounts` |
| Primary id attribute | `msdynmkt_mocksmsproviderchannelinstanceaccountid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstanceaccounts?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstanceaccounts
PATCH /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdynmkt_accountsid`, `msdynmkt_authtoken`, `msdynmkt_mocksmsproviderchannelinstanceaccountId`, `msdynmkt_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_mocksmsproviderchannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_mocksmsproviderchannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_mocksmsproviderchannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_mocksmsproviderchannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_mocksmsproviderchannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdynmkt_mocksmsproviderchannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_mocksmsproviderchannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_mocksmsproviderchannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount` | _n/a_ | `msdyn_extendedentityid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_mocksmsproviderchannelinstanceaccount.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_mocksmsproviderchannelinstanceaccount.md) on 2026-05-06.