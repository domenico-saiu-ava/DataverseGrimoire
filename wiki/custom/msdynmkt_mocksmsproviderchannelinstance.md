---
logical: "msdynmkt_mocksmsproviderchannelinstance"
display: "Istanza canale MockSmsProvider"
entitySetName: "msdynmkt_mocksmsproviderchannelinstances"
primaryId: "msdynmkt_mocksmsproviderchannelinstanceid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Istanza canale MockSmsProvider

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_mocksmsproviderchannelinstance` |
| Display name | Istanza canale MockSmsProvider |
| Display (plural) | Istanze canale MockSmsProvider |
| Schema name | `msdynmkt_mocksmsproviderchannelinstance` |
| Entity set (Web API) | `msdynmkt_mocksmsproviderchannelinstances` |
| Primary id attribute | `msdynmkt_mocksmsproviderchannelinstanceid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances(<guid>)
POST /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances
PATCH /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances(<guid>)
DELETE /api/data/v9.2/msdynmkt_mocksmsproviderchannelinstances(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_mocksmsproviderchannelinstanceid`, `msdynmkt_name`, `msdynmkt_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_mocksmsproviderchannelinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_mocksmsproviderchannelinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_mocksmsproviderchannelinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_mocksmsproviderchannelinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_mocksmsproviderchannelinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_mocksmsproviderchannelinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_mocksmsproviderchannelinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_mocksmsproviderchannelinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_mocksmsproviderchannelinstance_SyncErrors` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstance` |
| `msdynmkt_mocksmsproviderchannelinstance_AsyncOperations` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstance` |
| `msdynmkt_mocksmsproviderchannelinstance_MailboxTrackingFolders` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstance` |
| `msdynmkt_mocksmsproviderchannelinstance_UserEntityInstanceDatas` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `objectid` | `objectid_msdynmkt_mocksmsproviderchannelinstance` |
| `msdynmkt_mocksmsproviderchannelinstance_ProcessSession` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstance` |
| `msdynmkt_mocksmsproviderchannelinstance_BulkDeleteFailures` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_mocksmsproviderchannelinstance` |
| `msdynmkt_mocksmsproviderchannelinstance_PrincipalObjectAttributeAccesses` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `objectid` | `objectid_msdynmkt_mocksmsproviderchannelinstance` |
| `msdyn_ChannelInstance_extendedentityid_msdynmkt_mocksmsproviderchannelinstance` | [msdynmkt_mocksmsproviderchannelinstance](msdynmkt_mocksmsproviderchannelinstance.md) | `msdyn_extendedentityid` | `msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstance` |


## Source

Generated from [msdynmkt_mocksmsproviderchannelinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_mocksmsproviderchannelinstance')) on 2026-05-07.