---
logical: "searchtelemetry"
display: "Telemetria ricerca"
entitySetName: "searchtelemetries"
primaryId: "searchtelemetryid"
primaryName: "userquery"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Telemetria ricerca

Entità per registrare la telemetria utilizzata per migliorare la qualità della ricerca

## Identity

| Property | Value |
| --- | --- |
| Logical name | `searchtelemetry` |
| Display name | Telemetria ricerca |
| Display (plural) | Telemetria ricerca |
| Schema name | `searchtelemetry` |
| Entity set (Web API) | `searchtelemetries` |
| Primary id attribute | `searchtelemetryid` |
| Primary name attribute | `userquery` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/searchtelemetries?$select=userquery&$top=10
GET /api/data/v9.2/searchtelemetries(<guid>)
POST /api/data/v9.2/searchtelemetries
PATCH /api/data/v9.2/searchtelemetries(<guid>)
DELETE /api/data/v9.2/searchtelemetries(<guid>)
```

## Attributes

Writable: **10** · Read-only: **2**

### Writable

`correlationid`, `eyesonanalyticsallowed`, `feedbackdata`, `partitionid`, `requestid`, `scenarioname`, `searchtelemetryid`, `sessionid`, `ttlinseconds`, `userquery`

### Read-only

`createdon`, `versionnumber`

## Relationships




## Source

Generated from [searchtelemetry (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='searchtelemetry')) on 2026-05-07.