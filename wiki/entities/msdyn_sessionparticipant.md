---
logical: "msdyn_sessionparticipant"
display: "Session participant"
entitySetName: "msdyn_sessionparticipants"
primaryId: "msdyn_sessionparticipantid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Session participant

Users in a session interacting with the customer

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessionparticipant` |
| Display name | Session participant |
| Display (plural) | Session participants |
| Schema name | `msdyn_sessionparticipant` |
| Entity set (Web API) | `msdyn_sessionparticipants` |
| Primary id attribute | `msdyn_sessionparticipantid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessionparticipants?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessionparticipants(<guid>)
POST /api/data/v9.2/msdyn_sessionparticipants
PATCH /api/data/v9.2/msdyn_sessionparticipants(<guid>)
DELETE /api/data/v9.2/msdyn_sessionparticipants(<guid>)
```

## Attributes

Writable: **40** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_activechattime`, `msdyn_activedirectoryuserid`, `msdyn_activetime`, `msdyn_activewrapuptime`, `msdyn_addedon`, `msdyn_agentid`, `msdyn_assignreason`, `msdyn_cdsqueueid`, `msdyn_consultmode`, `msdyn_conversationaccess`, `msdyn_externalparticipantchannel`, `msdyn_externalparticipantchanneltype`, `msdyn_holdtime`, `msdyn_idletime`, `msdyn_inactivetime`, `msdyn_iscapacityblocking`, `msdyn_joinedon`, `msdyn_lastupdatedon`, `msdyn_lefton`, `msdyn_leftonreason`, `msdyn_mode`, `msdyn_modifiedon`, `msdyn_name`, `msdyn_omnichannelsession`, `msdyn_sessionparticipantId`, `msdyn_startactivetime`, `msdyn_startactivewrapuptime`, `msdyn_startholdtime`, `msdyn_startidletime`, `msdyn_startinactivetime`, `msdyn_starttalktime`, `msdyn_talktime`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sessionparticipant` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sessionparticipant_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessionparticipant_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessionparticipant_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessionparticipant_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocsession_sessionparticipant_nested` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_omnichannelsession` | `msdyn_omnichannelsession` |
| `msdyn_queue_msdyn_sessionparticipant_msdyn_cdsqueueid` | [queue](queue.md) | `msdyn_cdsqueueid` | `msdyn_cdsqueueid` |
| `msdyn_systemuser_msdyn_sessionparticipant_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |
| `owner_msdyn_sessionparticipant` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sessionparticipant` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sessionparticipant` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid` | _n/a_ | `msdyn_activesessionparticipantid` | _n/a_ |
| `msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid` | _n/a_ | `msdyn_sessionparticipantid` | _n/a_ |
| `msdyn_sessionparticipant_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionparticipant_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionparticipant_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sessionparticipant_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sessionparticipant_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionparticipant_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sessionparticipant_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sessionparticipant_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sessionparticipant.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sessionparticipant.md) on 2026-05-06.