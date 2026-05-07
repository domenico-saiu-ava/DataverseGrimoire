---
logical: "timestampdatemapping"
display: "Time Stamp Date Mapping"
entitySetName: "timestampdatemappings"
primaryId: "timestampdatemappingid"
tableType: "Standard"
ownership: "None"
---

# Time Stamp Date Mapping

For internal use only.`

## Identity

| Property | Value |
| --- | --- |
| Logical name | `timestampdatemapping` |
| Display name | Time Stamp Date Mapping |
| Display (plural) | Time Stamp Date Mappings |
| Schema name | `TimeStampDateMapping` |
| Entity set (Web API) | `timestampdatemappings` |
| Primary id attribute | `timestampdatemappingid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/timestampdatemappings?$select=&$top=10
GET /api/data/v9.2/timestampdatemappings(<guid>)
POST /api/data/v9.2/timestampdatemappings
PATCH /api/data/v9.2/timestampdatemappings(<guid>)
DELETE /api/data/v9.2/timestampdatemappings(<guid>)
```

## Attributes

Writable: **0** · Read-only: **2**

### Read-only

`Date`, `TimeStamp`

## Relationships




## Source

Generated from [timestampdatemapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/timestampdatemapping.md) on 2026-05-06.