---
logical: "msdyn_msdyn_consoleapplicationtemplate_tags"
display: "msdyn_msdyn_consoleapplicationtemplate_tags"
entitySetName: "msdyn_msdyn_consoleapplicationtemplate_tagsset"
primaryId: "msdyn_msdyn_consoleapplicationtemplate_tagsid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_consoleapplicationtemplate_tags

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_consoleapplicationtemplate_tags` |
| Display name | msdyn_msdyn_consoleapplicationtemplate_tags |
| Schema name | `msdyn_msdyn_consoleapplicationtemplate_tags` |
| Entity set (Web API) | `msdyn_msdyn_consoleapplicationtemplate_tagsset` |
| Primary id attribute | `msdyn_msdyn_consoleapplicationtemplate_tagsid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_tagsset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_tagsset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_tagsset
PATCH /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_tagsset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_consoleapplicationtemplate_tagsset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_consoleapplicationtemplateid`, `msdyn_msdyn_consoleapplicationtemplate_tagsid`, `msdyn_templatetagsid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_consoleapplicationtemplate_tags` | [msdyn_consoleapplicationtemplate](msdyn_consoleapplicationtemplate.md) | _n/a_ | `msdyn_msdyn_consoleapplicationtemplate_tags` |

## Source

Generated from [msdyn_msdyn_consoleapplicationtemplate_tags (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_consoleapplicationtemplate_tags')) on 2026-05-07.