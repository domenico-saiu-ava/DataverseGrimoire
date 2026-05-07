---
logical: "msdyn_agentgrouplanguage"
display: "Lingua gruppo di agenti"
entitySetName: "msdyn_agentgrouplanguages"
primaryId: "msdyn_agentgrouplanguageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Lingua gruppo di agenti

Rappresenta l'associazione dei gruppi di utenti alla lingua

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentgrouplanguage` |
| Display name | Lingua gruppo di agenti |
| Display (plural) | Lingue gruppo di agenti |
| Schema name | `msdyn_agentgrouplanguage` |
| Entity set (Web API) | `msdyn_agentgrouplanguages` |
| Primary id attribute | `msdyn_agentgrouplanguageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentgrouplanguages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentgrouplanguages(<guid>)
POST /api/data/v9.2/msdyn_agentgrouplanguages
PATCH /api/data/v9.2/msdyn_agentgrouplanguages(<guid>)
DELETE /api/data/v9.2/msdyn_agentgrouplanguages(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentgroupid`, `msdyn_agentgrouplanguageid`, `msdyn_languageid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentgrouplanguage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgrouplanguage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgrouplanguage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgrouplanguage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentgrouplanguage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentgrouplanguage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentgrouplanguage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentgrouplanguage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_agentgroup_msdyn_agentgrouplanguage_agentgroupid` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_msdyn_language_msdyn_agentgrouplanguage_languageid` | [msdyn_language](msdyn_language.md) | `msdyn_languageid` | `msdyn_languageid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgrouplanguage_SyncErrors` | [msdyn_agentgrouplanguage](msdyn_agentgrouplanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgrouplanguage` |
| `msdyn_agentgrouplanguage_DuplicateMatchingRecord` | [msdyn_agentgrouplanguage](msdyn_agentgrouplanguage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentgrouplanguage` |
| `msdyn_agentgrouplanguage_DuplicateBaseRecord` | [msdyn_agentgrouplanguage](msdyn_agentgrouplanguage.md) | `baserecordid` | `baserecordid_msdyn_agentgrouplanguage` |
| `msdyn_agentgrouplanguage_AsyncOperations` | [msdyn_agentgrouplanguage](msdyn_agentgrouplanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgrouplanguage` |
| `msdyn_agentgrouplanguage_MailboxTrackingFolders` | [msdyn_agentgrouplanguage](msdyn_agentgrouplanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgrouplanguage` |
| `msdyn_agentgrouplanguage_UserEntityInstanceDatas` | [msdyn_agentgrouplanguage](msdyn_agentgrouplanguage.md) | `objectid` | `objectid_msdyn_agentgrouplanguage` |
| `msdyn_agentgrouplanguage_ProcessSession` | [msdyn_agentgrouplanguage](msdyn_agentgrouplanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgrouplanguage` |
| `msdyn_agentgrouplanguage_BulkDeleteFailures` | [msdyn_agentgrouplanguage](msdyn_agentgrouplanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgrouplanguage` |
| `msdyn_agentgrouplanguage_PrincipalObjectAttributeAccesses` | [msdyn_agentgrouplanguage](msdyn_agentgrouplanguage.md) | `objectid` | `objectid_msdyn_agentgrouplanguage` |


## Source

Generated from [msdyn_agentgrouplanguage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentgrouplanguage')) on 2026-05-07.