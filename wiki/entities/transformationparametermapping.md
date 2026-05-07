---
logical: "transformationparametermapping"
display: "Transformation Parameter Mapping"
entitySetName: "transformationparametermappings"
primaryId: "transformationparametermappingid"
primaryName: "data"
tableType: "Standard"
ownership: "None"
---

# Transformation Parameter Mapping

In a data map, defines parameters for a transformation.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `transformationparametermapping` |
| Display name | Transformation Parameter Mapping |
| Display (plural) | Transformation Parameter Mappings |
| Schema name | `TransformationParameterMapping` |
| Entity set (Web API) | `transformationparametermappings` |
| Primary id attribute | `transformationparametermappingid` |
| Primary name attribute | `data` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/transformationparametermappings?$select=data&$top=10
GET /api/data/v9.2/transformationparametermappings(<guid>)
POST /api/data/v9.2/transformationparametermappings
PATCH /api/data/v9.2/transformationparametermappings(<guid>)
DELETE /api/data/v9.2/transformationparametermappings(<guid>)
```

## Attributes

Writable: **8** · Read-only: **12**

### Writable

`Data`, `DataTypeCode`, `IntroducedVersion`, `ParameterArrayIndex`, `ParameterSequence`, `ParameterTypeCode`, `TransformationMappingId`, `TransformationParameterMappingId`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `TransformationParameterMappingIdUnique`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_transformationparametermapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_transformationparametermapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_transformationparametermapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_transformationparametermapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `TransformationParameterMapping_TransformationMapping` | [transformationmapping](transformationmapping.md) | `transformationmappingid` | `transformationmappingid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `LookUpMapping_TransformationParameterMapping` | _n/a_ | `transformationparametermappingid` | _n/a_ |


## Source

Generated from [transformationparametermapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/transformationparametermapping.md) on 2026-05-06.