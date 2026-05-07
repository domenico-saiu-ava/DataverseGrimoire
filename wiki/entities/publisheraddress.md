---
logical: "publisheraddress"
display: "Publisher Address"
entitySetName: "publisheraddresses"
primaryId: "publisheraddressid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Publisher Address

Address and shipping information. Used to store additional addresses for a publisher.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `publisheraddress` |
| Display name | Publisher Address |
| Display (plural) | Publisher Addresses |
| Schema name | `PublisherAddress` |
| Entity set (Web API) | `publisheraddresses` |
| Primary id attribute | `publisheraddressid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/publisheraddresses?$select=name&$top=10
GET /api/data/v9.2/publisheraddresses(<guid>)
POST /api/data/v9.2/publisheraddresses
PATCH /api/data/v9.2/publisheraddresses(<guid>)
DELETE /api/data/v9.2/publisheraddresses(<guid>)
```

## Attributes

Writable: **29** · Read-only: **7**

### Writable

`AddressNumber`, `AddressTypeCode`, `City`, `Country`, `County`, `Fax`, `FreightTermsCode`, `ImportSequenceNumber`, `Latitude`, `Line1`, `Line2`, `Line3`, `Longitude`, `Name`, `ParentId`, `ParentIdTypeCode`, `PostalCode`, `PostOfficeBox`, `PrimaryContactName`, `PublisherAddressId`, `ShippingMethodCode`, `StateOrProvince`, `Telephone1`, `Telephone2`, `Telephone3`, `TimeZoneRuleVersionNumber`, `UPSZone`, `UTCConversionTimeZoneCode`, `UTCOffset`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_publisheraddressbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_publisheraddressbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_publisheraddressbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_publisheraddressbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `Publisher_PublisherAddress` | [publisher](publisher.md) | `parentid` | `parentid` |



## Source

Generated from [publisheraddress.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/publisheraddress.md) on 2026-05-06.