---
logical: "adx_kbarticle_kbarticle"
display: "adx_kbarticle_kbarticle"
entitySetName: "adx_kbarticle_kbarticleset"
primaryId: "adx_kbarticle_kbarticleid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# adx_kbarticle_kbarticle

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_kbarticle_kbarticle` |
| Display name | adx_kbarticle_kbarticle |
| Schema name | `adx_kbarticle_kbarticle` |
| Entity set (Web API) | `adx_kbarticle_kbarticleset` |
| Primary id attribute | `adx_kbarticle_kbarticleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/adx_kbarticle_kbarticleset?$select=&$top=10
GET /api/data/v9.2/adx_kbarticle_kbarticleset(<guid>)
POST /api/data/v9.2/adx_kbarticle_kbarticleset
PATCH /api/data/v9.2/adx_kbarticle_kbarticleset(<guid>)
DELETE /api/data/v9.2/adx_kbarticle_kbarticleset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`adx_kbarticle_kbarticleid`, `kbarticleidone`, `kbarticleidtwo`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_kbarticle_kbarticle` | [kbarticle](kbarticle.md) | _n/a_ | `adx_kbarticle_kbarticle` |

## Source

Generated from [adx_kbarticle_kbarticle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_kbarticle_kbarticle')) on 2026-05-07.