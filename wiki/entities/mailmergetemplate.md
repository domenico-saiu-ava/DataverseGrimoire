---
logical: "mailmergetemplate"
display: "Mail Merge Template"
entitySetName: "mailmergetemplates"
primaryId: "mailmergetemplateid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Mail Merge Template

Template for a mail merge document that contains the standard attributes of that document.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mailmergetemplate` |
| Display name | Mail Merge Template |
| Display (plural) | Mail Merge Templates |
| Schema name | `MailMergeTemplate` |
| Entity set (Web API) | `mailmergetemplates` |
| Primary id attribute | `mailmergetemplateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mailmergetemplates?$select=name&$top=10
GET /api/data/v9.2/mailmergetemplates(<guid>)
POST /api/data/v9.2/mailmergetemplates
PATCH /api/data/v9.2/mailmergetemplates(<guid>)
DELETE /api/data/v9.2/mailmergetemplates(<guid>)
```

## Attributes

Writable: **21** · Read-only: **21**

### Writable

`Body`, `DefaultFilter`, `Description`, `DocumentFormat`, `FileName`, `IntroducedVersion`, `IsCustomizable`, `IsPersonal`, `LanguageCode`, `MailMergeTemplateId`, `MailMergeType`, `MimeType`, `Name`, `OwnerId`, `OwnerIdType`, `StateCode`, `StatusCode`, `TemplateTypeCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `FileSize`, `IsManaged`, `MailMergeTemplateIdUnique`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ParameterXml`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_mailmergetemplates` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_mailmergetemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mailmergetemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_mailmergetemplatebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mailmergetemplatebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `owner_mailmergetemplates` | [owner](owner.md) | `ownerid` | `ownerid` |
| `TransactionCurrency_MailMergeTemplate` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `MailMergeTemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mailmergetemplate_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `MailMergeTemplate_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `MailMergeTemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mailmergetemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mailmergetemplate.md) on 2026-05-06.