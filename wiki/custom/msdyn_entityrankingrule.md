---
logical: "msdyn_entityrankingrule"
display: "EntityRankingRule"
entitySetName: "msdyn_entityrankingrules"
primaryId: "msdyn_entityrankingruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# EntityRankingRule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityrankingrule` |
| Display name | EntityRankingRule |
| Display (plural) | EntityRankingRules |
| Schema name | `msdyn_entityrankingrule` |
| Entity set (Web API) | `msdyn_entityrankingrules` |
| Primary id attribute | `msdyn_entityrankingruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityrankingrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityrankingrules(<guid>)
POST /api/data/v9.2/msdyn_entityrankingrules
PATCH /api/data/v9.2/msdyn_entityrankingrules(<guid>)
DELETE /api/data/v9.2/msdyn_entityrankingrules(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_enabled`, `msdyn_entityname`, `msdyn_entityrankingruleid`, `msdyn_fetchxmlrule`, `msdyn_name`, `msdyn_objecttypecode`, `msdyn_oobrule`, `msdyn_overriddenrank`, `msdyn_rulepriority`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entityrankingrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityrankingrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityrankingrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityrankingrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_entityrankingrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_entityrankingrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_entityrankingrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_entityrankingrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityrankingrule_SyncErrors` | [msdyn_entityrankingrule](msdyn_entityrankingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrankingrule` |
| `msdyn_entityrankingrule_AsyncOperations` | [msdyn_entityrankingrule](msdyn_entityrankingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrankingrule` |
| `msdyn_entityrankingrule_MailboxTrackingFolders` | [msdyn_entityrankingrule](msdyn_entityrankingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrankingrule` |
| `msdyn_entityrankingrule_UserEntityInstanceDatas` | [msdyn_entityrankingrule](msdyn_entityrankingrule.md) | `objectid` | `objectid_msdyn_entityrankingrule` |
| `msdyn_entityrankingrule_ProcessSession` | [msdyn_entityrankingrule](msdyn_entityrankingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrankingrule` |
| `msdyn_entityrankingrule_BulkDeleteFailures` | [msdyn_entityrankingrule](msdyn_entityrankingrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityrankingrule` |
| `msdyn_entityrankingrule_PrincipalObjectAttributeAccesses` | [msdyn_entityrankingrule](msdyn_entityrankingrule.md) | `objectid` | `objectid_msdyn_entityrankingrule` |


## Source

Generated from [msdyn_entityrankingrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entityrankingrule')) on 2026-05-07.