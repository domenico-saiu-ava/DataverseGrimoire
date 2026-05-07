---
logical: "sourcecontrolcomponentpayload"
display: "Payload componente di controllo del codice sorgente"
entitySetName: "sourcecontrolcomponentpayloads"
primaryId: "sourcecontrolcomponentpayloadid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Payload componente di controllo del codice sorgente

Archivia i payload del componente del controllo del codice sorgente associati ai componenti.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sourcecontrolcomponentpayload` |
| Display name | Payload componente di controllo del codice sorgente |
| Display (plural) | Payload componente di controllo del codice sorgente |
| Schema name | `SourceControlComponentPayload` |
| Entity set (Web API) | `sourcecontrolcomponentpayloads` |
| Primary id attribute | `sourcecontrolcomponentpayloadid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sourcecontrolcomponentpayloads?$select=name&$top=10
GET /api/data/v9.2/sourcecontrolcomponentpayloads(<guid>)
POST /api/data/v9.2/sourcecontrolcomponentpayloads
PATCH /api/data/v9.2/sourcecontrolcomponentpayloads(<guid>)
DELETE /api/data/v9.2/sourcecontrolcomponentpayloads(<guid>)
```

## Attributes

Writable: **11** · Read-only: **9**

### Writable

`componentid`, `envhashid`, `githashid`, `importsequencenumber`, `lastsynchashid`, `name`, `overriddencreatedon`, `partitionid`, `referringsolutions`, `sourcecontrolcomponentpayloadid`, `ttlinseconds`

### Read-only

`componentpayload`, `componentpayloadingit`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sourcecontrolcomponentpayload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sourcecontrolcomponentpayload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sourcecontrolcomponentpayload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sourcecontrolcomponentpayload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `ElasticFileAttachment_SourceControlComponentPayload_ComponentPayload` | [elasticfileattachment](elasticfileattachment.md) | `componentpayload` | `componentpayload` |
| `ElasticFileAttachment_SourceControlComponentPayload_ComponentPayloadInGit` | [elasticfileattachment](elasticfileattachment.md) | `componentpayloadingit` | `componentpayloadingit` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sourcecontrolcomponentpayload_ElasticFileAttachments` | [sourcecontrolcomponentpayload](sourcecontrolcomponentpayload.md) | `objectid` | `objectid_sourcecontrolcomponentpayload` |
| `sourcecontrolcomponentpayload_sourcecontrolcomponent` | [sourcecontrolcomponentpayload](sourcecontrolcomponentpayload.md) | `sourcecontrolcomponentpayloadid` | `sourcecontrolcomponentpayloadid` |


## Source

Generated from [sourcecontrolcomponentpayload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sourcecontrolcomponentpayload')) on 2026-05-07.