---
logical: "msdyn_casesuggestionsdatasource"
display: "Case Suggestions Data Souce"
entitySetName: "msdyn_casesuggestionsdatasources"
primaryId: "msdyn_casesuggestionsdatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Case Suggestions Data Souce

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casesuggestionsdatasource` |
| Display name | Case Suggestions Data Souce |
| Display (plural) | Case Suggestions Data Souces |
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

`msdyn_casesuggestionsdatasourceId`, `msdyn_name`

## Relationships




## Source

Generated from [msdyn_casesuggestionsdatasource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_casesuggestionsdatasource.md) on 2026-05-06.