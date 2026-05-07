---
logical: "msdyn_casesuggestionsdatasource"
display: "Origine dati suggerimenti caso"
entitySetName: "msdyn_casesuggestionsdatasources"
primaryId: "msdyn_casesuggestionsdatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine dati suggerimenti caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casesuggestionsdatasource` |
| Display name | Origine dati suggerimenti caso |
| Display (plural) | Origini dati suggerimenti caso |
| Schema name | `msdyn_casesuggestionsdatasource` |
| Entity set (Web API) | `msdyn_casesuggestionsdatasources` |
| Primary id attribute | `msdyn_casesuggestionsdatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casesuggestionsdatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casesuggestionsdatasources(<guid>)
POST /api/data/v9.2/msdyn_casesuggestionsdatasources
PATCH /api/data/v9.2/msdyn_casesuggestionsdatasources(<guid>)
DELETE /api/data/v9.2/msdyn_casesuggestionsdatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_casesuggestionsdatasourceid`, `msdyn_name`

## Relationships




## Source

Generated from [msdyn_casesuggestionsdatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_casesuggestionsdatasource')) on 2026-05-07.