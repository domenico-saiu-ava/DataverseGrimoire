---
logical: "msdyn_assignmentconfigurationstep"
display: "Passaggio di configurazione assegnazione"
entitySetName: "msdyn_assignmentconfigurationsteps"
primaryId: "msdyn_assignmentconfigurationstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Passaggio di configurazione assegnazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assignmentconfigurationstep` |
| Display name | Passaggio di configurazione assegnazione |
| Display (plural) | Passaggi di configurazione assegnazione |
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

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_assignmentconfigurationid`, `msdyn_assignmentconfigurationstepid`, `msdyn_isdefaultruleset`, `msdyn_name`, `msdyn_rulesetid`, `msdyn_steporder`, `msdyn_type`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_assignmentconfigurationstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assignmentconfigurationstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assignmentconfigurationstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assignmentconfigurationstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_assignmentconfigurationstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_assignmentconfigurationstep` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_assignmentconfigurationstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_assignmentconfigurationstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_assignmentconfiguration_msdyn_assignmentconfigurationstep` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `msdyn_assignmentconfigurationid` | `msdyn_assignmentconfigurationid` |
| `msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assignmentconfigurationstep_SyncErrors` | [msdyn_assignmentconfigurationstep](msdyn_assignmentconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfigurationstep` |
| `msdyn_assignmentconfigurationstep_DuplicateMatchingRecord` | [msdyn_assignmentconfigurationstep](msdyn_assignmentconfigurationstep.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_assignmentconfigurationstep` |
| `msdyn_assignmentconfigurationstep_DuplicateBaseRecord` | [msdyn_assignmentconfigurationstep](msdyn_assignmentconfigurationstep.md) | `baserecordid` | `baserecordid_msdyn_assignmentconfigurationstep` |
| `msdyn_assignmentconfigurationstep_AsyncOperations` | [msdyn_assignmentconfigurationstep](msdyn_assignmentconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfigurationstep` |
| `msdyn_assignmentconfigurationstep_MailboxTrackingFolders` | [msdyn_assignmentconfigurationstep](msdyn_assignmentconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfigurationstep` |
| `msdyn_assignmentconfigurationstep_UserEntityInstanceDatas` | [msdyn_assignmentconfigurationstep](msdyn_assignmentconfigurationstep.md) | `objectid` | `objectid_msdyn_assignmentconfigurationstep` |
| `msdyn_assignmentconfigurationstep_ProcessSession` | [msdyn_assignmentconfigurationstep](msdyn_assignmentconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfigurationstep` |
| `msdyn_assignmentconfigurationstep_BulkDeleteFailures` | [msdyn_assignmentconfigurationstep](msdyn_assignmentconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfigurationstep` |
| `msdyn_assignmentconfigurationstep_PrincipalObjectAttributeAccesses` | [msdyn_assignmentconfigurationstep](msdyn_assignmentconfigurationstep.md) | `objectid` | `objectid_msdyn_assignmentconfigurationstep` |


## Source

Generated from [msdyn_assignmentconfigurationstep (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_assignmentconfigurationstep')) on 2026-05-07.