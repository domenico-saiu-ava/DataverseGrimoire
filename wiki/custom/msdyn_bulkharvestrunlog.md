---
logical: "msdyn_bulkharvestrunlog"
display: "Log esecuzione raccolta in blocco"
entitySetName: "msdyn_bulkharvestrunlogs"
primaryId: "msdyn_bulkharvestrunlogid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Log esecuzione raccolta in blocco

Archivia il log di esecuzione per le operazioni di raccolta in blocco

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bulkharvestrunlog` |
| Display name | Log esecuzione raccolta in blocco |
| Display (plural) | Log esecuzione raccolta in blocco |
| Schema name | `msdyn_bulkharvestrunlog` |
| Entity set (Web API) | `msdyn_bulkharvestrunlogs` |
| Primary id attribute | `msdyn_bulkharvestrunlogid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bulkharvestrunlogs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bulkharvestrunlogs(<guid>)
POST /api/data/v9.2/msdyn_bulkharvestrunlogs
PATCH /api/data/v9.2/msdyn_bulkharvestrunlogs(<guid>)
DELETE /api/data/v9.2/msdyn_bulkharvestrunlogs(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bulkharvestrunlogid`, `msdyn_entityid`, `msdyn_entitylogicalname`, `msdyn_harvestbatchid`, `msdyn_harvestrunid`, `msdyn_knowledgearticleid`, `msdyn_name`, `msdyn_outcome`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bulkharvestrunlog_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_knowledgearticleid` | `msdyn_knowledgearticleid` |
| `lk_msdyn_bulkharvestrunlog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bulkharvestrunlog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bulkharvestrunlog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bulkharvestrunlog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bulkharvestrunlog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bulkharvestrunlog` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bulkharvestrunlog` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bulkharvestrunlog` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bulkharvestrunlog_SyncErrors` | [msdyn_bulkharvestrunlog](msdyn_bulkharvestrunlog.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkharvestrunlog` |
| `msdyn_bulkharvestrunlog_AsyncOperations` | [msdyn_bulkharvestrunlog](msdyn_bulkharvestrunlog.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkharvestrunlog` |
| `msdyn_bulkharvestrunlog_MailboxTrackingFolders` | [msdyn_bulkharvestrunlog](msdyn_bulkharvestrunlog.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkharvestrunlog` |
| `msdyn_bulkharvestrunlog_UserEntityInstanceDatas` | [msdyn_bulkharvestrunlog](msdyn_bulkharvestrunlog.md) | `objectid` | `objectid_msdyn_bulkharvestrunlog` |
| `msdyn_bulkharvestrunlog_ProcessSession` | [msdyn_bulkharvestrunlog](msdyn_bulkharvestrunlog.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkharvestrunlog` |
| `msdyn_bulkharvestrunlog_BulkDeleteFailures` | [msdyn_bulkharvestrunlog](msdyn_bulkharvestrunlog.md) | `regardingobjectid` | `regardingobjectid_msdyn_bulkharvestrunlog` |
| `msdyn_bulkharvestrunlog_PrincipalObjectAttributeAccesses` | [msdyn_bulkharvestrunlog](msdyn_bulkharvestrunlog.md) | `objectid` | `objectid_msdyn_bulkharvestrunlog` |


## Source

Generated from [msdyn_bulkharvestrunlog (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bulkharvestrunlog')) on 2026-05-07.