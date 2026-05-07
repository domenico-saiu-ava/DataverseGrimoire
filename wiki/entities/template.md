---
logical: "template"
display: "Email Template"
entitySetName: "templates"
primaryId: "templateid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
---

# Email Template

Template for an email message that contains the standard attributes of an email message.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `template` |
| Display name | Email Template |
| Display (plural) | Email Templates |
| Schema name | `Template` |
| Entity set (Web API) | `templates` |
| Primary id attribute | `templateid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/templates?$select=title&$top=10
GET /api/data/v9.2/templates(<guid>)
POST /api/data/v9.2/templates
PATCH /api/data/v9.2/templates(<guid>)
DELETE /api/data/v9.2/templates(<guid>)
```

## Attributes

Writable: **20** · Read-only: **27**

### Writable

`Body`, `Description`, `EntityImage`, `GenerationTypeCode`, `ImportSequenceNumber`, `IntroducedVersion`, `IsCustomizable`, `IsPersonal`, `LanguageCode`, `MimeType`, `OwnerId`, `OwnerIdType`, `PresentationXml`, `SafeHtml`, `Subject`, `SubjectPresentationXml`, `SubjectSafeHtml`, `TemplateId`, `TemplateTypeCode`, `Title`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `IsManaged`, `IsRecommended`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OpenCount`, `OpenRate`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ReplyCount`, `ReplyRate`, `SolutionId`, `SupportingSolutionId`, `TemplateIdUnique`, `UsedCount`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_templates` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_templatebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_templatebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_templatebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_templatebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_templates` | [owner](owner.md) | `ownerid` | `ownerid` |
| `system_user_email_templates` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_email_templates` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Email_EmailTemplate` | _n/a_ | `templateid` | _n/a_ |
| `template_activity_mime_attachments` | _n/a_ | `objectid` | _n/a_ |
| `Template_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Template_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Template_Organization` | _n/a_ | `acknowledgementtemplateid` | _n/a_ |
| `Template_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Template_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [template.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/template.md) on 2026-05-06.