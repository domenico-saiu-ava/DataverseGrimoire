---
logical: "msdyn_callablecontext_msdyn_playbooktemplate"
display: "msdyn_callablecontext_msdyn_playbooktemplate"
entitySetName: "msdyn_callablecontext_msdyn_playbooktemplateset"
primaryId: "msdyn_callablecontext_msdyn_playbooktemplateid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_callablecontext_msdyn_playbooktemplate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_callablecontext_msdyn_playbooktemplate` |
| Display name | msdyn_callablecontext_msdyn_playbooktemplate |
| Schema name | `msdyn_callablecontext_msdyn_playbooktemplate` |
| Entity set (Web API) | `msdyn_callablecontext_msdyn_playbooktemplateset` |
| Primary id attribute | `msdyn_callablecontext_msdyn_playbooktemplateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_callablecontext_msdyn_playbooktemplateset?$select=&$top=10
GET /api/data/v9.2/msdyn_callablecontext_msdyn_playbooktemplateset(<guid>)
POST /api/data/v9.2/msdyn_callablecontext_msdyn_playbooktemplateset
PATCH /api/data/v9.2/msdyn_callablecontext_msdyn_playbooktemplateset(<guid>)
DELETE /api/data/v9.2/msdyn_callablecontext_msdyn_playbooktemplateset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_callablecontext_msdyn_playbooktemplateid`, `msdyn_callablecontextid`, `msdyn_playbooktemplateid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_callablecontext_msdyn_playbooktemplate` | [msdyn_callablecontext](msdyn_callablecontext.md) | _n/a_ | `msdyn_callablecontext_msdyn_playbooktemplate` |

## Source

Generated from [msdyn_callablecontext_msdyn_playbooktemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_callablecontext_msdyn_playbooktemplate')) on 2026-05-07.