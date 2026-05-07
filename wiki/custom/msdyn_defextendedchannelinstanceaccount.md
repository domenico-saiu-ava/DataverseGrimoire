---
logical: "msdyn_defextendedchannelinstanceaccount"
display: "msdyn_DefExtendedChannelInstanceAccount"
entitySetName: "msdyn_defextendedchannelinstanceaccounts"
primaryId: "msdyn_defextendedchannelinstanceaccountid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_DefExtendedChannelInstanceAccount

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_defextendedchannelinstanceaccount` |
| Display name | msdyn_DefExtendedChannelInstanceAccount |
| Display (plural) | msdyn_DefExtendedChannelInstanceAccounts |
| Schema name | `msdyn_DefExtendedChannelInstanceAccount` |
| Entity set (Web API) | `msdyn_defextendedchannelinstanceaccounts` |
| Primary id attribute | `msdyn_defextendedchannelinstanceaccountid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_defextendedchannelinstanceaccounts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_defextendedchannelinstanceaccounts(<guid>)
POST /api/data/v9.2/msdyn_defextendedchannelinstanceaccounts
PATCH /api/data/v9.2/msdyn_defextendedchannelinstanceaccounts(<guid>)
DELETE /api/data/v9.2/msdyn_defextendedchannelinstanceaccounts(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_defextendedchannelinstanceaccountid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_defextendedchannelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_defextendedchannelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_defextendedchannelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_defextendedchannelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_defextendedchannelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_defextendedchannelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_defextendedchannelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_defextendedchannelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_defextendedchannelinstanceaccount_SyncErrors` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_defextendedchannelinstanceaccount_DuplicateMatchingRecord` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_defextendedchannelinstanceaccount_DuplicateBaseRecord` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `baserecordid` | `baserecordid_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_defextendedchannelinstanceaccount_AsyncOperations` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_defextendedchannelinstanceaccount_MailboxTrackingFolders` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_defextendedchannelinstanceaccount_UserEntityInstanceDatas` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `objectid` | `objectid_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_defextendedchannelinstanceaccount_ProcessSession` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_defextendedchannelinstanceaccount_BulkDeleteFailures` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `regardingobjectid` | `regardingobjectid_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_defextendedchannelinstanceaccount_PrincipalObjectAttributeAccesses` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `objectid` | `objectid_msdyn_defextendedchannelinstanceaccount` |
| `msdyn_channelinstanceaccount_msdyn_defextendedchannelinstanceaccount` | [msdyn_defextendedchannelinstanceaccount](msdyn_defextendedchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityId_msdyn_defextendedchannelinstanceaccount` |


## Source

Generated from [msdyn_defextendedchannelinstanceaccount (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_defextendedchannelinstanceaccount')) on 2026-05-07.