---
logical: "msdynmkt_linkmobilitychannelinstanceaccount"
display: "Account dell'istanza del canale Link Mobility"
entitySetName: "msdynmkt_linkmobilitychannelinstanceaccounts"
primaryId: "msdynmkt_linkmobilitychannelinstanceaccountid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Account dell'istanza del canale Link Mobility

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_linkmobilitychannelinstanceaccount` |
| Display name | Account dell'istanza del canale Link Mobility |
| Display (plural) | Account istanza canale Link Mobility |
| Schema name | `msdynmkt_linkmobilitychannelinstanceaccount` |
| Entity set (Web API) | `msdynmkt_linkmobilitychannelinstanceaccounts` |
| Primary id attribute | `msdynmkt_linkmobilitychannelinstanceaccountid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts
PATCH /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdynmkt_linkmobilitychannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_baseurl`, `msdynmkt_gateid`, `msdynmkt_linkmobilitychannelinstanceaccountid`, `msdynmkt_name`, `msdynmkt_password`, `msdynmkt_platformid`, `msdynmkt_platformpartnerid`, `msdynmkt_username`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_linkmobilitychannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_linkmobilitychannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_linkmobilitychannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_linkmobilitychannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_linkmobilitychannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_linkmobilitychannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_linkmobilitychannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_linkmobilitychannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_linkmobilitychannelinstanceaccount_SyncErrors` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount` |
| `msdynmkt_linkmobilitychannelinstanceaccount_AsyncOperations` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount` |
| `msdynmkt_linkmobilitychannelinstanceaccount_MailboxTrackingFolders` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount` |
| `msdynmkt_linkmobilitychannelinstanceaccount_UserEntityInstanceDatas` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_linkmobilitychannelinstanceaccount` |
| `msdynmkt_linkmobilitychannelinstanceaccount_ProcessSession` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount` |
| `msdynmkt_linkmobilitychannelinstanceaccount_BulkDeleteFailures` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount` |
| `msdynmkt_linkmobilitychannelinstanceaccount_PrincipalObjectAttributeAccesses` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `objectid` | `objectid_msdynmkt_linkmobilitychannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount` |


## Source

Generated from [msdynmkt_linkmobilitychannelinstanceaccount (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_linkmobilitychannelinstanceaccount')) on 2026-05-07.