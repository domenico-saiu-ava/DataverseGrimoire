---
logical: "msdyn_suggestedactivity"
display: "Suggested Activity"
entitySetName: "msdyn_suggestedactivities"
primaryId: "msdyn_suggestedactivityid"
primaryName: "msdyn_subject"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Suggested Activity

Activity suggestions

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestedactivity` |
| Display name | Suggested Activity |
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

`msdyn_ActivityType`, `msdyn_BodyPreview`, `msdyn_createddate`, `msdyn_duration`, `msdyn_endtime`, `msdyn_exchangeweblink`, `msdyn_Importance`, `msdyn_location`, `msdyn_regardingid`, `msdyn_regardingname`, `msdyn_sender`, `msdyn_sendername`, `msdyn_starttime`, `msdyn_Subject`, `msdyn_suggestedactivityId`, `msdyn_to`

## Relationships




## Source

Generated from [msdyn_suggestedactivity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_suggestedactivity.md) on 2026-05-06.