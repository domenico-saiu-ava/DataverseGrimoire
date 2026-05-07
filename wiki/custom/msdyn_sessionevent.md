---
logical: "msdyn_sessionevent"
display: "Evento di sessione"
entitySetName: "msdyn_sessionevents"
primaryId: "msdyn_sessioneventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Evento di sessione

Archivia gli eventi di sessione per una sessione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessionevent` |
| Display name | Evento di sessione |
| Display (plural) | Eventi di sessione |
| Schema name | `msdyn_sessionevent` |
| Entity set (Web API) | `msdyn_sessionevents` |
| Primary id attribute | `msdyn_sessioneventid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessionevents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessionevents(<guid>)
POST /api/data/v9.2/msdyn_sessionevents
PATCH /api/data/v9.2/msdyn_sessionevents(<guid>)
DELETE /api/data/v9.2/msdyn_sessionevents(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_eventinfo`, `msdyn_eventreason`, `msdyn_eventtime`, `msdyn_eventtype`, `msdyn_name`, `msdyn_omnichannelsession`, `msdyn_sessioneventid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sessionevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessionevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessionevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessionevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sessionevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sessionevent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sessionevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sessionevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocsession_sessionevent_nested` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_omnichannelsession` | `msdyn_omnichannelsession` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessionevent_SyncErrors` | [msdyn_sessionevent](msdyn_sessionevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionevent` |
| `msdyn_sessionevent_DuplicateMatchingRecord` | [msdyn_sessionevent](msdyn_sessionevent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sessionevent` |
| `msdyn_sessionevent_DuplicateBaseRecord` | [msdyn_sessionevent](msdyn_sessionevent.md) | `baserecordid` | `baserecordid_msdyn_sessionevent` |
| `msdyn_sessionevent_AsyncOperations` | [msdyn_sessionevent](msdyn_sessionevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionevent` |
| `msdyn_sessionevent_MailboxTrackingFolders` | [msdyn_sessionevent](msdyn_sessionevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionevent` |
| `msdyn_sessionevent_UserEntityInstanceDatas` | [msdyn_sessionevent](msdyn_sessionevent.md) | `objectid` | `objectid_msdyn_sessionevent` |
| `msdyn_sessionevent_ProcessSession` | [msdyn_sessionevent](msdyn_sessionevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionevent` |
| `msdyn_sessionevent_BulkDeleteFailures` | [msdyn_sessionevent](msdyn_sessionevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionevent` |
| `msdyn_sessionevent_PrincipalObjectAttributeAccesses` | [msdyn_sessionevent](msdyn_sessionevent.md) | `objectid` | `objectid_msdyn_sessionevent` |


## Source

Generated from [msdyn_sessionevent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sessionevent')) on 2026-05-07.