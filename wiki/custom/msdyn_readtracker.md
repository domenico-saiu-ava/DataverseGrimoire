---
logical: "msdyn_readtracker"
display: "Registrazione lettura"
entitySetName: "msdyn_readtrackers"
primaryId: "msdyn_readtrackerid"
primaryName: "msdyn_name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Registrazione lettura

Tiene traccia dei record letti da un utente nel sistema

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_readtracker` |
| Display name | Registrazione lettura |
| Display (plural) | Registrazioni lettura |
| Schema name | `msdyn_readtracker` |
| Entity set (Web API) | `msdyn_readtrackers` |
| Primary id attribute | `msdyn_readtrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_readtrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_readtrackers(<guid>)
POST /api/data/v9.2/msdyn_readtrackers
PATCH /api/data/v9.2/msdyn_readtrackers(<guid>)
DELETE /api/data/v9.2/msdyn_readtrackers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_lastreadon`, `msdyn_name`, `msdyn_readstatus`, `msdyn_readtrackerid`, `msdyn_regardingobjectid`, `msdyn_regardingobjectidserialized`, `msdyn_userid`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_readtracker_poly_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `msdyn_readtracker_poly_incident` | [incident](incident.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `lk_msdyn_readtracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_readtracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_readtracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_readtracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_readtracker` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_readtracker` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_readtracker` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_readtracker` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_readtracker_systemuser` | [systemuser](systemuser.md) | `msdyn_userid` | `msdyn_userId` |
| `msdyn_readtracker_poly_activitypointer` | [activitypointer](activitypointer.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `msdyn_readtracker_poly_email` | [email](email.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |
| `msdyn_readtracker_poly_task` | [task](task.md) | `msdyn_regardingobjectid` | `msdyn_RegardingObjectId` |



## Source

Generated from [msdyn_readtracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_readtracker')) on 2026-05-07.