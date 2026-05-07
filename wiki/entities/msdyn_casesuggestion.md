---
logical: "msdyn_casesuggestion"
display: "Case Suggestion"
entitySetName: "msdyn_casesuggestions"
primaryId: "msdyn_casesuggestionid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Case Suggestion

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casesuggestion` |
| Display name | Case Suggestion |
| Display (plural) | Case Suggestions |
| Schema name | `msdyn_casesuggestion` |
| Entity set (Web API) | `msdyn_casesuggestions` |
| Primary id attribute | `msdyn_casesuggestionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casesuggestions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casesuggestions(<guid>)
POST /api/data/v9.2/msdyn_casesuggestions
PATCH /api/data/v9.2/msdyn_casesuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_casesuggestions(<guid>)
```

## Attributes

Writable: **9** · Read-only: **0**

### Writable

`msdyn_additionalcontext`, `msdyn_casesuggestionId`, `msdyn_confidencescore`, `msdyn_keyphrases`, `msdyn_name`, `msdyn_rank`, `msdyn_suggestedentity`, `msdyn_suggestionforentitylogicalname`, `msdyn_suggestionforid`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_incident_msdyn_casesuggestion_suggestedentity` | [incident](incident.md) | `msdyn_suggestedentity` | `msdyn_suggestedentity` |



## Source

Generated from [msdyn_casesuggestion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_casesuggestion.md) on 2026-05-06.