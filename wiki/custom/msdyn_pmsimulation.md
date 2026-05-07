---
logical: "msdyn_pmsimulation"
display: "Simulazione PM"
entitySetName: "msdyn_pmsimulations"
primaryId: "msdyn_pmsimulationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Simulazione PM

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmsimulation` |
| Display name | Simulazione PM |
| Display (plural) | Simulazioni PM |
| Schema name | `msdyn_pmsimulation` |
| Entity set (Web API) | `msdyn_pmsimulations` |
| Primary id attribute | `msdyn_pmsimulationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmsimulations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmsimulations(<guid>)
POST /api/data/v9.2/msdyn_pmsimulations
PATCH /api/data/v9.2/msdyn_pmsimulations(<guid>)
DELETE /api/data/v9.2/msdyn_pmsimulations(<guid>)
```

## Attributes

Writable: **21** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_end`, `msdyn_generatelog`, `msdyn_name`, `msdyn_pminferredtaskid`, `msdyn_pmsimulationid`, `msdyn_pmviewid`, `msdyn_psesimulationid`, `msdyn_result`, `msdyn_setting`, `msdyn_start`, `msdyn_state`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmsimulation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmsimulation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmsimulation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmsimulation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmsimulation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmsimulation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmsimulation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmsimulation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_pmsimulation_pminferredtaskid_msdyn_pminferredtask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_pminferredtaskid` |
| `msdyn_pmsimulation_pmviewid_msdyn_pmview` | [msdyn_pmview](msdyn_pmview.md) | `msdyn_pmviewid` | `msdyn_pmviewid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmsimulation_SyncErrors` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmsimulation_DuplicateMatchingRecord` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmsimulation` |
| `msdyn_pmsimulation_DuplicateBaseRecord` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `baserecordid` | `baserecordid_msdyn_pmsimulation` |
| `msdyn_pmsimulation_AsyncOperations` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmsimulation_MailboxTrackingFolders` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmsimulation_UserEntityInstanceDatas` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `objectid` | `objectid_msdyn_pmsimulation` |
| `msdyn_pmsimulation_ProcessSession` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmsimulation_BulkDeleteFailures` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmsimulation` |
| `msdyn_pmsimulation_PrincipalObjectAttributeAccesses` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `objectid` | `objectid_msdyn_pmsimulation` |


## Source

Generated from [msdyn_pmsimulation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmsimulation')) on 2026-05-07.