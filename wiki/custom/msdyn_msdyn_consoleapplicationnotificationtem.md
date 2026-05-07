---
logical: "msdyn_msdyn_consoleapplicationnotificationtem"
display: "msdyn_msdyn_consoleapplicationnotificationtem"
entitySetName: "msdyn_msdyn_consoleapplicationnotificationtemset"
primaryId: "msdyn_msdyn_consoleapplicationnotificationtemid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_consoleapplicationnotificationtem

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_consoleapplicationnotificationtem` |
| Display name | msdyn_msdyn_consoleapplicationnotificationtem |
| Schema name | `msdyn_msdyn_consoleapplicationnotificationtem` |
| Entity set (Web API) | `msdyn_msdyn_consoleapplicationnotificationtemset` |
| Primary id attribute | `msdyn_msdyn_consoleapplicationnotificationtemid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtemset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtemset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtemset
PATCH /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtemset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtemset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_consoleapplicationnotificationfieldid`, `msdyn_consoleapplicationnotificationtemplateid`, `msdyn_msdyn_consoleapplicationnotificationtemid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationnotificationtempl` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationnotificationtempl` |

## Source

Generated from [msdyn_msdyn_consoleapplicationnotificationtem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_consoleapplicationnotificationtem')) on 2026-05-07.