---
logical: "msdyn_msdyn_consoleapplicationtemplate_msdyn_"
display: "msdyn_msdyn_consoleapplicationtemplate_msdyn_"
entitySetName: "msdyn_msdyn_consoleapplicationtemplate_msdyn_set"
primaryId: "msdyn_msdyn_consoleapplicationtemplate_msdyn_id"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_consoleapplicationtemplate_msdyn_

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_consoleapplicationtemplate_msdyn_` |
| Display name | msdyn_msdyn_consoleapplicationtemplate_msdyn_ |
| Schema name | `msdyn_msdyn_consoleapplicationtemplate_msdyn_` |
| Entity set (Web API) | `msdyn_msdyn_consoleapplicationtemplate_msdyn_set` |
| Primary id attribute | `msdyn_msdyn_consoleapplicationtemplate_msdyn_id` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_msdyn_set?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_msdyn_set(<guid>)
POST /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_msdyn_set
PATCH /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_msdyn_set(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_msdyn_set(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_consoleapplicationtemplateid`, `msdyn_consoleapplicationtemplateparameterid`, `msdyn_msdyn_consoleapplicationtemplate_msdyn_id`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationtemplate_msdyn_co` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationtemplate_msdyn_co` |

## Source

Generated from [msdyn_msdyn_consoleapplicationtemplate_msdyn_ (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_consoleapplicationtemplate_msdyn_')) on 2026-05-07.