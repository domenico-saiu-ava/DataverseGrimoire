---
logical: "powerpagecomponent_webrole_systemuser"
display: "powerpagecomponent_webrole_systemuser"
entitySetName: "powerpagecomponent_webrole_systemuserset"
primaryId: "powerpagecomponent_webrole_systemuserid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# powerpagecomponent_webrole_systemuser

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagecomponent_webrole_systemuser` |
| Display name | powerpagecomponent_webrole_systemuser |
| Schema name | `powerpagecomponent_webrole_systemuser` |
| Entity set (Web API) | `powerpagecomponent_webrole_systemuserset` |
| Primary id attribute | `powerpagecomponent_webrole_systemuserid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/powerpagecomponent_webrole_systemuserset?$select=&$top=10
GET /api/data/v9.2/powerpagecomponent_webrole_systemuserset(<guid>)
POST /api/data/v9.2/powerpagecomponent_webrole_systemuserset
PATCH /api/data/v9.2/powerpagecomponent_webrole_systemuserset(<guid>)
DELETE /api/data/v9.2/powerpagecomponent_webrole_systemuserset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`powerpagecomponent_webrole_systemuserid`, `powerpagecomponentid`, `systemuserid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagecomponent_webrole_systemuser` | [powerpagecomponent](powerpagecomponent.md) | _n/a_ | `powerpagecomponent_webrole_systemuser` |

## Source

Generated from [powerpagecomponent_webrole_systemuser (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagecomponent_webrole_systemuser')) on 2026-05-07.