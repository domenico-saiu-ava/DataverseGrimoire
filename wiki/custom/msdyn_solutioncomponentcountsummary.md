---
logical: "msdyn_solutioncomponentcountsummary"
display: "Solution Component Count Summary"
entitySetName: "msdyn_solutioncomponentcountsummaries"
primaryId: "msdyn_solutioncomponentcountsummaryid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Solution Component Count Summary

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutioncomponentcountsummary` |
| Display name | Solution Component Count Summary |
| Display (plural) | Solution Component Count Summaries |
| Schema name | `msdyn_solutioncomponentcountsummary` |
| Entity set (Web API) | `msdyn_solutioncomponentcountsummaries` |
| Primary id attribute | `msdyn_solutioncomponentcountsummaryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutioncomponentcountsummaries?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutioncomponentcountsummaries(<guid>)
POST /api/data/v9.2/msdyn_solutioncomponentcountsummaries
PATCH /api/data/v9.2/msdyn_solutioncomponentcountsummaries(<guid>)
DELETE /api/data/v9.2/msdyn_solutioncomponentcountsummaries(<guid>)
```

## Attributes

Writable: **9** · Read-only: **1**

### Writable

`msdyn_componentlogicalname`, `msdyn_componenttype`, `msdyn_name`, `msdyn_primaryentityname`, `msdyn_solutioncomponentcountsummaryid`, `msdyn_solutionid`, `msdyn_subtype`, `msdyn_total`, `msdyn_workflowcategory`

### Read-only

`organizationid`

## Relationships




## Source

Generated from [msdyn_solutioncomponentcountsummary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_solutioncomponentcountsummary')) on 2026-05-07.