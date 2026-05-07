---
logical: "msdyn_salestag_msdyn_sequence"
display: "msdyn_salestag_msdyn_sequence"
entitySetName: "msdyn_salestag_msdyn_sequenceset"
primaryId: "msdyn_salestag_msdyn_sequenceid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_salestag_msdyn_sequence

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salestag_msdyn_sequence` |
| Display name | msdyn_salestag_msdyn_sequence |
| Schema name | `msdyn_salestag_msdyn_sequence` |
| Entity set (Web API) | `msdyn_salestag_msdyn_sequenceset` |
| Primary id attribute | `msdyn_salestag_msdyn_sequenceid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salestag_msdyn_sequenceset?$select=&$top=10
GET /api/data/v9.2/msdyn_salestag_msdyn_sequenceset(<guid>)
POST /api/data/v9.2/msdyn_salestag_msdyn_sequenceset
PATCH /api/data/v9.2/msdyn_salestag_msdyn_sequenceset(<guid>)
DELETE /api/data/v9.2/msdyn_salestag_msdyn_sequenceset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_salestag_msdyn_sequenceid`, `msdyn_salestagid`, `msdyn_sequenceid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salestag_msdyn_sequence` | [msdyn_salestag](msdyn_salestag.md) | _n/a_ | `msdyn_salestag_msdyn_sequence` |

## Source

Generated from [msdyn_salestag_msdyn_sequence (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salestag_msdyn_sequence')) on 2026-05-07.