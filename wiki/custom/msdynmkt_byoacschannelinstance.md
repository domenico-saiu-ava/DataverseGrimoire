---
logical: "msdynmkt_byoacschannelinstance"
display: "Istanza canale ACS"
entitySetName: "msdynmkt_byoacschannelinstances"
primaryId: "msdynmkt_byoacschannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Istanza canale ACS

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_byoacschannelinstance` |
| Display name | Istanza canale ACS |
| Display (plural) | Istanze canale ACS |
| Schema name | `msdynmkt_byoacschannelinstance` |
| Entity set (Web API) | `msdynmkt_byoacschannelinstances` |
| Primary id attribute | `msdynmkt_byoacschannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_byoacschannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_byoacschannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_byoacschannelinstances
PATCH /api/data/v9.2/msdynmkt_byoacschannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_byoacschannelinstances(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_byoacschannelinstanceid`, `msdynmkt_name`, `msdynmkt_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_byoacschannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_byoacschannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_byoacschannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_byoacschannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_byoacschannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_byoacschannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_byoacschannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_byoacschannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_byoacschannelinstance_SyncErrors` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstance` |
| `msdynmkt_byoacschannelinstance_AsyncOperations` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstance` |
| `msdynmkt_byoacschannelinstance_MailboxTrackingFolders` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstance` |
| `msdynmkt_byoacschannelinstance_UserEntityInstanceDatas` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `objectid` | `objectid_msdynmkt_byoacschannelinstance` |
| `msdynmkt_byoacschannelinstance_ProcessSession` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstance` |
| `msdynmkt_byoacschannelinstance_BulkDeleteFailures` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_byoacschannelinstance` |
| `msdynmkt_byoacschannelinstance_PrincipalObjectAttributeAccesses` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `objectid` | `objectid_msdynmkt_byoacschannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_byoacschannelinstance` | [msdynmkt_byoacschannelinstance](msdynmkt_byoacschannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_byoacschannelinstance` |


## Source

Generated from [msdynmkt_byoacschannelinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_byoacschannelinstance')) on 2026-05-07.