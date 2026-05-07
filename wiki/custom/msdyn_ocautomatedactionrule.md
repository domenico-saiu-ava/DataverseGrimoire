---
logical: "msdyn_ocautomatedactionrule"
display: "Regola di timeout"
entitySetName: "msdyn_ocautomatedactionrules"
primaryId: "msdyn_ocautomatedactionruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di timeout

Regole di azione automatica multicanale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocautomatedactionrule` |
| Display name | Regola di timeout |
| Display (plural) | Regole di timeout |
| Schema name | `msdyn_ocautomatedactionrule` |
| Entity set (Web API) | `msdyn_ocautomatedactionrules` |
| Primary id attribute | `msdyn_ocautomatedactionruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocautomatedactionrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocautomatedactionrules(<guid>)
POST /api/data/v9.2/msdyn_ocautomatedactionrules
PATCH /api/data/v9.2/msdyn_ocautomatedactionrules(<guid>)
DELETE /api/data/v9.2/msdyn_ocautomatedactionrules(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_actiontype`, `msdyn_eventfrequency`, `msdyn_eventinterval`, `msdyn_eventtype`, `msdyn_name`, `msdyn_ocautomatedactionruleid`, `msdyn_operator`, `msdyn_order`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocautomatedactionrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocautomatedactionrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocautomatedactionrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocautomatedactionrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocautomatedactionrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocautomatedactionrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocautomatedactionrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocautomatedactionrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocautomatedactionrule_SyncErrors` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrule` |
| `msdyn_ocautomatedactionrule_DuplicateMatchingRecord` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocautomatedactionrule` |
| `msdyn_ocautomatedactionrule_DuplicateBaseRecord` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `baserecordid` | `baserecordid_msdyn_ocautomatedactionrule` |
| `msdyn_ocautomatedactionrule_AsyncOperations` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrule` |
| `msdyn_ocautomatedactionrule_MailboxTrackingFolders` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrule` |
| `msdyn_ocautomatedactionrule_UserEntityInstanceDatas` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `objectid` | `objectid_msdyn_ocautomatedactionrule` |
| `msdyn_ocautomatedactionrule_ProcessSession` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrule` |
| `msdyn_ocautomatedactionrule_BulkDeleteFailures` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocautomatedactionrule` |
| `msdyn_ocautomatedactionrule_PrincipalObjectAttributeAccesses` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `objectid` | `objectid_msdyn_ocautomatedactionrule` |
| `msdyn_msdyn_ocautomatedactionrule_msdyn_ocautomatedactionrulesmapping_automatedactionruleId` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `msdyn_automatedactionruleid` | `msdyn_automatedactionruleId` |
| `msdyn_ocautomatedactionrule_msdyn_ocautomatedactionrule_msdyn_oclocalizationdata` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | `msdyn_loc_ocautomatedactionruleid` | `msdyn_loc_ocautomatedactionruleid` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_channelprofile_msdyn_ocautomatedactionrule` | [msdyn_channelprofile](msdyn_channelprofile.md) | _n/a_ | `msdyn_msdyn_channelprofile_msdyn_ocautomatedactionrule` |

## Source

Generated from [msdyn_ocautomatedactionrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocautomatedactionrule')) on 2026-05-07.