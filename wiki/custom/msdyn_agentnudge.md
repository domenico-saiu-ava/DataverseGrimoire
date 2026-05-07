---
logical: "msdyn_agentnudge"
display: "Suggerimento agente"
entitySetName: "msdyn_agentnudges"
primaryId: "msdyn_agentnudgeid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Suggerimento agente

Rappresenta un'occorrenza di una regola di conformità violata in una conversazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentnudge` |
| Display name | Suggerimento agente |
| Display (plural) | Suggerimenti agente |
| Schema name | `msdyn_AgentNudge` |
| Entity set (Web API) | `msdyn_agentnudges` |
| Primary id attribute | `msdyn_agentnudgeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentnudges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentnudges(<guid>)
POST /api/data/v9.2/msdyn_agentnudges
PATCH /api/data/v9.2/msdyn_agentnudges(<guid>)
DELETE /api/data/v9.2/msdyn_agentnudges(<guid>)
```

## Attributes

Writable: **16** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_agentnudgeid`, `msdyn_escalated`, `msdyn_explanation`, `msdyn_name`, `msdyn_nudgetemplateid`, `msdyn_nudgetext`, `msdyn_ocliveworkitem`, `msdyn_shownudge`, `msdyn_status`, `msdyn_suggestedresponse`, `msdyn_systemuser`, `msdyn_timestamp`, `overriddencreatedon`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_AgentNudge_NudgeTemplateID_msdyn_agentnudgetemplate` | [msdyn_agentnudgetemplate](msdyn_agentnudgetemplate.md) | `msdyn_nudgetemplateid` | `msdyn_NudgeTemplateID` |
| `msdyn_AgentNudge_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitem` | `msdyn_ocliveworkitem` |
| `msdyn_AgentNudge_SystemUser` | [systemuser](systemuser.md) | `msdyn_systemuser` | `msdyn_SystemUser` |
| `lk_msdyn_agentnudge_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentnudge_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentnudge_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentnudge_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [msdyn_agentnudge (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentnudge')) on 2026-05-07.