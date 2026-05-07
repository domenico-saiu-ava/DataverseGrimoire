---
logical: "msdyn_knowledgearticlesuggestiondatasource"
display: "Knowledge Article Suggestion Data Source"
entitySetName: "msdyn_knowledgearticlesuggestiondatasources"
primaryId: "msdyn_knowledgearticlesuggestiondatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Knowledge Article Suggestion Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgearticlesuggestiondatasource` |
| Display name | Knowledge Article Suggestion Data Source |
| Display (plural) | Knowledge Article Suggestion Data Sources |
| Schema name | `msdyn_knowledgearticlesuggestiondatasource` |
| Entity set (Web API) | `msdyn_knowledgearticlesuggestiondatasources` |
| Primary id attribute | `msdyn_knowledgearticlesuggestiondatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgearticlesuggestiondatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_knowledgearticlesuggestiondatasources(<guid>)
POST /api/data/v9.2/msdyn_knowledgearticlesuggestiondatasources
PATCH /api/data/v9.2/msdyn_knowledgearticlesuggestiondatasources(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgearticlesuggestiondatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_knowledgearticlesuggestiondatasourceId`, `msdyn_name`

## Relationships




## Source

Generated from [msdyn_knowledgearticlesuggestiondatasource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_knowledgearticlesuggestiondatasource.md) on 2026-05-06.