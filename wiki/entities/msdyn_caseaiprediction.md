---
logical: "msdyn_caseaiprediction"
display: "msdyn_caseaiprediction"
entitySetName: "msdyn_caseaipredictions"
primaryId: "msdyn_caseaipredictionid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_caseaipredictionId`, `msdyn_channel`, `msdyn_fieldspredictedbyai`, `msdyn_fieldspredictionsbyapiversions`, `msdyn_sourceid`, `msdyn_targetid`, `msdyn_targetlogicalname`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_caseaiprediction` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_caseaiprediction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_caseaiprediction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_caseaiprediction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_caseaiprediction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_caseaiprediction` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_caseaiprediction` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_caseaiprediction` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [msdyn_caseaiprediction.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_caseaiprediction.md) on 2026-05-06.