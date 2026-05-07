---
logical: "msdyn_msdyn_consoleapplicationsessiontemp_tag"
display: "msdyn_msdyn_consoleapplicationsessiontemp_tag"
entitySetName: "msdyn_msdyn_consoleapplicationsessiontemp_tagset"
primaryId: "msdyn_msdyn_consoleapplicationsessiontemp_tagid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_consoleapplicationsessiontemp_tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_consoleapplicationsessiontemp_tag` |
| Display name | msdyn_msdyn_consoleapplicationsessiontemp_tag |
| Schema name | `msdyn_msdyn_consoleapplicationsessiontemp_tag` |
| Entity set (Web API) | `msdyn_msdyn_consoleapplicationsessiontemp_tagset` |
| Primary id attribute | `msdyn_msdyn_consoleapplicationsessiontemp_tagid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemp_tagset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemp_tagset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemp_tagset
PATCH /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemp_tagset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_consoleapplicationsessiontemp_tagset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_consoleapplicationsessiontemplateid`, `msdyn_msdyn_consoleapplicationsessiontemp_tagid`, `msdyn_templatetagsid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationsessiontemp_tag` | [msdyn_consoleapplicationsessiontemplate](msdyn_consoleapplicationsessiontemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationsessiontemp_tag` |

## Source

Generated from [msdyn_msdyn_consoleapplicationsessiontemp_tag (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_consoleapplicationsessiontemp_tag')) on 2026-05-07.