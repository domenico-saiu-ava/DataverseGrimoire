---
logical: "salesorder"
display: "Order"
entitySetName: "salesorders"
primaryId: "salesorderid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["ordine", "ordini", "ordine di vendita", "ordine cliente"]
synonyms_en: ["order", "sales order", "customer order"]
---

# Order

Quote that has been accepted.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `salesorder` |
| Display name | Order |
| Display (plural) | Orders |
| Schema name | `SalesOrder` |
| Entity set (Web API) | `salesorders` |
| Primary id attribute | `salesorderid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/salesorders?$select=name&$top=10
GET /api/data/v9.2/salesorders(<guid>)
POST /api/data/v9.2/salesorders
PATCH /api/data/v9.2/salesorders(<guid>)
DELETE /api/data/v9.2/salesorders(<guid>)
```

## Attributes

Writable: **75** · Read-only: **32**

### Writable

`BillTo_AddressId`, `BillTo_City`, `BillTo_ContactName`, `BillTo_Country`, `BillTo_Fax`, `BillTo_Line1`, `BillTo_Line2`, `BillTo_Line3`, `BillTo_Name`, `BillTo_PostalCode`, `BillTo_StateOrProvince`, `BillTo_Telephone`, `CampaignId`, `CustomerId`, `CustomerIdType`, `DateFulfilled`, `Description`, `DiscountAmount`, `DiscountPercentage`, `EmailAddress`, `EntityImage`, `FreightAmount`, `FreightTermsCode`, `ImportSequenceNumber`, `IsPriceLocked`, `LastBackofficeSubmit`, `LastOnHoldTime`, `Name`, `OpportunityId`, `OrderCreationMethod`, `OrderNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PaymentTermsCode`, `PriceLevelId`, `PricingErrorCode`, `PriorityCode`, `ProcessId`, `QuoteId`, `RequestDeliveryBy`, `SalesOrderId`, `ShippingMethodCode`, `ShipTo_AddressId`, `ShipTo_City`, `ShipTo_ContactName`, `ShipTo_Country`, `ShipTo_Fax`, `ShipTo_FreightTermsCode`, `ShipTo_Line1`, `ShipTo_Line2`, `ShipTo_Line3`, `ShipTo_Name`, `ShipTo_PostalCode`, `ShipTo_StateOrProvince`, `ShipTo_Telephone`, `SkipPriceCalculation`, `SLAId`, `StageId`, `StateCode`, `StatusCode`, `SubmitDate`, `SubmitStatus`, `SubmitStatusDescription`, `TimeZoneRuleVersionNumber`, `TotalAmount`, `TotalAmountLessFreight`, `TotalDiscountAmount`, `TotalLineItemAmount`, `TotalLineItemDiscountAmount`, `TotalTax`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `WillCall`

### Read-only

`AccountId`, `BillTo_Composite`, `ContactId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomerIdName`, `CustomerIdYomiName`, `DiscountAmount_Base`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `FreightAmount_Base`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ShipTo_Composite`, `SLAInvokedId`, `TotalAmount_Base`, `TotalAmountLessFreight_Base`, `TotalDiscountAmount_Base`, `TotalLineItemAmount_Base`, `TotalLineItemDiscountAmount_Base`, `TotalTax_Base`, `VersionNumber`

## Relationships

### Many-to-One (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_orders` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `campaign_orders` | [campaign](campaign.md) | `campaignid` | `campaignid` |
| `lk_salesorder_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_salesorder_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_salesorderbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_salesorderbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `manualsla_salesorder` | [sla](sla.md) | `slaid` | `sla_salesorder_sla` |
| `opportunity_sales_orders` | [opportunity](opportunity.md) | `opportunityid` | `opportunityid` |
| `order_customer_accounts` | [account](account.md) | `customerid` | `customerid_account` |
| `order_customer_contacts` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `owner_salesorders` | [owner](owner.md) | `ownerid` | `ownerid` |
| `price_level_orders` | [pricelevel](pricelevel.md) | `pricelevelid` | `pricelevelid` |
| `processstage_salesorders` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `quote_orders` | [quote](quote.md) | `quoteid` | `quoteid` |
| `sla_salesorder` | [sla](sla.md) | `slainvokedid` | `slainvokedid_salesorder_sla` |
| `system_user_orders` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_orders` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_salesorder` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (34)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_opportunitysalesprocess_salesorderid` | _n/a_ | `salesorderid` | _n/a_ |
| `order_details` | _n/a_ | `salesorderid` | _n/a_ |
| `order_invoices` | _n/a_ | `salesorderid` | _n/a_ |
| `salesorder_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `SalesOrder_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `SalesOrder_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_connections1` | _n/a_ | `record1id` | _n/a_ |
| `salesorder_connections2` | _n/a_ | `record2id` | _n/a_ |
| `SalesOrder_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_OrderClose` | _n/a_ | `salesorderid` | _n/a_ |
| `SalesOrder_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesorder_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `SalesOrder_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesOrder_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slakpiinstance_salesorder` | _n/a_ | `regarding` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactorders_association` | [salesorderid](salesorderid.md) | _n/a_ | _n/a_ |

## Source

Generated from [salesorder.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/salesorder.md) on 2026-05-06.