---
logical: "msdynmkt_twiliochannelinstance"
display: "Istanza canale Twilio"
entitySetName: "msdynmkt_twiliochannelinstances"
primaryId: "msdynmkt_twiliochannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Istanza canale Twilio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_twiliochannelinstance` |
| Display name | Istanza canale Twilio |
| Display (plural) | Istanze canale Twilio |
| Schema name | `msdynmkt_twiliochannelinstance` |
| Entity set (Web API) | `msdynmkt_twiliochannelinstances` |
| Primary id attribute | `msdynmkt_twiliochannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_twiliochannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_twiliochannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_twiliochannelinstances
PATCH /api/data/v9.2/msdynmkt_twiliochannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_twiliochannelinstances(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_name`, `msdynmkt_twiliochannelinstanceid`, `msdynmkt_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_twiliochannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_twiliochannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_twiliochannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_twiliochannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_twiliochannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_twiliochannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_twiliochannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_twiliochannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_twiliochannelinstance_SyncErrors` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstance` |
| `msdynmkt_twiliochannelinstance_AsyncOperations` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstance` |
| `msdynmkt_twiliochannelinstance_MailboxTrackingFolders` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstance` |
| `msdynmkt_twiliochannelinstance_UserEntityInstanceDatas` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `objectid` | `objectid_msdynmkt_twiliochannelinstance` |
| `msdynmkt_twiliochannelinstance_ProcessSession` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstance` |
| `msdynmkt_twiliochannelinstance_BulkDeleteFailures` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_twiliochannelinstance` |
| `msdynmkt_twiliochannelinstance_PrincipalObjectAttributeAccesses` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `objectid` | `objectid_msdynmkt_twiliochannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_twiliochannelinstance` | [msdynmkt_twiliochannelinstance](msdynmkt_twiliochannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_twiliochannelinstance` |


## Source

Generated from [msdynmkt_twiliochannelinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_twiliochannelinstance')) on 2026-05-07.