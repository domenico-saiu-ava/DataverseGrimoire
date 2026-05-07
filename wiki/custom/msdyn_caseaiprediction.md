---
logical: "msdyn_caseaiprediction"
display: "msdyn_caseaiprediction"
entitySetName: "msdyn_caseaipredictions"
primaryId: "msdyn_caseaipredictionid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_caseaiprediction

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_caseaiprediction` |
| Display name | msdyn_caseaiprediction |
| Display (plural) | msdyn_caseaipredictions |
| Schema name | `msdyn_caseaiprediction` |
| Entity set (Web API) | `msdyn_caseaipredictions` |
| Primary id attribute | `msdyn_caseaipredictionid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_caseaipredictions?$select=name&$top=10
GET /api/data/v9.2/msdyn_caseaipredictions(<guid>)
POST /api/data/v9.2/msdyn_caseaipredictions
PATCH /api/data/v9.2/msdyn_caseaipredictions(<guid>)
DELETE /api/data/v9.2/msdyn_caseaipredictions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_caseaipredictionid`, `msdyn_channel`, `msdyn_fieldspredictedbyai`, `msdyn_fieldspredictionsbyapiversions`, `msdyn_sourceid`, `msdyn_targetid`, `msdyn_targetlogicalname`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_caseaiprediction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_caseaiprediction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_caseaiprediction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_caseaiprediction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_caseaiprediction` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_caseaiprediction` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_caseaiprediction` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_caseaiprediction` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_caseaiprediction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_caseaiprediction')) on 2026-05-07.