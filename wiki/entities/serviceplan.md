---
logical: "serviceplan"
display: "Service Plan"
entitySetName: "serviceplans"
primaryId: "serviceplanid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Service Plan

Service Plan

## Identity

| Property | Value |
| --- | --- |
| Logical name | `serviceplan` |
| Display name | Service Plan |
| Display (plural) | ServicePlans |
| Schema name | `ServicePlan` |
| Entity set (Web API) | `serviceplans` |
| Primary id attribute | `serviceplanid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/serviceplans?$select=name&$top=10
GET /api/data/v9.2/serviceplans(<guid>)
POST /api/data/v9.2/serviceplans
PATCH /api/data/v9.2/serviceplans(<guid>)
DELETE /api/data/v9.2/serviceplans(<guid>)
```

## Attributes

Writable: **10** · Read-only: **13**

### Writable

`AccessMode`, `DisplayName`, `ImportSequenceNumber`, `IsCustomizable`, `MoreInfoUrl`, `Name`, `OverriddenCreatedOn`, `ServicePlanId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_serviceplan_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_serviceplan_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_serviceplan_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_serviceplan_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceplan_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceplan_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceplan_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `serviceplan_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `serviceplan_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceplan_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `serviceplan_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `serviceplan_serviceplanmapping` | _n/a_ | `serviceplan` | _n/a_ |
| `serviceplan_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceplan_appmodule` | [serviceplanid](serviceplanid.md) | _n/a_ | _n/a_ |
| `serviceplan_customcontrol` | [serviceplanid](serviceplanid.md) | _n/a_ | _n/a_ |

## Source

Generated from [serviceplan.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/serviceplan.md) on 2026-05-06.