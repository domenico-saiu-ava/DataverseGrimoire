---
logical: "package_solution"
display: "package_solution"
entitySetName: "package_solutionset"
primaryId: "package_solutionid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# package_solution

## Identity

| Property | Value |
| --- | --- |
| Logical name | `package_solution` |
| Display name | package_solution |
| Schema name | `package_solution` |
| Entity set (Web API) | `package_solutionset` |
| Primary id attribute | `package_solutionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/package_solutionset?$select=&$top=10
GET /api/data/v9.2/package_solutionset(<guid>)
POST /api/data/v9.2/package_solutionset
PATCH /api/data/v9.2/package_solutionset(<guid>)
DELETE /api/data/v9.2/package_solutionset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`package_solutionid`, `packageid`, `solutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `package_solution` | [package](package.md) | _n/a_ | `package_solution` |

## Source

Generated from [package_solution (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='package_solution')) on 2026-05-07.