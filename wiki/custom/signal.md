---
logical: "signal"
display: "signal"
entitySetName: "signals"
primaryId: "signalid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# signal

## Identity

| Property | Value |
| --- | --- |
| Logical name | `signal` |
| Display name | signal |
| Display (plural) | signals |
| Schema name | `signal` |
| Entity set (Web API) | `signals` |
| Primary id attribute | `signalid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/signals?$select=name&$top=10
GET /api/data/v9.2/signals(<guid>)
POST /api/data/v9.2/signals
PATCH /api/data/v9.2/signals(<guid>)
DELETE /api/data/v9.2/signals(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`alternativekey`, `contents`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `properties`, `signalid`, `signaltype`, `ttlinseconds`, `userid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_signal_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_signal_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_signal_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_signal_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_signal` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_signal` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_signal` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_signal` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [signal (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='signal')) on 2026-05-07.