---
logical: "msdyn_ocsessionparticipantevent"
display: "Session Participant Event"
entitySetName: "msdyn_ocsessionparticipantevents"
primaryId: "msdyn_ocsessionparticipanteventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Session Participant Event

Session participant events

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsessionparticipantevent` |
| Display name | Session Participant Event |
| Display (plural) | Session Participant Events |
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

Writable: **17** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_eventduration`, `msdyn_eventendtime`, `msdyn_eventreason`, `msdyn_eventstarttime`, `msdyn_eventtype`, `msdyn_name`, `msdyn_ocsessionparticipanteventId`, `msdyn_sessionid`, `msdyn_sessionparticipantid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsessionparticipantevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsessionparticipantevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsessionparticipantevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsessionparticipantevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsessionparticipantevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocsession_msdyn_ocsessionparticipantevent_sessionid` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `msdyn_sessionparticipantid` | `msdyn_sessionparticipantid` |
| `owner_msdyn_ocsessionparticipantevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsessionparticipantevent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsessionparticipantevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsessionparticipantevent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessionparticipantevent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessionparticipantevent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsessionparticipantevent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsessionparticipantevent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessionparticipantevent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsessionparticipantevent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsessionparticipantevent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocsessionparticipantevent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsessionparticipantevent.md) on 2026-05-06.