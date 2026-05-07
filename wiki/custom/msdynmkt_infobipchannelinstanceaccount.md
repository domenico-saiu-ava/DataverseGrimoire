---
logical: "msdynmkt_infobipchannelinstanceaccount"
display: "Account istanza canale Infobip"
entitySetName: "msdynmkt_infobipchannelinstanceaccounts"
primaryId: "msdynmkt_infobipchannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Account istanza canale Infobip

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_infobipchannelinstanceaccount` |
| Display name | Account istanza canale Infobip |
| Display (plural) | Account istanza canale Infobip |
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

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_apibaseurl`, `msdynmkt_apikey`, `msdynmkt_infobipchannelinstanceaccountid`, `msdynmkt_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_infobipchannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_infobipchannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_infobipchannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_infobipchannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_infobipchannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_infobipchannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_infobipchannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_infobipchannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_infobipchannelinstanceaccount_SyncErrors` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstanceaccount` |
| `msdynmkt_infobipchannelinstanceaccount_AsyncOperations` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstanceaccount` |
| `msdynmkt_infobipchannelinstanceaccount_MailboxTrackingFolders` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstanceaccount` |
| `msdynmkt_infobipchannelinstanceaccount_UserEntityInstanceDatas` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_infobipchannelinstanceaccount` |
| `msdynmkt_infobipchannelinstanceaccount_ProcessSession` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstanceaccount` |
| `msdynmkt_infobipchannelinstanceaccount_BulkDeleteFailures` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstanceaccount` |
| `msdynmkt_infobipchannelinstanceaccount_PrincipalObjectAttributeAccesses` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_infobipchannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_infobipchannelinstanceaccount` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_infobipchannelinstanceaccount` |


## Source

Generated from [msdynmkt_infobipchannelinstanceaccount (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_infobipchannelinstanceaccount')) on 2026-05-07.