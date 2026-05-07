---
logical: "msdyn_intentmetrics_aggregate"
display: "msdyn_intentmetrics_aggregate"
entitySetName: "msdyn_intentmetrics_aggregates"
primaryId: "msdyn_intentmetrics_aggregateid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_intentmetrics_aggregate

Tabella elastica per archiviare aggregazioni giornaliere per le metriche delle finalità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentmetrics_aggregate` |
| Display name | msdyn_intentmetrics_aggregate |
| Display (plural) | msdyn_intentmetrics_aggregates |
| Schema name | `msdyn_intentmetrics_aggregate` |
| Entity set (Web API) | `msdyn_intentmetrics_aggregates` |
| Primary id attribute | `msdyn_intentmetrics_aggregateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentmetrics_aggregates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentmetrics_aggregates(<guid>)
POST /api/data/v9.2/msdyn_intentmetrics_aggregates
PATCH /api/data/v9.2/msdyn_intentmetrics_aggregates(<guid>)
DELETE /api/data/v9.2/msdyn_intentmetrics_aggregates(<guid>)
```

## Attributes

Writable: **10** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_aggregatedate`, `msdyn_intentid`, `msdyn_intentmetrics_aggregateid`, `msdyn_intentsolutionvolume`, `msdyn_intentvolume`, `msdyn_name`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentmetrics_aggregate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentmetrics_aggregate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentmetrics_aggregate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentmetrics_aggregate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [msdyn_intentmetrics_aggregate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentmetrics_aggregate')) on 2026-05-07.