---
logical: "internalcatalogassignment"
display: "Assegnazione catalogo interno"
entitySetName: "internalcatalogassignments"
primaryId: "internalcatalogassignmentid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Assegnazione catalogo interno

## Identity

| Property | Value |
| --- | --- |
| Logical name | `internalcatalogassignment` |
| Display name | Assegnazione catalogo interno |
| Display (plural) | Assegnazioni catalogo interno |
| Schema name | `InternalCatalogAssignment` |
| Entity set (Web API) | `internalcatalogassignments` |
| Primary id attribute | `internalcatalogassignmentid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/internalcatalogassignments?$select=name&$top=10
GET /api/data/v9.2/internalcatalogassignments(<guid>)
POST /api/data/v9.2/internalcatalogassignments
PATCH /api/data/v9.2/internalcatalogassignments(<guid>)
DELETE /api/data/v9.2/internalcatalogassignments(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`catalogid`, `importsequencenumber`, `internalcatalogassignmentid`, `iscustomizable`, `name`, `object`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_internalcatalogassignment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_internalcatalogassignment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_internalcatalogassignment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_internalcatalogassignment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_internalcatalogassignment` | [organization](organization.md) | `organizationid` | `organizationid` |
| `sdkmessagefilter_internalcatalogassignment` | [sdkmessagefilter](sdkmessagefilter.md) | `object` | `SdkMessageFilterId` |
| `catalog_internalcatalogassignment` | [catalog](catalog.md) | `catalogid` | `CatalogId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `internalcatalogassignment_SyncErrors` | [internalcatalogassignment](internalcatalogassignment.md) | `regardingobjectid` | `regardingobjectid_internalcatalogassignment` |
| `internalcatalogassignment_AsyncOperations` | [internalcatalogassignment](internalcatalogassignment.md) | `regardingobjectid` | `regardingobjectid_internalcatalogassignment` |
| `internalcatalogassignment_MailboxTrackingFolders` | [internalcatalogassignment](internalcatalogassignment.md) | `regardingobjectid` | `regardingobjectid_internalcatalogassignment` |
| `internalcatalogassignment_UserEntityInstanceDatas` | [internalcatalogassignment](internalcatalogassignment.md) | `objectid` | `objectid_internalcatalogassignment` |
| `internalcatalogassignment_ProcessSession` | [internalcatalogassignment](internalcatalogassignment.md) | `regardingobjectid` | `regardingobjectid_internalcatalogassignment` |
| `internalcatalogassignment_BulkDeleteFailures` | [internalcatalogassignment](internalcatalogassignment.md) | `regardingobjectid` | `regardingobjectid_internalcatalogassignment` |
| `internalcatalogassignment_PrincipalObjectAttributeAccesses` | [internalcatalogassignment](internalcatalogassignment.md) | `objectid` | `objectid_internalcatalogassignment` |


## Source

Generated from [internalcatalogassignment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='internalcatalogassignment')) on 2026-05-07.