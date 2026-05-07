---
logical: "msdynmkt_vibeschannelinstance"
display: "Istanza del canale Vibes"
entitySetName: "msdynmkt_vibeschannelinstances"
primaryId: "msdynmkt_vibeschannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Istanza del canale Vibes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_vibeschannelinstance` |
| Display name | Istanza del canale Vibes |
| Display (plural) | Istanze di canale Vibes |
| Schema name | `msdynmkt_vibeschannelinstance` |
| Entity set (Web API) | `msdynmkt_vibeschannelinstances` |
| Primary id attribute | `msdynmkt_vibeschannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_vibeschannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_vibeschannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_vibeschannelinstances
PATCH /api/data/v9.2/msdynmkt_vibeschannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_vibeschannelinstances(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_name`, `msdynmkt_type`, `msdynmkt_vibeschannelinstanceid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_vibeschannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_vibeschannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_vibeschannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_vibeschannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_vibeschannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_vibeschannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_vibeschannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_vibeschannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_vibeschannelinstance_SyncErrors` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstance` |
| `msdynmkt_vibeschannelinstance_AsyncOperations` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstance` |
| `msdynmkt_vibeschannelinstance_MailboxTrackingFolders` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstance` |
| `msdynmkt_vibeschannelinstance_UserEntityInstanceDatas` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `objectid` | `objectid_msdynmkt_vibeschannelinstance` |
| `msdynmkt_vibeschannelinstance_ProcessSession` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstance` |
| `msdynmkt_vibeschannelinstance_BulkDeleteFailures` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_vibeschannelinstance` |
| `msdynmkt_vibeschannelinstance_PrincipalObjectAttributeAccesses` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `objectid` | `objectid_msdynmkt_vibeschannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_vibeschannelinstance` | [msdynmkt_vibeschannelinstance](msdynmkt_vibeschannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_vibeschannelinstance` |


## Source

Generated from [msdynmkt_vibeschannelinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_vibeschannelinstance')) on 2026-05-07.