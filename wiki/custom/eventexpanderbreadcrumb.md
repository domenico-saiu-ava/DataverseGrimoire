---
logical: "eventexpanderbreadcrumb"
display: "Percorso di navigazione espansione degli eventi"
entitySetName: "eventexpanderbreadcrumbs"
primaryId: "eventexpanderbreadcrumbid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Percorso di navigazione espansione degli eventi

Tabella in cui archiviare i record del percorso di navigazione della pipeline di espansione degli eventi.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `eventexpanderbreadcrumb` |
| Display name | Percorso di navigazione espansione degli eventi |
| Display (plural) | Percorsi di navigazione espansione degli eventi |
| Schema name | `EventExpanderBreadcrumb` |
| Entity set (Web API) | `eventexpanderbreadcrumbs` |
| Primary id attribute | `eventexpanderbreadcrumbid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/eventexpanderbreadcrumbs?$select=name&$top=10
GET /api/data/v9.2/eventexpanderbreadcrumbs(<guid>)
POST /api/data/v9.2/eventexpanderbreadcrumbs
PATCH /api/data/v9.2/eventexpanderbreadcrumbs(<guid>)
DELETE /api/data/v9.2/eventexpanderbreadcrumbs(<guid>)
```

## Attributes

Writable: **24** · Read-only: **3**

### Writable

`breadcrumbstatecode`, `breadcrumbstatuscode`, `completedon`, `correlationid`, `createdby`, `createdon`, `data`, `datablobid`, `errorcode`, `eventexpanderbreadcrumbid`, `expanderstarttime`, `friendlymessage`, `importsequencenumber`, `modifiedby`, `modifiedon`, `name`, `operationtype`, `overriddencreatedon`, `partitionid`, `postponeuntil`, `retrycount`, `startedon`, `ttlinseconds`, `workload`

### Read-only

`createdonbehalfby`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_eventexpanderbreadcrumb_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_eventexpanderbreadcrumb_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_eventexpanderbreadcrumb_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_eventexpanderbreadcrumb_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [eventexpanderbreadcrumb (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='eventexpanderbreadcrumb')) on 2026-05-07.