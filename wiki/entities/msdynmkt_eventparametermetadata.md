---
logical: "msdynmkt_eventparametermetadata"
display: "EventParameterMetadata"
entitySetName: "msdynmkt_eventparametermetadataset"
primaryId: "msdynmkt_eventparametermetadataid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
---

# EventParameterMetadata

Metadata for Cxp Event Parameters

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_eventparametermetadata` |
| Display name | EventParameterMetadata |
| Display (plural) | EventParameterMetadataSet |
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

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_cdpajson`, `msdynmkt_customapirequestparameterid`, `msdynmkt_eventparametermetadataId`, `msdynmkt_name`, `msdynmkt_type`, `msdynmkt_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdynmkt_eventparametermetadata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdynmkt_eventparametermetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_eventparametermetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_eventparametermetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_eventparametermetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_customapirequestparameter_eventparameter` | [customapirequestparameter](customapirequestparameter.md) | `msdynmkt_customapirequestparameterid` | `msdynmkt_customapirequestparameterid` |
| `owner_msdynmkt_eventparametermetadata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdynmkt_eventparametermetadata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdynmkt_eventparametermetadata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_eventparametermetadata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventparametermetadata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventparametermetadata_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_eventparametermetadata_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_eventparametermetadata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventparametermetadata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_eventparametermetadata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_eventparametermetadata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_eventparametermetadata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_eventparametermetadata.md) on 2026-05-06.