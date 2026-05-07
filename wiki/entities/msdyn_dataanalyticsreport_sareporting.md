---
logical: "msdyn_dataanalyticsreport_sareporting"
display: "Sales acceleration reports"
entitySetName: "msdyn_dataanalyticsreports_sareporting"
primaryId: "msdyn_dataanalyticsreport_sareportingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sales acceleration reports

Sales acceleration reports

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_sareporting` |
| Display name | Sales acceleration reports |
| Display (plural) | Sales acceleration reports |
| Schema name | `msdyn_dataanalyticsreport_sareporting` |
| Entity set (Web API) | `msdyn_dataanalyticsreports_sareporting` |
| Primary id attribute | `msdyn_dataanalyticsreport_sareportingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreports_sareporting?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreports_sareporting(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreports_sareporting
PATCH /api/data/v9.2/msdyn_dataanalyticsreports_sareporting(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreports_sareporting(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_dataanalyticsreport_sareportingId`, `msdyn_dataanalyticsreportId`, `msdyn_datainsightsandanalyticsfeatureId`, `msdyn_displayorder`, `msdyn_IsVisible`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_sareporting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_sareporting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_sareporting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_sareporting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dasfeature_dassareporting_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `organization_msdyn_dataanalyticsreport_sareporting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_sareporting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_sareporting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_sareporting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_sareporting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataanalyticsreport_sareporting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_sareporting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataanalyticsreport_sareporting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dataanalyticsreport_sareporting.md) on 2026-05-06.