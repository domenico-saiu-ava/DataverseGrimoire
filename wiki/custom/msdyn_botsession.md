---
logical: "msdyn_botsession"
display: "Sessione bot"
entitySetName: "msdyn_botsessions"
primaryId: "msdyn_botsessionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sessione bot

Sessioni specifiche del bot 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_botsession` |
| Display name | Sessione bot |
| Display (plural) | Sessioni bot |
| Schema name | `msdyn_botsession` |
| Entity set (Web API) | `msdyn_botsessions` |
| Primary id attribute | `msdyn_botsessionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_botsessions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_botsessions(<guid>)
POST /api/data/v9.2/msdyn_botsessions
PATCH /api/data/v9.2/msdyn_botsessions(<guid>)
DELETE /api/data/v9.2/msdyn_botsessions(<guid>)
```

## Attributes

Writable: **24** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_botid`, `msdyn_botsessionid`, `msdyn_convtranscriptid`, `msdyn_csatscore`, `msdyn_endedon`, `msdyn_isengaged`, `msdyn_lastsessionoutcome`, `msdyn_lastsessionoutcomereason`, `msdyn_mcsbotsessionid`, `msdyn_name`, `msdyn_outcome`, `msdyn_outcomereason`, `msdyn_sessionid`, `msdyn_sourcesessionid`, `msdyn_startedon`, `msdyn_topicid`, `msdyn_topicname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_botsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_botsession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_botsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_botsession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_botsession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_botsession` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_botsession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_botsession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_botsession_botid_bot` | [bot](bot.md) | `msdyn_botid` | `msdyn_botid` |
| `msdyn_msdyn_botsession_sessionid_msdyn_oc` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_botsession_SyncErrors` | [msdyn_botsession](msdyn_botsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_botsession` |
| `msdyn_botsession_DuplicateMatchingRecord` | [msdyn_botsession](msdyn_botsession.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_botsession` |
| `msdyn_botsession_DuplicateBaseRecord` | [msdyn_botsession](msdyn_botsession.md) | `baserecordid` | `baserecordid_msdyn_botsession` |
| `msdyn_botsession_AsyncOperations` | [msdyn_botsession](msdyn_botsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_botsession` |
| `msdyn_botsession_MailboxTrackingFolders` | [msdyn_botsession](msdyn_botsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_botsession` |
| `msdyn_botsession_UserEntityInstanceDatas` | [msdyn_botsession](msdyn_botsession.md) | `objectid` | `objectid_msdyn_botsession` |
| `msdyn_botsession_ProcessSession` | [msdyn_botsession](msdyn_botsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_botsession` |
| `msdyn_botsession_BulkDeleteFailures` | [msdyn_botsession](msdyn_botsession.md) | `regardingobjectid` | `regardingobjectid_msdyn_botsession` |
| `msdyn_botsession_PrincipalObjectAttributeAccesses` | [msdyn_botsession](msdyn_botsession.md) | `objectid` | `objectid_msdyn_botsession` |


## Source

Generated from [msdyn_botsession (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_botsession')) on 2026-05-07.