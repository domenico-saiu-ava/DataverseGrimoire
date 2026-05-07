---
logical: "msdynmkt_linkmobilitychannelinstance"
display: "Istanza del canale Link Mobility"
entitySetName: "msdynmkt_linkmobilitychannelinstances"
primaryId: "msdynmkt_linkmobilitychannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Istanza del canale Link Mobility

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_linkmobilitychannelinstance` |
| Display name | Istanza del canale Link Mobility |
| Display (plural) | Istanze del canale Link Mobility |
| Schema name | `msdynmkt_linkmobilitychannelinstance` |
| Entity set (Web API) | `msdynmkt_linkmobilitychannelinstances` |
| Primary id attribute | `msdynmkt_linkmobilitychannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_linkmobilitychannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_linkmobilitychannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_linkmobilitychannelinstances
PATCH /api/data/v9.2/msdynmkt_linkmobilitychannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_linkmobilitychannelinstances(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_linkmobilitychannelinstanceid`, `msdynmkt_name`, `msdynmkt_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_linkmobilitychannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_linkmobilitychannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_linkmobilitychannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_linkmobilitychannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_linkmobilitychannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_linkmobilitychannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_linkmobilitychannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_linkmobilitychannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_linkmobilitychannelinstance_SyncErrors` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstance` |
| `msdynmkt_linkmobilitychannelinstance_AsyncOperations` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstance` |
| `msdynmkt_linkmobilitychannelinstance_MailboxTrackingFolders` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstance` |
| `msdynmkt_linkmobilitychannelinstance_UserEntityInstanceDatas` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `objectid` | `objectid_msdynmkt_linkmobilitychannelinstance` |
| `msdynmkt_linkmobilitychannelinstance_ProcessSession` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstance` |
| `msdynmkt_linkmobilitychannelinstance_BulkDeleteFailures` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_linkmobilitychannelinstance` |
| `msdynmkt_linkmobilitychannelinstance_PrincipalObjectAttributeAccesses` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `objectid` | `objectid_msdynmkt_linkmobilitychannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_linkmobilitychannelinstance` | [msdynmkt_linkmobilitychannelinstance](msdynmkt_linkmobilitychannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstance` |


## Source

Generated from [msdynmkt_linkmobilitychannelinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_linkmobilitychannelinstance')) on 2026-05-07.