---
logical: "availabletimesdatasource"
display: "Origine dati orari disponibili"
entitySetName: "availabletimesdatasources"
primaryId: "availabletimesdatasourceid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine dati orari disponibili

## Identity

| Property | Value |
| --- | --- |
| Logical name | `availabletimesdatasource` |
| Display name | Origine dati orari disponibili |
| Display (plural) | Origini dati orari disponibili |
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

`availabletimesdatasourceid`, `name`

## Relationships




## Source

Generated from [availabletimesdatasource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='availabletimesdatasource')) on 2026-05-07.