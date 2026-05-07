---
logical: "msdyn_evaluationentityconfig"
display: "Evaluation Entity Config"
entitySetName: "msdyn_evaluationentityconfigs"
primaryId: "msdyn_evaluationentityconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation Entity Config

Configuration entity to manage which entities are enabled for Quality Evaluation Agent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationentityconfig` |
| Display name | Evaluation Entity Config |
| Display (plural) | Evaluation Entity Configs |
| Schema name | `msdyn_EvaluationEntityConfig` |
| Entity set (Web API) | `msdyn_evaluationentityconfigs` |
| Primary id attribute | `msdyn_evaluationentityconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationentityconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationentityconfigs(<guid>)
POST /api/data/v9.2/msdyn_evaluationentityconfigs
PATCH /api/data/v9.2/msdyn_evaluationentityconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationentityconfigs(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_EntityAllowedForEvaluation`, `msdyn_EntityLogicalName`, `msdyn_EvaluationEntityConfigId`, `msdyn_EvaluationRecordType`, `msdyn_IsEnabled`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationentityconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationentityconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationentityconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationentityconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationentityconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_evaluationentityconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationentityconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationentityconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationentityconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationentityconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationentityconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_evaluationentityconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_evaluationentityconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationentityconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationentityconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationentityconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationentityconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationentityconfig.md) on 2026-05-06.