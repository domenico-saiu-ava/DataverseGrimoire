---
logical: "msdyn_evaluationglobalconfig"
display: "Evaluation Global Config"
entitySetName: "msdyn_evaluationglobalconfigs"
primaryId: "msdyn_evaluationglobalconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation Global Config

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationglobalconfig` |
| Display name | Evaluation Global Config |
| Display (plural) | Evaluation Global Configs |
| Schema name | `msdyn_EvaluationGlobalConfig` |
| Entity set (Web API) | `msdyn_evaluationglobalconfigs` |
| Primary id attribute | `msdyn_evaluationglobalconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationglobalconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationglobalconfigs(<guid>)
POST /api/data/v9.2/msdyn_evaluationglobalconfigs
PATCH /api/data/v9.2/msdyn_evaluationglobalconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationglobalconfigs(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_enablecase`, `msdyn_enableconversation`, `msdyn_enableevalscoring`, `msdyn_EvaluationGlobalConfigId`, `msdyn_id`, `msdyn_name`, `msdyn_thresholdvalue`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationglobalconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationglobalconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationglobalconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationglobalconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationglobalconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_evaluationglobalconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationglobalconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationglobalconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationglobalconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationglobalconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationglobalconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationglobalconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationglobalconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationglobalconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_evaluationglobalconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationglobalconfig.md) on 2026-05-06.