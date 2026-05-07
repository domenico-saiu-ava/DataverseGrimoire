---
logical: "msfp_shorturl"
display: "URL breve"
entitySetName: "msfp_shorturls"
primaryId: "msfp_shorturlid"
primaryName: "msfp_urlhash"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# URL breve

Solo per uso interno.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_shorturl` |
| Display name | URL breve |
| Display (plural) | URL brevi |
| Schema name | `msfp_shorturl` |
| Entity set (Web API) | `msfp_shorturls` |
| Primary id attribute | `msfp_shorturlid` |
| Primary name attribute | `msfp_urlhash` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_shorturls?$select=msfp_urlhash&$top=10
GET /api/data/v9.2/msfp_shorturls(<guid>)
POST /api/data/v9.2/msfp_shorturls
PATCH /api/data/v9.2/msfp_shorturls(<guid>)
DELETE /api/data/v9.2/msfp_shorturls(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_inviteid`, `msfp_originalurl`, `msfp_shorturlid`, `msfp_surveyid`, `msfp_urlhash`, `msfp_variablevalues`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_shorturl_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_shorturl_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_shorturl_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_shorturl_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_shorturl` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_shorturl` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_shorturl` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_shorturl` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_shorturl_surveyid_msfp_survey` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid` |
| `msfp_shorturl_inviteid_msfp_surveyinvite` | [msfp_surveyinvite](msfp_surveyinvite.md) | `msfp_inviteid` | `msfp_inviteid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_shorturl_SyncErrors` | [msfp_shorturl](msfp_shorturl.md) | `regardingobjectid` | `regardingobjectid_msfp_shorturl` |
| `msfp_shorturl_AsyncOperations` | [msfp_shorturl](msfp_shorturl.md) | `regardingobjectid` | `regardingobjectid_msfp_shorturl` |
| `msfp_shorturl_MailboxTrackingFolders` | [msfp_shorturl](msfp_shorturl.md) | `regardingobjectid` | `regardingobjectid_msfp_shorturl` |
| `msfp_shorturl_UserEntityInstanceDatas` | [msfp_shorturl](msfp_shorturl.md) | `objectid` | `objectid_msfp_shorturl` |
| `msfp_shorturl_ProcessSession` | [msfp_shorturl](msfp_shorturl.md) | `regardingobjectid` | `regardingobjectid_msfp_shorturl` |
| `msfp_shorturl_BulkDeleteFailures` | [msfp_shorturl](msfp_shorturl.md) | `regardingobjectid` | `regardingobjectid_msfp_shorturl` |
| `msfp_shorturl_PrincipalObjectAttributeAccesses` | [msfp_shorturl](msfp_shorturl.md) | `objectid` | `objectid_msfp_shorturl` |


## Source

Generated from [msfp_shorturl (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_shorturl')) on 2026-05-07.