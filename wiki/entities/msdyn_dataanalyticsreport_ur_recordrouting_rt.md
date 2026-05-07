---
logical: "msdyn_dataanalyticsreport_ur_recordrouting_rt"
display: "Real-time analytics for record routing"
entitySetName: "msdyn_dataanalyticsreport_ur_recordrouting_rtes"
primaryId: "msdyn_dataanalyticsreport_ur_recordrouting_rtid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Real-time analytics for record routing

Real-time analytics for record routing

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_ur_recordrouting_rt` |
| Display name | Real-time analytics for record routing |
| Display (plural) | Real-time analytics for record routing |
| Schema name | `msdyn_dataanalyticsreport_ur_recordrouting_rt` |
| Entity set (Web API) | `msdyn_dataanalyticsreport_ur_recordrouting_rtes` |
| Primary id attribute | `msdyn_dataanalyticsreport_ur_recordrouting_rtid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreport_ur_recordrouting_rtes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreport_ur_recordrouting_rtes(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreport_ur_recordrouting_rtes
PATCH /api/data/v9.2/msdyn_dataanalyticsreport_ur_recordrouting_rtes(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreport_ur_recordrouting_rtes(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_dataanalyticsreport_ur_recordrouting_rtId`, `msdyn_dataanalyticsreportId`, `msdyn_datainsightsandanalyticsfeatureId`, `msdyn_displayorder`, `msdyn_IsVisible`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_ur_recordrouting_rt_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_ur_recordrouting_rt_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_ur_recordrouting_rt_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_ur_recordrouting_rt_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dasfeature_dasurrt_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `organization_msdyn_dataanalyticsreport_ur_recordrouting_rt` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_ur_recordrouting_rt_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_ur_recordrouting_rt_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_ur_recordrouting_rt_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_ur_recordrouting_rt_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataanalyticsreport_ur_recordrouting_rt_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_ur_recordrouting_rt_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataanalyticsreport_ur_recordrouting_rt.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dataanalyticsreport_ur_recordrouting_rt.md) on 2026-05-06.