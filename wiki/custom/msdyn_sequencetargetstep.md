---
logical: "msdyn_sequencetargetstep"
display: "Passaggio di destinazione sequenza"
entitySetName: "msdyn_sequencetargetsteps"
primaryId: "msdyn_sequencetargetstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Passaggio di destinazione sequenza

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequencetargetstep` |
| Display name | Passaggio di destinazione sequenza |
| Display (plural) | Passaggi di destinazione sequenza |
| Schema name | `msdyn_sequencetargetstep` |
| Entity set (Web API) | `msdyn_sequencetargetsteps` |
| Primary id attribute | `msdyn_sequencetargetstepid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sequencetargetsteps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sequencetargetsteps(<guid>)
POST /api/data/v9.2/msdyn_sequencetargetsteps
PATCH /api/data/v9.2/msdyn_sequencetargetsteps(<guid>)
DELETE /api/data/v9.2/msdyn_sequencetargetsteps(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_advancedfromstep`, `msdyn_advancedfromwaitstate`, `msdyn_completedon`, `msdyn_convertedtomanualfrom`, `msdyn_description`, `msdyn_duetime`, `msdyn_errorstate`, `msdyn_linkedactivityid`, `msdyn_name`, `msdyn_operationparameter`, `msdyn_sequenceduetime`, `msdyn_sequencestepid`, `msdyn_sequencetarget`, `msdyn_sequencetargetstepid`, `msdyn_snoozecount`, `msdyn_subtype`, `msdyn_triggeroutcome`, `msdyn_type`, `msdyn_waitskippedon`, `msdyn_waitstate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sequencetargetstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequencetargetstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequencetargetstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequencetargetstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sequencetargetstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sequencetargetstep` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sequencetargetstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sequencetargetstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_sequencetarget_sequencetargetstep` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `msdyn_sequencetarget` | `msdyn_sequencetarget` |
| `msdyn_advancedfromstep_msdyn_sequencetargetstep` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `msdyn_advancedfromstep` | `msdyn_advancedfromstep` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sequencetargetstep_SyncErrors` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetargetstep` |
| `msdyn_sequencetargetstep_AsyncOperations` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetargetstep` |
| `msdyn_sequencetargetstep_MailboxTrackingFolders` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetargetstep` |
| `msdyn_sequencetargetstep_UserEntityInstanceDatas` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `objectid` | `objectid_msdyn_sequencetargetstep` |
| `msdyn_sequencetargetstep_ProcessSession` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetargetstep` |
| `msdyn_sequencetargetstep_BulkDeleteFailures` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetargetstep` |
| `msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `objectid` | `objectid_msdyn_sequencetargetstep` |
| `msdyn_advancedfromstep_msdyn_sequencetargetstep` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `msdyn_advancedfromstep` | `msdyn_advancedfromstep` |
| `msdyn_advancedfromstep_msdyn_sequencetarget` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `msdyn_advancedfromstep` | `msdyn_advancedfromstep` |


## Source

Generated from [msdyn_sequencetargetstep (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sequencetargetstep')) on 2026-05-07.