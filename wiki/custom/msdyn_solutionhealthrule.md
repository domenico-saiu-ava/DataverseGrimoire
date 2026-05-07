---
logical: "msdyn_solutionhealthrule"
display: "Regola per l'integrità della soluzione"
entitySetName: "msdyn_solutionhealthrules"
primaryId: "msdyn_solutionhealthruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola per l'integrità della soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutionhealthrule` |
| Display name | Regola per l'integrità della soluzione |
| Display (plural) | Regole per l'integrità della soluzione |
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

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_componenttype`, `msdyn_description`, `msdyn_name`, `msdyn_owningsolutionid`, `msdyn_resolutionaction`, `msdyn_resolutionmessage`, `msdyn_resolutiontype`, `msdyn_solutionhealthruleid`, `msdyn_solutionhealthrulesetid`, `msdyn_uniquename`, `msdyn_workflow`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_solutionhealthrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_solutionhealthrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_solutionhealthrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_solutionhealthrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_solutionhealthrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_solutionhealthrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_solutionhealthrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_solutionhealthrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_solutionhealthruleset_msdyn_solutio` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `msdyn_solutionhealthrulesetid` | `msdyn_solutionhealthrulesetId` |
| `msdyn_workflow_msdyn_solutionhealthrule_Workflow` | [workflow](workflow.md) | `msdyn_workflow` | `msdyn_Workflow` |
| `msdyn_workflow_msdyn_solutionhealthrule_resolutionaction` | [workflow](workflow.md) | `msdyn_resolutionaction` | `msdyn_resolutionaction` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_solutionhealthrule_SyncErrors` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthrule_DuplicateMatchingRecord` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthrule_DuplicateBaseRecord` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `baserecordid` | `baserecordid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthrule_AsyncOperations` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthrule_MailboxTrackingFolders` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthrule_UserEntityInstanceDatas` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `objectid` | `objectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthrule_ProcessSession` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthrule_BulkDeleteFailures` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `objectid` | `objectid_msdyn_solutionhealthrule` |
| `msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `msdyn_solutionhealthrule` | `msdyn_SolutionHealthRule` |


## Source

Generated from [msdyn_solutionhealthrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_solutionhealthrule')) on 2026-05-07.