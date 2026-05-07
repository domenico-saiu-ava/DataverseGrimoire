---
logical: "msdyn_suggestedcontactsdatasource"
display: "Suggested Contacts Data Source"
entitySetName: "msdyn_suggestedcontactsdatasources"
primaryId: "msdyn_suggestedcontactsdatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Suggested Contacts Data Source

Suggested contacts data sources

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestedcontactsdatasource` |
| Display name | Suggested Contacts Data Source |
| Display (plural) | Suggested Contacts Data Source |
| Schema name | `msdyn_suggestedcontactsdatasource` |
| Entity set (Web API) | `msdyn_suggestedcontactsdatasources` |
| Primary id attribute | `msdyn_suggestedcontactsdatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestedcontactsdatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestedcontactsdatasources(<guid>)
POST /api/data/v9.2/msdyn_suggestedcontactsdatasources
PATCH /api/data/v9.2/msdyn_suggestedcontactsdatasources(<guid>)
DELETE /api/data/v9.2/msdyn_suggestedcontactsdatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_name`, `msdyn_suggestedcontactsdatasourceId`

## Relationships




## Source

Generated from [msdyn_suggestedcontactsdatasource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestedcontactsdatasource.md) on 2026-05-06.