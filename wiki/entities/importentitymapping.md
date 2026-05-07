---
logical: "importentitymapping"
display: "Import Entity Mapping"
entitySetName: "importentitymappings"
primaryId: "importentitymappingid"
tableType: "Standard"
ownership: "None"
---

# Import Entity Mapping

Mapping for entities in a data map.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `importentitymapping` |
| Display name | Import Entity Mapping |
| Display (plural) | Import Entity Mappings |
| Schema name | `ImportEntityMapping` |
| Entity set (Web API) | `importentitymappings` |
| Primary id attribute | `importentitymappingid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/importentitymappings?$select=&$top=10
GET /api/data/v9.2/importentitymappings(<guid>)
POST /api/data/v9.2/importentitymappings
PATCH /api/data/v9.2/importentitymappings(<guid>)
DELETE /api/data/v9.2/importentitymappings(<guid>)
```

## Attributes

Writable: **8** · Read-only: **13**

### Writable

`DeDupe`, `ImportEntityMappingId`, `ImportMapId`, `IntroducedVersion`, `ProcessCode`, `SourceEntityName`, `StatusCode`, `TargetEntityName`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ImportEntityMappingIdUnique`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `SolutionId`, `StateCode`, `SupportingSolutionId`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ImportEntityMapping_ImportMap` | [importmap](importmap.md) | `importmapid` | `importmapid` |
| `lk_importentitymapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_importentitymapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_importentitymapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_importentitymapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [importentitymapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/importentitymapping.md) on 2026-05-06.