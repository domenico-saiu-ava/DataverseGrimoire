---
logical: "gitconfigurationretrievaldatasource"
display: "Origine dati recupero configurazione Git"
entitySetName: "gitconfigurationretrievaldatasources"
primaryId: "gitconfigurationretrievaldatasourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine dati recupero configurazione Git

## Identity

| Property | Value |
| --- | --- |
| Logical name | `gitconfigurationretrievaldatasource` |
| Display name | Origine dati recupero configurazione Git |
| Display (plural) | Origini dati recupero configurazione Git |
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

`gitconfigurationretrievaldatasourceid`, `name`

## Relationships




## Source

Generated from [gitconfigurationretrievaldatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='gitconfigurationretrievaldatasource')) on 2026-05-07.