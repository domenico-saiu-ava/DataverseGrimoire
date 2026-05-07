---
logical: "msdynmkt_metadatastorestate"
display: "Stato archivio metadati"
entitySetName: "msdynmkt_metadatastorestates"
primaryId: "msdynmkt_metadatastorestateid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato archivio metadati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_metadatastorestate` |
| Display name | Stato archivio metadati |
| Display (plural) | Stati archivio metadati |
| Schema name | `msdynmkt_metadatastorestate` |
| Entity set (Web API) | `msdynmkt_metadatastorestates` |
| Primary id attribute | `msdynmkt_metadatastorestateid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_metadatastorestates?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_metadatastorestates(<guid>)
POST /api/data/v9.2/msdynmkt_metadatastorestates
PATCH /api/data/v9.2/msdynmkt_metadatastorestates(<guid>)
DELETE /api/data/v9.2/msdynmkt_metadatastorestates(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_cjoeventslastcheckedontimestamp`, `msdynmkt_dataversetablelastcheckedontimestamp`, `msdynmkt_maxstoreageinseconds`, `msdynmkt_metadatastorestateid`, `msdynmkt_name`, `msdynmkt_storemajorversion`, `msdynmkt_storeminorversion`, `msdynmkt_storestate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_metadatastorestate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_metadatastorestate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_metadatastorestate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_metadatastorestate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_metadatastorestate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_metadatastorestate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_metadatastorestate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_metadatastorestate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_metadatastorestate_SyncErrors` | [msdynmkt_metadatastorestate](msdynmkt_metadatastorestate.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadatastorestate` |
| `msdynmkt_metadatastorestate_DuplicateMatchingRecord` | [msdynmkt_metadatastorestate](msdynmkt_metadatastorestate.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_metadatastorestate` |
| `msdynmkt_metadatastorestate_DuplicateBaseRecord` | [msdynmkt_metadatastorestate](msdynmkt_metadatastorestate.md) | `baserecordid` | `baserecordid_msdynmkt_metadatastorestate` |
| `msdynmkt_metadatastorestate_AsyncOperations` | [msdynmkt_metadatastorestate](msdynmkt_metadatastorestate.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadatastorestate` |
| `msdynmkt_metadatastorestate_MailboxTrackingFolders` | [msdynmkt_metadatastorestate](msdynmkt_metadatastorestate.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadatastorestate` |
| `msdynmkt_metadatastorestate_UserEntityInstanceDatas` | [msdynmkt_metadatastorestate](msdynmkt_metadatastorestate.md) | `objectid` | `objectid_msdynmkt_metadatastorestate` |
| `msdynmkt_metadatastorestate_ProcessSession` | [msdynmkt_metadatastorestate](msdynmkt_metadatastorestate.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadatastorestate` |
| `msdynmkt_metadatastorestate_BulkDeleteFailures` | [msdynmkt_metadatastorestate](msdynmkt_metadatastorestate.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadatastorestate` |
| `msdynmkt_metadatastorestate_PrincipalObjectAttributeAccesses` | [msdynmkt_metadatastorestate](msdynmkt_metadatastorestate.md) | `objectid` | `objectid_msdynmkt_metadatastorestate` |


## Source

Generated from [msdynmkt_metadatastorestate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_metadatastorestate')) on 2026-05-07.