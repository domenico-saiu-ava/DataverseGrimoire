---
logical: "msdyn_productivityagentscriptstep"
display: "Passaggio script"
entitySetName: "msdyn_productivityagentscriptsteps"
primaryId: "msdyn_productivityagentscriptstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Passaggio script

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityagentscriptstep` |
| Display name | Passaggio script |
| Display (plural) | Passaggi script |
| Schema name | `msdyn_productivityagentscriptstep` |
| Entity set (Web API) | `msdyn_productivityagentscriptsteps` |
| Primary id attribute | `msdyn_productivityagentscriptstepid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityagentscriptsteps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityagentscriptsteps(<guid>)
POST /api/data/v9.2/msdyn_productivityagentscriptsteps
PATCH /api/data/v9.2/msdyn_productivityagentscriptsteps(<guid>)
DELETE /api/data/v9.2/msdyn_productivityagentscriptsteps(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_actiontype`, `msdyn_agentscriptid`, `msdyn_description`, `msdyn_macroactionid`, `msdyn_name`, `msdyn_order`, `msdyn_productivityagentscriptstepid`, `msdyn_routeactionid`, `msdyn_textinstruction`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productivityagentscriptstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityagentscriptstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityagentscriptstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityagentscriptstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_productivityagentscriptstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_productivityagentscriptstep` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_productivityagentscriptstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_productivityagentscriptstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_agentscriptid` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `msdyn_agentscriptid` | `msdyn_agentscriptid` |
| `msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_routeactionid` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `msdyn_routeactionid` | `msdyn_routeactionid` |
| `msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid` | [workflow](workflow.md) | `msdyn_macroactionid` | `msdyn_macroactionid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivityagentscriptstep_SyncErrors` | [msdyn_productivityagentscriptstep](msdyn_productivityagentscriptstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscriptstep` |
| `msdyn_productivityagentscriptstep_DuplicateMatchingRecord` | [msdyn_productivityagentscriptstep](msdyn_productivityagentscriptstep.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_productivityagentscriptstep` |
| `msdyn_productivityagentscriptstep_DuplicateBaseRecord` | [msdyn_productivityagentscriptstep](msdyn_productivityagentscriptstep.md) | `baserecordid` | `baserecordid_msdyn_productivityagentscriptstep` |
| `msdyn_productivityagentscriptstep_AsyncOperations` | [msdyn_productivityagentscriptstep](msdyn_productivityagentscriptstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscriptstep` |
| `msdyn_productivityagentscriptstep_MailboxTrackingFolders` | [msdyn_productivityagentscriptstep](msdyn_productivityagentscriptstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscriptstep` |
| `msdyn_productivityagentscriptstep_UserEntityInstanceDatas` | [msdyn_productivityagentscriptstep](msdyn_productivityagentscriptstep.md) | `objectid` | `objectid_msdyn_productivityagentscriptstep` |
| `msdyn_productivityagentscriptstep_ProcessSession` | [msdyn_productivityagentscriptstep](msdyn_productivityagentscriptstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscriptstep` |
| `msdyn_productivityagentscriptstep_BulkDeleteFailures` | [msdyn_productivityagentscriptstep](msdyn_productivityagentscriptstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscriptstep` |
| `msdyn_productivityagentscriptstep_PrincipalObjectAttributeAccesses` | [msdyn_productivityagentscriptstep](msdyn_productivityagentscriptstep.md) | `objectid` | `objectid_msdyn_productivityagentscriptstep` |


## Source

Generated from [msdyn_productivityagentscriptstep (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_productivityagentscriptstep')) on 2026-05-07.