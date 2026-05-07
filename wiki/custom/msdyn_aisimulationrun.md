---
logical: "msdyn_aisimulationrun"
display: "Esecuzione simulazione IA"
entitySetName: "msdyn_aisimulationruns"
primaryId: "msdyn_aisimulationrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Esecuzione simulazione IA

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aisimulationrun` |
| Display name | Esecuzione simulazione IA |
| Display (plural) | Esecuzioni simulazione IA |
| Schema name | `msdyn_aisimulationrun` |
| Entity set (Web API) | `msdyn_aisimulationruns` |
| Primary id attribute | `msdyn_aisimulationrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aisimulationruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aisimulationruns(<guid>)
POST /api/data/v9.2/msdyn_aisimulationruns
PATCH /api/data/v9.2/msdyn_aisimulationruns(<guid>)
DELETE /api/data/v9.2/msdyn_aisimulationruns(<guid>)
```

## Attributes

Writable: **19** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_aisimulationrunid`, `msdyn_completedon`, `msdyn_conditionexpressionxml`, `msdyn_entitylogicalname`, `msdyn_mode`, `msdyn_name`, `msdyn_recordids`, `msdyn_simulationarea`, `msdyn_simulationcriteria`, `msdyn_simulationdatasource`, `msdyn_simulationscenarios`, `msdyn_startedon`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_simulationinputfile`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_msdyn_aisimulationrun_msdyn_simulationinputfile` | [fileattachment](fileattachment.md) | `msdyn_simulationinputfile` | `msdyn_simulationinputfile` |
| `lk_msdyn_aisimulationrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aisimulationrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aisimulationrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aisimulationrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aisimulationrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aisimulationrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aisimulationrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aisimulationrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aisimulationrun_FileAttachments` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `objectid` | `objectid_msdyn_aisimulationrun` |
| `msdyn_aisimulationrun_aisimulationrunid_msdyn_aisimulationresult` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `msdyn_aisimulationrunid` | `msdyn_aisimulationrunid` |
| `msdyn_aisimulationrun_SyncErrors` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aisimulationrun` |
| `msdyn_aisimulationrun_AsyncOperations` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aisimulationrun` |
| `msdyn_aisimulationrun_MailboxTrackingFolders` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aisimulationrun` |
| `msdyn_aisimulationrun_UserEntityInstanceDatas` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `objectid` | `objectid_msdyn_aisimulationrun` |
| `msdyn_aisimulationrun_ProcessSession` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aisimulationrun` |
| `msdyn_aisimulationrun_BulkDeleteFailures` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aisimulationrun` |
| `msdyn_aisimulationrun_PrincipalObjectAttributeAccesses` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `objectid` | `objectid_msdyn_aisimulationrun` |
| `msdyn_evaluationsimulationrun_simulationrunid_msdyn_aisimulationrun` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `msdyn_simulationrunid` | `msdyn_simulationrunid` |


## Source

Generated from [msdyn_aisimulationrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aisimulationrun')) on 2026-05-07.