---
logical: "catalogassignment"
display: "Catalog Assignment"
entitySetName: "catalogassignments"
primaryId: "catalogassignmentid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Catalog Assignment

Entity for assigning records to a specific catalog

## Identity

| Property | Value |
| --- | --- |
| Logical name | `catalogassignment` |
| Display name | Catalog Assignment |
| Display (plural) | Catalog Assignments |
| Schema name | `CatalogAssignment` |
| Entity set (Web API) | `catalogassignments` |
| Primary id attribute | `catalogassignmentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/catalogassignments?$select=name&$top=10
GET /api/data/v9.2/catalogassignments(<guid>)
POST /api/data/v9.2/catalogassignments
PATCH /api/data/v9.2/catalogassignments(<guid>)
DELETE /api/data/v9.2/catalogassignments(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`CatalogAssignmentId`, `CatalogId`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `Object`, `ObjectIdType`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `catalog_catalogassignment` | [catalog](catalog.md) | `catalogid` | `CatalogId` |
| `catalogassignment_customapi` | [customapi](customapi.md) | `object` | `CustomAPIId` |
| `catalogassignment_entity` | [entity](entity.md) | `object` | `EntityId` |
| `catalogassignment_workflow` | [workflow](workflow.md) | `object` | `WorkflowId` |
| `lk_catalogassignment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_catalogassignment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_catalogassignment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_catalogassignment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_catalogassignment` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `catalogassignment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `catalogassignment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `catalogassignment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `catalogassignment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `catalogassignment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `catalogassignment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `catalogassignment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `catalogassignment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [catalogassignment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/catalogassignment.md) on 2026-05-06.