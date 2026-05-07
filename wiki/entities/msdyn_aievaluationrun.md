---
logical: "msdyn_aievaluationrun"
display: "AI Evaluation Run"
entitySetName: "msdyn_aievaluationruns"
primaryId: "msdyn_aievaluationrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Evaluation Run

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aievaluationrun` |
| Display name | AI Evaluation Run |
| Display (plural) | AI Evaluation Run |
| Schema name | `msdyn_AIEvaluationRun` |
| Entity set (Web API) | `msdyn_aievaluationruns` |
| Primary id attribute | `msdyn_aievaluationrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aievaluationruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aievaluationruns(<guid>)
POST /api/data/v9.2/msdyn_aievaluationruns
PATCH /api/data/v9.2/msdyn_aievaluationruns(<guid>)
DELETE /api/data/v9.2/msdyn_aievaluationruns(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AdditionalResponseMetadata`, `msdyn_AIEvaluationConfigurationId`, `msdyn_AIEvaluationRunId`, `msdyn_AIRunObjectId`, `msdyn_AIRunObjectType`, `msdyn_Comment`, `msdyn_CompletedOn`, `msdyn_ErrorMessage`, `msdyn_EvaluationResult`, `msdyn_Name`, `msdyn_RunDuration`, `msdyn_RunStatus`, `msdyn_StartedOn`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aievaluationrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aievaluationrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aievaluationrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aievaluationrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aievaluationrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aievaluationconfiguration_msdyn_aievaluationrun` | [msdyn_aievaluationconfiguration](msdyn_aievaluationconfiguration.md) | `msdyn_aievaluationconfigurationid` | `msdyn_AIEvaluationConfigurationId` |
| `owner_msdyn_aievaluationrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aievaluationrun` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aievaluationrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aievaluationrun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievaluationrun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievaluationrun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievaluationrun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aievaluationrun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievaluationrun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aievaluationrun.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aievaluationrun.md) on 2026-05-06.