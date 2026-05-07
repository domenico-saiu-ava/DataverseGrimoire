---
logical: "msfp_surveyinvitesummary"
display: "Riepilogo inviti al sondaggio Customer Voice"
entitySetName: "msfp_surveyinvitesummaries"
primaryId: "msfp_surveyinvitesummaryid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Riepilogo inviti al sondaggio Customer Voice

Solo per uso interno.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_surveyinvitesummary` |
| Display name | Riepilogo inviti al sondaggio Customer Voice |
| Display (plural) | Riepiloghi inviti ai sondaggi Customer Voice |
| Schema name | `msfp_surveyinvitesummary` |
| Entity set (Web API) | `msfp_surveyinvitesummaries` |
| Primary id attribute | `msfp_surveyinvitesummaryid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_surveyinvitesummaries?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_surveyinvitesummaries(<guid>)
POST /api/data/v9.2/msfp_surveyinvitesummaries
PATCH /api/data/v9.2/msfp_surveyinvitesummaries(<guid>)
DELETE /api/data/v9.2/msfp_surveyinvitesummaries(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_additionalinfo`, `msfp_monthyearcode`, `msfp_name`, `msfp_statuscounts`, `msfp_surveyid`, `msfp_surveyinvitesummaryid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_surveyinvitesummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_surveyinvitesummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_surveyinvitesummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_surveyinvitesummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_surveyinvitesummary` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_surveyinvitesummary` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_surveyinvitesummary` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_surveyinvitesummary` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_surveyinvitesummary_surveyid_msfp_survey` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_Surveyid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_surveyinvitesummary_SyncErrors` | [msfp_surveyinvitesummary](msfp_surveyinvitesummary.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvitesummary` |
| `msfp_surveyinvitesummary_AsyncOperations` | [msfp_surveyinvitesummary](msfp_surveyinvitesummary.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvitesummary` |
| `msfp_surveyinvitesummary_MailboxTrackingFolders` | [msfp_surveyinvitesummary](msfp_surveyinvitesummary.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvitesummary` |
| `msfp_surveyinvitesummary_UserEntityInstanceDatas` | [msfp_surveyinvitesummary](msfp_surveyinvitesummary.md) | `objectid` | `objectid_msfp_surveyinvitesummary` |
| `msfp_surveyinvitesummary_ProcessSession` | [msfp_surveyinvitesummary](msfp_surveyinvitesummary.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvitesummary` |
| `msfp_surveyinvitesummary_BulkDeleteFailures` | [msfp_surveyinvitesummary](msfp_surveyinvitesummary.md) | `regardingobjectid` | `regardingobjectid_msfp_surveyinvitesummary` |
| `msfp_surveyinvitesummary_PrincipalObjectAttributeAccesses` | [msfp_surveyinvitesummary](msfp_surveyinvitesummary.md) | `objectid` | `objectid_msfp_surveyinvitesummary` |


## Source

Generated from [msfp_surveyinvitesummary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_surveyinvitesummary')) on 2026-05-07.