---
logical: "msfp_emailtemplate"
display: "Customer Voice survey email template"
entitySetName: "msfp_emailtemplates"
primaryId: "msfp_emailtemplateid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice survey email template

Template for an email message that contains the survey invitation link.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_emailtemplate` |
| Display name | Customer Voice survey email template |
| Display (plural) | Customer Voice survey email templates |
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

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_Candelete`, `msfp_Canedit`, `msfp_Canrename`, `msfp_emailtemplatebody`, `msfp_emailtemplateId`, `msfp_emailtemplatesubject`, `msfp_language`, `msfp_name`, `msfp_sourcesurveyidentifier`, `msfp_survey`, `msfp_tags`, `msfp_templatetype`, `msfp_version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_emailtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_emailtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_emailtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_emailtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_emailtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_msfp_survey_msfp_emailtemplate_surveyid` | [msfp_survey](msfp_survey.md) | `msfp_survey` | `msfp_survey` |
| `owner_msfp_emailtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_emailtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_emailtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_emailtemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_emailtemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_emailtemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_emailtemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_emailtemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_emailtemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_msfp_emailtemplate_msfp_localizedemailtem` | _n/a_ | `msfp_emailtemplateid` | _n/a_ |
| `msfp_msfp_emailtemplate_msfp_surveyreminder_emailtemplate` | _n/a_ | `msfp_emailtemplate` | _n/a_ |


## Source

Generated from [msfp_emailtemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_emailtemplate.md) on 2026-05-06.