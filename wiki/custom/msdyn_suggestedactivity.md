---
logical: "msdyn_suggestedactivity"
display: "Impegno consigliato"
entitySetName: "msdyn_suggestedactivities"
primaryId: "msdyn_suggestedactivityid"
primaryName: "msdyn_subject"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impegno consigliato

Activity suggestions

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestedactivity` |
| Display name | Impegno consigliato |
| Display (plural) | Activity Suggestions |
| Schema name | `msdyn_suggestedactivity` |
| Entity set (Web API) | `msdyn_suggestedactivities` |
| Primary id attribute | `msdyn_suggestedactivityid` |
| Primary name attribute | `msdyn_subject` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestedactivities?$select=msdyn_subject&$top=10
GET /api/data/v9.2/msdyn_suggestedactivities(<guid>)
POST /api/data/v9.2/msdyn_suggestedactivities
PATCH /api/data/v9.2/msdyn_suggestedactivities(<guid>)
DELETE /api/data/v9.2/msdyn_suggestedactivities(<guid>)
```

## Attributes

Writable: **16** · Read-only: **0**

### Writable

`msdyn_activitytype`, `msdyn_bodypreview`, `msdyn_createddate`, `msdyn_duration`, `msdyn_endtime`, `msdyn_exchangeweblink`, `msdyn_importance`, `msdyn_location`, `msdyn_regardingid`, `msdyn_regardingname`, `msdyn_sender`, `msdyn_sendername`, `msdyn_starttime`, `msdyn_subject`, `msdyn_suggestedactivityid`, `msdyn_to`

## Relationships




## Source

Generated from [msdyn_suggestedactivity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestedactivity')) on 2026-05-07.