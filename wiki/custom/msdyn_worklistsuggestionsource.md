---
logical: "msdyn_worklistsuggestionsource"
display: "Origine suggerimento elenco di lavoro"
entitySetName: "msdyn_worklistsuggestionsources"
primaryId: "msdyn_worklistsuggestionsourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine suggerimento elenco di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_worklistsuggestionsource` |
| Display name | Origine suggerimento elenco di lavoro |
| Display (plural) | Origini suggerimento elenco di lavoro |
| Schema name | `msdyn_worklistsuggestionsource` |
| Entity set (Web API) | `msdyn_worklistsuggestionsources` |
| Primary id attribute | `msdyn_worklistsuggestionsourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_worklistsuggestionsources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_worklistsuggestionsources(<guid>)
POST /api/data/v9.2/msdyn_worklistsuggestionsources
PATCH /api/data/v9.2/msdyn_worklistsuggestionsources(<guid>)
DELETE /api/data/v9.2/msdyn_worklistsuggestionsources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_name`, `msdyn_worklistsuggestionsourceid`

## Relationships




## Source

Generated from [msdyn_worklistsuggestionsource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_worklistsuggestionsource')) on 2026-05-07.