---
logical: "msfp_surveyreminder"
display: "Customer Voice survey reminder"
entitySetName: "msfp_surveyreminders"
primaryId: "msfp_surveyreminderid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice survey reminder

Email reminders for surveys created in Customer Voice.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_surveyreminder` |
| Display name | Customer Voice survey reminder |
| Display (plural) | Customer Voice survey reminders |
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

Writable: **18** · Read-only: **11**

### Writable

`CreatedOn`, `ImportSequenceNumber`, `msfp_description`, `msfp_emailtemplate`, `msfp_name`, `msfp_properties`, `msfp_scheduleddate`, `msfp_status`, `msfp_survey`, `msfp_surveyreminderId`, `msfp_type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_surveyreminder` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_surveyreminder_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_surveyreminder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_surveyreminder_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_surveyreminder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate` | [msfp_emailtemplate](msfp_emailtemplate.md) | `msfp_emailtemplate` | `msfp_emailtemplate` |
| `msfp_msfp_survey_msfp_surveyreminder_survey` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |
| `owner_msfp_surveyreminder` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_surveyreminder` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_surveyreminder` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_surveyreminder_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyreminder_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyreminder_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msfp_surveyreminder_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msfp_surveyreminder_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyreminder_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_surveyreminder_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_surveyreminder_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_surveyreminder.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_surveyreminder.md) on 2026-05-06.