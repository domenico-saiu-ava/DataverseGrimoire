---
logical: "msdynmkt_byoacschannelinstanceaccount"
display: "Account istanza canale ACS"
entitySetName: "msdynmkt_byoacschannelinstanceaccounts"
primaryId: "msdynmkt_byoacschannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Account istanza canale ACS

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_byoacschannelinstanceaccount` |
| Display name | Account istanza canale ACS |
| Display (plural) | Account istanza canale ACS |
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

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_byoacschannelinstanceaccountid`, `msdynmkt_name`, `msdynmkt_primaryconnectionstring`, `msdynmkt_secondaryconnectionstring`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_byoacschannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_byoacschannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_byoacschannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_byoacschannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_byoacschannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_byoacschannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_byoacschannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_byoacschannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_byoacschannelinstanceaccount_SyncErrors` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstanceaccount` |
| `msdynmkt_byoacschannelinstanceaccount_AsyncOperations` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstanceaccount` |
| `msdynmkt_byoacschannelinstanceaccount_MailboxTrackingFolders` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstanceaccount` |
| `msdynmkt_byoacschannelinstanceaccount_UserEntityInstanceDatas` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_byoacschannelinstanceaccount` |
| `msdynmkt_byoacschannelinstanceaccount_ProcessSession` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstanceaccount` |
| `msdynmkt_byoacschannelinstanceaccount_BulkDeleteFailures` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstanceaccount` |
| `msdynmkt_byoacschannelinstanceaccount_PrincipalObjectAttributeAccesses` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_byoacschannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_byoacschannelinstanceaccount` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_byoacschannelinstanceaccount` |


## Source

Generated from [msdynmkt_byoacschannelinstanceaccount (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_byoacschannelinstanceaccount')) on 2026-05-07.