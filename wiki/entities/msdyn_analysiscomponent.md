---
logical: "msdyn_analysiscomponent"
display: "Analysis Component"
entitySetName: "msdyn_analysiscomponents"
primaryId: "msdyn_analysiscomponentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Analysis Component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysiscomponent` |
| Display name | Analysis Component |
| Display (plural) | Analysis Components |
| Schema name | `msdyn_analysiscomponent` |
| Entity set (Web API) | `msdyn_analysiscomponents` |
| Primary id attribute | `msdyn_analysiscomponentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysiscomponents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analysiscomponents(<guid>)
POST /api/data/v9.2/msdyn_analysiscomponents
PATCH /api/data/v9.2/msdyn_analysiscomponents(<guid>)
DELETE /api/data/v9.2/msdyn_analysiscomponents(<guid>)
```

## Attributes

Writable: **28** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_analysiscomponentId`, `msdyn_AnalysisComponentType`, `msdyn_AnalysisJobId`, `msdyn_ComponentId`, `msdyn_ComponentName`, `msdyn_ComponentType`, `msdyn_ComponentVersion`, `msdyn_ErrorCount`, `msdyn_name`, `msdyn_RetryCount`, `msdyn_RuleFailCount`, `msdyn_RulePassCount`, `msdyn_RulePassRate`, `msdyn_sevcriticalcount`, `msdyn_sevhighcount`, `msdyn_sevlowcount`, `msdyn_sevmediumcount`, `msdyn_SolutionHealthRuleSetId`, `msdyn_SuggestionCount`, `msdyn_WarningCount`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_analysiscomponent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_analysiscomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysiscomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysiscomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysiscomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_analysisjob_msdyn_analysiscomponent` | [msdyn_analysisjob](msdyn_analysisjob.md) | `msdyn_analysisjobid` | `msdyn_AnalysisJobId` |
| `msdyn_msdyn_solutionhealthruleset_msdyn_analysi` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `msdyn_solutionhealthrulesetid` | `msdyn_SolutionHealthRuleSetId` |
| `owner_msdyn_analysiscomponent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_analysiscomponent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_analysiscomponent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysiscomponent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysiscomponent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysiscomponent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_analysiscomponent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_analysiscomponent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysiscomponent_msdyn_analysisresult` | _n/a_ | `msdyn_analysiscomponentid` | _n/a_ |
| `msdyn_analysiscomponent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_analysiscomponent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analysiscomponent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_analysiscomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_analysiscomponent.md) on 2026-05-06.