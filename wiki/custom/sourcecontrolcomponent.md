---
logical: "sourcecontrolcomponent"
display: "Componente controllo del codice sorgente"
entitySetName: "sourcecontrolcomponents"
primaryId: "sourcecontrolcomponentid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Componente controllo del codice sorgente

Archivia i componenti del controllo del codice sorgente associati all'organizzazione o alla soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sourcecontrolcomponent` |
| Display name | Componente controllo del codice sorgente |
| Display (plural) | Componenti controllo del codice sorgente |
| Schema name | `SourceControlComponent` |
| Entity set (Web API) | `sourcecontrolcomponents` |
| Primary id attribute | `sourcecontrolcomponentid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sourcecontrolcomponents?$select=name&$top=10
GET /api/data/v9.2/sourcecontrolcomponents(<guid>)
POST /api/data/v9.2/sourcecontrolcomponents
PATCH /api/data/v9.2/sourcecontrolcomponents(<guid>)
DELETE /api/data/v9.2/sourcecontrolcomponents(<guid>)
```

## Attributes

Writable: **16** · Read-only: **7**

### Writable

`action`, `componentdisplayname`, `componentid`, `componentpath`, `componenttype`, `componenttypename`, `importsequencenumber`, `iscommitted`, `name`, `overriddencreatedon`, `partitionid`, `solutioncomponentstate`, `sourcecontrolcomponentid`, `sourcecontrolcomponentpayloadid`, `ttlinseconds`, `useraction`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sourcecontrolcomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sourcecontrolcomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sourcecontrolcomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sourcecontrolcomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `sourcecontrolcomponentpayload_sourcecontrolcomponent` | [sourcecontrolcomponentpayload](sourcecontrolcomponentpayload.md) | `sourcecontrolcomponentpayloadid` | `sourcecontrolcomponentpayloadid` |



## Source

Generated from [sourcecontrolcomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sourcecontrolcomponent')) on 2026-05-07.