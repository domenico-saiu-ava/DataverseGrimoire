---
logical: "columnmapping"
display: "Column Mapping"
entitySetName: "columnmappings"
primaryId: "columnmappingid"
primaryName: "sourceattributename"
tableType: "Standard"
ownership: "None"
---

# Column Mapping

Mapping for columns in a data map.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `columnmapping` |
| Display name | Column Mapping |
| Display (plural) | Column Mappings |
| Schema name | `ColumnMapping` |
| Entity set (Web API) | `columnmappings` |
| Primary id attribute | `columnmappingid` |
| Primary name attribute | `sourceattributename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/columnmappings?$select=sourceattributename&$top=10
GET /api/data/v9.2/columnmappings(<guid>)
POST /api/data/v9.2/columnmappings
PATCH /api/data/v9.2/columnmappings(<guid>)
DELETE /api/data/v9.2/columnmappings(<guid>)
```

## Attributes

Writable: **9** · Read-only: **13**

### Writable

`ColumnMappingId`, `ImportMapId`, `IntroducedVersion`, `ProcessCode`, `SourceAttributeName`, `SourceEntityName`, `StatusCode`, `TargetAttributeName`, `TargetEntityName`

### Read-only

`ColumnMappingIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `SolutionId`, `StateCode`, `SupportingSolutionId`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ColumnMapping_ImportMap` | [importmap](importmap.md) | `importmapid` | `importmapid` |
| `lk_columnmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_columnmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_columnmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_columnmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `LookUpMapping_ColumnMapping` | _n/a_ | `columnmappingid` | _n/a_ |
| `PickListMapping_ColumnMapping` | _n/a_ | `columnmappingid` | _n/a_ |


## Source

Generated from [columnmapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/columnmapping.md) on 2026-05-06.