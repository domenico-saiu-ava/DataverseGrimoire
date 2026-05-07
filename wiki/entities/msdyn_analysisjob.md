---
logical: "msdyn_analysisjob"
display: "Analysis Job"
entitySetName: "msdyn_analysisjobs"
primaryId: "msdyn_analysisjobid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Analysis Job

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysisjob` |
| Display name | Analysis Job |
| Display (plural) | Analysis Jobs |
| Schema name | `msdyn_analysisjob` |
| Entity set (Web API) | `msdyn_analysisjobs` |
| Primary id attribute | `msdyn_analysisjobid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysisjobs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analysisjobs(<guid>)
POST /api/data/v9.2/msdyn_analysisjobs
PATCH /api/data/v9.2/msdyn_analysisjobs(<guid>)
DELETE /api/data/v9.2/msdyn_analysisjobs(<guid>)
```

## Attributes

Writable: **29** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_analysisjobId`, `msdyn_CustomDetails`, `msdyn_DisplayStatus`, `msdyn_EndTime`, `msdyn_ErrorCount`, `msdyn_Exception`, `msdyn_InAppNotificationEnabled`, `msdyn_name`, `msdyn_RuleFailCount`, `msdyn_RulePassCount`, `msdyn_RuleRunCount`, `msdyn_RunCorrelationId`, `msdyn_sevcriticalcount`, `msdyn_sevhighcount`, `msdyn_sevlowcount`, `msdyn_sevmediumcount`, `msdyn_StartTime`, `msdyn_SuggestionCount`, `msdyn_TenantId`, `msdyn_TriggerType`, `msdyn_WarningCount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_AnalysisJobsReport`, `msdyn_AnalysisJobsReport_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_analysisjob` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_analysisjob_msdyn_AnalysisJobsReport` | [fileattachment](fileattachment.md) | `msdyn_analysisjobsreport` | `msdyn_analysisjobsreport` |
| `lk_msdyn_analysisjob_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysisjob_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysisjob_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysisjob_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_analysisjob` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_analysisjob` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_analysisjob` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysisjob_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisjob_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisjob_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_analysisjob_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_analysisjob_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_analysisjob_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisjob_msdyn_analysiscomponent` | _n/a_ | `msdyn_analysisjobid` | _n/a_ |
| `msdyn_analysisjob_msdyn_analysisresult` | _n/a_ | `msdyn_analysisjobid` | _n/a_ |
| `msdyn_analysisjob_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_analysisjob_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysisjob_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_analysisjob.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_analysisjob.md) on 2026-05-06.