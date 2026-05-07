---
logical: "msdyn_aibfileattacheddata"
display: "AI Builder File Attached Data"
entitySetName: "msdyn_aibfileattacheddatas"
primaryId: "msdyn_aibfileattacheddataid"
primaryName: "msdyn_key"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Builder File Attached Data

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aibfileattacheddata` |
| Display name | AI Builder File Attached Data |
| Display (plural) | AI Builder File Attached Data |
| Schema name | `msdyn_AIBFileAttachedData` |
| Entity set (Web API) | `msdyn_aibfileattacheddatas` |
| Primary id attribute | `msdyn_aibfileattacheddataid` |
| Primary name attribute | `msdyn_key` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aibfileattacheddatas?$select=msdyn_key&$top=10
GET /api/data/v9.2/msdyn_aibfileattacheddatas(<guid>)
POST /api/data/v9.2/msdyn_aibfileattacheddatas
PATCH /api/data/v9.2/msdyn_aibfileattacheddatas(<guid>)
DELETE /api/data/v9.2/msdyn_aibfileattacheddatas(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aibdatasetfileid`, `msdyn_aibfileattacheddataid`, `msdyn_data`, `msdyn_key`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aibfileattacheddata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibfileattacheddata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibfileattacheddata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibfileattacheddata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aibfileattacheddata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aibfileattacheddata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aibfileattacheddata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aibfileattacheddata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_AIBFileAttachedData_msdyn_AIB` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `msdyn_aibdatasetfileid` | `msdyn_AIBDatasetFileId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibfileattacheddata_SyncErrors` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aibfileattacheddata_DuplicateMatchingRecord` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibfileattacheddata` |
| `msdyn_aibfileattacheddata_DuplicateBaseRecord` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `baserecordid` | `baserecordid_msdyn_aibfileattacheddata` |
| `msdyn_aibfileattacheddata_AsyncOperations` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aibfileattacheddata_MailboxTrackingFolders` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aibfileattacheddata_UserEntityInstanceDatas` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `objectid` | `objectid_msdyn_aibfileattacheddata` |
| `msdyn_aibfileattacheddata_ProcessSession` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aibfileattacheddata_BulkDeleteFailures` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibfileattacheddata` |
| `msdyn_aibfileattacheddata_PrincipalObjectAttributeAccesses` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `objectid` | `objectid_msdyn_aibfileattacheddata` |


## Source

Generated from [msdyn_aibfileattacheddata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aibfileattacheddata')) on 2026-05-07.