---
logical: "publisher"
display: "Publisher"
entitySetName: "publishers"
primaryId: "publisherid"
primaryName: "friendlyname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Publisher

A publisher of a CRM solution.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `publisher` |
| Display name | Publisher |
| Display (plural) | Publishers |
| Schema name | `Publisher` |
| Entity set (Web API) | `publishers` |
| Primary id attribute | `publisherid` |
| Primary name attribute | `friendlyname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/publishers?$select=friendlyname&$top=10
GET /api/data/v9.2/publishers(<guid>)
POST /api/data/v9.2/publishers
PATCH /api/data/v9.2/publishers(<guid>)
DELETE /api/data/v9.2/publishers(<guid>)
```

## Attributes

Writable: **51** · Read-only: **14**

### Writable

`Address1_AddressId`, `Address1_AddressTypeCode`, `Address1_City`, `Address1_Country`, `Address1_County`, `Address1_Fax`, `Address1_Latitude`, `Address1_Line1`, `Address1_Line2`, `Address1_Line3`, `Address1_Longitude`, `Address1_Name`, `Address1_PostalCode`, `Address1_PostOfficeBox`, `Address1_ShippingMethodCode`, `Address1_StateOrProvince`, `Address1_Telephone1`, `Address1_Telephone2`, `Address1_Telephone3`, `Address1_UPSZone`, `Address1_UTCOffset`, `Address2_AddressId`, `Address2_AddressTypeCode`, `Address2_City`, `Address2_Country`, `Address2_County`, `Address2_Fax`, `Address2_Latitude`, `Address2_Line1`, `Address2_Line2`, `Address2_Line3`, `Address2_Longitude`, `Address2_Name`, `Address2_PostalCode`, `Address2_PostOfficeBox`, `Address2_ShippingMethodCode`, `Address2_StateOrProvince`, `Address2_Telephone1`, `Address2_Telephone2`, `Address2_Telephone3`, `Address2_UPSZone`, `Address2_UTCOffset`, `CustomizationOptionValuePrefix`, `CustomizationPrefix`, `Description`, `EMailAddress`, `EntityImage`, `FriendlyName`, `PublisherId`, `SupportingWebsiteUrl`, `UniqueName`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `IsReadonly`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `PinpointPublisherDefaultLocale`, `PinpointPublisherId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_publisher_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_publisher_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_publisherbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_publisherbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_publisher` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `publisher_appmodule` | _n/a_ | `publisherid` | _n/a_ |
| `Publisher_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Publisher_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Publisher_PublisherAddress` | _n/a_ | `parentid` | _n/a_ |
| `publisher_solution` | _n/a_ | `publisherid` | _n/a_ |
| `Publisher_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [publisher.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/publisher.md) on 2026-05-06.