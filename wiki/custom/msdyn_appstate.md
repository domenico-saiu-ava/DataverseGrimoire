---
logical: "msdyn_appstate"
display: "Stato app"
entitySetName: "msdyn_appstates"
primaryId: "msdyn_appstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato app

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appstate` |
| Display name | Stato app |
| Display (plural) | Stato app |
| Schema name | `msdyn_appstate` |
| Entity set (Web API) | `msdyn_appstates` |
| Primary id attribute | `msdyn_appstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_appstates(<guid>)
POST /api/data/v9.2/msdyn_appstates
PATCH /api/data/v9.2/msdyn_appstates(<guid>)
DELETE /api/data/v9.2/msdyn_appstates(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_appstateid`, `msdyn_contactcenterstate`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_appstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_appstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_appstate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_appstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_appstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appstate_SyncErrors` | [msdyn_appstate](msdyn_appstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_appstate` |
| `msdyn_appstate_DuplicateMatchingRecord` | [msdyn_appstate](msdyn_appstate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_appstate` |
| `msdyn_appstate_DuplicateBaseRecord` | [msdyn_appstate](msdyn_appstate.md) | `baserecordid` | `baserecordid_msdyn_appstate` |
| `msdyn_appstate_AsyncOperations` | [msdyn_appstate](msdyn_appstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_appstate` |
| `msdyn_appstate_MailboxTrackingFolders` | [msdyn_appstate](msdyn_appstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_appstate` |
| `msdyn_appstate_UserEntityInstanceDatas` | [msdyn_appstate](msdyn_appstate.md) | `objectid` | `objectid_msdyn_appstate` |
| `msdyn_appstate_ProcessSession` | [msdyn_appstate](msdyn_appstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_appstate` |
| `msdyn_appstate_BulkDeleteFailures` | [msdyn_appstate](msdyn_appstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_appstate` |
| `msdyn_appstate_PrincipalObjectAttributeAccesses` | [msdyn_appstate](msdyn_appstate.md) | `objectid` | `objectid_msdyn_appstate` |


## Source

Generated from [msdyn_appstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_appstate')) on 2026-05-07.