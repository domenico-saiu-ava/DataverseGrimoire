---
logical: "msdyn_suggestedactivitydatasource"
display: "Suggested Activity Data Source"
entitySetName: "msdyn_suggestedactivitydatasources"
primaryId: "msdyn_suggestedactivitydatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Suggested Activity Data Source

Suggested Activity Data Sources

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestedactivitydatasource` |
| Display name | Suggested Activity Data Source |
| Display (plural) | Suggested Activity Data Sources |
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

`msdyn_name`, `msdyn_suggestedactivitydatasourceId`

## Relationships




## Source

Generated from [msdyn_suggestedactivitydatasource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestedactivitydatasource.md) on 2026-05-06.