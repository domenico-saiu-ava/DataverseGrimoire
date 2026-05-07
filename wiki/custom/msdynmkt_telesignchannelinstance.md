---
logical: "msdynmkt_telesignchannelinstance"
display: "Istanza canale TeleSign"
entitySetName: "msdynmkt_telesignchannelinstances"
primaryId: "msdynmkt_telesignchannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Istanza canale TeleSign

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_telesignchannelinstance` |
| Display name | Istanza canale TeleSign |
| Display (plural) | Istanze canale TeleSign |
| Schema name | `msdynmkt_telesignchannelinstance` |
| Entity set (Web API) | `msdynmkt_telesignchannelinstances` |
| Primary id attribute | `msdynmkt_telesignchannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_telesignchannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_telesignchannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_telesignchannelinstances
PATCH /api/data/v9.2/msdynmkt_telesignchannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_telesignchannelinstances(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_name`, `msdynmkt_telesignchannelinstanceid`, `msdynmkt_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_telesignchannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_telesignchannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_telesignchannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_telesignchannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_telesignchannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_telesignchannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_telesignchannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_telesignchannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_telesignchannelinstance_SyncErrors` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstance` |
| `msdynmkt_telesignchannelinstance_AsyncOperations` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstance` |
| `msdynmkt_telesignchannelinstance_MailboxTrackingFolders` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstance` |
| `msdynmkt_telesignchannelinstance_UserEntityInstanceDatas` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `objectid` | `objectid_msdynmkt_telesignchannelinstance` |
| `msdynmkt_telesignchannelinstance_ProcessSession` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstance` |
| `msdynmkt_telesignchannelinstance_BulkDeleteFailures` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_telesignchannelinstance` |
| `msdynmkt_telesignchannelinstance_PrincipalObjectAttributeAccesses` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `objectid` | `objectid_msdynmkt_telesignchannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_telesignchannelinstance` | [msdynmkt_telesignchannelinstance](msdynmkt_telesignchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_telesignchannelinstance` |


## Source

Generated from [msdynmkt_telesignchannelinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_telesignchannelinstance')) on 2026-05-07.