---
logical: "msdyn_msdyn_consoleapplicationnotificationtag"
display: "msdyn_msdyn_consoleapplicationnotificationtag"
entitySetName: "msdyn_msdyn_consoleapplicationnotificationtagset"
primaryId: "msdyn_msdyn_consoleapplicationnotificationtagid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_consoleapplicationnotificationtag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_consoleapplicationnotificationtag` |
| Display name | msdyn_msdyn_consoleapplicationnotificationtag |
| Schema name | `msdyn_msdyn_consoleapplicationnotificationtag` |
| Entity set (Web API) | `msdyn_msdyn_consoleapplicationnotificationtagset` |
| Primary id attribute | `msdyn_msdyn_consoleapplicationnotificationtagid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtagset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtagset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtagset
PATCH /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtagset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_consoleapplicationnotificationtagset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_consoleapplicationnotificationtemplateid`, `msdyn_msdyn_consoleapplicationnotificationtagid`, `msdyn_templatetagsid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationnotificationtag` | [msdyn_consoleapplicationnotificationtemplate](msdyn_consoleapplicationnotificationtemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationnotificationtag` |

## Source

Generated from [msdyn_msdyn_consoleapplicationnotificationtag (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_consoleapplicationnotificationtag')) on 2026-05-07.