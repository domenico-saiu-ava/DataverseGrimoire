---
logical: "msdyn_globalrulesetconfiguration"
display: "msdyn_globalrulesetconfiguration"
entitySetName: "msdyn_globalrulesetconfigurations"
primaryId: "msdyn_globalrulesetconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_globalrulesetconfiguration

Entity to store Global Rule Configurations (Not Tied to Workstream) e.g. Config Profile Identification Rules

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_globalrulesetconfiguration` |
| Display name | msdyn_globalrulesetconfiguration |
| Display (plural) | msdyn_globalrulesetconfiguration |
| Schema name | `msdyn_globalrulesetconfiguration` |
| Entity set (Web API) | `msdyn_globalrulesetconfigurations` |
| Primary id attribute | `msdyn_globalrulesetconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_globalrulesetconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_globalrulesetconfigurations(<guid>)
POST /api/data/v9.2/msdyn_globalrulesetconfigurations
PATCH /api/data/v9.2/msdyn_globalrulesetconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_globalrulesetconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_decisionrulesetid`, `msdyn_globalrulesetconfigurationid`, `msdyn_name`, `msdyn_ruletype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_globalrulesetconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_globalrulesetconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_globalrulesetconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_globalrulesetconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_globalrulesetconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_globalrulesetconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_globalrulesetconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_globalrulesetconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_globalrulesetconfiguration_msdyn_decisionrulesetid_msdyn_decisionruleset` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_decisionrulesetid` | `msdyn_decisionrulesetid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_globalrulesetconfiguration_SyncErrors` | [msdyn_globalrulesetconfiguration](msdyn_globalrulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_globalrulesetconfiguration` |
| `msdyn_globalrulesetconfiguration_DuplicateMatchingRecord` | [msdyn_globalrulesetconfiguration](msdyn_globalrulesetconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_globalrulesetconfiguration` |
| `msdyn_globalrulesetconfiguration_DuplicateBaseRecord` | [msdyn_globalrulesetconfiguration](msdyn_globalrulesetconfiguration.md) | `baserecordid` | `baserecordid_msdyn_globalrulesetconfiguration` |
| `msdyn_globalrulesetconfiguration_AsyncOperations` | [msdyn_globalrulesetconfiguration](msdyn_globalrulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_globalrulesetconfiguration` |
| `msdyn_globalrulesetconfiguration_MailboxTrackingFolders` | [msdyn_globalrulesetconfiguration](msdyn_globalrulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_globalrulesetconfiguration` |
| `msdyn_globalrulesetconfiguration_UserEntityInstanceDatas` | [msdyn_globalrulesetconfiguration](msdyn_globalrulesetconfiguration.md) | `objectid` | `objectid_msdyn_globalrulesetconfiguration` |
| `msdyn_globalrulesetconfiguration_ProcessSession` | [msdyn_globalrulesetconfiguration](msdyn_globalrulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_globalrulesetconfiguration` |
| `msdyn_globalrulesetconfiguration_BulkDeleteFailures` | [msdyn_globalrulesetconfiguration](msdyn_globalrulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_globalrulesetconfiguration` |
| `msdyn_globalrulesetconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_globalrulesetconfiguration](msdyn_globalrulesetconfiguration.md) | `objectid` | `objectid_msdyn_globalrulesetconfiguration` |


## Source

Generated from [msdyn_globalrulesetconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_globalrulesetconfiguration')) on 2026-05-07.