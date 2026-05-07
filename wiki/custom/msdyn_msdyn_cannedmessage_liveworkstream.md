---
logical: "msdyn_msdyn_cannedmessage_liveworkstream"
display: "msdyn_msdyn_cannedmessage_liveworkstream"
entitySetName: "msdyn_msdyn_cannedmessage_liveworkstreamset"
primaryId: "msdyn_msdyn_cannedmessage_liveworkstreamid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_cannedmessage_liveworkstream

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_cannedmessage_liveworkstream` |
| Display name | msdyn_msdyn_cannedmessage_liveworkstream |
| Schema name | `msdyn_msdyn_cannedmessage_liveworkstream` |
| Entity set (Web API) | `msdyn_msdyn_cannedmessage_liveworkstreamset` |
| Primary id attribute | `msdyn_msdyn_cannedmessage_liveworkstreamid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_cannedmessage_liveworkstreamset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_cannedmessage_liveworkstreamset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_cannedmessage_liveworkstreamset
PATCH /api/data/v9.2/msdyn_msdyn_cannedmessage_liveworkstreamset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_cannedmessage_liveworkstreamset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_cannedmessageid`, `msdyn_liveworkstreamid`, `msdyn_msdyn_cannedmessage_liveworkstreamid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_cannedmessage_liveworkstream` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | _n/a_ | `msdyn_msdyn_cannedmessage_liveworkstream` |

## Source

Generated from [msdyn_msdyn_cannedmessage_liveworkstream (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_cannedmessage_liveworkstream')) on 2026-05-07.