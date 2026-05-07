---
logical: "msdyn_intentcontexthistory"
display: "Cronologia contesto finalità"
entitySetName: "msdyn_intentcontexthistories"
primaryId: "msdyn_intentcontexthistoryid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cronologia contesto finalità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentcontexthistory` |
| Display name | Cronologia contesto finalità |
| Display (plural) | Cronologie contesto finalità |
| Schema name | `msdyn_IntentContextHistory` |
| Entity set (Web API) | `msdyn_intentcontexthistories` |
| Primary id attribute | `msdyn_intentcontexthistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentcontexthistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentcontexthistories(<guid>)
POST /api/data/v9.2/msdyn_intentcontexthistories
PATCH /api/data/v9.2/msdyn_intentcontexthistories(<guid>)
DELETE /api/data/v9.2/msdyn_intentcontexthistories(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_agentactivitytype`, `msdyn_agenttype`, `msdyn_correlationid`, `msdyn_intentcontext`, `msdyn_intentcontexthistoryid`, `msdyn_lastprocessedtimestamp`, `msdyn_name`, `msdyn_relatedrecordentitylogicalname`, `msdyn_relatedrecordid`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentcontexthistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentcontexthistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentcontexthistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentcontexthistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intentcontexthistory_poly_incident` | [incident](incident.md) | `msdyn_relatedrecordid` | `msdyn_relatedrecordid_incident` |
| `msdyn_intentcontexthistory_poly_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_relatedrecordid` | `msdyn_relatedrecordid_msdyn_ocliveworkitem` |



## Source

Generated from [msdyn_intentcontexthistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentcontexthistory')) on 2026-05-07.