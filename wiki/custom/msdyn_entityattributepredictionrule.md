---
logical: "msdyn_entityattributepredictionrule"
display: "Regola previsione attributo entità"
entitySetName: "msdyn_entityattributepredictionrules"
primaryId: "msdyn_entityattributepredictionruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola previsione attributo entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityattributepredictionrule` |
| Display name | Regola previsione attributo entità |
| Display (plural) | Regole previsione attributo entità |
| Schema name | `msdyn_EntityAttributePredictionRule` |
| Entity set (Web API) | `msdyn_entityattributepredictionrules` |
| Primary id attribute | `msdyn_entityattributepredictionruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityattributepredictionrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityattributepredictionrules(<guid>)
POST /api/data/v9.2/msdyn_entityattributepredictionrules
PATCH /api/data/v9.2/msdyn_entityattributepredictionrules(<guid>)
DELETE /api/data/v9.2/msdyn_entityattributepredictionrules(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_conditionsxml`, `msdyn_entityattributepredictionruleid`, `msdyn_isglobal`, `msdyn_name`, `msdyn_order`, `msdyn_predictedfields`, `msdyn_regarding`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entityattributepredictionrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityattributepredictionrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityattributepredictionrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityattributepredictionrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_entityattributepredictionrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_entityattributepredictionrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_entityattributepredictionrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_entityattributepredictionrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityattributepredictionrule_SyncErrors` | [msdyn_entityattributepredictionrule](msdyn_entityattributepredictionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattributepredictionrule` |
| `msdyn_entityattributepredictionrule_DuplicateMatchingRecord` | [msdyn_entityattributepredictionrule](msdyn_entityattributepredictionrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_entityattributepredictionrule` |
| `msdyn_entityattributepredictionrule_DuplicateBaseRecord` | [msdyn_entityattributepredictionrule](msdyn_entityattributepredictionrule.md) | `baserecordid` | `baserecordid_msdyn_entityattributepredictionrule` |
| `msdyn_entityattributepredictionrule_AsyncOperations` | [msdyn_entityattributepredictionrule](msdyn_entityattributepredictionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattributepredictionrule` |
| `msdyn_entityattributepredictionrule_MailboxTrackingFolders` | [msdyn_entityattributepredictionrule](msdyn_entityattributepredictionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattributepredictionrule` |
| `msdyn_entityattributepredictionrule_UserEntityInstanceDatas` | [msdyn_entityattributepredictionrule](msdyn_entityattributepredictionrule.md) | `objectid` | `objectid_msdyn_entityattributepredictionrule` |
| `msdyn_entityattributepredictionrule_ProcessSession` | [msdyn_entityattributepredictionrule](msdyn_entityattributepredictionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattributepredictionrule` |
| `msdyn_entityattributepredictionrule_BulkDeleteFailures` | [msdyn_entityattributepredictionrule](msdyn_entityattributepredictionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityattributepredictionrule` |
| `msdyn_entityattributepredictionrule_PrincipalObjectAttributeAccesses` | [msdyn_entityattributepredictionrule](msdyn_entityattributepredictionrule.md) | `objectid` | `objectid_msdyn_entityattributepredictionrule` |


## Source

Generated from [msdyn_entityattributepredictionrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entityattributepredictionrule')) on 2026-05-07.