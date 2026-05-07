---
logical: "componentchangesetpayload"
display: "Payload insieme di modifiche componente"
entitySetName: "componentchangesetpayloads"
primaryId: "componentchangesetpayloadid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Payload insieme di modifiche componente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `componentchangesetpayload` |
| Display name | Payload insieme di modifiche componente |
| Display (plural) | Payload insieme di modifiche componente |
| Schema name | `componentchangesetpayload` |
| Entity set (Web API) | `componentchangesetpayloads` |
| Primary id attribute | `componentchangesetpayloadid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/componentchangesetpayloads?$select=name&$top=10
GET /api/data/v9.2/componentchangesetpayloads(<guid>)
POST /api/data/v9.2/componentchangesetpayloads
PATCH /api/data/v9.2/componentchangesetpayloads(<guid>)
DELETE /api/data/v9.2/componentchangesetpayloads(<guid>)
```

## Attributes

Writable: **6** · Read-only: **8**

### Writable

`componentchangesetpayloadid`, `importsequencenumber`, `name`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `payload`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_componentchangesetpayload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_componentchangesetpayload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_componentchangesetpayload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_componentchangesetpayload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `ElasticFileAttachment_componentchangesetpayload_payload` | [elasticfileattachment](elasticfileattachment.md) | `payload` | `payload` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `componentchangesetpayload_ElasticFileAttachments` | [componentchangesetpayload](componentchangesetpayload.md) | `objectid` | `objectid` |
| `componentchangesetpayload_componentchangesetversion_payload` | [componentchangesetpayload](componentchangesetpayload.md) | `payload` | `payload` |


## Source

Generated from [componentchangesetpayload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='componentchangesetpayload')) on 2026-05-07.