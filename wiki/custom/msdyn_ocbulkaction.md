---
logical: "msdyn_ocbulkaction"
display: "Azione in blocco"
entitySetName: "msdyn_ocbulkactions"
primaryId: "msdyn_ocbulkactionid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Azione in blocco

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocbulkaction` |
| Display name | Azione in blocco |
| Display (plural) | Cronologia azioni in blocco |
| Schema name | `msdyn_ocbulkaction` |
| Entity set (Web API) | `msdyn_ocbulkactions` |
| Primary id attribute | `msdyn_ocbulkactionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocbulkactions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocbulkactions(<guid>)
POST /api/data/v9.2/msdyn_ocbulkactions
PATCH /api/data/v9.2/msdyn_ocbulkactions(<guid>)
DELETE /api/data/v9.2/msdyn_ocbulkactions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actionstatus`, `msdyn_actionstatusdetails`, `msdyn_bulkactiontype`, `msdyn_createdon`, `msdyn_endtime`, `msdyn_name`, `msdyn_nb_of_recipients`, `msdyn_ocbulkactionid`, `msdyn_starttime`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocbulkaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocbulkaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocbulkaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocbulkaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocbulkaction` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocbulkaction` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocbulkaction` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocbulkaction` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_ocbulkaction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocbulkaction')) on 2026-05-07.