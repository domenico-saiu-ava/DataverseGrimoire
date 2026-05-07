---
logical: "msdyn_dataanalyticsreport_mc"
display: "Model Customization analytics"
entitySetName: "msdyn_dataanalyticsreport_mcs"
primaryId: "msdyn_dataanalyticsreport_mcid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Model Customization analytics

Model Customization analytics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_mc` |
| Display name | Model Customization analytics |
| Display (plural) | Model Customization analytics |
| Schema name | `msdyn_dataanalyticsreport_mc` |
| Entity set (Web API) | `msdyn_dataanalyticsreport_mcs` |
| Primary id attribute | `msdyn_dataanalyticsreport_mcid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreport_mcs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreport_mcs(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreport_mcs
PATCH /api/data/v9.2/msdyn_dataanalyticsreport_mcs(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreport_mcs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_dataanalyticsreport_mcId`, `msdyn_dataanalyticsreportId`, `msdyn_datainsightsandanalyticsfeatureId`, `msdyn_displayorder`, `msdyn_IsVisible`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_mc_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_mc_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_mc_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_mc_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dasfeature_dasmc_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `organization_msdyn_dataanalyticsreport_mc` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_mc_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_mc_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_mc_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_mc_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataanalyticsreport_mc_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_mc_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataanalyticsreport_mc.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dataanalyticsreport_mc.md) on 2026-05-06.