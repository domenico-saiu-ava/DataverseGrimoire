---
logical: "msdyn_solutioncomponentsummary"
display: "Solution Component Summary"
entitySetName: "msdyn_solutioncomponentsummaries"
primaryId: "msdyn_solutioncomponentsummaryid"
primaryName: "msdyn_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Solution Component Summary

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_solutioncomponentsummary` |
| Display name | Solution Component Summary |
| Display (plural) | Solution Component Summaries |
| Schema name | `msdyn_solutioncomponentsummary` |
| Entity set (Web API) | `msdyn_solutioncomponentsummaries` |
| Primary id attribute | `msdyn_solutioncomponentsummaryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_solutioncomponentsummaries?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_solutioncomponentsummaries(<guid>)
POST /api/data/v9.2/msdyn_solutioncomponentsummaries
PATCH /api/data/v9.2/msdyn_solutioncomponentsummaries(<guid>)
DELETE /api/data/v9.2/msdyn_solutioncomponentsummaries(<guid>)
```

## Attributes

Writable: **59** · Read-only: **1**

### Writable

`msdyn_canvasappuniqueid`, `msdyn_componentlogicalname`, `msdyn_componenttype`, `msdyn_componenttypename`, `msdyn_connectorinternalid`, `msdyn_createdon`, `msdyn_culture`, `msdyn_deployment`, `msdyn_description`, `msdyn_displayname`, `msdyn_eventhandler`, `msdyn_executionorder`, `msdyn_executionstage`, `msdyn_fieldsecurity`, `msdyn_fieldtype`, `msdyn_hasactivecustomization`, `msdyn_isappaware`, `msdyn_isappawarename`, `msdyn_isauditenabled`, `msdyn_isauditenabledname`, `msdyn_iscustom`, `msdyn_iscustomizable`, `msdyn_iscustomizablename`, `msdyn_iscustomname`, `msdyn_isdefault`, `msdyn_isdefaultname`, `msdyn_ismanaged`, `msdyn_ismanagedname`, `msdyn_isolationmode`, `msdyn_istableenabled`, `msdyn_lcid`, `msdyn_logicalcollectionname`, `msdyn_modifiedon`, `msdyn_name`, `msdyn_objectid`, `msdyn_objecttypecode`, `msdyn_owner`, `msdyn_owningbusinessunit`, `msdyn_primaryentityname`, `msdyn_primaryidattribute`, `msdyn_publickeytoken`, `msdyn_relatedentity`, `msdyn_relatedentityattribute`, `msdyn_schemaname`, `msdyn_sdkmessagename`, `msdyn_solutioncomponentsummaryid`, `msdyn_solutionid`, `msdyn_standardstatus`, `msdyn_status`, `msdyn_statusname`, `msdyn_subtype`, `msdyn_synctoexternalsearchindex`, `msdyn_total`, `msdyn_typename`, `msdyn_uniquename`, `msdyn_version`, `msdyn_workflowcategory`, `msdyn_workflowcategoryname`, `msdyn_workflowidunique`

### Read-only

`organizationid`

## Relationships




## Source

Generated from [msdyn_solutioncomponentsummary (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_solutioncomponentsummary')) on 2026-05-07.