---
logical: "msdyn_customerfeedbacksurvey"
display: "Sondaggio feedback cliente"
entitySetName: "msdyn_customerfeedbacksurveys"
primaryId: "msdyn_customerfeedbacksurveyid"
primaryName: "msdyn_customerfeedbacksurveyname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sondaggio feedback cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerfeedbacksurvey` |
| Display name | Sondaggio feedback cliente |
| Display (plural) | Sondaggi feedback cliente |
| Schema name | `msdyn_customerfeedbacksurvey` |
| Entity set (Web API) | `msdyn_customerfeedbacksurveys` |
| Primary id attribute | `msdyn_customerfeedbacksurveyid` |
| Primary name attribute | `msdyn_customerfeedbacksurveyname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customerfeedbacksurveys?$select=msdyn_customerfeedbacksurveyname&$top=10
GET /api/data/v9.2/msdyn_customerfeedbacksurveys(<guid>)
POST /api/data/v9.2/msdyn_customerfeedbacksurveys
PATCH /api/data/v9.2/msdyn_customerfeedbacksurveys(<guid>)
DELETE /api/data/v9.2/msdyn_customerfeedbacksurveys(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_customconfig`, `msdyn_customerfeedbackbotstatus`, `msdyn_customerfeedbacksurveyid`, `msdyn_customerfeedbacksurveyname`, `msdyn_customerfeedbacksurveyprovider`, `msdyn_customerfeedbacksurveyurl`, `msdyn_customhosturl`, `msdyn_microsoftcopilotstudiobot`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customerfeedbacksurvey_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerfeedbacksurvey_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerfeedbacksurvey_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerfeedbacksurvey_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_customerfeedbacksurvey` | [organization](organization.md) | `organizationid` | `organizationid` |
| `bot_msdyn_microsoftcopilotstudiobot` | [bot](bot.md) | `msdyn_microsoftcopilotstudiobot` | `msdyn_microsoftcopilotstudiobot` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprofilesurveyconfig_msdyn_botsurveyid_msdyn_customerfeedbacksurvey` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_botsurveyid` | `msdyn_botsurveyid` |
| `msdyn_customerfeedbacksurvey_SyncErrors` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurvey` |
| `msdyn_customerfeedbacksurvey_DuplicateMatchingRecord` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customerfeedbacksurvey` |
| `msdyn_customerfeedbacksurvey_DuplicateBaseRecord` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `baserecordid` | `baserecordid_msdyn_customerfeedbacksurvey` |
| `msdyn_customerfeedbacksurvey_AsyncOperations` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurvey` |
| `msdyn_customerfeedbacksurvey_MailboxTrackingFolders` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurvey` |
| `msdyn_customerfeedbacksurvey_UserEntityInstanceDatas` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `objectid` | `objectid_msdyn_customerfeedbacksurvey` |
| `msdyn_customerfeedbacksurvey_ProcessSession` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurvey` |
| `msdyn_customerfeedbacksurvey_BulkDeleteFailures` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerfeedbacksurvey` |
| `msdyn_customerfeedbacksurvey_PrincipalObjectAttributeAccesses` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `objectid` | `objectid_msdyn_customerfeedbacksurvey` |
| `msdyn_customerfeedbacksurvey_msdyn_customerfeedbacksurveyinvite` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_customerfeedbacksurveyid` | `msdyn_customerfeedbacksurveyid` |
| `msdyn_customerfeedbacksurvey_msdyn_customerfeedbacksurveyresponse` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_customerfeedbacksurveyid` | `msdyn_customerfeedbacksurveyid` |
| `msdyn_customerfeedbacksurvey_msdyn_surveyconfig_msdyn_agentsurveyid` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_agentsurveyid` | `msdyn_agentsurveyid` |
| `msdyn_customerfeedbacksurvey_msdyn_surveyconfig_msdyn_botsurveyid` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_botsurveyid` | `msdyn_botsurveyid` |
| `msdyn_customerfeedbacksurvey_msdyn_surveysetting` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_customerfeedbacksurvey` | `msdyn_customerfeedbacksurvey` |


## Source

Generated from [msdyn_customerfeedbacksurvey (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customerfeedbacksurvey')) on 2026-05-07.