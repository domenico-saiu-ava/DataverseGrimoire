---
logical: "msdyn_worklistsuggestion"
display: "Work List Suggestion"
entitySetName: "msdyn_worklistsuggestions"
primaryId: "msdyn_worklistsuggestionid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Work List Suggestion

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_worklistsuggestion` |
| Display name | Work List Suggestion |
| Display (plural) | Work List Suggestions |
| Schema name | `msdyn_worklistsuggestion` |
| Entity set (Web API) | `msdyn_worklistsuggestions` |
| Primary id attribute | `msdyn_worklistsuggestionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_worklistsuggestions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_worklistsuggestions(<guid>)
POST /api/data/v9.2/msdyn_worklistsuggestions
PATCH /api/data/v9.2/msdyn_worklistsuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_worklistsuggestions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **0**

### Writable

`msdyn_accessrightsmask`, `msdyn_customdata`, `msdyn_name`, `msdyn_potentialrevenue`, `msdyn_relatedcustomdata`, `msdyn_relatedinsights`, `msdyn_relatedrecordid`, `msdyn_relatedrecordname`, `msdyn_relatedrecordtype`, `msdyn_salesmotion`, `msdyn_salesplay`, `msdyn_solutionarea`, `msdyn_suggesteddate`, `msdyn_worklistsuggestionId`

## Relationships




## Source

Generated from [msdyn_worklistsuggestion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_worklistsuggestion.md) on 2026-05-06.