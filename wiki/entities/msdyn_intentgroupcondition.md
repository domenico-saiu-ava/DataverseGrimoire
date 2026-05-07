---
logical: "msdyn_intentgroupcondition"
display: "Intent Group Condition"
entitySetName: "msdyn_intentgroupconditions"
primaryId: "msdyn_intentgroupconditionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Intent Group Condition

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentgroupcondition` |
| Display name | Intent Group Condition |
| Display (plural) | Intent Group Conditions |
| Schema name | `msdyn_intentgroupcondition` |
| Entity set (Web API) | `msdyn_intentgroupconditions` |
| Primary id attribute | `msdyn_intentgroupconditionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentgroupconditions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentgroupconditions(<guid>)
POST /api/data/v9.2/msdyn_intentgroupconditions
PATCH /api/data/v9.2/msdyn_intentgroupconditions(<guid>)
DELETE /api/data/v9.2/msdyn_intentgroupconditions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_condition`, `msdyn_fetchxml`, `msdyn_intentfamily`, `msdyn_intentgroupconditionId`, `msdyn_Name`, `msdyn_order`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentgroupcondition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentgroupcondition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentgroupcondition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentgroupcondition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentgroupcondition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intentgroupcondition_msdyn_intentfamily_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamily` | `msdyn_intentfamily` |
| `owner_msdyn_intentgroupcondition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentgroupcondition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentgroupcondition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentgroupcondition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentgroupcondition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentgroupcondition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentgroupcondition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentgroupcondition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentgroupcondition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentgroupcondition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentgroupcondition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentgroupconditionid_msdyn_intentsolutionmap_msdyn_intentgroupcondition` | _n/a_ | `msdyn_intentgroupconditionid` | _n/a_ |


## Source

Generated from [msdyn_intentgroupcondition.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentgroupcondition.md) on 2026-05-06.