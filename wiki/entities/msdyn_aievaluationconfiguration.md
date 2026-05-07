---
logical: "msdyn_aievaluationconfiguration"
display: "AI Evaluation Configuration"
entitySetName: "msdyn_aievaluationconfigurations"
primaryId: "msdyn_aievaluationconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# AI Evaluation Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aievaluationconfiguration` |
| Display name | AI Evaluation Configuration |
| Display (plural) | AI Evaluation Configuration |
| Schema name | `msdyn_AIEvaluationConfiguration` |
| Entity set (Web API) | `msdyn_aievaluationconfigurations` |
| Primary id attribute | `msdyn_aievaluationconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aievaluationconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aievaluationconfigurations(<guid>)
POST /api/data/v9.2/msdyn_aievaluationconfigurations
PATCH /api/data/v9.2/msdyn_aievaluationconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_aievaluationconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_AIEvaluationConfigurationId`, `msdyn_AIObjectId`, `msdyn_AIObjectType`, `msdyn_ConfigurationState`, `msdyn_Description`, `msdyn_EvaluationCriteria`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aievaluationconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aievaluationconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aievaluationconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aievaluationconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aievaluationconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_aievaluationconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aievaluationconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aievaluationconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aievaluationconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievaluationconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievaluationconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievaluationconfiguration_msdyn_aievaluationrun` | _n/a_ | `msdyn_aievaluationconfigurationid` | _n/a_ |
| `msdyn_aievaluationconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aievaluationconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievaluationconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aievaluationconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aievaluationconfiguration.md) on 2026-05-06.