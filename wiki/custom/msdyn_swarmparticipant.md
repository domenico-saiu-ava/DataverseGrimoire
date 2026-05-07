---
logical: "msdyn_swarmparticipant"
display: "Partecipante aggregato"
entitySetName: "msdyn_swarmparticipants"
primaryId: "msdyn_swarmparticipantid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Partecipante aggregato

Archivia le informazioni sui partecipanti dell'aggregato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmparticipant` |
| Display name | Partecipante aggregato |
| Display (plural) | Partecipanti aggregato |
| Schema name | `msdyn_swarmparticipant` |
| Entity set (Web API) | `msdyn_swarmparticipants` |
| Primary id attribute | `msdyn_swarmparticipantid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmparticipants?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmparticipants(<guid>)
POST /api/data/v9.2/msdyn_swarmparticipants
PATCH /api/data/v9.2/msdyn_swarmparticipants(<guid>)
DELETE /api/data/v9.2/msdyn_swarmparticipants(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_acceptedon`, `msdyn_name`, `msdyn_rejectedon`, `msdyn_rejectedreason`, `msdyn_swarmid`, `msdyn_swarmparticipantid`, `msdyn_swarmroleid`, `msdyn_userid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_swarmparticipant_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmparticipant_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmparticipant_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmparticipant_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_swarmparticipant` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_swarmparticipant` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_swarmparticipant` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_swarmparticipant` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_swarm_msdyn_swarmparticipant_swarmid` | [msdyn_swarm](msdyn_swarm.md) | `msdyn_swarmid` | `msdyn_swarmid` |
| `msdyn_msdyn_swarmrole_msdyn_swarmparticipant_swarmroleid` | [msdyn_swarmrole](msdyn_swarmrole.md) | `msdyn_swarmroleid` | `msdyn_swarmroleid` |
| `msdyn_systemuser_msdyn_swarmparticipant_userid` | [systemuser](systemuser.md) | `msdyn_userid` | `msdyn_userid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarmparticipant_SyncErrors` | [msdyn_swarmparticipant](msdyn_swarmparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipant` |
| `msdyn_swarmparticipant_DuplicateMatchingRecord` | [msdyn_swarmparticipant](msdyn_swarmparticipant.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_swarmparticipant` |
| `msdyn_swarmparticipant_DuplicateBaseRecord` | [msdyn_swarmparticipant](msdyn_swarmparticipant.md) | `baserecordid` | `baserecordid_msdyn_swarmparticipant` |
| `msdyn_swarmparticipant_AsyncOperations` | [msdyn_swarmparticipant](msdyn_swarmparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipant` |
| `msdyn_swarmparticipant_MailboxTrackingFolders` | [msdyn_swarmparticipant](msdyn_swarmparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipant` |
| `msdyn_swarmparticipant_UserEntityInstanceDatas` | [msdyn_swarmparticipant](msdyn_swarmparticipant.md) | `objectid` | `objectid_msdyn_swarmparticipant` |
| `msdyn_swarmparticipant_ProcessSession` | [msdyn_swarmparticipant](msdyn_swarmparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipant` |
| `msdyn_swarmparticipant_BulkDeleteFailures` | [msdyn_swarmparticipant](msdyn_swarmparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmparticipant` |
| `msdyn_swarmparticipant_PrincipalObjectAttributeAccesses` | [msdyn_swarmparticipant](msdyn_swarmparticipant.md) | `objectid` | `objectid_msdyn_swarmparticipant` |


## Source

Generated from [msdyn_swarmparticipant (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_swarmparticipant')) on 2026-05-07.