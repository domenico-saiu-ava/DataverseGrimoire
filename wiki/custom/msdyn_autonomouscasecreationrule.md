---
logical: "msdyn_autonomouscasecreationrule"
display: "Regole di creazione e aggiornamento autonomo dei casi"
entitySetName: "msdyn_autonomouscasecreationrules"
primaryId: "msdyn_autonomouscasecreationruleid"
primaryName: "msdyn_rulename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regole di creazione e aggiornamento autonomo dei casi

Regole di creazione e aggiornamento autonomo dei casi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autonomouscasecreationrule` |
| Display name | Regole di creazione e aggiornamento autonomo dei casi |
| Display (plural) | Regole di creazione e aggiornamento autonomo dei casi |
| Schema name | `msdyn_autonomouscasecreationrule` |
| Entity set (Web API) | `msdyn_autonomouscasecreationrules` |
| Primary id attribute | `msdyn_autonomouscasecreationruleid` |
| Primary name attribute | `msdyn_rulename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autonomouscasecreationrules?$select=msdyn_rulename&$top=10
GET /api/data/v9.2/msdyn_autonomouscasecreationrules(<guid>)
POST /api/data/v9.2/msdyn_autonomouscasecreationrules
PATCH /api/data/v9.2/msdyn_autonomouscasecreationrules(<guid>)
DELETE /api/data/v9.2/msdyn_autonomouscasecreationrules(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_autonomouscasecreationruleid`, `msdyn_conditionsxml`, `msdyn_customapiname`, `msdyn_order`, `msdyn_predictorfields`, `msdyn_regarding`, `msdyn_rulename`, `msdyn_uniquename`, `msdyn_useCustomApi`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_autonomouscasecreationrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autonomouscasecreationrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autonomouscasecreationrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autonomouscasecreationrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_autonomouscasecreationrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_autonomouscasecreationrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_autonomouscasecreationrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_autonomouscasecreationrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autonomouscasecreationrule_SyncErrors` | [msdyn_autonomouscasecreationrule](msdyn_autonomouscasecreationrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomouscasecreationrule` |
| `msdyn_autonomouscasecreationrule_DuplicateMatchingRecord` | [msdyn_autonomouscasecreationrule](msdyn_autonomouscasecreationrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_autonomouscasecreationrule` |
| `msdyn_autonomouscasecreationrule_DuplicateBaseRecord` | [msdyn_autonomouscasecreationrule](msdyn_autonomouscasecreationrule.md) | `baserecordid` | `baserecordid_msdyn_autonomouscasecreationrule` |
| `msdyn_autonomouscasecreationrule_AsyncOperations` | [msdyn_autonomouscasecreationrule](msdyn_autonomouscasecreationrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomouscasecreationrule` |
| `msdyn_autonomouscasecreationrule_MailboxTrackingFolders` | [msdyn_autonomouscasecreationrule](msdyn_autonomouscasecreationrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomouscasecreationrule` |
| `msdyn_autonomouscasecreationrule_UserEntityInstanceDatas` | [msdyn_autonomouscasecreationrule](msdyn_autonomouscasecreationrule.md) | `objectid` | `objectid_msdyn_autonomouscasecreationrule` |
| `msdyn_autonomouscasecreationrule_ProcessSession` | [msdyn_autonomouscasecreationrule](msdyn_autonomouscasecreationrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomouscasecreationrule` |
| `msdyn_autonomouscasecreationrule_BulkDeleteFailures` | [msdyn_autonomouscasecreationrule](msdyn_autonomouscasecreationrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_autonomouscasecreationrule` |
| `msdyn_autonomouscasecreationrule_PrincipalObjectAttributeAccesses` | [msdyn_autonomouscasecreationrule](msdyn_autonomouscasecreationrule.md) | `objectid` | `objectid_msdyn_autonomouscasecreationrule` |


## Source

Generated from [msdyn_autonomouscasecreationrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_autonomouscasecreationrule')) on 2026-05-07.