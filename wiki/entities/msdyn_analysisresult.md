---
logical: "msdyn_analysisresult"
display: "Analysis Result"
entitySetName: "msdyn_analysisresults"
primaryId: "msdyn_analysisresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Analysis Result

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysisresult` |
| Display name | Analysis Result |
| Display (plural) | Analysis Results |
| Schema name | `msdyn_analysisresult` |
| Entity set (Web API) | `msdyn_analysisresults` |
| Primary id attribute | `msdyn_analysisresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysisresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analysisresults(<guid>)
POST /api/data/v9.2/msdyn_analysisresults
PATCH /api/data/v9.2/msdyn_analysisresults(<guid>)
DELETE /api/data/v9.2/msdyn_analysisresults(<guid>)
```

## Attributes

Writable: **34** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AnalysisComponentId`, `msdyn_AnalysisComponentType`, `msdyn_AnalysisJobId`, `msdyn_analysisresultId`, `msdyn_Category`, `msdyn_ComponentType`, `msdyn_EntityName`, `msdyn_FileUri`, `msdyn_HasResolution`, `msdyn_helplink`, `msdyn_Level`, `msdyn_Line`, `msdyn_Member`, `msdyn_Message`, `msdyn_MessageArguments`, `msdyn_MessageId`, `msdyn_Module`, `msdyn_name`, `msdyn_RepairIssueType`, `msdyn_ReturnStatus`, `msdyn_RuleId`, `msdyn_RuleReferenceUri`, `msdyn_Severity`, `msdyn_Snippet`, `msdyn_SolutionHealthMessage`, `msdyn_Type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_analysisresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_analysisresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysisresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysisresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysisresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_analysiscomponent_msdyn_analysisresult` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `msdyn_analysiscomponentid` | `msdyn_AnalysisComponentId` |
| `msdyn_analysisjob_msdyn_analysisresult` | [msdyn_analysisjob](msdyn_analysisjob.md) | `msdyn_analysisjobid` | `msdyn_AnalysisJobId` |
| `owner_msdyn_analysisresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_analysisresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_analysisresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysisresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisresult_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_analysisresult_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_analysisresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_analysisresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult` | _n/a_ | `msdyn_analysisresult` | _n/a_ |


## Source

Generated from [msdyn_analysisresult.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_analysisresult.md) on 2026-05-06.