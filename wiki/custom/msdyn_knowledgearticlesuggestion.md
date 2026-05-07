---
logical: "msdyn_knowledgearticlesuggestion"
display: "Suggerimento di articoli della Knowledge Base"
entitySetName: "msdyn_knowledgearticlesuggestions"
primaryId: "msdyn_knowledgearticlesuggestionid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Suggerimento di articoli della Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgearticlesuggestion` |
| Display name | Suggerimento di articoli della Knowledge Base |
| Display (plural) | Suggerimenti di articoli della Knowledge Base |
| Schema name | `msdyn_knowledgearticlesuggestion` |
| Entity set (Web API) | `msdyn_knowledgearticlesuggestions` |
| Primary id attribute | `msdyn_knowledgearticlesuggestionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgearticlesuggestions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_knowledgearticlesuggestions(<guid>)
POST /api/data/v9.2/msdyn_knowledgearticlesuggestions
PATCH /api/data/v9.2/msdyn_knowledgearticlesuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgearticlesuggestions(<guid>)
```

## Attributes

Writable: **9** · Read-only: **0**

### Writable

`msdyn_additionalcontext`, `msdyn_confidencescore`, `msdyn_keyphrases`, `msdyn_knowledgearticlesuggestionid`, `msdyn_name`, `msdyn_rank`, `msdyn_suggestedentity`, `msdyn_suggestionforentitylogicalname`, `msdyn_suggestionforid`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgearticle_msdyn_knowledgearticlesuggestion_suggestedentity` | [knowledgearticle](knowledgearticle.md) | `msdyn_suggestedentity` | `msdyn_suggestedentity` |



## Source

Generated from [msdyn_knowledgearticlesuggestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgearticlesuggestion')) on 2026-05-07.