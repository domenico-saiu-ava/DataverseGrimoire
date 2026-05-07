---
logical: "savingrule"
display: "Regola di salvataggio"
entitySetName: "savingrules"
primaryId: "savingruleid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di salvataggio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `savingrule` |
| Display name | Regola di salvataggio |
| Display (plural) | Regole di salvataggio |
| Schema name | `savingrule` |
| Entity set (Web API) | `savingrules` |
| Primary id attribute | `savingruleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/savingrules?$select=name&$top=10
GET /api/data/v9.2/savingrules(<guid>)
POST /api/data/v9.2/savingrules
PATCH /api/data/v9.2/savingrules(<guid>)
DELETE /api/data/v9.2/savingrules(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`endedon`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `ruledata`, `savingruleid`, `startedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `workflowid`, `workqueueid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_savingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_savingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_savingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_savingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_savingrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_savingrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_savingrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_savingrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `savingrule_workqueue` | [workqueue](workqueue.md) | `workqueueid` | `workqueueid_workqueue` |
| `savingrule_workflow` | [workflow](workflow.md) | `workflowid` | `workflowid_Workflow` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `savingrule_SyncErrors` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `savingrule_DuplicateMatchingRecord` | [savingrule](savingrule.md) | `duplicaterecordid` | `duplicaterecordid_savingrule` |
| `savingrule_DuplicateBaseRecord` | [savingrule](savingrule.md) | `baserecordid` | `baserecordid_savingrule` |
| `savingrule_AsyncOperations` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `savingrule_MailboxTrackingFolders` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `savingrule_UserEntityInstanceDatas` | [savingrule](savingrule.md) | `objectid` | `objectid_savingrule` |
| `savingrule_ProcessSession` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `savingrule_BulkDeleteFailures` | [savingrule](savingrule.md) | `regardingobjectid` | `regardingobjectid_savingrule` |
| `savingrule_PrincipalObjectAttributeAccesses` | [savingrule](savingrule.md) | `objectid` | `objectid_savingrule` |


## Source

Generated from [savingrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='savingrule')) on 2026-05-07.