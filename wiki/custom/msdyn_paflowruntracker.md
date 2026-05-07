---
logical: "msdyn_paflowruntracker"
display: "Monitoraggio esecuzione flusso PA"
entitySetName: "msdyn_paflowruntrackers"
primaryId: "msdyn_paflowruntrackerid"
primaryName: "msdyn_runid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Monitoraggio esecuzione flusso PA

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_paflowruntracker` |
| Display name | Monitoraggio esecuzione flusso PA |
| Display (plural) | Monitoraggi esecuzione flusso PA |
| Schema name | `msdyn_PAFlowRunTracker` |
| Entity set (Web API) | `msdyn_paflowruntrackers` |
| Primary id attribute | `msdyn_paflowruntrackerid` |
| Primary name attribute | `msdyn_runid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_paflowruntrackers?$select=msdyn_runid&$top=10
GET /api/data/v9.2/msdyn_paflowruntrackers(<guid>)
POST /api/data/v9.2/msdyn_paflowruntrackers
PATCH /api/data/v9.2/msdyn_paflowruntrackers(<guid>)
DELETE /api/data/v9.2/msdyn_paflowruntrackers(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flowstatus`, `msdyn_paflowruntrackerid`, `msdyn_runid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_paflowruntracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_paflowruntracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_paflowruntracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_paflowruntracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_paflowruntracker` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_paflowruntracker` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_paflowruntracker` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_paflowruntracker` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_paflowruntracker_SyncErrors` | [msdyn_paflowruntracker](msdyn_paflowruntracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_paflowruntracker` |
| `msdyn_paflowruntracker_AsyncOperations` | [msdyn_paflowruntracker](msdyn_paflowruntracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_paflowruntracker` |
| `msdyn_paflowruntracker_MailboxTrackingFolders` | [msdyn_paflowruntracker](msdyn_paflowruntracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_paflowruntracker` |
| `msdyn_paflowruntracker_UserEntityInstanceDatas` | [msdyn_paflowruntracker](msdyn_paflowruntracker.md) | `objectid` | `objectid_msdyn_paflowruntracker` |
| `msdyn_paflowruntracker_ProcessSession` | [msdyn_paflowruntracker](msdyn_paflowruntracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_paflowruntracker` |
| `msdyn_paflowruntracker_BulkDeleteFailures` | [msdyn_paflowruntracker](msdyn_paflowruntracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_paflowruntracker` |
| `msdyn_paflowruntracker_PrincipalObjectAttributeAccesses` | [msdyn_paflowruntracker](msdyn_paflowruntracker.md) | `objectid` | `objectid_msdyn_paflowruntracker` |


## Source

Generated from [msdyn_paflowruntracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_paflowruntracker')) on 2026-05-07.