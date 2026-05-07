---
logical: "msdynmkt_mocksmsproviderchannelinstanceaccount"
display: "Account istanza canale MockSmsProvider"
entitySetName: "msdynmkt_mocksmsproviderchannelinstanceaccounts"
primaryId: "msdynmkt_mocksmsproviderchannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Account istanza canale MockSmsProvider

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_mocksmsproviderchannelinstanceaccount` |
| Display name | Account istanza canale MockSmsProvider |
| Display (plural) | Account istanza canale MockSmsProvider |
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

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_accountsid`, `msdynmkt_authtoken`, `msdynmkt_mocksmsproviderchannelinstanceaccountid`, `msdynmkt_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_mocksmsproviderchannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_mocksmsproviderchannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_mocksmsproviderchannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_mocksmsproviderchannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_mocksmsproviderchannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_mocksmsproviderchannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_mocksmsproviderchannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_mocksmsproviderchannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_SyncErrors` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount` |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_AsyncOperations` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount` |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_MailboxTrackingFolders` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount` |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_UserEntityInstanceDatas` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_mocksmsproviderchannelinstanceaccount` |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_ProcessSession` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount` |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_BulkDeleteFailures` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount` |
| `msdynmkt_mocksmsproviderchannelinstanceaccount_PrincipalObjectAttributeAccesses` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_mocksmsproviderchannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount` |


## Source

Generated from [msdynmkt_mocksmsproviderchannelinstanceaccount (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_mocksmsproviderchannelinstanceaccount')) on 2026-05-07.