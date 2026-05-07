---
logical: "msdynmkt_eventmetadata"
display: "Trigger"
entitySetName: "msdynmkt_eventmetadataset"
primaryId: "msdynmkt_eventmetadataid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger

Metadati per eventi CXP

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_eventmetadata` |
| Display name | Trigger |
| Display (plural) | Trigger |
| Schema name | `msdynmkt_eventmetadata` |
| Entity set (Web API) | `msdynmkt_eventmetadataset` |
| Primary id attribute | `msdynmkt_eventmetadataid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_eventmetadataset?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_eventmetadataset(<guid>)
POST /api/data/v9.2/msdynmkt_eventmetadataset
PATCH /api/data/v9.2/msdynmkt_eventmetadataset(<guid>)
DELETE /api/data/v9.2/msdynmkt_eventmetadataset(<guid>)
```

## Attributes

Writable: **21** · Read-only: **18**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_cdpaexportlocation`, `msdynmkt_customapiid`, `msdynmkt_cxpversioningjson`, `msdynmkt_eventjson`, `msdynmkt_eventmetadataid`, `msdynmkt_eventmetadatastatus`, `msdynmkt_integrationstatus`, `msdynmkt_lastintegrationstatuscomputedon`, `msdynmkt_name`, `msdynmkt_sourceentity`, `msdynmkt_state`, `msdynmkt_supportedtargetentities`, `msdynmkt_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdynmkt_cataloguniquename`, `msdynmkt_iconpath`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_customapi_eventmetadata` | [customapi](customapi.md) | `msdynmkt_customapiid` | `msdynmkt_customapiid` |
| `lk_msdynmkt_eventmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_eventmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_eventmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_eventmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_eventmetadata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_eventmetadata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_eventmetadata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_eventmetadata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_eventmetadata_eventmetadata_sdkmessagepro` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `msdynmkt_eventmetadataid` | `msdynmkt_eventmetadataId` |
| `msdynmkt_eventmetadata_SyncErrors` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata` |
| `msdynmkt_eventmetadata_DuplicateMatchingRecord` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_eventmetadata` |
| `msdynmkt_eventmetadata_DuplicateBaseRecord` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `baserecordid` | `baserecordid_msdynmkt_eventmetadata` |
| `msdynmkt_eventmetadata_AsyncOperations` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata` |
| `msdynmkt_eventmetadata_MailboxTrackingFolders` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata` |
| `msdynmkt_eventmetadata_UserEntityInstanceDatas` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `objectid` | `objectid_msdynmkt_eventmetadata` |
| `msdynmkt_eventmetadata_ProcessSession` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata` |
| `msdynmkt_eventmetadata_BulkDeleteFailures` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventmetadata` |
| `msdynmkt_eventmetadata_PrincipalObjectAttributeAccesses` | [msdynmkt_eventmetadata](msdynmkt_eventmetadata.md) | `objectid` | `objectid_msdynmkt_eventmetadata` |


## Source

Generated from [msdynmkt_eventmetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_eventmetadata')) on 2026-05-07.