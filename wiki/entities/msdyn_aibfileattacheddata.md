---
logical: "msdyn_aibfileattacheddata"
display: "AI Builder File Attached Data"
entitySetName: "msdyn_aibfileattacheddatas"
primaryId: "msdyn_aibfileattacheddataid"
primaryName: "msdyn_key"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AIBDatasetFileId`, `msdyn_AIBFileAttachedDataId`, `msdyn_Data`, `msdyn_Key`, `msdyn_Type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aibfileattacheddata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aibfileattacheddata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibfileattacheddata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibfileattacheddata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibfileattacheddata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_AIBFileAttachedData_msdyn_AIB` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `msdyn_aibdatasetfileid` | `msdyn_AIBDatasetFileId` |
| `owner_msdyn_aibfileattacheddata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aibfileattacheddata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aibfileattacheddata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibfileattacheddata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfileattacheddata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfileattacheddata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aibfileattacheddata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aibfileattacheddata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfileattacheddata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aibfileattacheddata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibfileattacheddata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aibfileattacheddata.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aibfileattacheddata.md) on 2026-05-06.