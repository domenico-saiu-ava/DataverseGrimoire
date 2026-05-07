---
logical: "msdyn_ocdispositioncode_msdyn_liveworkstream"
display: "msdyn_ocdispositioncode_msdyn_liveworkstream"
entitySetName: "msdyn_ocdispositioncode_msdyn_liveworkstreamset"
primaryId: "msdyn_ocdispositioncode_msdyn_liveworkstreamid"
tableType: "Standard"
ownership: "None"
---

# msdyn_ocdispositioncode_msdyn_liveworkstream

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocdispositioncode_msdyn_liveworkstream` |
| Display name | msdyn_ocdispositioncode_msdyn_liveworkstream |
| Schema name | `msdyn_ocdispositioncode_msdyn_liveworkstream` |
| Entity set (Web API) | `msdyn_ocdispositioncode_msdyn_liveworkstreamset` |
| Primary id attribute | `msdyn_ocdispositioncode_msdyn_liveworkstreamid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocdispositioncode_msdyn_liveworkstreamset?$select=&$top=10
GET /api/data/v9.2/msdyn_ocdispositioncode_msdyn_liveworkstreamset(<guid>)
POST /api/data/v9.2/msdyn_ocdispositioncode_msdyn_liveworkstreamset
PATCH /api/data/v9.2/msdyn_ocdispositioncode_msdyn_liveworkstreamset(<guid>)
DELETE /api/data/v9.2/msdyn_ocdispositioncode_msdyn_liveworkstreamset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`ComponentIdUnique`, `ComponentState`, `IsManaged`, `msdyn_liveworkstreamid`, `msdyn_ocdispositioncode_msdyn_liveworkstreamId`, `msdyn_ocdispositioncodeid`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocdispositioncode_liveworkstream_msdyn_liveworkstream` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_ocdispositioncode_msdyn_liveworkstream.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocdispositioncode_msdyn_liveworkstream.md) on 2026-05-06.