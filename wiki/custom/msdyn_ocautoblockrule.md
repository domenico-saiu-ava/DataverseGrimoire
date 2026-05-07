---
logical: "msdyn_ocautoblockrule"
display: "Regola di blocco automatico"
entitySetName: "msdyn_ocautoblockrules"
primaryId: "msdyn_ocautoblockruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di blocco automatico

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocautoblockrule` |
| Display name | Regola di blocco automatico |
| Display (plural) | Regole di blocco automatico |
| Schema name | `msdyn_ocautoblockrule` |
| Entity set (Web API) | `msdyn_ocautoblockrules` |
| Primary id attribute | `msdyn_ocautoblockruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocautoblockrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocautoblockrules(<guid>)
POST /api/data/v9.2/msdyn_ocautoblockrules
PATCH /api/data/v9.2/msdyn_ocautoblockrules(<guid>)
DELETE /api/data/v9.2/msdyn_ocautoblockrules(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_name`, `msdyn_ocautoblockruleid`, `msdyn_rule`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocautoblockrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocautoblockrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocautoblockrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocautoblockrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocautoblockrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocautoblockrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocautoblockrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocautoblockrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocautoblockrule_msdyn_ocflaggedspam_ruleid` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `msdyn_ruleid` | `msdyn_ruleid` |
| `msdyn_ocautoblockrule_SyncErrors` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautoblockrule` |
| `msdyn_ocautoblockrule_DuplicateMatchingRecord` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocautoblockrule` |
| `msdyn_ocautoblockrule_DuplicateBaseRecord` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `baserecordid` | `baserecordid_msdyn_ocautoblockrule` |
| `msdyn_ocautoblockrule_AsyncOperations` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautoblockrule` |
| `msdyn_ocautoblockrule_MailboxTrackingFolders` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautoblockrule` |
| `msdyn_ocautoblockrule_UserEntityInstanceDatas` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `objectid` | `objectid_msdyn_ocautoblockrule` |
| `msdyn_ocautoblockrule_ProcessSession` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautoblockrule` |
| `msdyn_ocautoblockrule_BulkDeleteFailures` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautoblockrule` |
| `msdyn_ocautoblockrule_PrincipalObjectAttributeAccesses` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `objectid` | `objectid_msdyn_ocautoblockrule` |


## Source

Generated from [msdyn_ocautoblockrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocautoblockrule')) on 2026-05-07.