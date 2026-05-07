---
logical: "msdyn_aitestrun"
display: "AI Test Run"
entitySetName: "msdyn_aitestruns"
primaryId: "msdyn_aitestrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Test Run

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestrun` |
| Display name | AI Test Run |
| Display (plural) | AI Test Run |
| Schema name | `msdyn_AITestRun` |
| Entity set (Web API) | `msdyn_aitestruns` |
| Primary id attribute | `msdyn_aitestrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestruns(<guid>)
POST /api/data/v9.2/msdyn_aitestruns
PATCH /api/data/v9.2/msdyn_aitestruns(<guid>)
DELETE /api/data/v9.2/msdyn_aitestruns(<guid>)
```

## Attributes

Writable: **24** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AccuracyScore`, `msdyn_ActualOutput`, `msdyn_AdditionalResponseMetadata`, `msdyn_AITestCaseId`, `msdyn_AITestRunBatchId`, `msdyn_AITestRunId`, `msdyn_Comment`, `msdyn_CompletedOn`, `msdyn_ConfigurationId`, `msdyn_ErrorMessage`, `msdyn_ExpectedOutput`, `msdyn_Name`, `msdyn_RunDuration`, `msdyn_StartedOn`, `msdyn_TestRunSetting`, `msdyn_TestRunStatus`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aitestrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aitestrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aitestcase_msdyn_aitestrun` | [msdyn_aitestcase](msdyn_aitestcase.md) | `msdyn_aitestcaseid` | `msdyn_AITestCaseId` |
| `msdyn_aitestrunbatch_msdyn_aitestrun` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `msdyn_aitestrunbatchid` | `msdyn_AITestRunBatchId` |
| `owner_msdyn_aitestrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aitestrun` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aitestrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestrun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestrun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestrun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestrun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aitestrun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aitestrun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aitestrun.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aitestrun.md) on 2026-05-06.