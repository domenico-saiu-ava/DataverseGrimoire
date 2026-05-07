---
logical: "msdyn_aibdatasetrecord"
display: "AI Builder Dataset Record"
entitySetName: "msdyn_aibdatasetrecords"
primaryId: "msdyn_aibdatasetrecordid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Builder Dataset Record

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aibdatasetrecord` |
| Display name | AI Builder Dataset Record |
| Display (plural) | AI Builder Dataset Records |
| Schema name | `msdyn_AIBDatasetRecord` |
| Entity set (Web API) | `msdyn_aibdatasetrecords` |
| Primary id attribute | `msdyn_aibdatasetrecordid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aibdatasetrecords?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aibdatasetrecords(<guid>)
POST /api/data/v9.2/msdyn_aibdatasetrecords
PATCH /api/data/v9.2/msdyn_aibdatasetrecords(<guid>)
DELETE /api/data/v9.2/msdyn_aibdatasetrecords(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aibdatasetrecordid`, `msdyn_aibdatasetsid`, `msdyn_data`, `msdyn_name`, `msdyn_recordtype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aibdatasetrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibdatasetrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibdatasetrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibdatasetrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aibdatasetrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aibdatasetrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aibdatasetrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aibdatasetrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_AIBDatasetRecord_msdyn_AIBDataset` | [msdyn_aibdataset](msdyn_aibdataset.md) | `msdyn_aibdatasetsid` | `msdyn_AIBDatasetsId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibdatasetrecord_SyncErrors` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetrecord_DuplicateMatchingRecord` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetrecord_DuplicateBaseRecord` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `baserecordid` | `baserecordid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetrecord_AsyncOperations` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetrecord_MailboxTrackingFolders` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetrecord_UserEntityInstanceDatas` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `objectid` | `objectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetrecord_ProcessSession` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetrecord_BulkDeleteFailures` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `regardingobjectid` | `regardingobjectid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetrecord_PrincipalObjectAttributeAccesses` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `objectid` | `objectid_msdyn_aibdatasetrecord` |


## Source

Generated from [msdyn_aibdatasetrecord (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aibdatasetrecord')) on 2026-05-07.