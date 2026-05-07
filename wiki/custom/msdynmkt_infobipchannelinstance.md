---
logical: "msdynmkt_infobipchannelinstance"
display: "Istanza canale Infobip"
entitySetName: "msdynmkt_infobipchannelinstances"
primaryId: "msdynmkt_infobipchannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Istanza canale Infobip

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_infobipchannelinstance` |
| Display name | Istanza canale Infobip |
| Display (plural) | Istanze canale Infobip |
| Schema name | `msdynmkt_infobipchannelinstance` |
| Entity set (Web API) | `msdynmkt_infobipchannelinstances` |
| Primary id attribute | `msdynmkt_infobipchannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_infobipchannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_infobipchannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_infobipchannelinstances
PATCH /api/data/v9.2/msdynmkt_infobipchannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_infobipchannelinstances(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_infobipchannelinstanceid`, `msdynmkt_name`, `msdynmkt_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_infobipchannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_infobipchannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_infobipchannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_infobipchannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_infobipchannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_infobipchannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_infobipchannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_infobipchannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_infobipchannelinstance_SyncErrors` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstance` |
| `msdynmkt_infobipchannelinstance_AsyncOperations` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstance` |
| `msdynmkt_infobipchannelinstance_MailboxTrackingFolders` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstance` |
| `msdynmkt_infobipchannelinstance_UserEntityInstanceDatas` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `objectid` | `objectid_msdynmkt_infobipchannelinstance` |
| `msdynmkt_infobipchannelinstance_ProcessSession` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstance` |
| `msdynmkt_infobipchannelinstance_BulkDeleteFailures` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_infobipchannelinstance` |
| `msdynmkt_infobipchannelinstance_PrincipalObjectAttributeAccesses` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `objectid` | `objectid_msdynmkt_infobipchannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_infobipchannelinstance` | [msdynmkt_infobipchannelinstance](msdynmkt_infobipchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_infobipchannelinstance` |


## Source

Generated from [msdynmkt_infobipchannelinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_infobipchannelinstance')) on 2026-05-07.