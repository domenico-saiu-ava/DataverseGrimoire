---
logical: "sourcecontrolconfiguration"
display: "Configurazione controllo del codice sorgente"
entitySetName: "sourcecontrolconfigurations"
primaryId: "sourcecontrolconfigurationid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione controllo del codice sorgente

Archivia la configurazione Git associata all'ambiente 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sourcecontrolconfiguration` |
| Display name | Configurazione controllo del codice sorgente |
| Display (plural) | Configurazioni controllo del codice sorgente |
| Schema name | `SourceControlConfiguration` |
| Entity set (Web API) | `sourcecontrolconfigurations` |
| Primary id attribute | `sourcecontrolconfigurationid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sourcecontrolconfigurations?$select=name&$top=10
GET /api/data/v9.2/sourcecontrolconfigurations(<guid>)
POST /api/data/v9.2/sourcecontrolconfigurations
PATCH /api/data/v9.2/sourcecontrolconfigurations(<guid>)
DELETE /api/data/v9.2/sourcecontrolconfigurations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **7**

### Writable

`githubappconfigid`, `gitprovider`, `importsequencenumber`, `name`, `organizationname`, `overriddencreatedon`, `partitionid`, `projectname`, `repositoryname`, `sourcecontrolconfigurationid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sourcecontrolconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sourcecontrolconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sourcecontrolconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sourcecontrolconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `githubappconfig_sourcecontrolconfiguration_GitHubAppConfigId` | [githubappconfig](githubappconfig.md) | `githubappconfigid` | `GitHubAppConfigId` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sourcecontrolconfiguration_sourcecontrolbranchconfiguration` | [sourcecontrolconfiguration](sourcecontrolconfiguration.md) | `sourcecontrolconfigurationid` | `sourcecontrolconfigurationid` |


## Source

Generated from [sourcecontrolconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sourcecontrolconfiguration')) on 2026-05-07.