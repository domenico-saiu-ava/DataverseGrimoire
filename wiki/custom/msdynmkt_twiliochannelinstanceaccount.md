---
logical: "msdynmkt_twiliochannelinstanceaccount"
display: "Account istanza canale Twilio"
entitySetName: "msdynmkt_twiliochannelinstanceaccounts"
primaryId: "msdynmkt_twiliochannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Account istanza canale Twilio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_twiliochannelinstanceaccount` |
| Display name | Account istanza canale Twilio |
| Display (plural) | Account istanza canale Twilio |
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

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_accountsid`, `msdynmkt_authtoken`, `msdynmkt_messagingservicesid`, `msdynmkt_name`, `msdynmkt_twiliochannelinstanceaccountid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_twiliochannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_twiliochannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_twiliochannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_twiliochannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_twiliochannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_twiliochannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_twiliochannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_twiliochannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_twiliochannelinstanceaccount_SyncErrors` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstanceaccount` |
| `msdynmkt_twiliochannelinstanceaccount_AsyncOperations` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstanceaccount` |
| `msdynmkt_twiliochannelinstanceaccount_MailboxTrackingFolders` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstanceaccount` |
| `msdynmkt_twiliochannelinstanceaccount_UserEntityInstanceDatas` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_twiliochannelinstanceaccount` |
| `msdynmkt_twiliochannelinstanceaccount_ProcessSession` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstanceaccount` |
| `msdynmkt_twiliochannelinstanceaccount_BulkDeleteFailures` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstanceaccount` |
| `msdynmkt_twiliochannelinstanceaccount_PrincipalObjectAttributeAccesses` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_twiliochannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_twiliochannelinstanceaccount` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_twiliochannelinstanceaccount` |


## Source

Generated from [msdynmkt_twiliochannelinstanceaccount (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_twiliochannelinstanceaccount')) on 2026-05-07.