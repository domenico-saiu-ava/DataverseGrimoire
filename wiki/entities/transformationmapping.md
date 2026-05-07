---
logical: "transformationmapping"
display: "Transformation Mapping"
entitySetName: "transformationmappings"
primaryId: "transformationmappingid"
tableType: "Standard"
ownership: "None"
---

# Transformation Mapping

In a data map, maps the transformation of source attributes to Microsoft Dynamics 365 attributes.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `transformationmapping` |
| Display name | Transformation Mapping |
| Display (plural) | Transformation Mappings |
| Schema name | `TransformationMapping` |
| Entity set (Web API) | `transformationmappings` |
| Primary id attribute | `transformationmappingid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/transformationmappings?$select=&$top=10
GET /api/data/v9.2/transformationmappings(<guid>)
POST /api/data/v9.2/transformationmappings
PATCH /api/data/v9.2/transformationmappings(<guid>)
DELETE /api/data/v9.2/transformationmappings(<guid>)
```

## Attributes

Writable: **8** · Read-only: **13**

### Writable

`ImportMapId`, `IntroducedVersion`, `ProcessCode`, `SourceEntityName`, `StatusCode`, `TargetEntityName`, `TransformationMappingId`, `TransformationTypeName`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `SolutionId`, `StateCode`, `SupportingSolutionId`, `TransformationMappingIdUnique`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_transformationmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_transformationmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_transformationmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_transformationmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `TransformationMapping_ImportMap` | [importmap](importmap.md) | `importmapid` | `importmapid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `TransformationParameterMapping_TransformationMapping` | _n/a_ | `transformationmappingid` | _n/a_ |


## Source

Generated from [transformationmapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/transformationmapping.md) on 2026-05-06.