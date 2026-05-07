---
logical: "availabletimes"
display: "Available Times"
entitySetName: "availabletimescollection"
primaryId: "availabletimesid"
primaryName: "name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Available Times

## Identity

| Property | Value |
| --- | --- |
| Logical name | `availabletimes` |
| Display name | Available Times |
| Display (plural) | Available Times Collection |
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

`availabletimesId`, `Name`, `Resources`, `ResourcesJson`, `ScheduledEnd`, `ScheduledEndLocalTime`, `ScheduledStart`, `ScheduledStartLocalTime`, `Site`, `SiteId`

## Relationships




## Source

Generated from [availabletimes.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/availabletimes.md) on 2026-05-06.