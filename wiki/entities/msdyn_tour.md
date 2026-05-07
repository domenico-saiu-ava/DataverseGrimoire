---
logical: "msdyn_tour"
display: "Tour"
entitySetName: "msdyn_tours"
primaryId: "msdyn_tourid"
primaryName: "msdyn_displayname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Tour

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_tour` |
| Display name | Tour |
| Display (plural) | Tours |
| Schema name | `msdyn_tour` |
| Entity set (Web API) | `msdyn_tours` |
| Primary id attribute | `msdyn_tourid` |
| Primary name attribute | `msdyn_displayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_tours?$select=msdyn_displayname&$top=10
GET /api/data/v9.2/msdyn_tours(<guid>)
POST /api/data/v9.2/msdyn_tours
PATCH /api/data/v9.2/msdyn_tours(<guid>)
DELETE /api/data/v9.2/msdyn_tours(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_displayname`, `msdyn_labelsresource`, `msdyn_path`, `msdyn_tourdefinition`, `msdyn_tourId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_tour_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_tour_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_tour_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_tour_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_tour` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_tour_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_tour_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_tour_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_tour_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_tour_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_tour_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_tour.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_tour.md) on 2026-05-06.