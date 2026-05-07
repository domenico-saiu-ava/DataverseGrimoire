---
logical: "msdyn_swarmrole"
display: "Ruolo aggregato"
entitySetName: "msdyn_swarmroles"
primaryId: "msdyn_swarmroleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ruolo aggregato

Archivia i diversi ruoli dei partecipanti e il tipo di ruolo associato definiti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmrole` |
| Display name | Ruolo aggregato |
| Display (plural) | Ruoli aggregato |
| Schema name | `msdyn_swarmrole` |
| Entity set (Web API) | `msdyn_swarmroles` |
| Primary id attribute | `msdyn_swarmroleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmroles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmroles(<guid>)
POST /api/data/v9.2/msdyn_swarmroles
PATCH /api/data/v9.2/msdyn_swarmroles(<guid>)
DELETE /api/data/v9.2/msdyn_swarmroles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_roletype`, `msdyn_swarmroleid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_swarmrole_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmrole_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmrole_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmrole_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_swarmrole` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_swarmrole` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_swarmrole` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_swarmrole` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarmrole_SyncErrors` | [msdyn_swarmrole](msdyn_swarmrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmrole` |
| `msdyn_swarmrole_DuplicateMatchingRecord` | [msdyn_swarmrole](msdyn_swarmrole.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_swarmrole` |
| `msdyn_swarmrole_DuplicateBaseRecord` | [msdyn_swarmrole](msdyn_swarmrole.md) | `baserecordid` | `baserecordid_msdyn_swarmrole` |
| `msdyn_swarmrole_AsyncOperations` | [msdyn_swarmrole](msdyn_swarmrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmrole` |
| `msdyn_swarmrole_MailboxTrackingFolders` | [msdyn_swarmrole](msdyn_swarmrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmrole` |
| `msdyn_swarmrole_UserEntityInstanceDatas` | [msdyn_swarmrole](msdyn_swarmrole.md) | `objectid` | `objectid_msdyn_swarmrole` |
| `msdyn_swarmrole_ProcessSession` | [msdyn_swarmrole](msdyn_swarmrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmrole` |
| `msdyn_swarmrole_BulkDeleteFailures` | [msdyn_swarmrole](msdyn_swarmrole.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmrole` |
| `msdyn_swarmrole_PrincipalObjectAttributeAccesses` | [msdyn_swarmrole](msdyn_swarmrole.md) | `objectid` | `objectid_msdyn_swarmrole` |
| `msdyn_msdyn_swarmrole_msdyn_swarmparticipant_swarmroleid` | [msdyn_swarmrole](msdyn_swarmrole.md) | `msdyn_swarmroleid` | `msdyn_swarmroleid` |
| `msdyn_msdyn_swarmrole_msdyn_swarmparticipantrule_swarmroleid` | [msdyn_swarmrole](msdyn_swarmrole.md) | `msdyn_swarmroleid` | `msdyn_swarmroleid` |


## Source

Generated from [msdyn_swarmrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_swarmrole')) on 2026-05-07.