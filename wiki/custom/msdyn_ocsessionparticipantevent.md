---
logical: "msdyn_ocsessionparticipantevent"
display: "Evento del partecipante alla sessione"
entitySetName: "msdyn_ocsessionparticipantevents"
primaryId: "msdyn_ocsessionparticipanteventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Evento del partecipante alla sessione

Eventi del partecipante alla sessione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsessionparticipantevent` |
| Display name | Evento del partecipante alla sessione |
| Display (plural) | Eventi del partecipante alla sessione |
| Schema name | `msdyn_ocsessionparticipantevent` |
| Entity set (Web API) | `msdyn_ocsessionparticipantevents` |
| Primary id attribute | `msdyn_ocsessionparticipanteventid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsessionparticipantevents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsessionparticipantevents(<guid>)
POST /api/data/v9.2/msdyn_ocsessionparticipantevents
PATCH /api/data/v9.2/msdyn_ocsessionparticipantevents(<guid>)
DELETE /api/data/v9.2/msdyn_ocsessionparticipantevents(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_eventduration`, `msdyn_eventendtime`, `msdyn_eventreason`, `msdyn_eventstarttime`, `msdyn_eventtype`, `msdyn_name`, `msdyn_ocsessionparticipanteventid`, `msdyn_sessionid`, `msdyn_sessionparticipantid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `msdyn_sessionparticipantid` | `msdyn_sessionparticipantid` |
| `lk_msdyn_ocsessionparticipantevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsessionparticipantevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsessionparticipantevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsessionparticipantevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsessionparticipantevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsessionparticipantevent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsessionparticipantevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsessionparticipantevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocsession_msdyn_ocsessionparticipantevent_sessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsessionparticipantevent_SyncErrors` | [msdyn_ocsessionparticipantevent](msdyn_ocsessionparticipantevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionparticipantevent` |
| `msdyn_ocsessionparticipantevent_DuplicateMatchingRecord` | [msdyn_ocsessionparticipantevent](msdyn_ocsessionparticipantevent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsessionparticipantevent` |
| `msdyn_ocsessionparticipantevent_DuplicateBaseRecord` | [msdyn_ocsessionparticipantevent](msdyn_ocsessionparticipantevent.md) | `baserecordid` | `baserecordid_msdyn_ocsessionparticipantevent` |
| `msdyn_ocsessionparticipantevent_AsyncOperations` | [msdyn_ocsessionparticipantevent](msdyn_ocsessionparticipantevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionparticipantevent` |
| `msdyn_ocsessionparticipantevent_MailboxTrackingFolders` | [msdyn_ocsessionparticipantevent](msdyn_ocsessionparticipantevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionparticipantevent` |
| `msdyn_ocsessionparticipantevent_UserEntityInstanceDatas` | [msdyn_ocsessionparticipantevent](msdyn_ocsessionparticipantevent.md) | `objectid` | `objectid_msdyn_ocsessionparticipantevent` |
| `msdyn_ocsessionparticipantevent_ProcessSession` | [msdyn_ocsessionparticipantevent](msdyn_ocsessionparticipantevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionparticipantevent` |
| `msdyn_ocsessionparticipantevent_BulkDeleteFailures` | [msdyn_ocsessionparticipantevent](msdyn_ocsessionparticipantevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionparticipantevent` |
| `msdyn_ocsessionparticipantevent_PrincipalObjectAttributeAccesses` | [msdyn_ocsessionparticipantevent](msdyn_ocsessionparticipantevent.md) | `objectid` | `objectid_msdyn_ocsessionparticipantevent` |


## Source

Generated from [msdyn_ocsessionparticipantevent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsessionparticipantevent')) on 2026-05-07.