---
logical: "msdyn_contactcentergeneratedrule"
display: "Contact Center Generated Rule"
entitySetName: "msdyn_contactcentergeneratedrules"
primaryId: "msdyn_contactcentergeneratedruleid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contact Center Generated Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_contactcentergeneratedrule` |
| Display name | Contact Center Generated Rule |
| Display (plural) | Contact Center Generated Rules |
| Schema name | `msdyn_contactcentergeneratedrule` |
| Entity set (Web API) | `msdyn_contactcentergeneratedrules` |
| Primary id attribute | `msdyn_contactcentergeneratedruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_contactcentergeneratedrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_contactcentergeneratedrules(<guid>)
POST /api/data/v9.2/msdyn_contactcentergeneratedrules
PATCH /api/data/v9.2/msdyn_contactcentergeneratedrules(<guid>)
DELETE /api/data/v9.2/msdyn_contactcentergeneratedrules(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_contactcentergeneratedruleid`, `msdyn_failurereason`, `msdyn_generatedrule`, `msdyn_inputcontract`, `msdyn_name`, `msdyn_outputcontract`, `msdyn_prompt`, `msdyn_publishstatus`, `msdyn_queueids`, `msdyn_status`, `msdyn_triggertype`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_contactcentergeneratedrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_contactcentergeneratedrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_contactcentergeneratedrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_contactcentergeneratedrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_contactcentergeneratedrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_contactcentergeneratedrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_contactcentergeneratedrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_contactcentergeneratedrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_contactcentergeneratedrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_contactcentergeneratedrule')) on 2026-05-07.