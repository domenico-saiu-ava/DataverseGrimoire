---
logical: "msdyn_solutionhealthruleargument"
display: "Argomento della regola per l'integrità della soluzione"
entitySetName: "msdyn_solutionhealthrulearguments"
primaryId: "msdyn_solutionhealthruleargumentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Argomento della regola per l'integrità della soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutionhealthruleargument` |
| Display name | Argomento della regola per l'integrità della soluzione |
| Display (plural) | Argomenti della regola per l'integrità della soluzione |
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

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_key`, `msdyn_name`, `msdyn_solutionhealthrule`, `msdyn_solutionhealthruleargumentid`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_solutionhealthruleargument_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_solutionhealthruleargument_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_solutionhealthruleargument_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_solutionhealthruleargument_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_solutionhealthruleargument` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_solutionhealthruleargument` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_solutionhealthruleargument` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_solutionhealthruleargument` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `msdyn_solutionhealthrule` | `msdyn_SolutionHealthRule` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_solutionhealthruleargument_SyncErrors` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleargument_DuplicateMatchingRecord` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleargument_DuplicateBaseRecord` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `baserecordid` | `baserecordid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleargument_AsyncOperations` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleargument_MailboxTrackingFolders` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleargument_UserEntityInstanceDatas` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `objectid` | `objectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleargument_ProcessSession` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleargument_BulkDeleteFailures` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleargument_PrincipalObjectAttributeAccesses` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `objectid` | `objectid_msdyn_solutionhealthruleargument` |


## Source

Generated from [msdyn_solutionhealthruleargument (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_solutionhealthruleargument')) on 2026-05-07.