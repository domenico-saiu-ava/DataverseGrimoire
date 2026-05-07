---
logical: "catalog"
display: "Catalogo"
entitySetName: "catalogs"
primaryId: "catalogid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Catalogo

Entità per la catalogazione dei record per consentire ai clienti di trovarli facilmente su portali e tramite una ricerca.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `catalog` |
| Display name | Catalogo |
| Display (plural) | Cataloghi |
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

`catalogid`, `description`, `displayname`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `parentcatalogid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

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

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `catalog_SyncErrors` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalog_AsyncOperations` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalog_MailboxTrackingFolders` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalog_UserEntityInstanceDatas` | [catalog](catalog.md) | `objectid` | `objectid_catalog` |
| `catalog_ProcessSession` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalog_BulkDeleteFailures` | [catalog](catalog.md) | `regardingobjectid` | `regardingobjectid_catalog` |
| `catalog_PrincipalObjectAttributeAccesses` | [catalog](catalog.md) | `objectid` | `objectid_catalog` |
| `catalog_catalogassignment` | [catalog](catalog.md) | `catalogid` | `CatalogId` |
| `parentcatalog_catalog` | [catalog](catalog.md) | `parentcatalogid` | `ParentCatalogId` |
| `catalog_internalcatalogassignment` | [catalog](catalog.md) | `catalogid` | `CatalogId` |
| `msdynmkt_catalog_catalogeventstatusconfiguration` | [catalog](catalog.md) | `msdynmkt_catalogid` | `msdynmkt_catalogid` |


## Source

Generated from [catalog (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='catalog')) on 2026-05-07.