---
logical: "msfp_surveyreminder"
display: "Promemoria sondaggio Customer Voice"
entitySetName: "msfp_surveyreminders"
primaryId: "msfp_surveyreminderid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Promemoria sondaggio Customer Voice

Messaggi e-mail con promemoria per sondaggi creati in Customer Voice.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_surveyreminder` |
| Display name | Promemoria sondaggio Customer Voice |
| Display (plural) | Promemoria sondaggio Customer Voice |
| Schema name | `msfp_surveyreminder` |
| Entity set (Web API) | `msfp_surveyreminders` |
| Primary id attribute | `msfp_surveyreminderid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_surveyreminders?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_surveyreminders(<guid>)
POST /api/data/v9.2/msfp_surveyreminders
PATCH /api/data/v9.2/msfp_surveyreminders(<guid>)
DELETE /api/data/v9.2/msfp_surveyreminders(<guid>)
```

## Attributes

Writable: **17** · Read-only: **9**

### Writable

`createdon`, `importsequencenumber`, `msfp_description`, `msfp_emailtemplate`, `msfp_name`, `msfp_properties`, `msfp_scheduleddate`, `msfp_status`, `msfp_survey`, `msfp_surveyreminderid`, `msfp_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_surveyreminder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_surveyreminder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_surveyreminder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_surveyreminder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_surveyreminder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_surveyreminder` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_surveyreminder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_surveyreminder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate` | [msfp_emailtemplate](msfp_emailtemplate.md) | `msfp_emailtemplate` | `msfp_emailtemplate` |
| `msfp_msfp_survey_msfp_surveyreminder_survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_surveyreminder_SyncErrors` | [msfp_surveyreminder](msfp_surveyreminder.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyreminder` |
| `msfp_surveyreminder_DuplicateMatchingRecord` | [msfp_surveyreminder](msfp_surveyreminder.md) | `duplicaterecordid` | `duplicaterecordid_msfp_surveyreminder` |
| `msfp_surveyreminder_DuplicateBaseRecord` | [msfp_surveyreminder](msfp_surveyreminder.md) | `baserecordid` | `baserecordid_msfp_surveyreminder` |
| `msfp_surveyreminder_AsyncOperations` | [msfp_surveyreminder](msfp_surveyreminder.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyreminder` |
| `msfp_surveyreminder_MailboxTrackingFolders` | [msfp_surveyreminder](msfp_surveyreminder.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyreminder` |
| `msfp_surveyreminder_UserEntityInstanceDatas` | [msfp_surveyreminder](msfp_surveyreminder.md) | `objectid` | `objectid_msfp_surveyreminder` |
| `msfp_surveyreminder_ProcessSession` | [msfp_surveyreminder](msfp_surveyreminder.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyreminder` |
| `msfp_surveyreminder_BulkDeleteFailures` | [msfp_surveyreminder](msfp_surveyreminder.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyreminder` |
| `msfp_surveyreminder_PrincipalObjectAttributeAccesses` | [msfp_surveyreminder](msfp_surveyreminder.md) | `objectid` | `objectid_msfp_surveyreminder` |


## Source

Generated from [msfp_surveyreminder (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_surveyreminder')) on 2026-05-07.