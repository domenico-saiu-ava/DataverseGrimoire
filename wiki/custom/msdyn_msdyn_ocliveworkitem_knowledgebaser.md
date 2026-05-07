---
logical: "msdyn_msdyn_ocliveworkitem_knowledgebaser"
display: "msdyn_msdyn_ocliveworkitem_knowledgebaser"
entitySetName: "msdyn_msdyn_ocliveworkitem_knowledgebaserset"
primaryId: "msdyn_msdyn_ocliveworkitem_knowledgebaserid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msdyn_ocliveworkitem_knowledgebaser

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msdyn_ocliveworkitem_knowledgebaser` |
| Display name | msdyn_msdyn_ocliveworkitem_knowledgebaser |
| Schema name | `msdyn_msdyn_ocliveworkitem_knowledgebaser` |
| Entity set (Web API) | `msdyn_msdyn_ocliveworkitem_knowledgebaserset` |
| Primary id attribute | `msdyn_msdyn_ocliveworkitem_knowledgebaserid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgebaserset?$select=&$top=10
GET /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgebaserset(<guid>)
POST /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgebaserset
PATCH /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgebaserset(<guid>)
DELETE /api/data/v9.2/msdyn_msdyn_ocliveworkitem_knowledgebaserset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`activityid`, `knowledgebaserecordid`, `msdyn_msdyn_ocliveworkitem_knowledgebaserid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitem_knowledgebaserecord` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_msdyn_ocliveworkitem_knowledgebaser (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msdyn_ocliveworkitem_knowledgebaser')) on 2026-05-07.