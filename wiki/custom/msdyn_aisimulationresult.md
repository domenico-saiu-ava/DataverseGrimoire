---
logical: "msdyn_aisimulationresult"
display: "Risultato simulazione IA"
entitySetName: "msdyn_aisimulationresults"
primaryId: "msdyn_aisimulationresultid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato simulazione IA

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aisimulationresult` |
| Display name | Risultato simulazione IA |
| Display (plural) | Risultati simulazione IA |
| Schema name | `msdyn_aisimulationresult` |
| Entity set (Web API) | `msdyn_aisimulationresults` |
| Primary id attribute | `msdyn_aisimulationresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aisimulationresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aisimulationresults(<guid>)
POST /api/data/v9.2/msdyn_aisimulationresults
PATCH /api/data/v9.2/msdyn_aisimulationresults(<guid>)
DELETE /api/data/v9.2/msdyn_aisimulationresults(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aisimulationresultid`, `msdyn_aisimulationrunid`, `msdyn_errordetails`, `msdyn_inputdata`, `msdyn_intentfamily`, `msdyn_name`, `msdyn_regardingentitylogicalname`, `msdyn_regardingobjectid`, `msdyn_simulationcriteria`, `msdyn_simulationresultdetail`, `msdyn_simulationscenario`, `msdyn_simulationstatus`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aisimulationresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aisimulationresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aisimulationresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aisimulationresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aisimulationresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aisimulationresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aisimulationresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aisimulationresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_aisimulationrun_aisimulationrunid_msdyn_aisimulationresult` | [msdyn_aisimulationrun](msdyn_aisimulationrun.md) | `msdyn_aisimulationrunid` | `msdyn_aisimulationrunid` |



## Source

Generated from [msdyn_aisimulationresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aisimulationresult')) on 2026-05-07.