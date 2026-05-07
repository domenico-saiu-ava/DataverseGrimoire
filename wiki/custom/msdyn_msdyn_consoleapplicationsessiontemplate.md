---
logical: "msdyn_msdyn_consoleapplicationsessiontemplate"
display: "msdyn_msdyn_consoleapplicationsessiontemplate"
entitySetName: "msdyn_msdyn_consoleapplicationsessiontemplateset"
primaryId: "msdyn_msdyn_consoleapplicationsessiontemplateid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_consoleapplicationsessiontemplate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_consoleapplicationsessiontemplate` |
| Display name | msdyn_msdyn_consoleapplicationsessiontemplate |
| Schema name | `msdyn_msdyn_consoleapplicationsessiontemplate` |
| Entity set (Web API) | `msdyn_msdyn_consoleapplicationsessiontemplateset` |
| Primary id attribute | `msdyn_msdyn_consoleapplicationsessiontemplateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemplateset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemplateset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemplateset
PATCH /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemplateset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemplateset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_consoleapplicationsessiontemplateid`, `msdyn_consoleapplicationtemplateid`, `msdyn_msdyn_consoleapplicationsessiontemplateid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationsessiontemplate_m` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationsessiontemplate_m` |

## Source

Generated from [msdyn_msdyn_consoleapplicationsessiontemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_consoleapplicationsessiontemplate')) on 2026-05-07.