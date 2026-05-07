---
logical: "msdyn_adminappstate"
display: "AdminAppState"
entitySetName: "msdyn_adminappstates"
primaryId: "msdyn_adminappstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AdminAppState

Stato per ogni utente nell'app per l'amministratore

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_adminappstate` |
| Display name | AdminAppState |
| Display (plural) | AdminAppStates |
| Schema name | `msdyn_adminappstate` |
| Entity set (Web API) | `msdyn_adminappstates` |
| Primary id attribute | `msdyn_adminappstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_adminappstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_adminappstates(<guid>)
POST /api/data/v9.2/msdyn_adminappstates
PATCH /api/data/v9.2/msdyn_adminappstates(<guid>)
DELETE /api/data/v9.2/msdyn_adminappstates(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_adminappstateid`, `msdyn_frestate`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_adminappstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_adminappstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_adminappstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_adminappstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_adminappstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_adminappstate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_adminappstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_adminappstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_adminappstate_SyncErrors` | [msdyn_adminappstate](msdyn_adminappstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_adminappstate` |
| `msdyn_adminappstate_AsyncOperations` | [msdyn_adminappstate](msdyn_adminappstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_adminappstate` |
| `msdyn_adminappstate_MailboxTrackingFolders` | [msdyn_adminappstate](msdyn_adminappstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_adminappstate` |
| `msdyn_adminappstate_UserEntityInstanceDatas` | [msdyn_adminappstate](msdyn_adminappstate.md) | `objectid` | `objectid_msdyn_adminappstate` |
| `msdyn_adminappstate_ProcessSession` | [msdyn_adminappstate](msdyn_adminappstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_adminappstate` |
| `msdyn_adminappstate_BulkDeleteFailures` | [msdyn_adminappstate](msdyn_adminappstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_adminappstate` |
| `msdyn_adminappstate_PrincipalObjectAttributeAccesses` | [msdyn_adminappstate](msdyn_adminappstate.md) | `objectid` | `objectid_msdyn_adminappstate` |


## Source

Generated from [msdyn_adminappstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_adminappstate')) on 2026-05-07.