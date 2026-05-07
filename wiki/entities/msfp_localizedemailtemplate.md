---
logical: "msfp_localizedemailtemplate"
display: "Customer Voice localized survey email template"
entitySetName: "msfp_localizedemailtemplates"
primaryId: "msfp_localizedemailtemplateid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Voice localized survey email template

Stores localized data for email templates.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_localizedemailtemplate` |
| Display name | Customer Voice localized survey email template |
| Display (plural) | Customer Voice localized survey email templates |
| Schema name | `msfp_localizedemailtemplate` |
| Entity set (Web API) | `msfp_localizedemailtemplates` |
| Primary id attribute | `msfp_localizedemailtemplateid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_localizedemailtemplates?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_localizedemailtemplates(<guid>)
POST /api/data/v9.2/msfp_localizedemailtemplates
PATCH /api/data/v9.2/msfp_localizedemailtemplates(<guid>)
DELETE /api/data/v9.2/msfp_localizedemailtemplates(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msfp_emailtemplatebody`, `msfp_emailtemplateid`, `msfp_emailtemplatesubject`, `msfp_language`, `msfp_localizedemailtemplateId`, `msfp_name`, `msfp_version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msfp_localizedemailtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msfp_localizedemailtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_localizedemailtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_localizedemailtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_localizedemailtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msfp_msfp_emailtemplate_msfp_localizedemailtem` | [msfp_emailtemplate](msfp_emailtemplate.md) | `msfp_emailtemplateid` | `msfp_emailtemplateid` |
| `owner_msfp_localizedemailtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msfp_localizedemailtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msfp_localizedemailtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_localizedemailtemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_localizedemailtemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_localizedemailtemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_localizedemailtemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msfp_localizedemailtemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msfp_localizedemailtemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msfp_localizedemailtemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msfp_localizedemailtemplate.md) on 2026-05-06.