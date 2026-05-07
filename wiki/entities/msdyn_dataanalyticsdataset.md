---
logical: "msdyn_dataanalyticsdataset"
display: "Data Analytics Dataset"
entitySetName: "msdyn_dataanalyticsdatasets"
primaryId: "msdyn_dataanalyticsdatasetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Analytics Dataset

Data Analytics Power BI Datasets

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsdataset` |
| Display name | Data Analytics Dataset |
| Display (plural) | Data Analytics Datasets |
| Schema name | `msdyn_dataanalyticsdataset` |
| Entity set (Web API) | `msdyn_dataanalyticsdatasets` |
| Primary id attribute | `msdyn_dataanalyticsdatasetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsdatasets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsdatasets(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsdatasets
PATCH /api/data/v9.2/msdyn_dataanalyticsdatasets(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsdatasets(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_dataanalyticsdatasetId`, `msdyn_dataanalyticsworkspaceid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_datasetid`, `msdyn_datasettype`, `msdyn_name`, `msdyn_parentdatasetid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dataanalyticsdataset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dataanalyticsdataset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsdataset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsdataset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsdataset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dataanalyticsdataset_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureid` |
| `msdyn_dataanalyticsdataset_parentdatasetid` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `msdyn_parentdatasetid` | `msdyn_parentdatasetid` |
| `msdyn_msdyn_dataanalyticsworkspace_msdyn_dataanalyticsdataset_dataanalyticsworkspaceid` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `msdyn_dataanalyticsworkspaceid` | `msdyn_dataanalyticsworkspaceid` |
| `owner_msdyn_dataanalyticsdataset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dataanalyticsdataset` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dataanalyticsdataset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsdataset_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsdataset_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsdataset_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dataanalyticsdataset_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dataanalyticsdataset_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsdataset_parentdatasetid` | _n/a_ | `msdyn_parentdatasetid` | _n/a_ |
| `msdyn_dataanalyticsdataset_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataanalyticsdataset_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsdataset_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataanalyticsdataset.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dataanalyticsdataset.md) on 2026-05-06.