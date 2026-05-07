---
logical: "competitor"
display: "Competitor"
entitySetName: "competitors"
primaryId: "competitorid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["concorrente", "concorrenti"]
synonyms_en: ["competitor"]
---

# Competitor

Business competing for the sale represented by a lead or opportunity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `competitor` |
| Display name | Competitor |
| Display (plural) | Competitors |
| Schema name | `Competitor` |
| Entity set (Web API) | `competitors` |
| Primary id attribute | `competitorid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/competitors?$select=name&$top=10
GET /api/data/v9.2/competitors(<guid>)
POST /api/data/v9.2/competitors
PATCH /api/data/v9.2/competitors(<guid>)
DELETE /api/data/v9.2/competitors(<guid>)
```

## Attributes

Writable: **69** · Read-only: **15**

### Writable

`Address1_AddressId`, `Address1_AddressTypeCode`, `Address1_City`, `Address1_Country`, `Address1_County`, `Address1_Fax`, `Address1_Latitude`, `Address1_Line1`, `Address1_Line2`, `Address1_Line3`, `Address1_Longitude`, `Address1_Name`, `Address1_PostalCode`, `Address1_PostOfficeBox`, `Address1_ShippingMethodCode`, `Address1_StateOrProvince`, `Address1_Telephone1`, `Address1_Telephone2`, `Address1_Telephone3`, `Address1_UPSZone`, `Address1_UTCOffset`, `Address2_AddressId`, `Address2_AddressTypeCode`, `Address2_City`, `Address2_Country`, `Address2_County`, `Address2_Fax`, `Address2_Latitude`, `Address2_Line1`, `Address2_Line2`, `Address2_Line3`, `Address2_Longitude`, `Address2_Name`, `Address2_PostalCode`, `Address2_PostOfficeBox`, `Address2_ShippingMethodCode`, `Address2_StateOrProvince`, `Address2_Telephone1`, `Address2_Telephone2`, `Address2_Telephone3`, `Address2_UPSZone`, `Address2_UTCOffset`, `CompetitorId`, `EntityImage`, `ImportSequenceNumber`, `KeyProduct`, `msdyn_gdproptout`, `Name`, `Opportunities`, `OverriddenCreatedOn`, `Overview`, `ProcessId`, `ReferenceInfoUrl`, `ReportedRevenue`, `ReportingQuarter`, `ReportingYear`, `StageId`, `StockExchange`, `Strengths`, `Threats`, `TickerSymbol`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `Weaknesses`, `WebSiteUrl`, `WinPercentage`, `YomiName`

### Read-only

`Address1_Composite`, `Address2_Composite`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `ReportedRevenue_Base`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_competitor_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_competitor_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_competitorbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_competitorbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_competitors` | [organization](organization.md) | `organizationid` | `organizationid` |
| `processstage_competitors` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `transactioncurrency_competitor` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `competitor_addresses` | _n/a_ | `parentid` | _n/a_ |
| `Competitor_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Competitor_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Competitor_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitor_connections1` | _n/a_ | `record1id` | _n/a_ |
| `competitor_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Competitor_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Competitor_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `competitor_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitor_opportunity_activities` | _n/a_ | `competitorid` | _n/a_ |
| `competitor_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitor_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitor_Posts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitor_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Competitor_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Competitor_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `competitorproduct_association` | [competitorid](competitorid.md) | _n/a_ | _n/a_ |
| `competitorsalesliterature_association` | [competitorid](competitorid.md) | _n/a_ | _n/a_ |
| `leadcompetitors_association` | [competitorid](competitorid.md) | _n/a_ | _n/a_ |
| `opportunitycompetitors_association` | [competitorid](competitorid.md) | _n/a_ | _n/a_ |

## Source

Generated from [competitor.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/competitor.md) on 2026-05-06.