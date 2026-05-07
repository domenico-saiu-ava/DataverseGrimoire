---
logical: "officegraphdocument"
display: "Office Graph Document"
entitySetName: "officegraphdocuments"
primaryId: "officegraphdocumentid"
primaryName: "title"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Office Graph Document

Office Graph Documents Description

## Identity

| Property | Value |
| --- | --- |
| Logical name | `officegraphdocument` |
| Display name | Office Graph Document |
| Display (plural) | Office Graph Documents |
| Schema name | `OfficeGraphDocument` |
| Entity set (Web API) | `officegraphdocuments` |
| Primary id attribute | `officegraphdocumentid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/officegraphdocuments?$select=title&$top=10
GET /api/data/v9.2/officegraphdocuments(<guid>)
POST /api/data/v9.2/officegraphdocuments
PATCH /api/data/v9.2/officegraphdocuments(<guid>)
DELETE /api/data/v9.2/officegraphdocuments(<guid>)
```

## Attributes

Writable: **6** · Read-only: **24**

### Writable

`DocumentId`, `OfficeGraphDocumentId`, `TimeZoneRuleVersionNumber`, `Title`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`AuthorNames`, `CreatedBy`, `CreatedOnBehalfBy`, `CreatedTime`, `DocumentLastModifiedBy`, `DocumentLastModifiedOn`, `DocumentPreviewMetadata`, `ExchangeRate`, `FileExtension`, `FileType`, `ModifiedBy`, `ModifiedOnBehalfBy`, `ModifiedTime`, `OrganizationId`, `PreviewImageUrl`, `QueryType`, `Rank`, `ReadUrl`, `SecondaryFileExtension`, `SiteTitle`, `SiteUrl`, `VersionNumber`, `ViewCount`, `WebLocationUrl`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_officegraphdocument_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_officegraphdocument_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_officegraphdocument` | [organization](organization.md) | `organizationid` | `organizationid` |
| `TransactionCurrency_officegraphdocument` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |



## Source

Generated from [officegraphdocument.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/officegraphdocument.md) on 2026-05-06.