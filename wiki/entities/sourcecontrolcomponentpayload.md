---
logical: "sourcecontrolcomponentpayload"
display: "Source Control Component Payload"
entitySetName: "sourcecontrolcomponentpayloads"
primaryId: "sourcecontrolcomponentpayloadid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Source Control Component Payload

Stores the Source Control Component Payloads associated with components.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sourcecontrolcomponentpayload` |
| Display name | Source Control Component Payload |
| Display (plural) | Source Control Component Payloads |
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

Writable: **10** · Read-only: **11**

### Writable

`ComponentId`, `GitHashId`, `ImportSequenceNumber`, `LastSyncHashId`, `Name`, `OverriddenCreatedOn`, `PartitionId`, `ReferringSolutions`, `SourceControlComponentPayloadId`, `TTLInSeconds`

### Read-only

`ComponentPayload`, `ComponentPayload_Name`, `ComponentPayloadInGit`, `ComponentPayloadInGit_Name`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ElasticFileAttachment_SourceControlComponentPayload_ComponentPayload` | [elasticfileattachment](elasticfileattachment.md) | `componentpayload` | `componentpayload` |
| `ElasticFileAttachment_SourceControlComponentPayload_ComponentPayloadInGit` | [elasticfileattachment](elasticfileattachment.md) | `componentpayloadingit` | `componentpayloadingit` |
| `lk_sourcecontrolcomponentpayload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sourcecontrolcomponentpayload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sourcecontrolcomponentpayload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sourcecontrolcomponentpayload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sourcecontrolcomponentpayload_ElasticFileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `sourcecontrolcomponentpayload_sourcecontrolcomponent` | _n/a_ | `sourcecontrolcomponentpayloadid` | _n/a_ |


## Source

Generated from [sourcecontrolcomponentpayload.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sourcecontrolcomponentpayload.md) on 2026-05-06.