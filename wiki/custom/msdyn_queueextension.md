---
logical: "msdyn_queueextension"
display: "Estensione coda"
entitySetName: "msdyn_queueextensions"
primaryId: "msdyn_queueextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Estensione coda

Entità estensione coda per il rilevamento delle metriche di coda e conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_queueextension` |
| Display name | Estensione coda |
| Display (plural) | Estensioni coda |
| Schema name | `msdyn_queueextension` |
| Entity set (Web API) | `msdyn_queueextensions` |
| Primary id attribute | `msdyn_queueextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_queueextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_queueextensions(<guid>)
POST /api/data/v9.2/msdyn_queueextensions
PATCH /api/data/v9.2/msdyn_queueextensions(<guid>)
DELETE /api/data/v9.2/msdyn_queueextensions(<guid>)
```

## Attributes

Writable: **37** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_activechattime`, `msdyn_activetime`, `msdyn_activewrapuptime`, `msdyn_agentacceptedon`, `msdyn_agentassignedon`, `msdyn_closedon`, `msdyn_closurereason`, `msdyn_conversationid`, `msdyn_creationreason`, `msdyn_endtime`, `msdyn_firstwaitstartedon`, `msdyn_firstwaittimeinseconds`, `msdyn_handletime`, `msdyn_holdtime`, `msdyn_inactivetime`, `msdyn_isabandoned`, `msdyn_name`, `msdyn_queueextensionid`, `msdyn_queueid`, `msdyn_sourcequeue`, `msdyn_startactivetime`, `msdyn_startactivewrapuptime`, `msdyn_startholdtime`, `msdyn_startinactivetime`, `msdyn_starttalktime`, `msdyn_starttime`, `msdyn_talktime`, `msdyn_targetqueue`, `msdyn_waitstartedon`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_queueextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_queueextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_queueextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_queueextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_queueextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_queueextension` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_queueextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_queueextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocliveworkitem_msdyn_queueextension_msdyn_conversationid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_conversationid` |
| `queue_msdyn_queueextension_msdyn_targetqueue` | [queue](queue.md) | `msdyn_targetqueue` | `msdyn_targetqueue` |
| `queue_msdyn_queueextension_msdyn_sourcequeue` | [queue](queue.md) | `msdyn_sourcequeue` | `msdyn_sourcequeue` |
| `queue_msdyn_queueextension_msdyn_queueid` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_queueextension_SyncErrors` | [msdyn_queueextension](msdyn_queueextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueextension` |
| `msdyn_queueextension_DuplicateMatchingRecord` | [msdyn_queueextension](msdyn_queueextension.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_queueextension` |
| `msdyn_queueextension_DuplicateBaseRecord` | [msdyn_queueextension](msdyn_queueextension.md) | `baserecordid` | `baserecordid_msdyn_queueextension` |
| `msdyn_queueextension_AsyncOperations` | [msdyn_queueextension](msdyn_queueextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueextension` |
| `msdyn_queueextension_MailboxTrackingFolders` | [msdyn_queueextension](msdyn_queueextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueextension` |
| `msdyn_queueextension_UserEntityInstanceDatas` | [msdyn_queueextension](msdyn_queueextension.md) | `objectid` | `objectid_msdyn_queueextension` |
| `msdyn_queueextension_ProcessSession` | [msdyn_queueextension](msdyn_queueextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueextension` |
| `msdyn_queueextension_BulkDeleteFailures` | [msdyn_queueextension](msdyn_queueextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_queueextension` |
| `msdyn_queueextension_PrincipalObjectAttributeAccesses` | [msdyn_queueextension](msdyn_queueextension.md) | `objectid` | `objectid_msdyn_queueextension` |
| `msdyn_ocsession_msdyn_queueextension` | [msdyn_queueextension](msdyn_queueextension.md) | `msdyn_queueextensionid` | `msdyn_queueextensionid` |


## Source

Generated from [msdyn_queueextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_queueextension')) on 2026-05-07.