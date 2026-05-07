---
logical: "availabletimesdatasource"
display: "Available Times Data Source"
entitySetName: "availabletimesdatasources"
primaryId: "availabletimesdatasourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Available Times Data Source

## Identity

| Property | Value |
| --- | --- |
| Logical name | `availabletimesdatasource` |
| Display name | Available Times Data Source |
| Display (plural) | Available Times Data Sources |
| Schema name | `availabletimesdatasource` |
| Entity set (Web API) | `availabletimesdatasources` |
| Primary id attribute | `availabletimesdatasourceid` |
| Primary name attribute | `name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/availabletimesdatasources?$select=name&$top=10
GET /api/data/v9.2/availabletimesdatasources(<guid>)
POST /api/data/v9.2/availabletimesdatasources
PATCH /api/data/v9.2/availabletimesdatasources(<guid>)
DELETE /api/data/v9.2/availabletimesdatasources(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`availabletimesdatasourceId`, `Name`

## Relationships




## Source

Generated from [availabletimesdatasource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/availabletimesdatasource.md) on 2026-05-06.