---
logical: "msdyn_timetracker"
display: "Tracker temporale"
entitySetName: "msdyn_timetrackers"
primaryId: "msdyn_timetrackerid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tracker temporale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_timetracker` |
| Display name | Tracker temporale |
| Display (plural) | Tracker temporale |
| Schema name | `msdyn_timetracker` |
| Entity set (Web API) | `msdyn_timetrackers` |
| Primary id attribute | `msdyn_timetrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_timetrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_timetrackers(<guid>)
POST /api/data/v9.2/msdyn_timetrackers
PATCH /api/data/v9.2/msdyn_timetrackers(<guid>)
DELETE /api/data/v9.2/msdyn_timetrackers(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_category`, `msdyn_duration`, `msdyn_name`, `msdyn_reasoncategoryfortimelog`, `msdyn_reasonfortimelog`, `msdyn_regardingentity`, `msdyn_starttime`, `msdyn_timetrackerid`, `msdyn_timevaluepercategory`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_timetracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_timetracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_timetracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_timetracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_timetracker` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_timetracker` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_timetracker` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_timetracker` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_timetracker_regardingentity_Incident` | [incident](incident.md) | `msdyn_regardingentity` | `msdyn_regardingentity` |



## Source

Generated from [msdyn_timetracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_timetracker')) on 2026-05-07.