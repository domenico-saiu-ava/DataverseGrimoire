---
logical: "msdyn_pmanalysishistory"
display: "PM Analysis History"
entitySetName: "msdyn_pmanalysishistories"
primaryId: "msdyn_pmanalysishistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Analysis History

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmanalysishistory` |
| Display name | PM Analysis History |
| Display (plural) | PM Analysis History |
| Schema name | `msdyn_pmanalysishistory` |
| Entity set (Web API) | `msdyn_pmanalysishistories` |
| Primary id attribute | `msdyn_pmanalysishistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmanalysishistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmanalysishistories(<guid>)
POST /api/data/v9.2/msdyn_pmanalysishistories
PATCH /api/data/v9.2/msdyn_pmanalysishistories(<guid>)
DELETE /api/data/v9.2/msdyn_pmanalysishistories(<guid>)
```

## Attributes

Writable: **19** · Read-only: **18**

### Writable

`ActionableInsightsGenerationStatus`, `ActionableInsightsLastPublishedOn`, `ImportSequenceNumber`, `IsCustomizable`, `msdyn_analysisresult`, `msdyn_analysistype`, `msdyn_iterationid`, `msdyn_lasterrors`, `msdyn_name`, `msdyn_parenttask`, `msdyn_pmanalysishistoryId`, `msdyn_starttime`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmanalysishistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmanalysishistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmanalysishistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmanalysishistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmanalysishistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_pminferredtask_msdyn_pmanalysishistory_parenttask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_parenttask` | `msdyn_parenttask` |
| `owner_msdyn_pmanalysishistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmanalysishistory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmanalysishistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmanalysishistory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmanalysishistory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmanalysishistory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmanalysishistory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmanalysishistory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmanalysishistory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmanalysishistory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmanalysishistory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmanalysishistory.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmanalysishistory.md) on 2026-05-06.