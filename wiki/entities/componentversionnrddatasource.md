---
logical: "componentversionnrddatasource"
display: "Component Version (Internal)"
entitySetName: "componentversionnrddatasourceset"
primaryId: "componentversionnrddatasourceid"
primaryName: "componentversionname"
tableType: "Elastic"
ownership: "None"
---

# Component Version (Internal)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `componentversionnrddatasource` |
| Display name | Component Version (Internal) |
| Display (plural) | Component Versions (Internal) |
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

Writable: **13** · Read-only: **14**

### Writable

`ChangeSummary`, `Component`, `ComponentIdType`, `componentversionname`, `componentversionnrddatasourceId`, `ImportSequenceNumber`, `Operation`, `OverriddenCreatedOn`, `PartitionId`, `RestoredFromVersion`, `restoredfromversionPId`, `SystemChangeSummary`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Payload`, `Payload_Name`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `desktopflowbinary_componentversionnrddatasourceset` | [desktopflowbinary](desktopflowbinary.md) | `component` | `component_desktopflowbinary` |
| `ElasticFileAttachment_componentversionnrddatasource_Payload` | [elasticfileattachment](elasticfileattachment.md) | `payload` | `payload` |
| `lk_componentversionnrddatasource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_componentversionnrddatasource_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_componentversionnrddatasource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_componentversionnrddatasource_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `nrd_restoreversions` | [componentversionnrddatasource](componentversionnrddatasource.md) | `restoredfromversion` | `restoredfromversion` |
| `workflow_componentversionnrddatasourceset` | [workflow](workflow.md) | `component` | `component_workflow` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `componentversionnrddatasource_ElasticFileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `nrd_restoreversions` | _n/a_ | `restoredfromversion` | _n/a_ |


## Source

Generated from [componentversionnrddatasource.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/componentversionnrddatasource.md) on 2026-05-06.