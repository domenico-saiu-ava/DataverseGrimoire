---
logical: "msdyn_aibdataset"
display: "AI Builder Dataset"
entitySetName: "msdyn_aibdatasets"
primaryId: "msdyn_aibdatasetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AIBDatasetId`, `msdyn_AIBDatasetsContainerId`, `msdyn_Metadata`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aibdataset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aibdataset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibdataset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibdataset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibdataset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_AIBDataset_msdyn_AIBDatasetsContain` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `msdyn_aibdatasetscontainerid` | `msdyn_AIBDatasetsContainerId` |
| `owner_msdyn_aibdataset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aibdataset` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aibdataset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibdataset_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdataset_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdataset_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aibdataset_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aibdataset_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdataset_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aibdataset_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdataset_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_AIBDatasetFile_msdyn_AIBDatas` | _n/a_ | `msdyn_aibdatasetid` | _n/a_ |
| `msdyn_AIBDatasetRecord_msdyn_AIBDataset` | _n/a_ | `msdyn_aibdatasetsid` | _n/a_ |


## Source

Generated from [msdyn_aibdataset.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aibdataset.md) on 2026-05-06.