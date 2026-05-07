---
logical: "msdynmkt_vibeschannelinstanceaccount"
display: "Account istanza canale Vibes"
entitySetName: "msdynmkt_vibeschannelinstanceaccounts"
primaryId: "msdynmkt_vibeschannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Account istanza canale Vibes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_vibeschannelinstanceaccount` |
| Display name | Account istanza canale Vibes |
| Display (plural) | Account istanza canale Vibes |
| Schema name | `msdynmkt_vibeschannelinstanceaccount` |
| Entity set (Web API) | `msdynmkt_vibeschannelinstanceaccounts` |
| Primary id attribute | `msdynmkt_vibeschannelinstanceaccountid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts
PATCH /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdynmkt_vibeschannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_name`, `msdynmkt_password`, `msdynmkt_username`, `msdynmkt_vibeschannelinstanceaccountid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_vibeschannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_vibeschannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_vibeschannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_vibeschannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_vibeschannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_vibeschannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_vibeschannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_vibeschannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_vibeschannelinstanceaccount_SyncErrors` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstanceaccount` |
| `msdynmkt_vibeschannelinstanceaccount_AsyncOperations` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstanceaccount` |
| `msdynmkt_vibeschannelinstanceaccount_MailboxTrackingFolders` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstanceaccount` |
| `msdynmkt_vibeschannelinstanceaccount_UserEntityInstanceDatas` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_vibeschannelinstanceaccount` |
| `msdynmkt_vibeschannelinstanceaccount_ProcessSession` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstanceaccount` |
| `msdynmkt_vibeschannelinstanceaccount_BulkDeleteFailures` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstanceaccount` |
| `msdynmkt_vibeschannelinstanceaccount_PrincipalObjectAttributeAccesses` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_vibeschannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_vibeschannelinstanceaccount` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_vibeschannelinstanceaccount` |


## Source

Generated from [msdynmkt_vibeschannelinstanceaccount (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_vibeschannelinstanceaccount')) on 2026-05-07.