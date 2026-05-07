---
logical: "msdyn_solutionhealthruleargument"
display: "Solution Health Rule Argument"
entitySetName: "msdyn_solutionhealthrulearguments"
primaryId: "msdyn_solutionhealthruleargumentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Solution Health Rule Argument

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutionhealthruleargument` |
| Display name | Solution Health Rule Argument |
| Display (plural) | Solution Health Rule Arguments |
| Schema name | `msdyn_solutionhealthruleargument` |
| Entity set (Web API) | `msdyn_solutionhealthrulearguments` |
| Primary id attribute | `msdyn_solutionhealthruleargumentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutionhealthrulearguments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutionhealthrulearguments(<guid>)
POST /api/data/v9.2/msdyn_solutionhealthrulearguments
PATCH /api/data/v9.2/msdyn_solutionhealthrulearguments(<guid>)
DELETE /api/data/v9.2/msdyn_solutionhealthrulearguments(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Key`, `msdyn_name`, `msdyn_SolutionHealthRule`, `msdyn_solutionhealthruleargumentId`, `msdyn_Value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_solutionhealthruleargument` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_solutionhealthruleargument_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_solutionhealthruleargument_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_solutionhealthruleargument_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_solutionhealthruleargument_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `msdyn_solutionhealthrule` | `msdyn_SolutionHealthRule` |
| `owner_msdyn_solutionhealthruleargument` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_solutionhealthruleargument` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_solutionhealthruleargument` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_solutionhealthruleargument_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthruleargument_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthruleargument_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_solutionhealthruleargument_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_solutionhealthruleargument_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_solutionhealthruleargument_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_solutionhealthruleargument_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_solutionhealthruleargument.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_solutionhealthruleargument.md) on 2026-05-06.