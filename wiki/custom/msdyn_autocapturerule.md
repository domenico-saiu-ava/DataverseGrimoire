---
logical: "msdyn_autocapturerule"
display: "Regola di acquisizione automatica"
entitySetName: "msdyn_autocapturerules"
primaryId: "msdyn_autocaptureruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di acquisizione automatica

Auto Capture Rules

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autocapturerule` |
| Display name | Regola di acquisizione automatica |
| Display (plural) | Regole di acquisizione automatica |
| Schema name | `msdyn_autocapturerule` |
| Entity set (Web API) | `msdyn_autocapturerules` |
| Primary id attribute | `msdyn_autocaptureruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autocapturerules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_autocapturerules(<guid>)
POST /api/data/v9.2/msdyn_autocapturerules
PATCH /api/data/v9.2/msdyn_autocapturerules(<guid>)
DELETE /api/data/v9.2/msdyn_autocapturerules(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_autocaptureruleid`, `msdyn_name`, `msdyn_ruledatasource`, `msdyn_rulename`, `msdyn_rulevalue`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_autocapturerule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autocapturerule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autocapturerule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autocapturerule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_autocapturerule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_autocapturerule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_autocapturerule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_autocapturerule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autocapturerule_SyncErrors` | [msdyn_autocapturerule](msdyn_autocapturerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturerule` |
| `msdyn_autocapturerule_DuplicateMatchingRecord` | [msdyn_autocapturerule](msdyn_autocapturerule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_autocapturerule` |
| `msdyn_autocapturerule_DuplicateBaseRecord` | [msdyn_autocapturerule](msdyn_autocapturerule.md) | `baserecordid` | `baserecordid_msdyn_autocapturerule` |
| `msdyn_autocapturerule_AsyncOperations` | [msdyn_autocapturerule](msdyn_autocapturerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturerule` |
| `msdyn_autocapturerule_MailboxTrackingFolders` | [msdyn_autocapturerule](msdyn_autocapturerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturerule` |
| `msdyn_autocapturerule_UserEntityInstanceDatas` | [msdyn_autocapturerule](msdyn_autocapturerule.md) | `objectid` | `objectid_msdyn_autocapturerule` |
| `msdyn_autocapturerule_ProcessSession` | [msdyn_autocapturerule](msdyn_autocapturerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturerule` |
| `msdyn_autocapturerule_BulkDeleteFailures` | [msdyn_autocapturerule](msdyn_autocapturerule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturerule` |
| `msdyn_autocapturerule_PrincipalObjectAttributeAccesses` | [msdyn_autocapturerule](msdyn_autocapturerule.md) | `objectid` | `objectid_msdyn_autocapturerule` |


## Source

Generated from [msdyn_autocapturerule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_autocapturerule')) on 2026-05-07.