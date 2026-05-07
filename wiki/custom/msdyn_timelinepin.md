---
logical: "msdyn_timelinepin"
display: "Segnaposto sequenza temporale"
entitySetName: "msdyn_timelinepins"
primaryId: "msdyn_timelinepinid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Segnaposto sequenza temporale

Record segnaposto sequenza temporale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_timelinepin` |
| Display name | Segnaposto sequenza temporale |
| Display (plural) | Segnaposto sequenza temporale |
| Schema name | `msdyn_timelinepin` |
| Entity set (Web API) | `msdyn_timelinepins` |
| Primary id attribute | `msdyn_timelinepinid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_timelinepins?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_timelinepins(<guid>)
POST /api/data/v9.2/msdyn_timelinepins
PATCH /api/data/v9.2/msdyn_timelinepins(<guid>)
DELETE /api/data/v9.2/msdyn_timelinepins(<guid>)
```

## Attributes

Writable: **10** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_formrecordid`, `msdyn_name`, `msdyn_pinnedrecordid`, `msdyn_pinnedrecordlogicalname`, `msdyn_timelinecontrolid`, `msdyn_timelinepinid`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_timelinepin_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_timelinepin_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_timelinepin_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_timelinepin_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [msdyn_timelinepin (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_timelinepin')) on 2026-05-07.