---
logical: "msdyn_entityattributepredictionrule"
display: "Entity Attribute Prediction Rule"
entitySetName: "msdyn_entityattributepredictionrules"
primaryId: "msdyn_entityattributepredictionruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Entity Attribute Prediction Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityattributepredictionrule` |
| Display name | Entity Attribute Prediction Rule |
| Display (plural) | Entity Attribute Prediction Rules |
| Schema name | `msdyn_EntityAttributePredictionRule` |
| Entity set (Web API) | `msdyn_entityattributepredictionrules` |
| Primary id attribute | `msdyn_entityattributepredictionruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityattributepredictionrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityattributepredictionrules(<guid>)
POST /api/data/v9.2/msdyn_entityattributepredictionrules
PATCH /api/data/v9.2/msdyn_entityattributepredictionrules(<guid>)
DELETE /api/data/v9.2/msdyn_entityattributepredictionrules(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_conditionsxml`, `msdyn_EntityAttributePredictionRuleId`, `msdyn_IsGlobal`, `msdyn_name`, `msdyn_order`, `msdyn_predictedfields`, `msdyn_regarding`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_entityattributepredictionrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_entityattributepredictionrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityattributepredictionrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityattributepredictionrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityattributepredictionrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_entityattributepredictionrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_entityattributepredictionrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_entityattributepredictionrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityattributepredictionrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityattributepredictionrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityattributepredictionrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_entityattributepredictionrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_entityattributepredictionrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityattributepredictionrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entityattributepredictionrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityattributepredictionrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_entityattributepredictionrule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_entityattributepredictionrule.md) on 2026-05-06.