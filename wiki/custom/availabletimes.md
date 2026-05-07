---
logical: "availabletimes"
display: "Orari disponibili"
entitySetName: "availabletimescollection"
primaryId: "availabletimesid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Orari disponibili

## Identity

| Property | Value |
| --- | --- |
| Logical name | `availabletimes` |
| Display name | Orari disponibili |
| Display (plural) | Raccolta orari disponibili |
| Schema name | `availabletimes` |
| Entity set (Web API) | `availabletimescollection` |
| Primary id attribute | `availabletimesid` |
| Primary name attribute | `name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/availabletimescollection?$select=name&$top=10
GET /api/data/v9.2/availabletimescollection(<guid>)
POST /api/data/v9.2/availabletimescollection
PATCH /api/data/v9.2/availabletimescollection(<guid>)
DELETE /api/data/v9.2/availabletimescollection(<guid>)
```

## Attributes

Writable: **10** · Read-only: **0**

### Writable

`availabletimesid`, `name`, `resources`, `resourcesJson`, `scheduledend`, `scheduledendlocaltime`, `scheduledstart`, `scheduledstartlocaltime`, `site`, `siteid`

## Relationships




## Source

Generated from [availabletimes (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='availabletimes')) on 2026-05-07.