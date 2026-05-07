---
logical: "appmodulecomponentedge"
display: "Edge del nodo del componente dell'app basata su modello"
entitySetName: "appmodulecomponentedges"
primaryId: "appmodulecomponentedgeid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Edge del nodo del componente dell'app basata su modello

Contiene informazioni sull'Edge del nodo del componente dell'app basata su modello.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appmodulecomponentedge` |
| Display name | Edge del nodo del componente dell'app basata su modello |
| Display (plural) | Edge del nodo del componente dell'app basata su modello |
| Schema name | `AppModuleComponentEdge` |
| Entity set (Web API) | `appmodulecomponentedges` |
| Primary id attribute | `appmodulecomponentedgeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appmodulecomponentedges?$select=name&$top=10
GET /api/data/v9.2/appmodulecomponentedges(<guid>)
POST /api/data/v9.2/appmodulecomponentedges
PATCH /api/data/v9.2/appmodulecomponentedges(<guid>)
DELETE /api/data/v9.2/appmodulecomponentedges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`appmodulecomponentedgeid`, `componentnodefrom`, `componentnodeto`, `importsequencenumber`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appmodulecomponentedge_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appmodulecomponentedge_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appmodulecomponentedge_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appmodulecomponentedge_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appmodulecomponentedge` | [organization](organization.md) | `organizationid` | `organizationid` |
| `appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom` | [appmodulecomponentnode](appmodulecomponentnode.md) | `componentnodefrom` | `ComponentNodeFrom` |
| `appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo` | [appmodulecomponentnode](appmodulecomponentnode.md) | `componentnodeto` | `ComponentNodeTo` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appmodulecomponentedge_SyncErrors` | [appmodulecomponentedge](appmodulecomponentedge.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentedge` |
| `appmodulecomponentedge_AsyncOperations` | [appmodulecomponentedge](appmodulecomponentedge.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentedge` |
| `appmodulecomponentedge_MailboxTrackingFolders` | [appmodulecomponentedge](appmodulecomponentedge.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentedge` |
| `appmodulecomponentedge_UserEntityInstanceDatas` | [appmodulecomponentedge](appmodulecomponentedge.md) | `objectid` | `objectid_appmodulecomponentedge` |
| `appmodulecomponentedge_ProcessSession` | [appmodulecomponentedge](appmodulecomponentedge.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentedge` |
| `appmodulecomponentedge_BulkDeleteFailures` | [appmodulecomponentedge](appmodulecomponentedge.md) | `regardingobjectid` | `regardingobjectid_appmodulecomponentedge` |
| `appmodulecomponentedge_PrincipalObjectAttributeAccesses` | [appmodulecomponentedge](appmodulecomponentedge.md) | `objectid` | `objectid_appmodulecomponentedge` |


## Source

Generated from [appmodulecomponentedge (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appmodulecomponentedge')) on 2026-05-07.