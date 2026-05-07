---
logical: "msdynmkt_telesignchannelinstanceaccount"
display: "Account istanza canale TeleSign"
entitySetName: "msdynmkt_telesignchannelinstanceaccounts"
primaryId: "msdynmkt_telesignchannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Account istanza canale TeleSign

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_telesignchannelinstanceaccount` |
| Display name | Account istanza canale TeleSign |
| Display (plural) | Account istanza canale TeleSign |
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

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_apikey`, `msdynmkt_customerid`, `msdynmkt_name`, `msdynmkt_telesignchannelinstanceaccountid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_telesignchannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_telesignchannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_telesignchannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_telesignchannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_telesignchannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_telesignchannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_telesignchannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_telesignchannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_telesignchannelinstanceaccount_SyncErrors` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstanceaccount` |
| `msdynmkt_telesignchannelinstanceaccount_AsyncOperations` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstanceaccount` |
| `msdynmkt_telesignchannelinstanceaccount_MailboxTrackingFolders` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstanceaccount` |
| `msdynmkt_telesignchannelinstanceaccount_UserEntityInstanceDatas` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_telesignchannelinstanceaccount` |
| `msdynmkt_telesignchannelinstanceaccount_ProcessSession` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstanceaccount` |
| `msdynmkt_telesignchannelinstanceaccount_BulkDeleteFailures` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstanceaccount` |
| `msdynmkt_telesignchannelinstanceaccount_PrincipalObjectAttributeAccesses` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_telesignchannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_telesignchannelinstanceaccount` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_telesignchannelinstanceaccount` |


## Source

Generated from [msdynmkt_telesignchannelinstanceaccount (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_telesignchannelinstanceaccount')) on 2026-05-07.