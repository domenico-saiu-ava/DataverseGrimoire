---
logical: "catalog"
display: "Catalog"
entitySetName: "catalogs"
primaryId: "catalogid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Catalog

Entity for cataloging records to make it easier for your customers to find them on portals and through search.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `catalog` |
| Display name | Catalog |
| Display (plural) | Catalogs |
| Schema name | `Catalog` |
| Entity set (Web API) | `catalogs` |
| Primary id attribute | `catalogid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/catalogs?$select=name&$top=10
GET /api/data/v9.2/catalogs(<guid>)
POST /api/data/v9.2/catalogs
PATCH /api/data/v9.2/catalogs(<guid>)
DELETE /api/data/v9.2/catalogs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`CatalogId`, `Description`, `DisplayName`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `ParentCatalogId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_catalog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_catalog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_catalog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_catalog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_catalog` | [organization](organization.md) | `organizationid` | `organizationid` |
| `parentcatalog_catalog` | [catalog](catalog.md) | `parentcatalogid` | `ParentCatalogId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `catalog_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `catalog_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `catalog_catalogassignment` | _n/a_ | `catalogid` | _n/a_ |
| `catalog_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `catalog_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `catalog_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `catalog_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `parentcatalog_catalog` | _n/a_ | `parentcatalogid` | _n/a_ |


## Source

Generated from [catalog.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/catalog.md) on 2026-05-06.