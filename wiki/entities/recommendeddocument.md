---
logical: "recommendeddocument"
display: "Document Suggestions"
entitySetName: "recommendeddocuments"
primaryId: "recommendeddocumentid"
primaryName: "title"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Document Suggestions

Document Suggestions

## Identity

| Property | Value |
| --- | --- |
| Logical name | `recommendeddocument` |
| Display name | Document Suggestions |
| Display (plural) | Document Suggestions |
| Schema name | `RecommendedDocument` |
| Entity set (Web API) | `recommendeddocuments` |
| Primary id attribute | `recommendeddocumentid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/recommendeddocuments?$select=title&$top=10
GET /api/data/v9.2/recommendeddocuments(<guid>)
POST /api/data/v9.2/recommendeddocuments
PATCH /api/data/v9.2/recommendeddocuments(<guid>)
DELETE /api/data/v9.2/recommendeddocuments(<guid>)
```

## Attributes

Writable: **12** · Read-only: **19**

### Writable

`AssociatedRecordName`, `Author`, `ExternalDocumentId`, `ExternalModifiedBy`, `RecommendedDocumentId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `Source`, `TimeZoneRuleVersionNumber`, `Title`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`AbsoluteUrl`, `ContentType`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EditUrl`, `ExchangeRate`, `FileSize`, `FileType`, `FullName`, `IconClassName`, `Location`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `ReadUrl`, `Version`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_recommendeddocument_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_recommendeddocument_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_recommendeddocument_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_recommendeddocument_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `organization_recommendeddocument` | [organization](organization.md) | `organizationid` | `organizationid` |
| `TransactionCurrency_recommendeddocument` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyidname` |



## Source

Generated from [recommendeddocument.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/recommendeddocument.md) on 2026-05-06.