---
logical: "uomschedule"
display: "Unit Group"
entitySetName: "uomschedules"
primaryId: "uomscheduleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["gruppo unita misura"]
synonyms_en: ["unit group", "uom schedule"]
---

# Unit Group

Grouping of units.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `uomschedule` |
| Display name | Unit Group |
| Display (plural) | Unit Groups |
| Schema name | `UoMSchedule` |
| Entity set (Web API) | `uomschedules` |
| Primary id attribute | `uomscheduleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/uomschedules?$select=name&$top=10
GET /api/data/v9.2/uomschedules(<guid>)
POST /api/data/v9.2/uomschedules
PATCH /api/data/v9.2/uomschedules(<guid>)
DELETE /api/data/v9.2/uomschedules(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`BaseUoMName`, `Description`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `UoMScheduleId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_uomschedule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_uomschedule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_uomschedulebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_uomschedulebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_uof_schedules` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `contract_detail_unit_of_measure_schedule` | _n/a_ | `uomscheduleid` | _n/a_ |
| `unit_of_measure_schedule_conversions` | _n/a_ | `uomscheduleid` | _n/a_ |
| `unit_of_measure_schedule_product_price_level` | _n/a_ | `uomscheduleid` | _n/a_ |
| `unit_of_measurement_schedule_products` | _n/a_ | `defaultuomscheduleid` | _n/a_ |
| `UoMSchedule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `UoMSchedule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `uomschedule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `uomschedule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `UoMSchedule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [uomschedule.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/uomschedule.md) on 2026-05-06.