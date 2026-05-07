---
logical: "msdyn_wqdatasource"
display: "WQDataSource"
entitySetName: "msdyn_wqdatasources"
primaryId: "msdyn_wqdatasourceid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# WQDataSource

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wqdatasource` |
| Display name | WQDataSource |
| Display (plural) | WQDataSources |
| Schema name | `msdyn_wqdatasource` |
| Entity set (Web API) | `msdyn_wqdatasources` |
| Primary id attribute | `msdyn_wqdatasourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wqdatasources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wqdatasources(<guid>)
POST /api/data/v9.2/msdyn_wqdatasources
PATCH /api/data/v9.2/msdyn_wqdatasources(<guid>)
DELETE /api/data/v9.2/msdyn_wqdatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`msdyn_name`, `msdyn_wqdatasourceId`

## Relationships




## Source

Generated from [msdyn_wqdatasource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_wqdatasource.md) on 2026-05-06.