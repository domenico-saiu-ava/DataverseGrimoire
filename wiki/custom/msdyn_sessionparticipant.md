---
logical: "msdyn_sessionparticipant"
display: "Partecipante alla sessione"
entitySetName: "msdyn_sessionparticipants"
primaryId: "msdyn_sessionparticipantid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Partecipante alla sessione

Utenti in una sessione che interagiscono con il cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessionparticipant` |
| Display name | Partecipante alla sessione |
| Display (plural) | Partecipanti alla sessione |
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

Writable: **39** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activechattime`, `msdyn_activedirectoryuserid`, `msdyn_activetime`, `msdyn_activewrapuptime`, `msdyn_addedon`, `msdyn_agentid`, `msdyn_assignreason`, `msdyn_cdsqueueid`, `msdyn_consultmode`, `msdyn_conversationaccess`, `msdyn_externalparticipantchannel`, `msdyn_externalparticipantchanneltype`, `msdyn_holdtime`, `msdyn_idletime`, `msdyn_inactivetime`, `msdyn_iscapacityblocking`, `msdyn_joinedon`, `msdyn_lastupdatedon`, `msdyn_lefton`, `msdyn_leftonreason`, `msdyn_mode`, `msdyn_modifiedon`, `msdyn_name`, `msdyn_omnichannelsession`, `msdyn_sessionparticipantid`, `msdyn_startactivetime`, `msdyn_startactivewrapuptime`, `msdyn_startholdtime`, `msdyn_startidletime`, `msdyn_startinactivetime`, `msdyn_starttalktime`, `msdyn_talktime`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sessionparticipant_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessionparticipant_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sessionparticipant_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessionparticipant_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sessionparticipant` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sessionparticipant` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sessionparticipant` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sessionparticipant` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_queue_msdyn_sessionparticipant_msdyn_cdsqueueid` | [queue](queue.md) | `msdyn_cdsqueueid` | `msdyn_cdsqueueid` |
| `msdyn_ocsession_sessionparticipant_nested` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_omnichannelsession` | `msdyn_omnichannelsession` |
| `msdyn_systemuser_msdyn_sessionparticipant_agentid` | [systemuser](systemuser.md) | `msdyn_agentid` | `msdyn_agentid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `msdyn_sessionparticipantid` | `msdyn_sessionparticipantid` |
| `msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `msdyn_activesessionparticipantid` | `msdyn_activesessionparticipantid` |
| `msdyn_sessionparticipant_SyncErrors` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipant` |
| `msdyn_sessionparticipant_DuplicateMatchingRecord` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sessionparticipant` |
| `msdyn_sessionparticipant_DuplicateBaseRecord` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `baserecordid` | `baserecordid_msdyn_sessionparticipant` |
| `msdyn_sessionparticipant_AsyncOperations` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipant` |
| `msdyn_sessionparticipant_MailboxTrackingFolders` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipant` |
| `msdyn_sessionparticipant_UserEntityInstanceDatas` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `objectid` | `objectid_msdyn_sessionparticipant` |
| `msdyn_sessionparticipant_ProcessSession` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipant` |
| `msdyn_sessionparticipant_BulkDeleteFailures` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionparticipant` |
| `msdyn_sessionparticipant_PrincipalObjectAttributeAccesses` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `objectid` | `objectid_msdyn_sessionparticipant` |
| `msdyn_sessionparticipantextension_sessionparticipantid_msdyn_sessionparticipant` | [msdyn_sessionparticipant](msdyn_sessionparticipant.md) | `msdyn_sessionparticipantid` | `msdyn_sessionparticipantid` |


## Source

Generated from [msdyn_sessionparticipant (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sessionparticipant')) on 2026-05-07.