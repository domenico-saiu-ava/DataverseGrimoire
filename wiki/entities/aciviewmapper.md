---
logical: "aciviewmapper"
display: "ACIViewMapper"
entitySetName: "aciviewmappers"
primaryId: "aciviewmapperid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# ACIViewMapper

Customized messages for an entity that has been renamed.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aciviewmapper` |
| Display name | ACIViewMapper |
| Display (plural) | ACIViewMappers |
| Schema name | `ACIViewMapper` |
| Entity set (Web API) | `aciviewmappers` |
| Primary id attribute | `aciviewmapperid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/aciviewmappers?$select=&$top=10
GET /api/data/v9.2/aciviewmappers(<guid>)
POST /api/data/v9.2/aciviewmappers
PATCH /api/data/v9.2/aciviewmappers(<guid>)
DELETE /api/data/v9.2/aciviewmappers(<guid>)
```

## Attributes

Writable: **5** · Read-only: **9**

### Writable

`ACIViewMapperId`, `StatusCode`, `UTCConversionTimeZoneCode`, `ViewName`, `WebApplicationEndPoint`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `statecode`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ACIViewMapper_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ACIViewMapper_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ACIViewMapper_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ACIViewMapper_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_aciviewmapper` | [organization](organization.md) | `organizationid` | `organizationid` |



## Source

Generated from [aciviewmapper.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aciviewmapper.md) on 2026-05-06.