---
logical: "msdyn_knowledgearticlesuggestiondatasource"
display: "Origine dati suggerimenti di articoli della Knowledge Base"
entitySetName: "msdyn_knowledgearticlesuggestiondatasources"
primaryId: "msdyn_knowledgearticlesuggestiondatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine dati suggerimenti di articoli della Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgearticlesuggestiondatasource` |
| Display name | Origine dati suggerimenti di articoli della Knowledge Base |
| Display (plural) | Origini dati suggerimenti di articoli della Knowledge Base |
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

`msdyn_knowledgearticlesuggestiondatasourceid`, `msdyn_name`

## Relationships




## Source

Generated from [msdyn_knowledgearticlesuggestiondatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgearticlesuggestiondatasource')) on 2026-05-07.