---
logical: "gitconfigurationretrievaldatasource"
display: "Git Configuration Retrieval Data Source"
entitySetName: "gitconfigurationretrievaldatasources"
primaryId: "gitconfigurationretrievaldatasourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Git Configuration Retrieval Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitconfigurationretrievaldatasource` |
| Display name | Git Configuration Retrieval Data Source |
| Display (plural) | Git Configuration Retrieval Data Sources |
| Schema name | `GitConfigurationRetrievalDataSource` |
| Entity set (Web API) | `gitconfigurationretrievaldatasources` |
| Primary id attribute | `gitconfigurationretrievaldatasourceid` |
| Primary name attribute | `name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/gitconfigurationretrievaldatasources?$select=name&$top=10
GET /api/data/v9.2/gitconfigurationretrievaldatasources(<guid>)
POST /api/data/v9.2/gitconfigurationretrievaldatasources
PATCH /api/data/v9.2/gitconfigurationretrievaldatasources(<guid>)
DELETE /api/data/v9.2/gitconfigurationretrievaldatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`GitConfigurationRetrievalDataSourceId`, `name`

## Relationships




## Source

Generated from [gitconfigurationretrievaldatasource.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/gitconfigurationretrievaldatasource.md) on 2026-05-06.