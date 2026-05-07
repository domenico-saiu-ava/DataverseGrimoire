---
logical: "msdyn_convertrule_queue_association"
display: "msdyn_convertrule_queue_association"
entitySetName: "msdyn_convertrule_queue_associationset"
primaryId: "msdyn_convertrule_queue_associationid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_convertrule_queue_association

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_convertrule_queue_association` |
| Display name | msdyn_convertrule_queue_association |
| Schema name | `msdyn_convertrule_queue_association` |
| Entity set (Web API) | `msdyn_convertrule_queue_associationset` |
| Primary id attribute | `msdyn_convertrule_queue_associationid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_convertrule_queue_associationset?$select=&$top=10
GET /api/data/v9.2/msdyn_convertrule_queue_associationset(<guid>)
POST /api/data/v9.2/msdyn_convertrule_queue_associationset
PATCH /api/data/v9.2/msdyn_convertrule_queue_associationset(<guid>)
DELETE /api/data/v9.2/msdyn_convertrule_queue_associationset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`convertruleid`, `msdyn_convertrule_queue_associationid`, `queueid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_convertrule_queue_association` | [convertrule](convertrule.md) | _n/a_ | `msdyn_convertrule_queue_association` |

## Source

Generated from [msdyn_convertrule_queue_association (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_convertrule_queue_association')) on 2026-05-07.