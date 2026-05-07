---
logical: "sourcecontrolbranchconfiguration"
display: "Configurazione ramo del controllo del codice sorgente"
entitySetName: "sourcecontrolbranchconfigurations"
primaryId: "sourcecontrolbranchconfigurationid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione ramo del controllo del codice sorgente

Archivia la configurazione del ramo del controllo del codice sorgente associata all'organizzazione o alla soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sourcecontrolbranchconfiguration` |
| Display name | Configurazione ramo del controllo del codice sorgente |
| Display (plural) | Configurazioni ramo del controllo del codice sorgente |
| Schema name | `SourceControlBranchConfiguration` |
| Entity set (Web API) | `sourcecontrolbranchconfigurations` |
| Primary id attribute | `sourcecontrolbranchconfigurationid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sourcecontrolbranchconfigurations?$select=name&$top=10
GET /api/data/v9.2/sourcecontrolbranchconfigurations(<guid>)
POST /api/data/v9.2/sourcecontrolbranchconfigurations
PATCH /api/data/v9.2/sourcecontrolbranchconfigurations(<guid>)
DELETE /api/data/v9.2/sourcecontrolbranchconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **7**

### Writable

`branchname`, `branchsyncedcommitid`, `branchsyncedtime`, `importsequencenumber`, `name`, `overriddencreatedon`, `partitionid`, `rootfolderpath`, `sourcecontrolbranchconfigurationid`, `sourcecontrolconfigurationid`, `statuscode`, `ttlinseconds`, `upstreambranchname`, `upstreambranchsyncedcommitid`, `upstreambranchsyncedtime`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sourcecontrolbranchconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sourcecontrolbranchconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sourcecontrolbranchconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sourcecontrolbranchconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `sourcecontrolconfiguration_sourcecontrolbranchconfiguration` | [sourcecontrolconfiguration](sourcecontrolconfiguration.md) | `sourcecontrolconfigurationid` | `sourcecontrolconfigurationid` |



## Source

Generated from [sourcecontrolbranchconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sourcecontrolbranchconfiguration')) on 2026-05-07.