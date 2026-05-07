---
logical: "lookupmapping"
display: "Lookup Mapping"
entitySetName: "lookupmappings"
primaryId: "lookupmappingid"
tableType: "Standard"
ownership: "None"
---

# Lookup Mapping

In a data map, maps a lookup attribute in a source file to Microsoft Dynamics 365.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `lookupmapping` |
| Display name | Lookup Mapping |
| Display (plural) | Lookup Mappings |
| Schema name | `LookUpMapping` |
| Entity set (Web API) | `lookupmappings` |
| Primary id attribute | `lookupmappingid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/lookupmappings?$select=&$top=10
GET /api/data/v9.2/lookupmappings(<guid>)
POST /api/data/v9.2/lookupmappings
PATCH /api/data/v9.2/lookupmappings(<guid>)
DELETE /api/data/v9.2/lookupmappings(<guid>)
```

## Attributes

Writable: **9** · Read-only: **13**

### Writable

`ColumnMappingId`, `IntroducedVersion`, `LookUpAttributeName`, `LookUpEntityName`, `LookUpMappingId`, `LookUpSourceCode`, `ProcessCode`, `StatusCode`, `TransformationParameterMappingId`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `LookUpMappingIdUnique`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `SolutionId`, `StateCode`, `SupportingSolutionId`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_lookupmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_lookupmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_lookupmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_lookupmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `LookUpMapping_ColumnMapping` | [columnmapping](columnmapping.md) | `columnmappingid` | `columnmappingid` |
| `LookUpMapping_TransformationParameterMapping` | [transformationparametermapping](transformationparametermapping.md) | `transformationparametermappingid` | `transformationparametermappingid` |



## Source

Generated from [lookupmapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/lookupmapping.md) on 2026-05-06.