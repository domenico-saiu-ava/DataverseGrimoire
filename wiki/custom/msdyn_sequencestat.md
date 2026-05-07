---
logical: "msdyn_sequencestat"
display: "Statistiche sequenza"
entitySetName: "msdyn_sequencestats"
primaryId: "msdyn_sequencestatid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Statistiche sequenza

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequencestat` |
| Display name | Statistiche sequenza |
| Display (plural) | Statistiche sequenza |
| Schema name | `msdyn_sequencestat` |
| Entity set (Web API) | `msdyn_sequencestats` |
| Primary id attribute | `msdyn_sequencestatid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sequencestats?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sequencestats(<guid>)
POST /api/data/v9.2/msdyn_sequencestats
PATCH /api/data/v9.2/msdyn_sequencestats(<guid>)
DELETE /api/data/v9.2/msdyn_sequencestats(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_avgtimefortargetcompletion`, `msdyn_name`, `msdyn_range`, `msdyn_sequence`, `msdyn_sequencestatid`, `msdyn_successrate`, `msdyn_targetscompleted`, `msdyn_targetscreated`, `msdyn_targetsdisconnected`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sequencestat_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequencestat_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequencestat_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequencestat_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sequencestat` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sequencestat` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sequencestat` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sequencestat` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_sequence_sequencestat` | [msdyn_sequence](msdyn_sequence.md) | `msdyn_sequence` | `msdyn_sequence` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sequencestat_SyncErrors` | [msdyn_sequencestat](msdyn_sequencestat.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencestat` |
| `msdyn_sequencestat_AsyncOperations` | [msdyn_sequencestat](msdyn_sequencestat.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencestat` |
| `msdyn_sequencestat_MailboxTrackingFolders` | [msdyn_sequencestat](msdyn_sequencestat.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencestat` |
| `msdyn_sequencestat_UserEntityInstanceDatas` | [msdyn_sequencestat](msdyn_sequencestat.md) | `objectid` | `objectid_msdyn_sequencestat` |
| `msdyn_sequencestat_ProcessSession` | [msdyn_sequencestat](msdyn_sequencestat.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencestat` |
| `msdyn_sequencestat_BulkDeleteFailures` | [msdyn_sequencestat](msdyn_sequencestat.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencestat` |
| `msdyn_sequencestat_PrincipalObjectAttributeAccesses` | [msdyn_sequencestat](msdyn_sequencestat.md) | `objectid` | `objectid_msdyn_sequencestat` |


## Source

Generated from [msdyn_sequencestat (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sequencestat')) on 2026-05-07.