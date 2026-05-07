---
logical: "leadaddress"
display: "Lead Address"
entitySetName: "leadaddresses"
primaryId: "leadaddressid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Lead Address

Address information for a lead.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `leadaddress` |
| Display name | Lead Address |
| Display (plural) | Lead Addresses |
| Schema name | `LeadAddress` |
| Entity set (Web API) | `leadaddresses` |
| Primary id attribute | `leadaddressid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/leadaddresses?$select=name&$top=10
GET /api/data/v9.2/leadaddresses(<guid>)
POST /api/data/v9.2/leadaddresses
PATCH /api/data/v9.2/leadaddresses(<guid>)
DELETE /api/data/v9.2/leadaddresses(<guid>)
```

## Attributes

Writable: **28** · Read-only: **11**

### Writable

`AddressNumber`, `AddressTypeCode`, `City`, `Country`, `County`, `Fax`, `ImportSequenceNumber`, `Latitude`, `LeadAddressId`, `Line1`, `Line2`, `Line3`, `Longitude`, `Name`, `OverriddenCreatedOn`, `ParentId`, `PostalCode`, `PostOfficeBox`, `ShippingMethodCode`, `StateOrProvince`, `Telephone1`, `Telephone2`, `Telephone3`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UPSZone`, `UTCConversionTimeZoneCode`, `UTCOffset`

### Read-only

`Composite`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwningBusinessUnit`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lead_addresses` | [lead](lead.md) | `parentid` | `parentid` |
| `lk_leadaddress_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_leadaddress_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_leadaddressbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_leadaddressbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `TransactionCurrency_LeadAddress` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `leadaddress_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadaddress_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadaddress_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `leadaddress_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `LeadAddress_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [leadaddress.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/leadaddress.md) on 2026-05-06.