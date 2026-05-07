---
logical: "msdyn_ciprovider_systemuser"
display: "msdyn_ciprovider_systemuser"
entitySetName: "msdyn_ciprovider_systemuserset"
primaryId: "msdyn_ciprovider_systemuserid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_ciprovider_systemuser

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ciprovider_systemuser` |
| Display name | msdyn_ciprovider_systemuser |
| Schema name | `msdyn_ciprovider_systemuser` |
| Entity set (Web API) | `msdyn_ciprovider_systemuserset` |
| Primary id attribute | `msdyn_ciprovider_systemuserid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ciprovider_systemuserset?$select=&$top=10
GET /api/data/v9.2/msdyn_ciprovider_systemuserset(<guid>)
POST /api/data/v9.2/msdyn_ciprovider_systemuserset
PATCH /api/data/v9.2/msdyn_ciprovider_systemuserset(<guid>)
DELETE /api/data/v9.2/msdyn_ciprovider_systemuserset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_ciprovider_systemuserid`, `msdyn_ciproviderid`, `systemuserid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ciprovider_systemuser_membership` | [msdyn_ciprovider](msdyn_ciprovider.md) | _n/a_ | `msdyn_ciprovider_systemuser_membership` |

## Source

Generated from [msdyn_ciprovider_systemuser (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ciprovider_systemuser')) on 2026-05-07.