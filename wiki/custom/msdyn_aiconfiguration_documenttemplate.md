---
logical: "msdyn_aiconfiguration_documenttemplate"
display: "msdyn_aiconfiguration_documenttemplate"
entitySetName: "msdyn_aiconfiguration_documenttemplateset"
primaryId: "msdyn_aiconfiguration_documenttemplateid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_aiconfiguration_documenttemplate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiconfiguration_documenttemplate` |
| Display name | msdyn_aiconfiguration_documenttemplate |
| Schema name | `msdyn_aiconfiguration_documenttemplate` |
| Entity set (Web API) | `msdyn_aiconfiguration_documenttemplateset` |
| Primary id attribute | `msdyn_aiconfiguration_documenttemplateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset?$select=&$top=10
GET /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset(<guid>)
POST /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset
PATCH /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset(<guid>)
DELETE /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_aiconfiguration_documenttemplateid`, `msdyn_aiconfigurationid`, `msdyn_aidocumenttemplateid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidocumenttemplate_msdyn_aiconfig` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | _n/a_ | `msdyn_aidocumenttemplate_msdyn_aiconfig` |

## Source

Generated from [msdyn_aiconfiguration_documenttemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiconfiguration_documenttemplate')) on 2026-05-07.