---
logical: "competitoraddress"
display: "Competitor Address"
entitySetName: "competitoraddresses"
primaryId: "competitoraddressid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Competitor Address

Additional addresses for a competitor. The first two addresses are stored in the competitor object.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `competitoraddress` |
| Display name | Competitor Address |
| Display (plural) | Competitor Addresses |
| Schema name | `CompetitorAddress` |
| Entity set (Web API) | `competitoraddresses` |
| Primary id attribute | `competitoraddressid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/competitoraddresses?$select=name&$top=10
GET /api/data/v9.2/competitoraddresses(<guid>)
POST /api/data/v9.2/competitoraddresses
PATCH /api/data/v9.2/competitoraddresses(<guid>)
DELETE /api/data/v9.2/competitoraddresses(<guid>)
```

## Attributes

Writable: **27** · Read-only: **8**

### Writable

`AddressNumber`, `AddressTypeCode`, `City`, `CompetitorAddressId`, `Country`, `County`, `Fax`, `ImportSequenceNumber`, `Latitude`, `Line1`, `Line2`, `Line3`, `Longitude`, `Name`, `OverriddenCreatedOn`, `ParentId`, `PostalCode`, `PostOfficeBox`, `ShippingMethodCode`, `StateOrProvince`, `Telephone1`, `Telephone2`, `Telephone3`, `TimeZoneRuleVersionNumber`, `UPSZone`, `UTCConversionTimeZoneCode`, `UTCOffset`

### Read-only

`Composite`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `competitor_addresses` | [competitor](competitor.md) | `parentid` | `parentid` |
| `lk_competitoraddress_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_competitoraddress_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_competitoraddressbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_competitoraddressbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `competitoraddress_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitoraddress_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitoraddress_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `competitoraddress_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `CompetitorAddress_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [competitoraddress.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/competitoraddress.md) on 2026-05-06.