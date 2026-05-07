---
logical: "msdyn_channelinstance"
display: "Channel Instance"
entitySetName: "msdyn_channelinstances"
primaryId: "msdyn_channelinstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Instance

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelinstance` |
| Display name | Channel Instance |
| Display (plural) | Channel Instances |
| Schema name | `msdyn_ChannelInstance` |
| Entity set (Web API) | `msdyn_channelinstances` |
| Primary id attribute | `msdyn_channelinstanceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelinstances?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelinstances(<guid>)
POST /api/data/v9.2/msdyn_channelinstances
PATCH /api/data/v9.2/msdyn_channelinstances(<guid>)
DELETE /api/data/v9.2/msdyn_channelinstances(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ChannelDefinitionId`, `msdyn_ChannelInstanceAccountId`, `msdyn_ChannelInstanceId`, `msdyn_ConsumingApplicationId`, `msdyn_ContactPoint`, `msdyn_Description`, `msdyn_extendedentityId`, `msdyn_extendedentityIdType`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_channelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_byoacschannelinstance` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_byoacschannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_infobipchannelinstance` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_infobipchannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_linkmobilitychannelinstance` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_mocksmsproviderchannelinstance` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_telesignchannelinstance` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_telesignchannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_twiliochannelinstance` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_twiliochannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_vibeschannelinstance` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_vibeschannelinstance` |
| `msdyn_msdyn_channelinstance_ChannelDefinition_m` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `msdyn_msdyn_channelinstance_ChannelInstanceAcco` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `msdyn_channelinstanceaccountid` | `msdyn_ChannelInstanceAccountId` |
| `msdyn_msdyn_channelinstance_ConsumingApplication_msdyn_a` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `msdyn_consumingapplicationid` | `msdyn_ConsumingApplicationId` |
| `owner_msdyn_channelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelinstance_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelinstance_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelinstance_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channelinstance_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channelinstance_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelinstance_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channelinstance_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelinstance_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_liveworkitem_msdyn_channelinstance` | _n/a_ | `msdyn_channelinstanceid` | _n/a_ |
| `msdyn_msdyn_ocsession_msdyn_channelinstance` | _n/a_ | `msdyn_channelinstanceid` | _n/a_ |
| `msdyn_msdyn_transcript_msdyn_channelinstance` | _n/a_ | `msdyn_channelinstanceid` | _n/a_ |


## Source

Generated from [msdyn_channelinstance.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channelinstance.md) on 2026-05-06.