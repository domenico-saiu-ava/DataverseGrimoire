---
logical: "stagedsourcecontrolcomponent"
display: "Staged Source Control Component"
entitySetName: "stagedsourcecontrolcomponents"
primaryId: "stagedsourcecontrolcomponentid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Staged Source Control Component

Stores the source control components that needs to be processed

## Identity

| Property | Value |
| --- | --- |
| Logical name | `stagedsourcecontrolcomponent` |
| Display name | Staged Source Control Component |
| Display (plural) | Staged Source Control Components |
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

`ComponentId`, `ComponentOperationType`, `ComponentType`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `PartitionId`, `StagedSourceControlComponentId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_stagedsourcecontrolcomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_stagedsourcecontrolcomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_stagedsourcecontrolcomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_stagedsourcecontrolcomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [stagedsourcecontrolcomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/stagedsourcecontrolcomponent.md) on 2026-05-06.