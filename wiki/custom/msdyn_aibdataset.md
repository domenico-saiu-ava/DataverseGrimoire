---
logical: "msdyn_aibdataset"
display: "AI Builder Dataset"
entitySetName: "msdyn_aibdatasets"
primaryId: "msdyn_aibdatasetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Builder Dataset

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aibdataset` |
| Display name | AI Builder Dataset |
| Display (plural) | AI Builder Datasets |
| Schema name | `msdyn_AIBDataset` |
| Entity set (Web API) | `msdyn_aibdatasets` |
| Primary id attribute | `msdyn_aibdatasetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aibdatasets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aibdatasets(<guid>)
POST /api/data/v9.2/msdyn_aibdatasets
PATCH /api/data/v9.2/msdyn_aibdatasets(<guid>)
DELETE /api/data/v9.2/msdyn_aibdatasets(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aibdatasetid`, `msdyn_aibdatasetscontainerid`, `msdyn_metadata`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aibdataset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibdataset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibdataset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibdataset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aibdataset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aibdataset` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aibdataset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aibdataset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_AIBDataset_msdyn_AIBDatasetsContain` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `msdyn_aibdatasetscontainerid` | `msdyn_AIBDatasetsContainerId` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibdataset_SyncErrors` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdataset_DuplicateMatchingRecord` | [msdyn_aibdataset](msdyn_aibdataset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibdataset` |
| `msdyn_aibdataset_DuplicateBaseRecord` | [msdyn_aibdataset](msdyn_aibdataset.md) | `baserecordid` | `baserecordid_msdyn_aibdataset` |
| `msdyn_aibdataset_AsyncOperations` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdataset_MailboxTrackingFolders` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdataset_UserEntityInstanceDatas` | [msdyn_aibdataset](msdyn_aibdataset.md) | `objectid` | `objectid_msdyn_aibdataset` |
| `msdyn_aibdataset_ProcessSession` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdataset_BulkDeleteFailures` | [msdyn_aibdataset](msdyn_aibdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdataset` |
| `msdyn_aibdataset_PrincipalObjectAttributeAccesses` | [msdyn_aibdataset](msdyn_aibdataset.md) | `objectid` | `objectid_msdyn_aibdataset` |
| `msdyn_AIBDatasetFile_msdyn_AIBDatas` | [msdyn_aibdataset](msdyn_aibdataset.md) | `msdyn_aibdatasetid` | `msdyn_AIBDatasetId` |
| `msdyn_AIBDatasetRecord_msdyn_AIBDataset` | [msdyn_aibdataset](msdyn_aibdataset.md) | `msdyn_aibdatasetsid` | `msdyn_AIBDatasetsId` |


## Source

Generated from [msdyn_aibdataset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aibdataset')) on 2026-05-07.