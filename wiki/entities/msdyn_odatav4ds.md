---
logical: "msdyn_odatav4ds"
display: "OData v4 Data Source"
entitySetName: "msdyn_odatav4ds"
primaryId: "msdyn_odatav4dsid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# OData v4 Data Source

Data sources used by the OData v4 data provider to access data from an external web service.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_odatav4ds` |
| Display name | OData v4 Data Source |
| Display (plural) | OData v4 Data Sources |
| Schema name | `msdyn_odatav4ds` |
| Entity set (Web API) | `msdyn_odatav4ds` |
| Primary id attribute | `msdyn_odatav4dsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_odatav4ds?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_odatav4ds(<guid>)
POST /api/data/v9.2/msdyn_odatav4ds
PATCH /api/data/v9.2/msdyn_odatav4ds(<guid>)
DELETE /api/data/v9.2/msdyn_odatav4ds(<guid>)
```

## Attributes

Writable: **38** · Read-only: **0**

### Writable

`msdyn_description`, `msdyn_isparameter10header`, `msdyn_isparameter1header`, `msdyn_isparameter2header`, `msdyn_isparameter3header`, `msdyn_isparameter4header`, `msdyn_isparameter5header`, `msdyn_isparameter6header`, `msdyn_isparameter7header`, `msdyn_isparameter8header`, `msdyn_isparameter9header`, `msdyn_name`, `msdyn_odatav4dsId`, `msdyn_paginationmode`, `msdyn_paginationtype`, `msdyn_parameter10name`, `msdyn_parameter10value`, `msdyn_parameter1name`, `msdyn_parameter1value`, `msdyn_parameter2name`, `msdyn_parameter2value`, `msdyn_parameter3name`, `msdyn_parameter3value`, `msdyn_parameter4name`, `msdyn_parameter4value`, `msdyn_parameter5name`, `msdyn_parameter5value`, `msdyn_parameter6name`, `msdyn_parameter6value`, `msdyn_parameter7name`, `msdyn_parameter7value`, `msdyn_parameter8name`, `msdyn_parameter8value`, `msdyn_parameter9name`, `msdyn_parameter9value`, `msdyn_returninlinecount`, `msdyn_timeout`, `msdyn_uri`

## Relationships




## Source

Generated from [msdyn_odatav4ds.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_odatav4ds.md) on 2026-05-06.