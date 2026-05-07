---
logical: "invoice"
display: "Invoice"
entitySetName: "invoices"
primaryId: "invoiceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["fattura", "fatture", "fattura di vendita"]
synonyms_en: ["invoice", "sales invoice", "bill"]
---

# Invoice

Order that has been billed.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `invoice` |
| Display name | Invoice |
| Display (plural) | Invoices |
| Schema name | `Invoice` |
| Entity set (Web API) | `invoices` |
| Primary id attribute | `invoiceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/invoices?$select=name&$top=10
GET /api/data/v9.2/invoices(<guid>)
POST /api/data/v9.2/invoices
PATCH /api/data/v9.2/invoices(<guid>)
DELETE /api/data/v9.2/invoices(<guid>)
```

## Attributes

Writable: **65** · Read-only: **32**

### Writable

`BillTo_City`, `BillTo_Country`, `BillTo_Fax`, `BillTo_Line1`, `BillTo_Line2`, `BillTo_Line3`, `BillTo_Name`, `BillTo_PostalCode`, `BillTo_StateOrProvince`, `BillTo_Telephone`, `CustomerId`, `CustomerIdType`, `DateDelivered`, `Description`, `DiscountAmount`, `DiscountPercentage`, `DueDate`, `EmailAddress`, `EntityImage`, `FreightAmount`, `ImportSequenceNumber`, `InvoiceId`, `InvoiceNumber`, `IsPriceLocked`, `LastBackofficeSubmit`, `LastOnHoldTime`, `Name`, `OpportunityId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PaymentTermsCode`, `PriceLevelId`, `PricingErrorCode`, `PriorityCode`, `ProcessId`, `SalesOrderId`, `ShippingMethodCode`, `ShipTo_City`, `ShipTo_Country`, `ShipTo_Fax`, `ShipTo_FreightTermsCode`, `ShipTo_Line1`, `ShipTo_Line2`, `ShipTo_Line3`, `ShipTo_Name`, `ShipTo_PostalCode`, `ShipTo_StateOrProvince`, `ShipTo_Telephone`, `SkipPriceCalculation`, `SLAId`, `StageId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TotalAmount`, `TotalAmountLessFreight`, `TotalDiscountAmount`, `TotalLineItemAmount`, `TotalLineItemDiscountAmount`, `TotalTax`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `WillCall`

### Read-only

`AccountId`, `BillTo_Composite`, `ContactId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomerIdName`, `CustomerIdYomiName`, `DiscountAmount_Base`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `FreightAmount_Base`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ShipTo_Composite`, `SLAInvokedId`, `TotalAmount_Base`, `TotalAmountLessFreight_Base`, `TotalDiscountAmount_Base`, `TotalLineItemAmount_Base`, `TotalLineItemDiscountAmount_Base`, `TotalTax_Base`, `VersionNumber`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_invoices` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `invoice_customer_accounts` | [account](account.md) | `customerid` | `customerid_account` |
| `invoice_customer_contacts` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `lk_invoice_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_invoice_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_invoicebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_invoicebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `manualsla_invoice` | [sla](sla.md) | `slaid` | `sla_invoice_sla` |
| `opportunity_invoices` | [opportunity](opportunity.md) | `opportunityid` | `opportunityid` |
| `order_invoices` | [salesorder](salesorder.md) | `salesorderid` | `salesorderid` |
| `owner_invoices` | [owner](owner.md) | `ownerid` | `ownerid` |
| `price_level_invoices` | [pricelevel](pricelevel.md) | `pricelevelid` | `pricelevelid` |
| `processstage_invoices` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `sla_invoice` | [sla](sla.md) | `slainvokedid` | `slainvokedid_invoice_sla` |
| `system_user_invoices` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_invoices` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_invoice` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (31)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `invoice_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Invoice_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Invoice_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_connections1` | _n/a_ | `record1id` | _n/a_ |
| `invoice_connections2` | _n/a_ | `record2id` | _n/a_ |
| `invoice_details` | _n/a_ | `invoiceid` | _n/a_ |
| `Invoice_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `invoice_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Invoice_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Invoice_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slakpiinstance_invoice` | _n/a_ | `regarding` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contactinvoices_association` | [invoiceid](invoiceid.md) | _n/a_ | _n/a_ |

## Source

Generated from [invoice.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/invoice.md) on 2026-05-06.