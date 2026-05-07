---
logical: "msfp_emailtemplate"
display: "Modello di messaggio e-mail del sondaggio Customer Voice"
entitySetName: "msfp_emailtemplates"
primaryId: "msfp_emailtemplateid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di messaggio e-mail del sondaggio Customer Voice

Modello di messaggio contenente il collegamento di invito sondaggio.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_emailtemplate` |
| Display name | Modello di messaggio e-mail del sondaggio Customer Voice |
| Display (plural) | Modelli di messaggio e-mail del sondaggio Customer Voice |
| Schema name | `msfp_emailtemplate` |
| Entity set (Web API) | `msfp_emailtemplates` |
| Primary id attribute | `msfp_emailtemplateid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_emailtemplates?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_emailtemplates(<guid>)
POST /api/data/v9.2/msfp_emailtemplates
PATCH /api/data/v9.2/msfp_emailtemplates(<guid>)
DELETE /api/data/v9.2/msfp_emailtemplates(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_candelete`, `msfp_canedit`, `msfp_canrename`, `msfp_emailtemplatebody`, `msfp_emailtemplateid`, `msfp_emailtemplatesubject`, `msfp_language`, `msfp_name`, `msfp_sourcesurveyidentifier`, `msfp_survey`, `msfp_tags`, `msfp_templatetype`, `msfp_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_emailtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_emailtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_emailtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_emailtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_emailtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_emailtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_emailtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_emailtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_msfp_survey_msfp_emailtemplate_surveyid` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_emailtemplate_SyncErrors` | [msfp_emailtemplate](msfp_emailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_emailtemplate` |
| `msfp_emailtemplate_AsyncOperations` | [msfp_emailtemplate](msfp_emailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_emailtemplate` |
| `msfp_emailtemplate_MailboxTrackingFolders` | [msfp_emailtemplate](msfp_emailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_emailtemplate` |
| `msfp_emailtemplate_UserEntityInstanceDatas` | [msfp_emailtemplate](msfp_emailtemplate.md) | `objectid` | `objectid_msfp_emailtemplate` |
| `msfp_emailtemplate_ProcessSession` | [msfp_emailtemplate](msfp_emailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_emailtemplate` |
| `msfp_emailtemplate_BulkDeleteFailures` | [msfp_emailtemplate](msfp_emailtemplate.md) | `regardingobjectid` | `regardingobjectid_msfp_emailtemplate` |
| `msfp_emailtemplate_PrincipalObjectAttributeAccesses` | [msfp_emailtemplate](msfp_emailtemplate.md) | `objectid` | `objectid_msfp_emailtemplate` |
| `msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate` | [msfp_emailtemplate](msfp_emailtemplate.md) | `msfp_emailtemplate` | `msfp_emailtemplate` |
| `msfp_msfp_emailtemplate_msfp_localizedemailtem` | [msfp_emailtemplate](msfp_emailtemplate.md) | `msfp_emailtemplateid` | `msfp_emailtemplateid` |


## Source

Generated from [msfp_emailtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_emailtemplate')) on 2026-05-07.