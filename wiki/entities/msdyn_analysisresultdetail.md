---
logical: "msdyn_analysisresultdetail"
display: "Analysis Result Detail"
entitySetName: "msdyn_analysisresultdetails"
primaryId: "msdyn_analysisresultdetailid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Analysis Result Detail

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysisresultdetail` |
| Display name | Analysis Result Detail |
| Display (plural) | Analysis Result Details |
| Schema name | `msdyn_analysisresultdetail` |
| Entity set (Web API) | `msdyn_analysisresultdetails` |
| Primary id attribute | `msdyn_analysisresultdetailid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysisresultdetails?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analysisresultdetails(<guid>)
POST /api/data/v9.2/msdyn_analysisresultdetails
PATCH /api/data/v9.2/msdyn_analysisresultdetails(<guid>)
DELETE /api/data/v9.2/msdyn_analysisresultdetails(<guid>)
```

## Attributes

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AnalysisResult`, `msdyn_analysisresultdetailId`, `msdyn_CanOpenEntityRecord`, `msdyn_EntityName`, `msdyn_Message`, `msdyn_name`, `msdyn_ResultEntityId`, `msdyn_ResultEntityLogicalName`, `msdyn_ResultEntityPrimaryKey`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_analysisresultdetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_analysisresultdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysisresultdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysisresultdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysisresultdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult` | [msdyn_analysisresult](msdyn_analysisresult.md) | `msdyn_analysisresult` | `msdyn_AnalysisResult` |
| `owner_msdyn_analysisresultdetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_analysisresultdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_analysisresultdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysisresultdetail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisresultdetail_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisresultdetail_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_analysisresultdetail_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_analysisresultdetail_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisresultdetail_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_analysisresultdetail_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisresultdetail_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_analysisresultdetail.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_analysisresultdetail.md) on 2026-05-06.