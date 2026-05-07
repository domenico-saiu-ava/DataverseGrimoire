---
logical: "msdyn_channelinstanceaccount"
display: "Account istanza di canale"
entitySetName: "msdyn_channelinstanceaccounts"
primaryId: "msdyn_channelinstanceaccountid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Account istanza di canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelinstanceaccount` |
| Display name | Account istanza di canale |
| Display (plural) | Account istanza di canale |
| Schema name | `msdyn_ChannelInstanceAccount` |
| Entity set (Web API) | `msdyn_channelinstanceaccounts` |
| Primary id attribute | `msdyn_channelinstanceaccountid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelinstanceaccounts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdyn_channelinstanceaccounts
PATCH /api/data/v9.2/msdyn_channelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdyn_channelinstanceaccounts(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_channeldefinitionid`, `msdyn_channelinstanceaccountid`, `msdyn_description`, `msdyn_extendedentityid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_telesignchannelinstanceaccount` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_telesignchannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_twiliochannelinstanceaccount` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_twiliochannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_vibeschannelinstanceaccount` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_vibeschannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_infobipchannelinstanceaccount` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_infobipchannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_byoacschannelinstanceaccount` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_byoacschannelinstanceaccount` |
| `lk_msdyn_channelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_channelinstanceaccount_msdyn_defextendedchannelinstanceaccount` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityId_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_msdyn_channelinstanceaccount_ChannelDefin` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelinstanceaccount_SyncErrors` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstanceaccount` |
| `msdyn_channelinstanceaccount_DuplicateMatchingRecord` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelinstanceaccount` |
| `msdyn_channelinstanceaccount_DuplicateBaseRecord` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `baserecordid` | `baserecordid_msdyn_channelinstanceaccount` |
| `msdyn_channelinstanceaccount_AsyncOperations` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstanceaccount` |
| `msdyn_channelinstanceaccount_MailboxTrackingFolders` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstanceaccount` |
| `msdyn_channelinstanceaccount_UserEntityInstanceDatas` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `objectid` | `objectid_msdyn_channelinstanceaccount` |
| `msdyn_channelinstanceaccount_ProcessSession` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstanceaccount` |
| `msdyn_channelinstanceaccount_BulkDeleteFailures` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstanceaccount` |
| `msdyn_channelinstanceaccount_PrincipalObjectAttributeAccesses` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `objectid` | `objectid_msdyn_channelinstanceaccount` |
| `msdyn_msdyn_channelinstance_ChannelInstanceAcco` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `msdyn_channelinstanceaccountid` | `msdyn_ChannelInstanceAccountId` |


## Source

Generated from [msdyn_channelinstanceaccount (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelinstanceaccount')) on 2026-05-07.