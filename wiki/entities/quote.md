---
logical: "quote"
display: "Quote"
entitySetName: "quotes"
primaryId: "quoteid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["preventivo", "preventivi", "offerta", "offerte"]
synonyms_en: ["quote", "quotation", "proposal"]
---

# Quote

Formal offer for products and/or services, proposed at specific prices and related payment terms, which is sent to a prospective customer.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `quote` |
| Display name | Quote |
| Display (plural) | Quotes |
| Schema name | `Quote` |
| Entity set (Web API) | `quotes` |
| Primary id attribute | `quoteid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/quotes?$select=name&$top=10
GET /api/data/v9.2/quotes(<guid>)
POST /api/data/v9.2/quotes
PATCH /api/data/v9.2/quotes(<guid>)
DELETE /api/data/v9.2/quotes(<guid>)
```

## Attributes

Writable: **70** · Read-only: **31**

### Writable

`BillTo_AddressId`, `BillTo_City`, `BillTo_ContactName`, `BillTo_Country`, `BillTo_Fax`, `BillTo_Line1`, `BillTo_Line2`, `BillTo_Line3`, `BillTo_Name`, `BillTo_PostalCode`, `BillTo_StateOrProvince`, `BillTo_Telephone`, `CampaignId`, `ClosedOn`, `CustomerId`, `CustomerIdType`, `Description`, `DiscountAmount`, `DiscountPercentage`, `EffectiveFrom`, `EffectiveTo`, `EmailAddress`, `ExpiresOn`, `FreightAmount`, `FreightTermsCode`, `ImportSequenceNumber`, `LastOnHoldTime`, `Name`, `OpportunityId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PaymentTermsCode`, `PriceLevelId`, `PricingErrorCode`, `ProcessId`, `QuoteCreationMethod`, `QuoteId`, `QuoteNumber`, `RequestDeliveryBy`, `ShippingMethodCode`, `ShipTo_AddressId`, `ShipTo_City`, `ShipTo_ContactName`, `ShipTo_Country`, `ShipTo_Fax`, `ShipTo_FreightTermsCode`, `ShipTo_Line1`, `ShipTo_Line2`, `ShipTo_Line3`, `ShipTo_Name`, `ShipTo_PostalCode`, `ShipTo_StateOrProvince`, `ShipTo_Telephone`, `SkipPriceCalculation`, `SLAId`, `StageId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TotalAmount`, `TotalAmountLessFreight`, `TotalDiscountAmount`, `TotalLineItemAmount`, `TotalLineItemDiscountAmount`, `TotalTax`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `WillCall`

### Read-only

`AccountId`, `BillTo_Composite`, `ContactId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomerIdName`, `CustomerIdYomiName`, `DiscountAmount_Base`, `ExchangeRate`, `FreightAmount_Base`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `RevisionNumber`, `ShipTo_Composite`, `SLAInvokedId`, `TotalAmount_Base`, `TotalAmountLessFreight_Base`, `TotalDiscountAmount_Base`, `TotalLineItemAmount_Base`, `TotalLineItemDiscountAmount_Base`, `TotalTax_Base`, `UniqueDscId`, `VersionNumber`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_quotes` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `campaign_quotes` | [campaign](campaign.md) | `campaignid` | `campaignid` |
| `lk_quote_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_quote_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_quotebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_quotebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `manualsla_quote` | [sla](sla.md) | `slaid` | `sla_quote_sla` |
| `opportunity_quotes` | [opportunity](opportunity.md) | `opportunityid` | `opportunityid` |
| `owner_quotes` | [owner](owner.md) | `ownerid` | `ownerid` |
| `price_level_quotes` | [pricelevel](pricelevel.md) | `pricelevelid` | `pricelevelid` |
| `processstage_quotes` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `quote_customer_accounts` | [account](account.md) | `customerid` | `customerid_account` |
| `quote_customer_contacts` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `sla_quote` | [sla](sla.md) | `slainvokedid` | `slainvokedid_quote_sla` |
| `system_user_quotes` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_quotes` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_quote` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (38)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_opportunitysalesprocess_quoteid` | _n/a_ | `quoteid` | _n/a_ |
| `quote_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Quote_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Quote_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_connections1` | _n/a_ | `record1id` | _n/a_ |
| `quote_connections2` | _n/a_ | `record2id` | _n/a_ |
| `quote_details` | _n/a_ | `quoteid` | _n/a_ |
| `Quote_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Quote_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Quote_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_orders` | _n/a_ | `quoteid` | _n/a_ |
| `Quote_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `quote_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Quote_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_QuoteClose` | _n/a_ | `quoteid` | _n/a_ |
| `quote_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_SharepointDocumentLocation` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Quote_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slakpiinstance_quote` | _n/a_ | `regarding` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactquotes_association` | [quoteid](quoteid.md) | _n/a_ | _n/a_ |

## Source

Generated from [quote.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/quote.md) on 2026-05-06.