---
logical: "msdyn_msdyn_ocliveworkitem_knowledgeartic"
display: "msdyn_msdyn_ocliveworkitem_knowledgeartic"
entitySetName: "msdyn_msdyn_ocliveworkitem_knowledgearticset"
primaryId: "msdyn_msdyn_ocliveworkitem_knowledgearticid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_ocliveworkitem_knowledgeartic

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_ocliveworkitem_knowledgeartic` |
| Display name | msdyn_msdyn_ocliveworkitem_knowledgeartic |
| Schema name | `msdyn_msdyn_ocliveworkitem_knowledgeartic` |
| Entity set (Web API) | `msdyn_msdyn_ocliveworkitem_knowledgearticset` |
| Primary id attribute | `msdyn_msdyn_ocliveworkitem_knowledgearticid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgearticset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgearticset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgearticset
PATCH /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgearticset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgearticset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`activityid`, `knowledgearticleid`, `msdyn_msdyn_ocliveworkitem_knowledgearticid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocliveworkitem_knowledgearticle` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_msdyn_ocliveworkitem_knowledgeartic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_ocliveworkitem_knowledgeartic')) on 2026-05-07.