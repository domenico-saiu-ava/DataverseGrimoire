---
logical: "msdyn_evaluationsimulationrun"
display: "Simulazione criteri"
entitySetName: "msdyn_evaluationsimulationruns"
primaryId: "msdyn_evaluationsimulationrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Simulazione criteri

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationsimulationrun` |
| Display name | Simulazione criteri |
| Display (plural) | Simulazioni criteri |
| Schema name | `msdyn_evaluationsimulationrun` |
| Entity set (Web API) | `msdyn_evaluationsimulationruns` |
| Primary id attribute | `msdyn_evaluationsimulationrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationsimulationruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationsimulationruns(<guid>)
POST /api/data/v9.2/msdyn_evaluationsimulationruns
PATCH /api/data/v9.2/msdyn_evaluationsimulationruns(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationsimulationruns(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_errordetails`, `msdyn_evaluationcriteriaparentversion`, `msdyn_evaluationcriteriaversion`, `msdyn_evaluationcriteriaversionid`, `msdyn_evaluationsimulationrunid`, `msdyn_name`, `msdyn_recordtype`, `msdyn_regardingobjectid`, `msdyn_simulationrunid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationsimulationrun_simulationrunid_msdyn_aisimulationrun` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `msdyn_simulationrunid` | `msdyn_simulationrunid` |
| `msdyn_evaluationsimulationrun_msdyn_evaluationcriteria_msdyn_regardingobjectId` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_regardingobjectid` | `msdyn_regardingobjectid_msdyn_evaluationcriteria` |
| `msdyn_evaluationsimulationrun_msdyn_evaluationcriteriaversionid_msdyn_evaluationcriteriaversion` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `msdyn_evaluationcriteriaversionid` | `msdyn_evaluationcriteriaversionid` |
| `lk_msdyn_evaluationsimulationrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationsimulationrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationsimulationrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationsimulationrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationsimulationrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationsimulationrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationsimulationrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationsimulationrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationsimulationrun_DuplicateMatchingRecord` | [msdyn_evaluationsimulationrun](msdyn_evaluationsimulationrun.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_evaluationsimulationrun` |
| `msdyn_evaluationsimulationrun_DuplicateBaseRecord` | [msdyn_evaluationsimulationrun](msdyn_evaluationsimulationrun.md) | `baserecordid` | `baserecordid_msdyn_evaluationsimulationrun` |
| `msdyn_evaluationsimulationrun_SyncErrors` | [msdyn_evaluationsimulationrun](msdyn_evaluationsimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationsimulationrun` |
| `msdyn_evaluationsimulationrun_AsyncOperations` | [msdyn_evaluationsimulationrun](msdyn_evaluationsimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationsimulationrun` |
| `msdyn_evaluationsimulationrun_MailboxTrackingFolders` | [msdyn_evaluationsimulationrun](msdyn_evaluationsimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationsimulationrun` |
| `msdyn_evaluationsimulationrun_UserEntityInstanceDatas` | [msdyn_evaluationsimulationrun](msdyn_evaluationsimulationrun.md) | `objectid` | `objectid_msdyn_evaluationsimulationrun` |
| `msdyn_evaluationsimulationrun_ProcessSession` | [msdyn_evaluationsimulationrun](msdyn_evaluationsimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationsimulationrun` |
| `msdyn_evaluationsimulationrun_BulkDeleteFailures` | [msdyn_evaluationsimulationrun](msdyn_evaluationsimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationsimulationrun` |
| `msdyn_evaluationsimulationrun_PrincipalObjectAttributeAccesses` | [msdyn_evaluationsimulationrun](msdyn_evaluationsimulationrun.md) | `objectid` | `objectid_msdyn_evaluationsimulationrun` |


## Source

Generated from [msdyn_evaluationsimulationrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationsimulationrun')) on 2026-05-07.