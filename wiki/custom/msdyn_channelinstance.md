---
logical: "msdyn_channelinstance"
display: "Istanza di canale"
entitySetName: "msdyn_channelinstances"
primaryId: "msdyn_channelinstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Istanza di canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelinstance` |
| Display name | Istanza di canale |
| Display (plural) | Istanze di canale |
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

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_channeldefinitionid`, `msdyn_channelinstanceaccountid`, `msdyn_channelinstanceid`, `msdyn_consumingapplicationid`, `msdyn_contactpoint`, `msdyn_description`, `msdyn_extendedentityid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (19)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_telesignchannelinstance` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_telesignchannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_twiliochannelinstance` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_twiliochannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_vibeschannelinstance` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_vibeschannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_linkmobilitychannelinstance` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_infobipchannelinstance` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_infobipchannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_mocksmsproviderchannelinstance` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_byoacschannelinstance` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_byoacschannelinstance` |
| `lk_msdyn_channelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_channelinstance_msdyn_defextendedchannelinstance` | [msdyn_defextendedchannelinstance](msdyn_defextendedchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityId_msdyn_defextendedchannelinstance` |
| `msdyn_msdyn_channelinstance_ChannelDefinition_m` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `msdyn_msdyn_channelinstance_ChannelInstanceAcco` | [msdyn_channelinstanceaccount](msdyn_channelinstanceaccount.md) | `msdyn_channelinstanceaccountid` | `msdyn_ChannelInstanceAccountId` |
| `msdyn_msdyn_channelinstance_ConsumingApplication_msdyn_a` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `msdyn_consumingapplicationid` | `msdyn_ConsumingApplicationId` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_liveworkitem_msdyn_channelinstance` | [msdyn_channelinstance](msdyn_channelinstance.md) | `msdyn_channelinstanceid` | `msdyn_channelinstanceid` |
| `msdyn_msdyn_ocsession_msdyn_channelinstance` | [msdyn_channelinstance](msdyn_channelinstance.md) | `msdyn_channelinstanceid` | `msdyn_channelinstanceid` |
| `msdyn_msdyn_transcript_msdyn_channelinstance` | [msdyn_channelinstance](msdyn_channelinstance.md) | `msdyn_channelinstanceid` | `msdyn_channelinstanceid` |
| `msdyn_channelinstance_SyncErrors` | [msdyn_channelinstance](msdyn_channelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstance` |
| `msdyn_channelinstance_DuplicateMatchingRecord` | [msdyn_channelinstance](msdyn_channelinstance.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelinstance` |
| `msdyn_channelinstance_DuplicateBaseRecord` | [msdyn_channelinstance](msdyn_channelinstance.md) | `baserecordid` | `baserecordid_msdyn_channelinstance` |
| `msdyn_channelinstance_AsyncOperations` | [msdyn_channelinstance](msdyn_channelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstance` |
| `msdyn_channelinstance_MailboxTrackingFolders` | [msdyn_channelinstance](msdyn_channelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstance` |
| `msdyn_channelinstance_UserEntityInstanceDatas` | [msdyn_channelinstance](msdyn_channelinstance.md) | `objectid` | `objectid_msdyn_channelinstance` |
| `msdyn_channelinstance_ProcessSession` | [msdyn_channelinstance](msdyn_channelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstance` |
| `msdyn_channelinstance_BulkDeleteFailures` | [msdyn_channelinstance](msdyn_channelinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelinstance` |
| `msdyn_channelinstance_PrincipalObjectAttributeAccesses` | [msdyn_channelinstance](msdyn_channelinstance.md) | `objectid` | `objectid_msdyn_channelinstance` |


## Source

Generated from [msdyn_channelinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelinstance')) on 2026-05-07.