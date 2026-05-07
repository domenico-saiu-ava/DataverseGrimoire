---
logical: "msfp_surveyinvitesummary"
display: "Customer Voice survey invite summary"
entitySetName: "msfp_surveyinvitesummaries"
primaryId: "msfp_surveyinvitesummaryid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice survey invite summary

For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_surveyinvitesummary` |
| Display name | Customer Voice survey invite summary |
| Display (plural) | Customer Voice survey invite summaries |
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

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_AdditionalInfo`, `msfp_MonthYearCode`, `msfp_Name`, `msfp_Statuscounts`, `msfp_Surveyid`, `msfp_surveyinvitesummaryId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_surveyinvitesummary` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_surveyinvitesummary_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_surveyinvitesummary_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_surveyinvitesummary_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_surveyinvitesummary_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_surveyinvitesummary_surveyid_msfp_survey` | [msfp_survey](msfp_survey.md) | `msfp_surveyid` | `msfp_Surveyid` |
| `owner_msfp_surveyinvitesummary` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_surveyinvitesummary` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_surveyinvitesummary` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_surveyinvitesummary_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvitesummary_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvitesummary_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvitesummary_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_surveyinvitesummary_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyinvitesummary_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_surveyinvitesummary.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_surveyinvitesummary.md) on 2026-05-06.