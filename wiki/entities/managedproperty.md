---
logical: "managedproperty"
display: "Managed Property"
entitySetName: "managedproperties"
primaryId: "managedpropertyid"
primaryName: "logicalname"
tableType: "Standard"
ownership: "None"
---

# Managed Property

## Identity

| Property | Value |
| --- | --- |
| Logical name | `managedproperty` |
| Display name | Managed Property |
| Display (plural) | Managed Properties |
| Schema name | `ManagedProperty` |
| Entity set (Web API) | `managedproperties` |
| Primary id attribute | `managedpropertyid` |
| Primary name attribute | `logicalname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/managedproperties?$select=logicalname&$top=10
GET /api/data/v9.2/managedproperties(<guid>)
POST /api/data/v9.2/managedproperties
PATCH /api/data/v9.2/managedproperties(<guid>)
DELETE /api/data/v9.2/managedproperties(<guid>)
```

## Attributes

Writable: **5** · Read-only: **3**

### Writable

`EnablesAttributeName`, `EnablesEntityName`, `LogicalName`, `ManagedPropertyId`, `ManagedPropertyRowId`

### Read-only

`ComponentState`, `OverwriteTime`, `SolutionId`

## Relationships




## Source

Generated from [managedproperty.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/managedproperty.md) on 2026-05-06.