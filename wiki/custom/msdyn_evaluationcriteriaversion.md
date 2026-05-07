---
logical: "msdyn_evaluationcriteriaversion"
display: "Versione criteri di valutazione"
entitySetName: "msdyn_evaluationcriteriaversions"
primaryId: "msdyn_evaluationcriteriaversionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione criteri di valutazione

Versione dei criteri.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationcriteriaversion` |
| Display name | Versione criteri di valutazione |
| Display (plural) | Versioni criteri di valutazione |
| Schema name | `msdyn_EvaluationCriteriaVersion` |
| Entity set (Web API) | `msdyn_evaluationcriteriaversions` |
| Primary id attribute | `msdyn_evaluationcriteriaversionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationcriteriaversions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationcriteriaversions(<guid>)
POST /api/data/v9.2/msdyn_evaluationcriteriaversions
PATCH /api/data/v9.2/msdyn_evaluationcriteriaversions(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationcriteriaversions(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_criteriainstructions`, `msdyn_criteriajson`, `msdyn_evaluationcriteria`, `msdyn_evaluationcriteriaversionid`, `msdyn_name`, `msdyn_scoringenabled`, `msdyn_useparentcriteriainstruction`, `msdyn_versionnumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationcriteriaversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationcriteriaversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationcriteriaversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationcriteriaversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationcriteriaversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationcriteriaversion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationcriteriaversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationcriteriaversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluationcriteriaversion_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationcriteriaversion_SyncErrors` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteriaversion` |
| `msdyn_evaluationcriteriaversion_AsyncOperations` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteriaversion` |
| `msdyn_evaluationcriteriaversion_MailboxTrackingFolders` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteriaversion` |
| `msdyn_evaluationcriteriaversion_UserEntityInstanceDatas` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `objectid` | `objectid_msdyn_evaluationcriteriaversion` |
| `msdyn_evaluationcriteriaversion_ProcessSession` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteriaversion` |
| `msdyn_evaluationcriteriaversion_BulkDeleteFailures` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcriteriaversion` |
| `msdyn_evaluationcriteriaversion_PrincipalObjectAttributeAccesses` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `objectid` | `objectid_msdyn_evaluationcriteriaversion` |
| `msdyn_evaluationcriteria_ActiveVersion_msdyn_evaluationcriteriaversion` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `msdyn_activeversion` | `msdyn_ActiveVersion` |
| `msdyn_evaluationsimulationrun_msdyn_evaluationcriteriaversionid_msdyn_evaluationcriteriaversion` | [msdyn_evaluationcriteriaversion](msdyn_evaluationcriteriaversion.md) | `msdyn_evaluationcriteriaversionid` | `msdyn_evaluationcriteriaversionid` |


## Source

Generated from [msdyn_evaluationcriteriaversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationcriteriaversion')) on 2026-05-07.