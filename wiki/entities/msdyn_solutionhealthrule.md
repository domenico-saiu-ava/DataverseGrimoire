---
logical: "msdyn_solutionhealthrule"
display: "Solution Health Rule"
entitySetName: "msdyn_solutionhealthrules"
primaryId: "msdyn_solutionhealthruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Solution Health Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutionhealthrule` |
| Display name | Solution Health Rule |
| Display (plural) | Solution Health Rules |
| Schema name | `msdyn_solutionhealthrule` |
| Entity set (Web API) | `msdyn_solutionhealthrules` |
| Primary id attribute | `msdyn_solutionhealthruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutionhealthrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutionhealthrules(<guid>)
POST /api/data/v9.2/msdyn_solutionhealthrules
PATCH /api/data/v9.2/msdyn_solutionhealthrules(<guid>)
DELETE /api/data/v9.2/msdyn_solutionhealthrules(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ComponentType`, `msdyn_Description`, `msdyn_name`, `msdyn_OwningSolutionId`, `msdyn_ResolutionAction`, `msdyn_resolutionmessage`, `msdyn_ResolutionType`, `msdyn_solutionhealthruleId`, `msdyn_solutionhealthrulesetId`, `msdyn_uniquename`, `msdyn_Workflow`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_solutionhealthrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_solutionhealthrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_solutionhealthrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_solutionhealthrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_solutionhealthrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_solutionhealthruleset_msdyn_solutio` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `msdyn_solutionhealthrulesetid` | `msdyn_solutionhealthrulesetId` |
| `msdyn_workflow_msdyn_solutionhealthrule_resolutionaction` | [workflow](workflow.md) | `msdyn_resolutionaction` | `msdyn_resolutionaction` |
| `msdyn_workflow_msdyn_solutionhealthrule_Workflow` | [workflow](workflow.md) | `msdyn_workflow` | `msdyn_Workflow` |
| `owner_msdyn_solutionhealthrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_solutionhealthrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_solutionhealthrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule` | _n/a_ | `msdyn_solutionhealthrule` | _n/a_ |
| `msdyn_solutionhealthrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_solutionhealthrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_solutionhealthrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_solutionhealthrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_solutionhealthrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_solutionhealthrule.md) on 2026-05-06.