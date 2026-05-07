---
logical: "picklistmapping"
display: "List Value Mapping"
entitySetName: "picklistmappings"
primaryId: "picklistmappingid"
tableType: "Standard"
ownership: "None"
---

# List Value Mapping

In a data map, maps list values from the source file to Microsoft Dynamics 365.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `picklistmapping` |
| Display name | List Value Mapping |
| Display (plural) | List Value Mappings |
| Schema name | `PickListMapping` |
| Entity set (Web API) | `picklistmappings` |
| Primary id attribute | `picklistmappingid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/picklistmappings?$select=&$top=10
GET /api/data/v9.2/picklistmappings(<guid>)
POST /api/data/v9.2/picklistmappings
PATCH /api/data/v9.2/picklistmappings(<guid>)
DELETE /api/data/v9.2/picklistmappings(<guid>)
```

## Attributes

Writable: **7** · Read-only: **13**

### Writable

`ColumnMappingId`, `IntroducedVersion`, `PickListMappingId`, `ProcessCode`, `SourceValue`, `StatusCode`, `TargetValue`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `PickListMappingIdUnique`, `SolutionId`, `StateCode`, `SupportingSolutionId`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_picklistmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_picklistmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_picklistmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_picklistmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `PickListMapping_ColumnMapping` | [columnmapping](columnmapping.md) | `columnmappingid` | `columnmappingid` |



## Source

Generated from [picklistmapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/picklistmapping.md) on 2026-05-06.