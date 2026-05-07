---
logical: "msdynmkt_eventparametermetadata"
display: "Metadati parametro evento"
entitySetName: "msdynmkt_eventparametermetadataset"
primaryId: "msdynmkt_eventparametermetadataid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Metadati parametro evento

Metadati per parametri evento CXP

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_eventparametermetadata` |
| Display name | Metadati parametro evento |
| Display (plural) | Set di metadati parametro evento |
| Schema name | `msdynmkt_eventparametermetadata` |
| Entity set (Web API) | `msdynmkt_eventparametermetadataset` |
| Primary id attribute | `msdynmkt_eventparametermetadataid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_eventparametermetadataset?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_eventparametermetadataset(<guid>)
POST /api/data/v9.2/msdynmkt_eventparametermetadataset
PATCH /api/data/v9.2/msdynmkt_eventparametermetadataset(<guid>)
DELETE /api/data/v9.2/msdynmkt_eventparametermetadataset(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_cdpajson`, `msdynmkt_customapirequestparameterid`, `msdynmkt_eventparametermetadataid`, `msdynmkt_name`, `msdynmkt_type`, `msdynmkt_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_customapirequestparameter_eventparameter` | [customapirequestparameter](customapirequestparameter.md) | `msdynmkt_customapirequestparameterid` | `msdynmkt_customapirequestparameterid` |
| `lk_msdynmkt_eventparametermetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_eventparametermetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_eventparametermetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_eventparametermetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_eventparametermetadata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_eventparametermetadata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_eventparametermetadata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_eventparametermetadata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_eventparametermetadata_SyncErrors` | [msdynmkt_eventparametermetadata](msdynmkt_eventparametermetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventparametermetadata` |
| `msdynmkt_eventparametermetadata_DuplicateMatchingRecord` | [msdynmkt_eventparametermetadata](msdynmkt_eventparametermetadata.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_eventparametermetadata` |
| `msdynmkt_eventparametermetadata_DuplicateBaseRecord` | [msdynmkt_eventparametermetadata](msdynmkt_eventparametermetadata.md) | `baserecordid` | `baserecordid_msdynmkt_eventparametermetadata` |
| `msdynmkt_eventparametermetadata_AsyncOperations` | [msdynmkt_eventparametermetadata](msdynmkt_eventparametermetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventparametermetadata` |
| `msdynmkt_eventparametermetadata_MailboxTrackingFolders` | [msdynmkt_eventparametermetadata](msdynmkt_eventparametermetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventparametermetadata` |
| `msdynmkt_eventparametermetadata_UserEntityInstanceDatas` | [msdynmkt_eventparametermetadata](msdynmkt_eventparametermetadata.md) | `objectid` | `objectid_msdynmkt_eventparametermetadata` |
| `msdynmkt_eventparametermetadata_ProcessSession` | [msdynmkt_eventparametermetadata](msdynmkt_eventparametermetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventparametermetadata` |
| `msdynmkt_eventparametermetadata_BulkDeleteFailures` | [msdynmkt_eventparametermetadata](msdynmkt_eventparametermetadata.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_eventparametermetadata` |
| `msdynmkt_eventparametermetadata_PrincipalObjectAttributeAccesses` | [msdynmkt_eventparametermetadata](msdynmkt_eventparametermetadata.md) | `objectid` | `objectid_msdynmkt_eventparametermetadata` |


## Source

Generated from [msdynmkt_eventparametermetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_eventparametermetadata')) on 2026-05-07.