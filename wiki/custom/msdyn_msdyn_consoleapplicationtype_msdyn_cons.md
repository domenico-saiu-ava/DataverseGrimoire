---
logical: "msdyn_msdyn_consoleapplicationtype_msdyn_cons"
display: "msdyn_msdyn_consoleapplicationtype_msdyn_cons"
entitySetName: "msdyn_msdyn_consoleapplicationtype_msdyn_consset"
primaryId: "msdyn_msdyn_consoleapplicationtype_msdyn_consid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_consoleapplicationtype_msdyn_cons

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_consoleapplicationtype_msdyn_cons` |
| Display name | msdyn_msdyn_consoleapplicationtype_msdyn_cons |
| Schema name | `msdyn_msdyn_consoleapplicationtype_msdyn_cons` |
| Entity set (Web API) | `msdyn_msdyn_consoleapplicationtype_msdyn_consset` |
| Primary id attribute | `msdyn_msdyn_consoleapplicationtype_msdyn_consid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationtype_msdyn_consset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationtype_msdyn_consset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_consoleapplicationtype_msdyn_consset
PATCH /api/data/v9.2/msdyn_msdyn_consoleapplicationtype_msdyn_consset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_consoleapplicationtype_msdyn_consset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_consoleapplicationtypeid`, `msdyn_consoleappparameterdefinitionid`, `msdyn_msdyn_consoleapplicationtype_msdyn_consid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationtype_msdyn_consol` | [msdyn_consoleapplicationtype](msdyn_consoleapplicationtype.md) | _n/a_ | `msdyn_msdyn_consoleapplicationtype_msdyn_consol` |

## Source

Generated from [msdyn_msdyn_consoleapplicationtype_msdyn_cons (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_consoleapplicationtype_msdyn_cons')) on 2026-05-07.