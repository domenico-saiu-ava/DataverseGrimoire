---
logical: "msdyn_solutionhistory"
display: "Cronologia delle soluzioni"
entitySetName: "msdyn_solutionhistories"
primaryId: "msdyn_solutionhistoryid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cronologia delle soluzioni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutionhistory` |
| Display name | Cronologia delle soluzioni |
| Display (plural) | Cronologia delle soluzioni |
| Schema name | `msdyn_solutionhistory` |
| Entity set (Web API) | `msdyn_solutionhistories` |
| Primary id attribute | `msdyn_solutionhistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutionhistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutionhistories(<guid>)
POST /api/data/v9.2/msdyn_solutionhistories
PATCH /api/data/v9.2/msdyn_solutionhistories(<guid>)
DELETE /api/data/v9.2/msdyn_solutionhistories(<guid>)
```

## Attributes

Writable: **26** · Read-only: **0**

### Writable

`msdyn_activityid`, `msdyn_correlationid`, `msdyn_endtime`, `msdyn_errorcode`, `msdyn_exceptionmessage`, `msdyn_exceptionstack`, `msdyn_ismanaged`, `msdyn_isoverwritecustomizations`, `msdyn_ispatch`, `msdyn_maxretries`, `msdyn_name`, `msdyn_operation`, `msdyn_packagename`, `msdyn_packageversion`, `msdyn_publisherid`, `msdyn_publishername`, `msdyn_result`, `msdyn_retrycount`, `msdyn_solutionhistorydescription`, `msdyn_solutionhistoryid`, `msdyn_solutionid`, `msdyn_solutionversion`, `msdyn_starttime`, `msdyn_status`, `msdyn_suboperation`, `msdyn_totaltime`

## Relationships




## Source

Generated from [msdyn_solutionhistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_solutionhistory')) on 2026-05-07.