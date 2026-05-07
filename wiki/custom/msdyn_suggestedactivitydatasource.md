---
logical: "msdyn_suggestedactivitydatasource"
display: "Origine dati impegno consigliato"
entitySetName: "msdyn_suggestedactivitydatasources"
primaryId: "msdyn_suggestedactivitydatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine dati impegno consigliato

Suggested Activity Data Sources

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestedactivitydatasource` |
| Display name | Origine dati impegno consigliato |
| Display (plural) | Origini dati impegni consigliati |
| Schema name | `msdyn_suggestedactivitydatasource` |
| Entity set (Web API) | `msdyn_suggestedactivitydatasources` |
| Primary id attribute | `msdyn_suggestedactivitydatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestedactivitydatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestedactivitydatasources(<guid>)
POST /api/data/v9.2/msdyn_suggestedactivitydatasources
PATCH /api/data/v9.2/msdyn_suggestedactivitydatasources(<guid>)
DELETE /api/data/v9.2/msdyn_suggestedactivitydatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_name`, `msdyn_suggestedactivitydatasourceid`

## Relationships




## Source

Generated from [msdyn_suggestedactivitydatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestedactivitydatasource')) on 2026-05-07.