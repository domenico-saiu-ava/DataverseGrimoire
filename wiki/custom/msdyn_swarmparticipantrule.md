---
logical: "msdyn_swarmparticipantrule"
display: "Regola partecipante aggregato"
entitySetName: "msdyn_swarmparticipantrules"
primaryId: "msdyn_swarmparticipantruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola partecipante aggregato

Regole per recuperare i partecipanti in base al loro ruolo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmparticipantrule` |
| Display name | Regola partecipante aggregato |
| Display (plural) | Regole partecipante aggregato |
| Schema name | `msdyn_swarmparticipantrule` |
| Entity set (Web API) | `msdyn_swarmparticipantrules` |
| Primary id attribute | `msdyn_swarmparticipantruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmparticipantrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmparticipantrules(<guid>)
POST /api/data/v9.2/msdyn_swarmparticipantrules
PATCH /api/data/v9.2/msdyn_swarmparticipantrules(<guid>)
DELETE /api/data/v9.2/msdyn_swarmparticipantrules(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_rulexml`, `msdyn_swarmparticipantruleid`, `msdyn_swarmroleid`, `msdyn_swarmtemplateid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_swarmparticipantrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmparticipantrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmparticipantrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmparticipantrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_swarmparticipantrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_swarmparticipantrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_swarmparticipantrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_swarmparticipantrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_swarmrole_msdyn_swarmparticipantrule_swarmroleid` | [msdyn_swarmrole](msdyn_swarmrole.md) | `msdyn_swarmroleid` | `msdyn_swarmroleid` |
| `msdyn_msdyn_swarmtemplate_msdyn_swarmparticipantrule_swarmtemplateid` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `msdyn_swarmtemplateid` | `msdyn_swarmtemplateid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarmparticipantrule_SyncErrors` | [msdyn_swarmparticipantrule](msdyn_swarmparticipantrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipantrule` |
| `msdyn_swarmparticipantrule_DuplicateMatchingRecord` | [msdyn_swarmparticipantrule](msdyn_swarmparticipantrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_swarmparticipantrule` |
| `msdyn_swarmparticipantrule_DuplicateBaseRecord` | [msdyn_swarmparticipantrule](msdyn_swarmparticipantrule.md) | `baserecordid` | `baserecordid_msdyn_swarmparticipantrule` |
| `msdyn_swarmparticipantrule_AsyncOperations` | [msdyn_swarmparticipantrule](msdyn_swarmparticipantrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipantrule` |
| `msdyn_swarmparticipantrule_MailboxTrackingFolders` | [msdyn_swarmparticipantrule](msdyn_swarmparticipantrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipantrule` |
| `msdyn_swarmparticipantrule_UserEntityInstanceDatas` | [msdyn_swarmparticipantrule](msdyn_swarmparticipantrule.md) | `objectid` | `objectid_msdyn_swarmparticipantrule` |
| `msdyn_swarmparticipantrule_ProcessSession` | [msdyn_swarmparticipantrule](msdyn_swarmparticipantrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipantrule` |
| `msdyn_swarmparticipantrule_BulkDeleteFailures` | [msdyn_swarmparticipantrule](msdyn_swarmparticipantrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipantrule` |
| `msdyn_swarmparticipantrule_PrincipalObjectAttributeAccesses` | [msdyn_swarmparticipantrule](msdyn_swarmparticipantrule.md) | `objectid` | `objectid_msdyn_swarmparticipantrule` |


## Source

Generated from [msdyn_swarmparticipantrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_swarmparticipantrule')) on 2026-05-07.