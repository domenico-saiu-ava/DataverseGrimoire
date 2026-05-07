---
logical: "componentversionnrddatasource"
display: "Versione componente (interna)"
entitySetName: "componentversionnrddatasourceset"
primaryId: "componentversionnrddatasourceid"
primaryName: "componentversionname"
tableType: "Elastic"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione componente (interna)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `componentversionnrddatasource` |
| Display name | Versione componente (interna) |
| Display (plural) | Versioni componente (interne) |
| Schema name | `componentversionnrddatasource` |
| Entity set (Web API) | `componentversionnrddatasourceset` |
| Primary id attribute | `componentversionnrddatasourceid` |
| Primary name attribute | `componentversionname` |
| Table type | Elastic |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/componentversionnrddatasourceset?$select=componentversionname&$top=10
GET /api/data/v9.2/componentversionnrddatasourceset(<guid>)
POST /api/data/v9.2/componentversionnrddatasourceset
PATCH /api/data/v9.2/componentversionnrddatasourceset(<guid>)
DELETE /api/data/v9.2/componentversionnrddatasourceset(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`changesummary`, `component`, `componentversionname`, `componentversionnrddatasourceid`, `importsequencenumber`, `operation`, `overriddencreatedon`, `partitionid`, `restoredfromversion`, `systemchangesummary`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `ownerid`, `owningbusinessunit`, `owningteam`, `owninguser`, `payload`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `uxagentproject_componentversionnrddatasourceset` | [uxagentproject](uxagentproject.md) | `component` | `component_uxagentproject` |
| `desktopflowbinary_componentversionnrddatasourceset` | [desktopflowbinary](desktopflowbinary.md) | `component` | `component_desktopflowbinary` |
| `uxagentprojectfile_componentversionnrddatasourceset` | [uxagentprojectfile](uxagentprojectfile.md) | `component` | `component_uxagentprojectfile` |
| `lk_componentversionnrddatasource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_componentversionnrddatasource_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_componentversionnrddatasource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_componentversionnrddatasource_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `ElasticFileAttachment_componentversionnrddatasource_Payload` | [elasticfileattachment](elasticfileattachment.md) | `payload` | `payload` |
| `nrd_restoreversions` | [componentversionnrddatasource](componentversionnrddatasource.md) | `restoredfromversion` | `restoredfromversion` |
| `workflow_componentversionnrddatasourceset` | [workflow](workflow.md) | `component` | `component_workflow` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `componentversionnrddatasource_ElasticFileAttachments` | [componentversionnrddatasource](componentversionnrddatasource.md) | `objectid` | `objectid_componentversionnrddatasource` |
| `nrd_restoreversions` | [componentversionnrddatasource](componentversionnrddatasource.md) | `restoredfromversion` | `restoredfromversion` |


## Source

Generated from [componentversionnrddatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='componentversionnrddatasource')) on 2026-05-07.