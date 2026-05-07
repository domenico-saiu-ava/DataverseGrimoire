---
logical: "msdyn_msdyn_kbattachment_knowledgearticle"
display: "msdyn_msdyn_kbattachment_knowledgearticle"
entitySetName: "msdyn_msdyn_kbattachment_knowledgearticleset"
primaryId: "msdyn_msdyn_kbattachment_knowledgearticleid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_kbattachment_knowledgearticle

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_kbattachment_knowledgearticle` |
| Display name | msdyn_msdyn_kbattachment_knowledgearticle |
| Schema name | `msdyn_msdyn_kbattachment_knowledgearticle` |
| Entity set (Web API) | `msdyn_msdyn_kbattachment_knowledgearticleset` |
| Primary id attribute | `msdyn_msdyn_kbattachment_knowledgearticleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_kbattachment_knowledgearticleset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_kbattachment_knowledgearticleset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_kbattachment_knowledgearticleset
PATCH /api/data/v9.2/msdyn_msdyn_kbattachment_knowledgearticleset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_kbattachment_knowledgearticleset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`knowledgearticleid`, `msdyn_kbattachmentid`, `msdyn_msdyn_kbattachment_knowledgearticleid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_kbattachment_knowledgearticle` | [msdyn_kbattachment](msdyn_kbattachment.md) | _n/a_ | `msdyn_msdyn_kbattachment_knowledgearticle` |

## Source

Generated from [msdyn_msdyn_kbattachment_knowledgearticle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_kbattachment_knowledgearticle')) on 2026-05-07.