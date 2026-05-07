---
logical: "msdyn_usagemetric"
display: "Usage Metric"
entitySetName: "msdyn_usagemetrics"
primaryId: "msdyn_usagemetricid"
primaryName: "msdyn_featurename"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Usage Metric

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_usagemetric` |
| Display name | Usage Metric |
| Display (plural) | Usage Metrics |
| Schema name | `msdyn_usagemetric` |
| Entity set (Web API) | `msdyn_usagemetrics` |
| Primary id attribute | `msdyn_usagemetricid` |
| Primary name attribute | `msdyn_featurename` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_usagemetrics?$select=msdyn_featurename&$top=10
GET /api/data/v9.2/msdyn_usagemetrics(<guid>)
POST /api/data/v9.2/msdyn_usagemetrics
PATCH /api/data/v9.2/msdyn_usagemetrics(<guid>)
DELETE /api/data/v9.2/msdyn_usagemetrics(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_date`, `msdyn_featuremetrics`, `msdyn_featurename`, `msdyn_usagemetricId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_usagemetric_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_usagemetric_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_usagemetric_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_usagemetric_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_usagemetric` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_usagemetric_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usagemetric_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usagemetric_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usagemetric_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_usagemetric_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usagemetric_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_usagemetric.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_usagemetric.md) on 2026-05-06.