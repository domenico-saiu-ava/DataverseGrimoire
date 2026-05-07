---
logical: "transactioncurrency"
display: "Currency"
entitySetName: "transactioncurrencies"
primaryId: "transactioncurrencyid"
primaryName: "currencyname"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["valuta", "divisa"]
synonyms_en: ["currency", "transaction currency"]
---

# Currency

Currency in which a financial transaction is carried out.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `transactioncurrency` |
| Display name | Currency |
| Display (plural) | Currencies |
| Schema name | `TransactionCurrency` |
| Entity set (Web API) | `transactioncurrencies` |
| Primary id attribute | `transactioncurrencyid` |
| Primary name attribute | `currencyname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/transactioncurrencies?$select=currencyname&$top=10
GET /api/data/v9.2/transactioncurrencies(<guid>)
POST /api/data/v9.2/transactioncurrencies
PATCH /api/data/v9.2/transactioncurrencies(<guid>)
DELETE /api/data/v9.2/transactioncurrencies(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`CurrencyName`, `CurrencyPrecision`, `CurrencySymbol`, `CurrencyType`, `EntityImage`, `ExchangeRate`, `ImportSequenceNumber`, `ISOCurrencyCode`, `OverriddenCreatedOn`, `StateCode`, `StatusCode`, `TransactionCurrencyId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `UniqueDscId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_transactioncurrency_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_transactioncurrency_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_transactioncurrencybase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_transactioncurrencybase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_transactioncurrencies` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (61)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_inviteredemption_transactioncurrency_transactioncurrencyid` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `adx_portalcomment_transactioncurrency_transactioncurrencyid` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `basecurrency_organization` | _n/a_ | `basecurrencyid` | _n/a_ |
| `chat_transactioncurrency_transactioncurrencyid` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_account` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_actioncard` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_ActionCardUserState` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_ActivityPointer` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_annualfiscalcalendar` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Appointment` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `TransactionCurrency_BusinessUnit` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_category` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Connection` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_contact` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_CustomerAddress` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `TransactionCurrency_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `TransactionCurrency_Email` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_expiredprocess` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Fax` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_feedback` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_fixedmonthlyfiscalcalendar` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Goal` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_InteractionForEmail` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_KbArticle` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_knowledgearticle` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_knowledgearticleviews` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_KnowledgeBaseRecord` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Letter` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_MailMergeTemplate` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_monthlyfiscalcalendar` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_newprocess` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_officegraphdocument` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_PhoneCall` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_position` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `transactioncurrency_quarterlyfiscalcalendar` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Queue` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_QueueItem` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_recommendeddocument` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_RecurringAppointmentMaster` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_ReportCategory` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_semiannualfiscalcalendar` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_SharePointDocumentLocation` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_SharePointSite` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_SimilarityRule` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_SLA` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_SLAItem` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_slakpiinstance` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_socialactivity` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_SocialProfile` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `TransactionCurrency_SystemUser` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Task` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Team` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Territory` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_Theme` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_translationprocess` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `TransactionCurrency_UserMapping` | _n/a_ | `transactioncurrencyid` | _n/a_ |
| `transactioncurrency_usersettings` | _n/a_ | `transactioncurrencyid` | _n/a_ |


## Source

Generated from [transactioncurrency.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/transactioncurrency.md) on 2026-05-06.