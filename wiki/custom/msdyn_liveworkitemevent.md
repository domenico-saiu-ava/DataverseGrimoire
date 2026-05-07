---
logical: "msdyn_liveworkitemevent"
display: "Evento elemento di lavoro live"
entitySetName: "msdyn_liveworkitemevents"
primaryId: "msdyn_liveworkitemeventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Evento elemento di lavoro live

Questa entità acquisisce tutti gli eventi corrispondenti a un elemento di lavoro live.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_liveworkitemevent` |
| Display name | Evento elemento di lavoro live |
| Display (plural) | msdyn_liveworkitemevents |
| Schema name | `msdyn_liveworkitemevent` |
| Entity set (Web API) | `msdyn_liveworkitemevents` |
| Primary id attribute | `msdyn_liveworkitemeventid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_liveworkitemevents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_liveworkitemevents(<guid>)
POST /api/data/v9.2/msdyn_liveworkitemevents
PATCH /api/data/v9.2/msdyn_liveworkitemevents(<guid>)
DELETE /api/data/v9.2/msdyn_liveworkitemevents(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_eventtime`, `msdyn_liveworkitemevent`, `msdyn_liveworkitemeventdata`, `msdyn_liveworkitemeventid`, `msdyn_liveworkitemid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitem_msdyn_liveworkitemevent_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `lk_msdyn_liveworkitemevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_liveworkitemevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_liveworkitemevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_liveworkitemevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_liveworkitemevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_liveworkitemevent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_liveworkitemevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_liveworkitemevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveworkitemevent_SyncErrors` | [msdyn_liveworkitemevent](msdyn_liveworkitemevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkitemevent` |
| `msdyn_liveworkitemevent_DuplicateMatchingRecord` | [msdyn_liveworkitemevent](msdyn_liveworkitemevent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_liveworkitemevent` |
| `msdyn_liveworkitemevent_DuplicateBaseRecord` | [msdyn_liveworkitemevent](msdyn_liveworkitemevent.md) | `baserecordid` | `baserecordid_msdyn_liveworkitemevent` |
| `msdyn_liveworkitemevent_AsyncOperations` | [msdyn_liveworkitemevent](msdyn_liveworkitemevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkitemevent` |
| `msdyn_liveworkitemevent_MailboxTrackingFolders` | [msdyn_liveworkitemevent](msdyn_liveworkitemevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkitemevent` |
| `msdyn_liveworkitemevent_UserEntityInstanceDatas` | [msdyn_liveworkitemevent](msdyn_liveworkitemevent.md) | `objectid` | `objectid_msdyn_liveworkitemevent` |
| `msdyn_liveworkitemevent_ProcessSession` | [msdyn_liveworkitemevent](msdyn_liveworkitemevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkitemevent` |
| `msdyn_liveworkitemevent_BulkDeleteFailures` | [msdyn_liveworkitemevent](msdyn_liveworkitemevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkitemevent` |
| `msdyn_liveworkitemevent_PrincipalObjectAttributeAccesses` | [msdyn_liveworkitemevent](msdyn_liveworkitemevent.md) | `objectid` | `objectid_msdyn_liveworkitemevent` |


## Source

Generated from [msdyn_liveworkitemevent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_liveworkitemevent')) on 2026-05-07.