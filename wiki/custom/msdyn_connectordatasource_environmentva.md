---
logical: "msdyn_connectordatasource_environmentva"
display: "msdyn_connectordatasource_environmentva"
entitySetName: "msdyn_connectordatasource_environmentvaset"
primaryId: "msdyn_connectordatasource_environmentvaid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_connectordatasource_environmentva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_connectordatasource_environmentva` |
| Display name | msdyn_connectordatasource_environmentva |
| Schema name | `msdyn_connectordatasource_environmentva` |
| Entity set (Web API) | `msdyn_connectordatasource_environmentvaset` |
| Primary id attribute | `msdyn_connectordatasource_environmentvaid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_connectordatasource_environmentvaset?$select=&$top=10
GET /api/data/v9.2/msdyn_connectordatasource_environmentvaset(<guid>)
POST /api/data/v9.2/msdyn_connectordatasource_environmentvaset
PATCH /api/data/v9.2/msdyn_connectordatasource_environmentvaset(<guid>)
DELETE /api/data/v9.2/msdyn_connectordatasource_environmentvaset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`environmentvariabledefinitionid`, `msdyn_connectordatasource_environmentvaid`, `msdyn_connectordatasourceid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_connectordatasource_environmentvariable` | [msdyn_connectordatasource](msdyn_connectordatasource.md) | _n/a_ | `msdyn_connectordatasource_environmentvari` |

## Source

Generated from [msdyn_connectordatasource_environmentva (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_connectordatasource_environmentva')) on 2026-05-07.