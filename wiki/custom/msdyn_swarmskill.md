---
logical: "msdyn_swarmskill"
display: "Competenza aggregato"
entitySetName: "msdyn_swarmskills"
primaryId: "msdyn_swarmskillid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Competenza aggregato

Archivia le competenze richieste per l'aggregato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmskill` |
| Display name | Competenza aggregato |
| Display (plural) | Competenze aggregato |
| Schema name | `msdyn_swarmskill` |
| Entity set (Web API) | `msdyn_swarmskills` |
| Primary id attribute | `msdyn_swarmskillid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmskills?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmskills(<guid>)
POST /api/data/v9.2/msdyn_swarmskills
PATCH /api/data/v9.2/msdyn_swarmskills(<guid>)
DELETE /api/data/v9.2/msdyn_swarmskills(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_numberofinvites`, `msdyn_skillid`, `msdyn_suggestiontype`, `msdyn_swarmid`, `msdyn_swarmskillid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_swarmskill_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmskill_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmskill_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmskill_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_swarmskill` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_swarmskill` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_swarmskill` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_swarmskill` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_characteristic_msdyn_swarmskill_Skillid` | [characteristic](characteristic.md) | `msdyn_skillid` | `msdyn_skillid` |
| `msdyn_msdyn_swarm_msdyn_swarmskill_swarmid` | [msdyn_swarm](msdyn_swarm.md) | `msdyn_swarmid` | `msdyn_swarmid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarmskill_SyncErrors` | [msdyn_swarmskill](msdyn_swarmskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmskill` |
| `msdyn_swarmskill_DuplicateMatchingRecord` | [msdyn_swarmskill](msdyn_swarmskill.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_swarmskill` |
| `msdyn_swarmskill_DuplicateBaseRecord` | [msdyn_swarmskill](msdyn_swarmskill.md) | `baserecordid` | `baserecordid_msdyn_swarmskill` |
| `msdyn_swarmskill_AsyncOperations` | [msdyn_swarmskill](msdyn_swarmskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmskill` |
| `msdyn_swarmskill_MailboxTrackingFolders` | [msdyn_swarmskill](msdyn_swarmskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmskill` |
| `msdyn_swarmskill_UserEntityInstanceDatas` | [msdyn_swarmskill](msdyn_swarmskill.md) | `objectid` | `objectid_msdyn_swarmskill` |
| `msdyn_swarmskill_ProcessSession` | [msdyn_swarmskill](msdyn_swarmskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmskill` |
| `msdyn_swarmskill_BulkDeleteFailures` | [msdyn_swarmskill](msdyn_swarmskill.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmskill` |
| `msdyn_swarmskill_PrincipalObjectAttributeAccesses` | [msdyn_swarmskill](msdyn_swarmskill.md) | `objectid` | `objectid_msdyn_swarmskill` |


## Source

Generated from [msdyn_swarmskill (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_swarmskill')) on 2026-05-07.