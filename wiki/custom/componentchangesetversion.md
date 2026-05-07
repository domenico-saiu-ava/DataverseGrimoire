---
logical: "componentchangesetversion"
display: "Versione insieme di modifiche componente"
entitySetName: "componentchangesetversions"
primaryId: "componentchangesetversionid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione insieme di modifiche componente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `componentchangesetversion` |
| Display name | Versione insieme di modifiche componente |
| Display (plural) | Versioni insieme di modifiche componente |
| Schema name | `componentchangesetversion` |
| Entity set (Web API) | `componentchangesetversions` |
| Primary id attribute | `componentchangesetversionid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/componentchangesetversions?$select=name&$top=10
GET /api/data/v9.2/componentchangesetversions(<guid>)
POST /api/data/v9.2/componentchangesetversions
PATCH /api/data/v9.2/componentchangesetversions(<guid>)
DELETE /api/data/v9.2/componentchangesetversions(<guid>)
```

## Attributes

Writable: **10** · Read-only: **7**

### Writable

`changeset`, `component`, `componentchangesetversionid`, `importsequencenumber`, `name`, `operation`, `overriddencreatedon`, `partitionid`, `payload`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `uxagentproject_componentchangesetversions` | [uxagentproject](uxagentproject.md) | `component` | `component_uxagentproject` |
| `lk_componentchangesetversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_componentchangesetversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_componentchangesetversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_componentchangesetversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `desktopflowbinary_componentchangesetversions` | [desktopflowbinary](desktopflowbinary.md) | `component` | `component_desktopflowbinary` |
| `componentchangesetpayload_componentchangesetversion_payload` | [componentchangesetpayload](componentchangesetpayload.md) | `payload` | `payload` |
| `uxagentprojectfile_componentchangesetversions` | [uxagentprojectfile](uxagentprojectfile.md) | `component` | `component_uxagentprojectfile` |
| `workflow_componentchangesetversions` | [workflow](workflow.md) | `component` | `component_workflow` |



## Source

Generated from [componentchangesetversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='componentchangesetversion')) on 2026-05-07.