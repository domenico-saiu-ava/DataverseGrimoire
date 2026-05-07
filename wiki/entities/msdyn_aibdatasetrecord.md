---
logical: "msdyn_aibdatasetrecord"
display: "AI Builder Dataset Record"
entitySetName: "msdyn_aibdatasetrecords"
primaryId: "msdyn_aibdatasetrecordid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AIBDatasetRecordId`, `msdyn_AIBDatasetsId`, `msdyn_Data`, `msdyn_Name`, `msdyn_RecordType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aibdatasetrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aibdatasetrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aibdatasetrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aibdatasetrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aibdatasetrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_AIBDatasetRecord_msdyn_AIBDataset` | [msdyn_aibdataset](msdyn_aibdataset.md) | `msdyn_aibdatasetsid` | `msdyn_AIBDatasetsId` |
| `owner_msdyn_aibdatasetrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aibdatasetrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aibdatasetrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aibdatasetrecord_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetrecord_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetrecord_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aibdatasetrecord_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aibdatasetrecord_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetrecord_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aibdatasetrecord_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aibdatasetrecord_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aibdatasetrecord.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aibdatasetrecord.md) on 2026-05-06.