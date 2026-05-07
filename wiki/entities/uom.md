---
logical: "uom"
display: "Unit"
entitySetName: "uoms"
primaryId: "uomid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
synonyms_it: ["unita di misura", "unita misura"]
synonyms_en: ["unit of measure", "uom", "unit"]
---

# Unit

Unit of measure.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `uom` |
| Display name | Unit |
| Display (plural) | Units |
| Schema name | `UoM` |
| Entity set (Web API) | `uoms` |
| Primary id attribute | `uomid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/uoms?$select=name&$top=10
GET /api/data/v9.2/uoms(<guid>)
POST /api/data/v9.2/uoms
PATCH /api/data/v9.2/uoms(<guid>)
DELETE /api/data/v9.2/uoms(<guid>)
```

## Attributes

Writable: **9** · Read-only: **11**

### Writable

`BaseUoM`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `Quantity`, `TimeZoneRuleVersionNumber`, `UoMId`, `UoMScheduleId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `IsScheduleBaseUoM`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_uom_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_uom_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_uombase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_uombase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `unit_of_measure_schedule_conversions` | [uomschedule](uomschedule.md) | `uomscheduleid` | `uomscheduleid` |
| `unit_of_measurement_base_unit` | [uom](uom.md) | `baseuom` | `baseuom` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `unit_of_measurement_base_unit` | _n/a_ | `baseuom` | _n/a_ |
| `unit_of_measurement_contract_line_items` | _n/a_ | `uomid` | _n/a_ |
| `unit_of_measurement_invoice_details` | _n/a_ | `uomid` | _n/a_ |
| `unit_of_measurement_opportunity_products` | _n/a_ | `uomid` | _n/a_ |
| `unit_of_measurement_order_details` | _n/a_ | `uomid` | _n/a_ |
| `unit_of_measurement_product_price_levels` | _n/a_ | `uomid` | _n/a_ |
| `unit_of_measurement_productassociation` | _n/a_ | `uomid` | _n/a_ |
| `unit_of_measurement_products` | _n/a_ | `defaultuomid` | _n/a_ |
| `unit_of_measurement_quote_details` | _n/a_ | `uomid` | _n/a_ |
| `UoM_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `UoM_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `uom_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `uom_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `UoM_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [uom.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/uom.md) on 2026-05-06.