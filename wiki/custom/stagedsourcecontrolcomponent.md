---
logical: "stagedsourcecontrolcomponent"
display: "Componente controllo del codice sorgente per fasi"
entitySetName: "stagedsourcecontrolcomponents"
primaryId: "stagedsourcecontrolcomponentid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Componente controllo del codice sorgente per fasi

Archivia i componenti del controllo del codice sorgente da elaborare

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedsourcecontrolcomponent` |
| Display name | Componente controllo del codice sorgente per fasi |
| Display (plural) | Componenti controllo del codice sorgente per fasi |
| Schema name | `StagedSourceControlComponent` |
| Entity set (Web API) | `stagedsourcecontrolcomponents` |
| Primary id attribute | `stagedsourcecontrolcomponentid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/stagedsourcecontrolcomponents?$select=name&$top=10
GET /api/data/v9.2/stagedsourcecontrolcomponents(<guid>)
POST /api/data/v9.2/stagedsourcecontrolcomponents
PATCH /api/data/v9.2/stagedsourcecontrolcomponents(<guid>)
DELETE /api/data/v9.2/stagedsourcecontrolcomponents(<guid>)
```

## Attributes

Writable: **9** · Read-only: **7**

### Writable

`componentid`, `componentoperationtype`, `componenttype`, `importsequencenumber`, `name`, `overriddencreatedon`, `partitionid`, `stagedsourcecontrolcomponentid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedsourcecontrolcomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedsourcecontrolcomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedsourcecontrolcomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedsourcecontrolcomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [stagedsourcecontrolcomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='stagedsourcecontrolcomponent')) on 2026-05-07.