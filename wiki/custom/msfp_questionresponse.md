---
logical: "msfp_questionresponse"
display: "Risposta alla domanda del sondaggio Customer Voice"
entitySetName: "msfp_questionresponses"
primaryId: "msfp_questionresponseid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risposta alla domanda del sondaggio Customer Voice

Risposta a una domanda in un sondaggio.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_questionresponse` |
| Display name | Risposta alla domanda del sondaggio Customer Voice |
| Display (plural) | Risposte alle domande del sondaggio Customer Voice |
| Schema name | `msfp_questionresponse` |
| Entity set (Web API) | `msfp_questionresponses` |
| Primary id attribute | `msfp_questionresponseid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_questionresponses?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_questionresponses(<guid>)
POST /api/data/v9.2/msfp_questionresponses
PATCH /api/data/v9.2/msfp_questionresponses(<guid>)
DELETE /api/data/v9.2/msfp_questionresponses(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_keyphrases`, `msfp_name`, `msfp_otherproperties`, `msfp_questionid`, `msfp_questionresponseid`, `msfp_response`, `msfp_sentimentvalue`, `msfp_sourcequestionidentifier`, `msfp_sourceresponseidentifier`, `msfp_sourcesurveyidentifier`, `msfp_surveyresponseid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_questionresponse_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_questionresponse_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_questionresponse_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_questionresponse_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_questionresponse` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_questionresponse` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_questionresponse` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_questionresponse` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_msfp_question_msfp_questionresponse_questionid` | [msfp_question](msfp_question.md) | `msfp_questionid` | `msfp_questionid` |
| `msfp_msfp_surveyresponse_msfp_questionresponse_surveyresponseid` | [msfp_surveyresponse](msfp_surveyresponse.md) | `msfp_surveyresponseid` | `msfp_surveyresponseid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_questionresponse_SyncErrors` | [msfp_questionresponse](msfp_questionresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_questionresponse` |
| `msfp_questionresponse_AsyncOperations` | [msfp_questionresponse](msfp_questionresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_questionresponse` |
| `msfp_questionresponse_MailboxTrackingFolders` | [msfp_questionresponse](msfp_questionresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_questionresponse` |
| `msfp_questionresponse_UserEntityInstanceDatas` | [msfp_questionresponse](msfp_questionresponse.md) | `objectid` | `objectid_msfp_questionresponse` |
| `msfp_questionresponse_ProcessSession` | [msfp_questionresponse](msfp_questionresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_questionresponse` |
| `msfp_questionresponse_BulkDeleteFailures` | [msfp_questionresponse](msfp_questionresponse.md) | `regardingobjectid` | `regardingobjectid_msfp_questionresponse` |
| `msfp_questionresponse_PrincipalObjectAttributeAccesses` | [msfp_questionresponse](msfp_questionresponse.md) | `objectid` | `objectid_msfp_questionresponse` |
| `msfp_msfp_questionresponse_msfp_fileresponse_questionresponse` | [msfp_questionresponse](msfp_questionresponse.md) | `msfp_questionresponse` | `msfp_questionresponse` |


## Source

Generated from [msfp_questionresponse (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_questionresponse')) on 2026-05-07.