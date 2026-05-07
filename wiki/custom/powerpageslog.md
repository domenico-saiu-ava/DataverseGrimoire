---
logical: "powerpageslog"
display: "Registro di Power Pages"
entitySetName: "powerpageslogs"
primaryId: "powerpageslogid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Registro di Power Pages

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpageslog` |
| Display name | Registro di Power Pages |
| Display (plural) | Log Power Pages |
| Schema name | `PowerPagesLog` |
| Entity set (Web API) | `powerpageslogs` |
| Primary id attribute | `powerpageslogid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpageslogs?$select=name&$top=10
GET /api/data/v9.2/powerpageslogs(<guid>)
POST /api/data/v9.2/powerpageslogs
PATCH /api/data/v9.2/powerpageslogs(<guid>)
DELETE /api/data/v9.2/powerpageslogs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`clientip`, `content`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `portalid`, `powerpageslogid`, `requestpath`, `requesturl`, `ttlinseconds`, `type`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerpageslog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpageslog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpageslog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpageslog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpageslog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpageslog` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpageslog` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpageslog` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [powerpageslog (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpageslog')) on 2026-05-07.