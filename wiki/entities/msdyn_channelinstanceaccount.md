---
logical: "msdyn_channelinstanceaccount"
display: "Channel Instance Account"
entitySetName: "msdyn_channelinstanceaccounts"
primaryId: "msdyn_channelinstanceaccountid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Instance Account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelinstanceaccount` |
| Display name | Channel Instance Account |
| Display (plural) | Channel Instance Accounts |
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ChannelDefinitionId`, `msdyn_ChannelInstanceAccountId`, `msdyn_Description`, `msdyn_extendedentityId`, `msdyn_extendedentityIdType`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channelinstanceaccount` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_channelinstanceaccount_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelinstanceaccount_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelinstanceaccount_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelinstanceaccount_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_byoacschannelinstanceaccount` | [msdynmkt_byoacschannelinstanceaccount](msdynmkt_byoacschannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_byoacschannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_infobipchannelinstanceaccount` | [msdynmkt_infobipchannelinstanceaccount](msdynmkt_infobipchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_infobipchannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount` | [msdynmkt_linkmobilitychannelinstanceaccount](msdynmkt_linkmobilitychannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount` | [msdynmkt_mocksmsproviderchannelinstanceaccount](msdynmkt_mocksmsproviderchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_telesignchannelinstanceaccount` | [msdynmkt_telesignchannelinstanceaccount](msdynmkt_telesignchannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_telesignchannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_twiliochannelinstanceaccount` | [msdynmkt_twiliochannelinstanceaccount](msdynmkt_twiliochannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_twiliochannelinstanceaccount` |
| `msdyn_ChannelInstanceAccount_extendedentityid_msdynmkt_vibeschannelinstanceaccount` | [msdynmkt_vibeschannelinstanceaccount](msdynmkt_vibeschannelinstanceaccount.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_vibeschannelinstanceaccount` |
| `msdyn_msdyn_channelinstanceaccount_ChannelDefin` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `owner_msdyn_channelinstanceaccount` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channelinstanceaccount` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channelinstanceaccount` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelinstanceaccount_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelinstanceaccount_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelinstanceaccount_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channelinstanceaccount_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channelinstanceaccount_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelinstanceaccount_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channelinstanceaccount_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelinstanceaccount_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_channelinstance_ChannelInstanceAcco` | _n/a_ | `msdyn_channelinstanceaccountid` | _n/a_ |


## Source

Generated from [msdyn_channelinstanceaccount.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channelinstanceaccount.md) on 2026-05-06.