---
logical: "msdyn_dataanalyticsreport_copilot"
display: "Copilot Analytics"
entitySetName: "msdyn_dataanalyticsreport_copilots"
primaryId: "msdyn_dataanalyticsreport_copilotid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Copilot Analytics

Case, Conversation, Email Copilot interaction analytics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsreport_copilot` |
| Display name | Copilot Analytics |
| Display (plural) | Copilot Analytics |
| Schema name | `msdyn_dataanalyticsreport_copilot` |
| Entity set (Web API) | `msdyn_dataanalyticsreport_copilots` |
| Primary id attribute | `msdyn_dataanalyticsreport_copilotid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsreport_copilots?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsreport_copilots(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsreport_copilots
PATCH /api/data/v9.2/msdyn_dataanalyticsreport_copilots(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsreport_copilots(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_dataanalyticsreport_copilotId`, `msdyn_dataanalyticsreportId`, `msdyn_datainsightsandanalyticsfeatureId`, `msdyn_displayorder`, `msdyn_IsVisible`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataanalyticsreport_copilot_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsreport_copilot_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsreport_copilot_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsreport_copilot_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dasfeature_copilot_datainsightsandanalyticsfeatureId` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureId` |
| `organization_msdyn_dataanalyticsreport_copilot` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsreport_copilot_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_copilot_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_copilot_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_copilot_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataanalyticsreport_copilot_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsreport_copilot_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataanalyticsreport_copilot.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dataanalyticsreport_copilot.md) on 2026-05-06.