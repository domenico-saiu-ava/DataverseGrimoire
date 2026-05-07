---
logical: "msdyn_worklistsuggestionsource"
display: "Work list suggestion source"
entitySetName: "msdyn_worklistsuggestionsources"
primaryId: "msdyn_worklistsuggestionsourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Work list suggestion source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_worklistsuggestionsource` |
| Display name | Work list suggestion source |
| Display (plural) | Work list suggestion sources |
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

`msdyn_name`, `msdyn_worklistsuggestionsourceId`

## Relationships




## Source

Generated from [msdyn_worklistsuggestionsource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_worklistsuggestionsource.md) on 2026-05-06.