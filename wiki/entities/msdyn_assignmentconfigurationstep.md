---
logical: "msdyn_assignmentconfigurationstep"
display: "Assignment Configuration Step"
entitySetName: "msdyn_assignmentconfigurationsteps"
primaryId: "msdyn_assignmentconfigurationstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Assignment Configuration Step

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assignmentconfigurationstep` |
| Display name | Assignment Configuration Step |
| Display (plural) | Assignment Configuration Steps |
| Schema name | `msdyn_assignmentconfigurationstep` |
| Entity set (Web API) | `msdyn_assignmentconfigurationsteps` |
| Primary id attribute | `msdyn_assignmentconfigurationstepid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assignmentconfigurationsteps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assignmentconfigurationsteps(<guid>)
POST /api/data/v9.2/msdyn_assignmentconfigurationsteps
PATCH /api/data/v9.2/msdyn_assignmentconfigurationsteps(<guid>)
DELETE /api/data/v9.2/msdyn_assignmentconfigurationsteps(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_assignmentconfigurationid`, `msdyn_assignmentconfigurationstepId`, `msdyn_isdefaultruleset`, `msdyn_name`, `msdyn_rulesetid`, `msdyn_steporder`, `msdyn_type`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_assignmentconfigurationstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_assignmentconfigurationstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assignmentconfigurationstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assignmentconfigurationstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assignmentconfigurationstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_assignmentconfiguration_msdyn_assignmentconfigurationstep` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `msdyn_assignmentconfigurationid` | `msdyn_assignmentconfigurationid` |
| `msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |
| `owner_msdyn_assignmentconfigurationstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_assignmentconfigurationstep` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_assignmentconfigurationstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assignmentconfigurationstep_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentconfigurationstep_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentconfigurationstep_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_assignmentconfigurationstep_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_assignmentconfigurationstep_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_assignmentconfigurationstep_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_assignmentconfigurationstep_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_assignmentconfigurationstep.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_assignmentconfigurationstep.md) on 2026-05-06.