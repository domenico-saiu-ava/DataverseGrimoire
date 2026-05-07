---
logical: "customeraddress"
display: "Address"
entitySetName: "customeraddresses"
primaryId: "customeraddressid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Address

Address and shipping information. Used to store additional addresses for an account or contact.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customeraddress` |
| Display name | Address |
| Display (plural) | Addresses |
| Schema name | `CustomerAddress` |
| Entity set (Web API) | `customeraddresses` |
| Primary id attribute | `customeraddressid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/customeraddresses?$select=name&$top=10
GET /api/data/v9.2/customeraddresses(<guid>)
POST /api/data/v9.2/customeraddresses
PATCH /api/data/v9.2/customeraddresses(<guid>)
DELETE /api/data/v9.2/customeraddresses(<guid>)
```

## Attributes

Writable: **32** · Read-only: **13**

### Writable

`AddressNumber`, `AddressTypeCode`, `City`, `Country`, `County`, `CustomerAddressId`, `Fax`, `FreightTermsCode`, `ImportSequenceNumber`, `Latitude`, `Line1`, `Line2`, `Line3`, `Longitude`, `Name`, `ObjectTypeCode`, `OverriddenCreatedOn`, `ParentId`, `ParentIdTypeCode`, `PostalCode`, `PostOfficeBox`, `PrimaryContactName`, `ShippingMethodCode`, `StateOrProvince`, `Telephone1`, `Telephone2`, `Telephone3`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UPSZone`, `UTCConversionTimeZoneCode`, `UTCOffset`

### Read-only

`Composite`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_CustomerAddress` | [account](account.md) | `parentid` | `parentid_account` |
| `Contact_CustomerAddress` | [contact](contact.md) | `parentid` | `parentid_contact` |
| `lk_customeraddress_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customeraddress_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_customeraddressbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customeraddressbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `TransactionCurrency_CustomerAddress` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CustomerAddress_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CustomerAddress_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customeraddress_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `CustomerAddress_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `CustomerAddress_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [customeraddress.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/customeraddress.md) on 2026-05-06.