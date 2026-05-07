---
logical: "similarityrule"
display: "Similarity Rule"
entitySetName: "similarityrules"
primaryId: "similarityruleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Similarity Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `similarityrule` |
| Display name | Similarity Rule |
| Display (plural) | Similarity Rules |
| Schema name | `SimilarityRule` |
| Entity set (Web API) | `similarityrules` |
| Primary id attribute | `similarityruleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/similarityrules?$select=name&$top=10
GET /api/data/v9.2/similarityrules(<guid>)
POST /api/data/v9.2/similarityrules
PATCH /api/data/v9.2/similarityrules(<guid>)
DELETE /api/data/v9.2/similarityrules(<guid>)
```

## Attributes

Writable: **19** · Read-only: **15**

### Writable

`ActiveRuleFetchXML`, `BaseEntityName`, `Description`, `ExcludeInactiveRecords`, `FetchXmlList`, `ImportSequenceNumber`, `IntroducedVersion`, `MatchingEntityName`, `MaxKeyWords`, `name`, `NgramSize`, `OverriddenCreatedOn`, `RuleConditionXml`, `SimilarityRuleId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`BaseEntityTypeCode`, `ComponentState`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsManaged`, `MatchingEntityTypeCode`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SimilarityRuleIdUnique`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_similarityrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_similarityrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_similarityrule` | [organization](organization.md) | `organizationid` | `organizationid` |
| `TransactionCurrency_SimilarityRule` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `similarityrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `similarityrule_textanalyticsentitymapping` | _n/a_ | `similarityruleid` | _n/a_ |


## Source

Generated from [similarityrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/similarityrule.md) on 2026-05-06.