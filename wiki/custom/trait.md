---
logical: "trait"
display: "trait"
entitySetName: "traits"
primaryId: "traitid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# trait

## Identity

| Property | Value |
| --- | --- |
| Logical name | `trait` |
| Display name | trait |
| Display (plural) | traits |
| Schema name | `trait` |
| Entity set (Web API) | `traits` |
| Primary id attribute | `traitid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/traits?$select=name&$top=10
GET /api/data/v9.2/traits(<guid>)
POST /api/data/v9.2/traits
PATCH /api/data/v9.2/traits(<guid>)
DELETE /api/data/v9.2/traits(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`alternativekey`, `contents`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `partitionid`, `properties`, `traitid`, `traittype`, `ttlinseconds`, `userid`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_trait_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_trait_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_trait_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_trait_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_trait` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_trait` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_trait` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_trait` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [trait (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='trait')) on 2026-05-07.