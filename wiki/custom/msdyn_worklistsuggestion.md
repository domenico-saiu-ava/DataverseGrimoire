---
logical: "msdyn_worklistsuggestion"
display: "Suggerimento elenco di lavoro"
entitySetName: "msdyn_worklistsuggestions"
primaryId: "msdyn_worklistsuggestionid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Suggerimento elenco di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_worklistsuggestion` |
| Display name | Suggerimento elenco di lavoro |
| Display (plural) | Suggerimenti elenco di lavoro |
| Schema name | `msdyn_worklistsuggestion` |
| Entity set (Web API) | `msdyn_worklistsuggestions` |
| Primary id attribute | `msdyn_worklistsuggestionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_worklistsuggestions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_worklistsuggestions(<guid>)
POST /api/data/v9.2/msdyn_worklistsuggestions
PATCH /api/data/v9.2/msdyn_worklistsuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_worklistsuggestions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **1**

### Writable

`msdyn_accessrightsmask`, `msdyn_customdata`, `msdyn_name`, `msdyn_potentialrevenue`, `msdyn_relatedcustomdata`, `msdyn_relatedinsights`, `msdyn_relatedrecordid`, `msdyn_relatedrecordname`, `msdyn_relatedrecordtype`, `msdyn_salesmotion`, `msdyn_salesplay`, `msdyn_solutionarea`, `msdyn_suggesteddate`, `msdyn_worklistsuggestionid`

### Read-only

`owninguser`

## Relationships




## Source

Generated from [msdyn_worklistsuggestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_worklistsuggestion')) on 2026-05-07.