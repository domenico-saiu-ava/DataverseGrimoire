---
logical: "sitemap"
display: "Site Map"
entitySetName: "sitemaps"
primaryId: "sitemapid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Site Map

XML data used to control the application navigation pane.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sitemap` |
| Display name | Site Map |
| Display (plural) | Site Maps |
| Schema name | `SiteMap` |
| Entity set (Web API) | `sitemaps` |
| Primary id attribute | `sitemapid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sitemaps?$select=&$top=10
GET /api/data/v9.2/sitemaps(<guid>)
POST /api/data/v9.2/sitemaps
PATCH /api/data/v9.2/sitemaps(<guid>)
DELETE /api/data/v9.2/sitemaps(<guid>)
```

## Attributes

Writable: **8** · Read-only: **16**

### Writable

`EnableCollapsibleGroups`, `IsAppAware`, `ShowHome`, `ShowPinned`, `ShowRecents`, `SiteMapName`, `SiteMapNameUnique`, `SiteMapXml`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SiteMapId`, `SiteMapIdUnique`, `SiteMapXmlManaged`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_SiteMap_createdby` | [systemuser](systemuser.md) | `createdby` | `SiteMap_createdby` |
| `lk_SiteMap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `SiteMap_createdonbehalfby` |
| `lk_SiteMap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `SiteMap_modifiedby` |
| `lk_SiteMap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `SiteMap_modifiedonbehalfby` |
| `organization_sitemap` | [organization](organization.md) | `organizationid` | `organizationid` |



## Source

Generated from [sitemap.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sitemap.md) on 2026-05-06.