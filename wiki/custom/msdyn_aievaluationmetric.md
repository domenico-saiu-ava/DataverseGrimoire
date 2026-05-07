---
logical: "msdyn_aievaluationmetric"
display: "AI Evaluation Metric"
entitySetName: "msdyn_aievaluationmetrics"
primaryId: "msdyn_aievaluationmetricid"
primaryName: "msdyn_aiobjectid"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Evaluation Metric

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aievaluationmetric` |
| Display name | AI Evaluation Metric |
| Display (plural) | AI Evaluation Metric |
| Schema name | `msdyn_AIEvaluationMetric` |
| Entity set (Web API) | `msdyn_aievaluationmetrics` |
| Primary id attribute | `msdyn_aievaluationmetricid` |
| Primary name attribute | `msdyn_aiobjectid` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aievaluationmetrics?$select=msdyn_aiobjectid&$top=10
GET /api/data/v9.2/msdyn_aievaluationmetrics(<guid>)
POST /api/data/v9.2/msdyn_aievaluationmetrics
PATCH /api/data/v9.2/msdyn_aievaluationmetrics(<guid>)
DELETE /api/data/v9.2/msdyn_aievaluationmetrics(<guid>)
```

## Attributes

Writable: **14** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_aievaluationmetricid`, `msdyn_aievaluatorname`, `msdyn_aiobjectid`, `msdyn_aiobjecttype`, `msdyn_evalavgscore`, `msdyn_evalp50score`, `msdyn_evalp75score`, `msdyn_evalp95score`, `msdyn_lastcalculatedat`, `msdyn_lookbackwindowdurationinminutes`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aievaluationmetric_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aievaluationmetric_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aievaluationmetric_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aievaluationmetric_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [msdyn_aievaluationmetric (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aievaluationmetric')) on 2026-05-07.