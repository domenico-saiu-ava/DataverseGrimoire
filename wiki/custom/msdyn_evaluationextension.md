---
logical: "msdyn_evaluationextension"
display: "Estensione valutazione"
entitySetName: "msdyn_evaluationextensions"
primaryId: "msdyn_evaluationextensionid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Estensione valutazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationextension` |
| Display name | Estensione valutazione |
| Display (plural) | Estensioni valutazione |
| Schema name | `msdyn_EvaluationExtension` |
| Entity set (Web API) | `msdyn_evaluationextensions` |
| Primary id attribute | `msdyn_evaluationextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationextensions(<guid>)
POST /api/data/v9.2/msdyn_evaluationextensions
PATCH /api/data/v9.2/msdyn_evaluationextensions(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationextensions(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentresponsejson`, `msdyn_evaluationextensionid`, `msdyn_name`, `msdyn_responsejson`, `msdyn_score`, `msdyn_scorejson`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationextension` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluation_EvaluationExtension_msdyn_evaluationextension` | [msdyn_evaluationextension](msdyn_evaluationextension.md) | `msdyn_evaluationextension` | `msdyn_EvaluationExtension` |


## Source

Generated from [msdyn_evaluationextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationextension')) on 2026-05-07.