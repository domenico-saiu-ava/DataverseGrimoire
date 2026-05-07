---
logical: "msdyn_msdyn_ocrichobject_liveworkstream"
display: "msdyn_msdyn_ocrichobject_liveworkstream"
entitySetName: "msdyn_msdyn_ocrichobject_liveworkstreamset"
primaryId: "msdyn_msdyn_ocrichobject_liveworkstreamid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_ocrichobject_liveworkstream

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_ocrichobject_liveworkstream` |
| Display name | msdyn_msdyn_ocrichobject_liveworkstream |
| Schema name | `msdyn_msdyn_ocrichobject_liveworkstream` |
| Entity set (Web API) | `msdyn_msdyn_ocrichobject_liveworkstreamset` |
| Primary id attribute | `msdyn_msdyn_ocrichobject_liveworkstreamid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_ocrichobject_liveworkstreamset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_ocrichobject_liveworkstreamset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_ocrichobject_liveworkstreamset
PATCH /api/data/v9.2/msdyn_msdyn_ocrichobject_liveworkstreamset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_ocrichobject_liveworkstreamset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_liveworkstreamid`, `msdyn_msdyn_ocrichobject_liveworkstreamid`, `msdyn_ocrichobjectid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocrichobject_liveworkstream` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | _n/a_ | `msdyn_msdyn_ocrichobject_liveworkstream` |

## Source

Generated from [msdyn_msdyn_ocrichobject_liveworkstream (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_ocrichobject_liveworkstream')) on 2026-05-07.