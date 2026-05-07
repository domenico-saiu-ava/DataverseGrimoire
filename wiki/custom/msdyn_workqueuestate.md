---
logical: "msdyn_workqueuestate"
display: "Stato record coda di lavoro"
entitySetName: "msdyn_workqueuestates"
primaryId: "msdyn_workqueuestateid"
primaryName: "msdyn_primaryname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato record coda di lavoro

Entità creata per archiviare lo stato dei record WorkQueue

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workqueuestate` |
| Display name | Stato record coda di lavoro |
| Display (plural) | workqueuestate |
| Schema name | `msdyn_workqueuestate` |
| Entity set (Web API) | `msdyn_workqueuestates` |
| Primary id attribute | `msdyn_workqueuestateid` |
| Primary name attribute | `msdyn_primaryname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workqueuestates?$select=msdyn_primaryname&$top=10
GET /api/data/v9.2/msdyn_workqueuestates(<guid>)
POST /api/data/v9.2/msdyn_workqueuestates
PATCH /api/data/v9.2/msdyn_workqueuestates(<guid>)
DELETE /api/data/v9.2/msdyn_workqueuestates(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_isread`, `msdyn_nextactionid`, `msdyn_nextactionsource`, `msdyn_primaryname`, `msdyn_workqueuestateid`, `msdyn_wqstateuniquekey`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_workqueuestate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_workqueuestate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_workqueuestate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_workqueuestate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_workqueuestate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_workqueuestate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_workqueuestate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_workqueuestate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workqueuestate_SyncErrors` | [msdyn_workqueuestate](msdyn_workqueuestate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueuestate` |
| `msdyn_workqueuestate_DuplicateMatchingRecord` | [msdyn_workqueuestate](msdyn_workqueuestate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_workqueuestate` |
| `msdyn_workqueuestate_DuplicateBaseRecord` | [msdyn_workqueuestate](msdyn_workqueuestate.md) | `baserecordid` | `baserecordid_msdyn_workqueuestate` |
| `msdyn_workqueuestate_AsyncOperations` | [msdyn_workqueuestate](msdyn_workqueuestate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueuestate` |
| `msdyn_workqueuestate_MailboxTrackingFolders` | [msdyn_workqueuestate](msdyn_workqueuestate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueuestate` |
| `msdyn_workqueuestate_UserEntityInstanceDatas` | [msdyn_workqueuestate](msdyn_workqueuestate.md) | `objectid` | `objectid_msdyn_workqueuestate` |
| `msdyn_workqueuestate_ProcessSession` | [msdyn_workqueuestate](msdyn_workqueuestate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueuestate` |
| `msdyn_workqueuestate_BulkDeleteFailures` | [msdyn_workqueuestate](msdyn_workqueuestate.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueuestate` |
| `msdyn_workqueuestate_PrincipalObjectAttributeAccesses` | [msdyn_workqueuestate](msdyn_workqueuestate.md) | `objectid` | `objectid_msdyn_workqueuestate` |


## Source

Generated from [msdyn_workqueuestate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_workqueuestate')) on 2026-05-07.