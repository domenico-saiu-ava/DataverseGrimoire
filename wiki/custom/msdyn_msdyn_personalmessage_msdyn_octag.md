---
logical: "msdyn_msdyn_personalmessage_msdyn_octag"
display: "msdyn_msdyn_personalmessage_msdyn_octag"
entitySetName: "msdyn_msdyn_personalmessage_msdyn_octagset"
primaryId: "msdyn_msdyn_personalmessage_msdyn_octagid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_personalmessage_msdyn_octag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_personalmessage_msdyn_octag` |
| Display name | msdyn_msdyn_personalmessage_msdyn_octag |
| Schema name | `msdyn_msdyn_personalmessage_msdyn_octag` |
| Entity set (Web API) | `msdyn_msdyn_personalmessage_msdyn_octagset` |
| Primary id attribute | `msdyn_msdyn_personalmessage_msdyn_octagid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_personalmessage_msdyn_octagset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_personalmessage_msdyn_octagset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_personalmessage_msdyn_octagset
PATCH /api/data/v9.2/msdyn_msdyn_personalmessage_msdyn_octagset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_personalmessage_msdyn_octagset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyn_msdyn_personalmessage_msdyn_octagid`, `msdyn_octagid`, `msdyn_personalmessageid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_personalmessage_msdyn_octag` | [msdyn_personalmessage](msdyn_personalmessage.md) | _n/a_ | `msdyn_msdyn_personalmessage_msdyn_octag` |

## Source

Generated from [msdyn_msdyn_personalmessage_msdyn_octag (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_personalmessage_msdyn_octag')) on 2026-05-07.