---
logical: "optionset"
display: "OptionSet"
entitySetName: "optionsets"
primaryId: "optionsetid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# OptionSet

## Identity

| Property | Value |
| --- | --- |
| Logical name | `optionset` |
| Display name | OptionSet |
| Display (plural) | OptionSets |
| Schema name | `OptionSet` |
| Entity set (Web API) | `optionsets` |
| Primary id attribute | `optionsetid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/optionsets?$select=name&$top=10
GET /api/data/v9.2/optionsets(<guid>)
POST /api/data/v9.2/optionsets
PATCH /api/data/v9.2/optionsets(<guid>)
DELETE /api/data/v9.2/optionsets(<guid>)
```

## Attributes

Writable: **2** · Read-only: **3**

### Writable

`Name`, `OptionSetId`

### Read-only

`ComponentState`, `OverwriteTime`, `SolutionId`

## Relationships




## Source

Generated from [optionset.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/optionset.md) on 2026-05-06.