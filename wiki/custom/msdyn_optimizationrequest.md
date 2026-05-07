---
logical: "msdyn_optimizationrequest"
display: "Richiesta di ottimizzazione"
entitySetName: "msdyn_optimizationrequests"
primaryId: "msdyn_optimizationrequestid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Richiesta di ottimizzazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_optimizationrequest` |
| Display name | Richiesta di ottimizzazione |
| Display (plural) | Richieste di ottimizzazione |
| Schema name | `msdyn_OptimizationRequest` |
| Entity set (Web API) | `msdyn_optimizationrequests` |
| Primary id attribute | `msdyn_optimizationrequestid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_optimizationrequests?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_optimizationrequests(<guid>)
POST /api/data/v9.2/msdyn_optimizationrequests
PATCH /api/data/v9.2/msdyn_optimizationrequests(<guid>)
DELETE /api/data/v9.2/msdyn_optimizationrequests(<guid>)
```

## Attributes

Writable: **24** · Read-only: **2**

### Writable

`createdby`, `createdon`, `createdonbehalfby`, `importsequencenumber`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_applyoperationid`, `msdyn_name`, `msdyn_optimizationerrors`, `msdyn_optimizationrequestid`, `msdyn_optimizationstatus`, `msdyn_optimizationtype`, `msdyn_snapshot`, `msdyn_suggestedschedule`, `msdyn_ussoptimizationid`, `msdyn_usspayloadsnapshot`, `msdyn_usssnapshot`, `overriddencreatedon`, `ownerid`, `owningteam`, `owninguser`, `partitionid`, `ttlinseconds`

### Read-only

`owningbusinessunit`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_optimizationrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_optimizationrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_optimizationrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_optimizationrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_optimizationrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_optimizationrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_optimizationrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_optimizationrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_optimizationrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_optimizationrequest')) on 2026-05-07.