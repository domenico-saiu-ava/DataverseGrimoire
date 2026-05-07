---
logical: "appentitysearchview"
display: "AppEntitySearchView"
entitySetName: "appentitysearchviews"
primaryId: "appentitysearchviewid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AppEntitySearchView

Questa tabella contiene record di visualizzazioni ricerca entità app

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appentitysearchview` |
| Display name | AppEntitySearchView |
| Display (plural) | AppEntitySearchViews |
| Schema name | `AppEntitySearchView` |
| Entity set (Web API) | `appentitysearchviews` |
| Primary id attribute | `appentitysearchviewid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appentitysearchviews?$select=name&$top=10
GET /api/data/v9.2/appentitysearchviews(<guid>)
POST /api/data/v9.2/appentitysearchviews
PATCH /api/data/v9.2/appentitysearchviews(<guid>)
DELETE /api/data/v9.2/appentitysearchviews(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`appentitysearchviewid`, `applicationid`, `entity`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `savedqueryid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appentitysearchview_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appentitysearchview_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appentitysearchview_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appentitysearchview_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appentitysearchview` | [organization](organization.md) | `organizationid` | `organizationid` |
| `appentitysearchview_entity` | [entity](entity.md) | `entity` | `entity` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appentitysearchview_SyncErrors` | [appentitysearchview](appentitysearchview.md) | `regardingobjectid` | `regardingobjectid_appentitysearchview` |
| `appentitysearchview_AsyncOperations` | [appentitysearchview](appentitysearchview.md) | `regardingobjectid` | `regardingobjectid_appentitysearchview` |
| `appentitysearchview_MailboxTrackingFolders` | [appentitysearchview](appentitysearchview.md) | `regardingobjectid` | `regardingobjectid_appentitysearchview` |
| `appentitysearchview_UserEntityInstanceDatas` | [appentitysearchview](appentitysearchview.md) | `objectid` | `objectid_appentitysearchview` |
| `appentitysearchview_ProcessSession` | [appentitysearchview](appentitysearchview.md) | `regardingobjectid` | `regardingobjectid_appentitysearchview` |
| `appentitysearchview_BulkDeleteFailures` | [appentitysearchview](appentitysearchview.md) | `regardingobjectid` | `regardingobjectid_appentitysearchview` |
| `appentitysearchview_PrincipalObjectAttributeAccesses` | [appentitysearchview](appentitysearchview.md) | `objectid` | `objectid_appentitysearchview` |


## Source

Generated from [appentitysearchview (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appentitysearchview')) on 2026-05-07.