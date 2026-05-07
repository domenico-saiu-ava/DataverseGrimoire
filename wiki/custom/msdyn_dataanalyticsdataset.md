---
logical: "msdyn_dataanalyticsdataset"
display: "Set di dati di analisi dei dati"
entitySetName: "msdyn_dataanalyticsdatasets"
primaryId: "msdyn_dataanalyticsdatasetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Set di dati di analisi dei dati

Set di dati Power BI di analisi dei dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsdataset` |
| Display name | Set di dati di analisi dei dati |
| Display (plural) | Set di dati di analisi dei dati |
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

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataanalyticsdatasetid`, `msdyn_dataanalyticsworkspaceid`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_datasetid`, `msdyn_datasettype`, `msdyn_name`, `msdyn_parentdatasetid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsdataset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsdataset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsdataset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsdataset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataanalyticsdataset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataanalyticsdataset` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataanalyticsdataset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataanalyticsdataset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_dataanalyticsdataset_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureid` |
| `msdyn_dataanalyticsdataset_parentdatasetid` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `msdyn_parentdatasetid` | `msdyn_parentdatasetid` |
| `msdyn_msdyn_dataanalyticsworkspace_msdyn_dataanalyticsdataset_dataanalyticsworkspaceid` | [msdyn_dataanalyticsworkspace](msdyn_dataanalyticsworkspace.md) | `msdyn_dataanalyticsworkspaceid` | `msdyn_dataanalyticsworkspaceid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsdataset_SyncErrors` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsdataset` |
| `msdyn_dataanalyticsdataset_DuplicateMatchingRecord` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataanalyticsdataset` |
| `msdyn_dataanalyticsdataset_DuplicateBaseRecord` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `baserecordid` | `baserecordid_msdyn_dataanalyticsdataset` |
| `msdyn_dataanalyticsdataset_AsyncOperations` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsdataset` |
| `msdyn_dataanalyticsdataset_MailboxTrackingFolders` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsdataset` |
| `msdyn_dataanalyticsdataset_UserEntityInstanceDatas` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `objectid` | `objectid_msdyn_dataanalyticsdataset` |
| `msdyn_dataanalyticsdataset_ProcessSession` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsdataset` |
| `msdyn_dataanalyticsdataset_BulkDeleteFailures` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataanalyticsdataset` |
| `msdyn_dataanalyticsdataset_PrincipalObjectAttributeAccesses` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `objectid` | `objectid_msdyn_dataanalyticsdataset` |
| `msdyn_dataanalyticsdataset_parentdatasetid` | [msdyn_dataanalyticsdataset](msdyn_dataanalyticsdataset.md) | `msdyn_parentdatasetid` | `msdyn_parentdatasetid` |


## Source

Generated from [msdyn_dataanalyticsdataset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataanalyticsdataset')) on 2026-05-07.