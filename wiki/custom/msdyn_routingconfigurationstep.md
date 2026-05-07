---
logical: "msdyn_routingconfigurationstep"
display: "Passaggio configurazione distribuzione"
entitySetName: "msdyn_routingconfigurationsteps"
primaryId: "msdyn_routingconfigurationstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Passaggio configurazione distribuzione

Collega la configurazione distribuzione al set di regole

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_routingconfigurationstep` |
| Display name | Passaggio configurazione distribuzione |
| Display (plural) | Passaggi configurazione distribuzione |
| Schema name | `msdyn_routingconfigurationstep` |
| Entity set (Web API) | `msdyn_routingconfigurationsteps` |
| Primary id attribute | `msdyn_routingconfigurationstepid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_routingconfigurationsteps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_routingconfigurationsteps(<guid>)
POST /api/data/v9.2/msdyn_routingconfigurationsteps
PATCH /api/data/v9.2/msdyn_routingconfigurationsteps(<guid>)
DELETE /api/data/v9.2/msdyn_routingconfigurationsteps(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_routingconfigurationid`, `msdyn_routingconfigurationstepid`, `msdyn_rulesetid`, `msdyn_steporder`, `msdyn_type`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_routingconfigurationstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_routingconfigurationstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_routingconfigurationstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_routingconfigurationstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_routingconfigurationstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_routingconfigurationstep` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_routingconfigurationstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_routingconfigurationstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_rulesetid` | `msdyn_rulesetid` |
| `msdyn_routingconfiguration_msdyn_routingconfigurationstep_routingconfigurationid` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `msdyn_routingconfigurationid` | `msdyn_routingconfigurationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_routingconfigurationstep_SyncErrors` | [msdyn_routingconfigurationstep](msdyn_routingconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfigurationstep` |
| `msdyn_routingconfigurationstep_DuplicateMatchingRecord` | [msdyn_routingconfigurationstep](msdyn_routingconfigurationstep.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_routingconfigurationstep` |
| `msdyn_routingconfigurationstep_DuplicateBaseRecord` | [msdyn_routingconfigurationstep](msdyn_routingconfigurationstep.md) | `baserecordid` | `baserecordid_msdyn_routingconfigurationstep` |
| `msdyn_routingconfigurationstep_AsyncOperations` | [msdyn_routingconfigurationstep](msdyn_routingconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfigurationstep` |
| `msdyn_routingconfigurationstep_MailboxTrackingFolders` | [msdyn_routingconfigurationstep](msdyn_routingconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfigurationstep` |
| `msdyn_routingconfigurationstep_UserEntityInstanceDatas` | [msdyn_routingconfigurationstep](msdyn_routingconfigurationstep.md) | `objectid` | `objectid_msdyn_routingconfigurationstep` |
| `msdyn_routingconfigurationstep_ProcessSession` | [msdyn_routingconfigurationstep](msdyn_routingconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfigurationstep` |
| `msdyn_routingconfigurationstep_BulkDeleteFailures` | [msdyn_routingconfigurationstep](msdyn_routingconfigurationstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfigurationstep` |
| `msdyn_routingconfigurationstep_PrincipalObjectAttributeAccesses` | [msdyn_routingconfigurationstep](msdyn_routingconfigurationstep.md) | `objectid` | `objectid_msdyn_routingconfigurationstep` |


## Source

Generated from [msdyn_routingconfigurationstep (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_routingconfigurationstep')) on 2026-05-07.