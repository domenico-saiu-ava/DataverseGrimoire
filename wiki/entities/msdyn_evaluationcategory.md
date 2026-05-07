---
logical: "msdyn_evaluationcategory"
display: "Evaluation category"
entitySetName: "msdyn_evaluationcategories"
primaryId: "msdyn_evaluationcategoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Evaluation category

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationcategory` |
| Display name | Evaluation category |
| Display (plural) | Evaluation categories |
| Schema name | `msdyn_EvaluationCategory` |
| Entity set (Web API) | `msdyn_evaluationcategories` |
| Primary id attribute | `msdyn_evaluationcategoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationcategories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationcategories(<guid>)
POST /api/data/v9.2/msdyn_evaluationcategories
PATCH /api/data/v9.2/msdyn_evaluationcategories(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationcategories(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_Description`, `msdyn_DescriptionMetadataId`, `msdyn_EvaluationCategoryId`, `msdyn_EvaluationCriteria`, `msdyn_Name`, `msdyn_NameMetadataId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationcategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationcategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationcategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationcategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationcategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_evaluationcategory_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |
| `owner_msdyn_evaluationcategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationcategory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationcategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationcategory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcategory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcategory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcategory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_evaluationcategory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationcategory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_evaluationquestion_EvaluationCategory_msdyn_evaluationcategory` | _n/a_ | `msdyn_evaluationcategory` | _n/a_ |


## Source

Generated from [msdyn_evaluationcategory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationcategory.md) on 2026-05-06.