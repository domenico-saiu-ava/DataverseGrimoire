---
logical: "msdyn_evaluationextension"
display: "Evaluation Extension"
entitySetName: "msdyn_evaluationextensions"
primaryId: "msdyn_evaluationextensionid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Evaluation Extension

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationextension` |
| Display name | Evaluation Extension |
| Display (plural) | Evaluation Extensions |
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

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_AgentResponseJson`, `msdyn_EvaluationExtensionId`, `msdyn_Name`, `msdyn_Responsejson`, `msdyn_Score`, `msdyn_Scorejson`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_evaluationextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_evaluationextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_evaluationextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_evaluationextension` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_evaluationextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluation_EvaluationExtension_msdyn_evaluationextension` | _n/a_ | `msdyn_evaluationextension` | _n/a_ |


## Source

Generated from [msdyn_evaluationextension.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_evaluationextension.md) on 2026-05-06.