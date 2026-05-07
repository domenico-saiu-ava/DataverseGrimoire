---
logical: "msdyn_evaluationquestion"
display: "Domanda di valutazione"
entitySetName: "msdyn_evaluationquestions"
primaryId: "msdyn_evaluationquestionid"
primaryName: "msdyn_text"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Domanda di valutazione

Domande che si collegano a un oggetto EvaluationCategory o direttamente a EvaluationCriteria.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationquestion` |
| Display name | Domanda di valutazione |
| Display (plural) | Domande di valutazione |
| Schema name | `msdyn_EvaluationQuestion` |
| Entity set (Web API) | `msdyn_evaluationquestions` |
| Primary id attribute | `msdyn_evaluationquestionid` |
| Primary name attribute | `msdyn_text` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationquestions?$select=msdyn_text&$top=10
GET /api/data/v9.2/msdyn_evaluationquestions(<guid>)
POST /api/data/v9.2/msdyn_evaluationquestions
PATCH /api/data/v9.2/msdyn_evaluationquestions(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationquestions(<guid>)
```

## Attributes

Writable: **24** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_criteriaversionid`, `msdyn_description`, `msdyn_descriptionmetadataid`, `msdyn_evaluationcategory`, `msdyn_evaluationcriteria`, `msdyn_evaluationquestionid`, `msdyn_isairesponseenabled`, `msdyn_iscriticalquestion`, `msdyn_optionsjson`, `msdyn_parentquestionid`, `msdyn_questioninstructions`, `msdyn_questiontype`, `msdyn_required`, `msdyn_rootquestionid`, `msdyn_text`, `msdyn_textmetadataid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationquestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationquestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationquestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationquestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationquestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationquestion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationquestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationquestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluationquestion_EvaluationCategory_msdyn_evaluationcategory` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `msdyn_evaluationcategory` | `msdyn_EvaluationCategory` |
| `msdyn_evaluationquestion_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationquestion_SyncErrors` | [msdyn_evaluationquestion](msdyn_evaluationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationquestion` |
| `msdyn_evaluationquestion_AsyncOperations` | [msdyn_evaluationquestion](msdyn_evaluationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationquestion` |
| `msdyn_evaluationquestion_MailboxTrackingFolders` | [msdyn_evaluationquestion](msdyn_evaluationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationquestion` |
| `msdyn_evaluationquestion_UserEntityInstanceDatas` | [msdyn_evaluationquestion](msdyn_evaluationquestion.md) | `objectid` | `objectid_msdyn_evaluationquestion` |
| `msdyn_evaluationquestion_ProcessSession` | [msdyn_evaluationquestion](msdyn_evaluationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationquestion` |
| `msdyn_evaluationquestion_BulkDeleteFailures` | [msdyn_evaluationquestion](msdyn_evaluationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationquestion` |
| `msdyn_evaluationquestion_PrincipalObjectAttributeAccesses` | [msdyn_evaluationquestion](msdyn_evaluationquestion.md) | `objectid` | `objectid_msdyn_evaluationquestion` |


## Source

Generated from [msdyn_evaluationquestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationquestion')) on 2026-05-07.