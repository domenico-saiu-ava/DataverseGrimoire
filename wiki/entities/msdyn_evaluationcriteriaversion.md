---
logical: "msdyn_evaluationcriteriaversion"
display: "Evaluation criteria version"
entitySetName: "msdyn_evaluationcriteriaversions"
primaryId: "msdyn_evaluationcriteriaversionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation criteria version

The version of the criteria.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationcriteriaversion` |
| Display name | Evaluation criteria version |
| Display (plural) | Evaluation criteria versions |
| Schema name | `msdyn_EvaluationCriteriaVersion` |
| Entity set (Web API) | `msdyn_evaluationcriteriaversions` |
| Primary id attribute | `msdyn_evaluationcriteriaversionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationcriteriaversions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationcriteriaversions(<guid>)
POST /api/data/v9.2/msdyn_evaluationcriteriaversions
PATCH /api/data/v9.2/msdyn_evaluationcriteriaversions(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationcriteriaversions(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_CriteriaInstructions`, `msdyn_CriteriaJson`, `msdyn_EvaluationCriteria`, `msdyn_EvaluationCriteriaVersionId`, `msdyn_Name`, `msdyn_ScoringEnabled`, `msdyn_UseParentCriteriaInstruction`, `msdyn_VersionNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationcriteriaversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationcriteriaversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationcriteriaversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationcriteriaversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationcriteriaversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluationcriteriaversion_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `owner_msdyn_evaluationcriteriaversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationcriteriaversion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationcriteriaversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationcriteria_ActiveVersion_msdyn_evaluationcriteriaversion` | _n/a_ | `msdyn_activeversion` | _n/a_ |
| `msdyn_evaluationcriteriaversion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcriteriaversion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcriteriaversion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcriteriaversion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationcriteriaversion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcriteriaversion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationcriteriaversion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationcriteriaversion.md) on 2026-05-06.