---
logical: "msfp_shorturl"
display: "Shorturl"
entitySetName: "msfp_shorturls"
primaryId: "msfp_shorturlid"
primaryName: "msfp_urlhash"
tableType: "Standard"
ownership: "UserOwned"
---

# Shorturl

For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_shorturl` |
| Display name | Shorturl |
| Display (plural) | Shorturls |
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_inviteid`, `msfp_originalurl`, `msfp_shorturlId`, `msfp_surveyid`, `msfp_urlhash`, `msfp_variablevalues`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_shorturl` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_shorturl_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_shorturl_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_shorturl_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_shorturl_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_shorturl_inviteid_msfp_surveyinvite` | [msfp_surveyinvite](msfp_surveyinvite.md) | `msfp_inviteid` | `msfp_inviteid` |
| `msfp_shorturl_surveyid_msfp_survey` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_surveyid` |
| `owner_msfp_shorturl` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_shorturl` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_shorturl` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_shorturl_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_shorturl_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_shorturl_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_shorturl_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_shorturl_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_shorturl_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_shorturl.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_shorturl.md) on 2026-05-06.