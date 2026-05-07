---
logical: "msdyn_channelprofilenotificationtemplate"
display: "Modello di notifica profilo canale"
entitySetName: "msdyn_channelprofilenotificationtemplates"
primaryId: "msdyn_channelprofilenotificationtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di notifica profilo canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelprofilenotificationtemplate` |
| Display name | Modello di notifica profilo canale |
| Display (plural) | Modelli di notifica profilo canale |
| Schema name | `msdyn_channelprofilenotificationtemplate` |
| Entity set (Web API) | `msdyn_channelprofilenotificationtemplates` |
| Primary id attribute | `msdyn_channelprofilenotificationtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelprofilenotificationtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelprofilenotificationtemplates(<guid>)
POST /api/data/v9.2/msdyn_channelprofilenotificationtemplates
PATCH /api/data/v9.2/msdyn_channelprofilenotificationtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_channelprofilenotificationtemplates(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_channelprofileid`, `msdyn_channelprofilenotificationtemplateid`, `msdyn_name`, `msdyn_notificationtemplate_callback_previewdialing`, `msdyn_notificationtemplate_consult`, `msdyn_notificationtemplate_incoming_auth`, `msdyn_notificationtemplate_incoming_unauth`, `msdyn_notificationtemplate_supervisorassign`, `msdyn_notificationtemplate_transfer`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channelprofilenotificationtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelprofilenotificationtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelprofilenotificationtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelprofilenotificationtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelprofilenotificationtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelprofilenotificationtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelprofilenotificationtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelprofilenotificationtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_channelprofilenotificationtemplate_msdyn_channelprofileid_msdyn_channelprofile` | [msdyn_channelprofile](msdyn_channelprofile.md) | `msdyn_channelprofileid` | `msdyn_channelprofileid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprofilenotificationtemplate_SyncErrors` | [msdyn_channelprofilenotificationtemplate](msdyn_channelprofilenotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilenotificationtemplate` |
| `msdyn_channelprofilenotificationtemplate_DuplicateMatchingRecord` | [msdyn_channelprofilenotificationtemplate](msdyn_channelprofilenotificationtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelprofilenotificationtemplate` |
| `msdyn_channelprofilenotificationtemplate_DuplicateBaseRecord` | [msdyn_channelprofilenotificationtemplate](msdyn_channelprofilenotificationtemplate.md) | `baserecordid` | `baserecordid_msdyn_channelprofilenotificationtemplate` |
| `msdyn_channelprofilenotificationtemplate_AsyncOperations` | [msdyn_channelprofilenotificationtemplate](msdyn_channelprofilenotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilenotificationtemplate` |
| `msdyn_channelprofilenotificationtemplate_MailboxTrackingFolders` | [msdyn_channelprofilenotificationtemplate](msdyn_channelprofilenotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilenotificationtemplate` |
| `msdyn_channelprofilenotificationtemplate_UserEntityInstanceDatas` | [msdyn_channelprofilenotificationtemplate](msdyn_channelprofilenotificationtemplate.md) | `objectid` | `objectid_msdyn_channelprofilenotificationtemplate` |
| `msdyn_channelprofilenotificationtemplate_ProcessSession` | [msdyn_channelprofilenotificationtemplate](msdyn_channelprofilenotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilenotificationtemplate` |
| `msdyn_channelprofilenotificationtemplate_BulkDeleteFailures` | [msdyn_channelprofilenotificationtemplate](msdyn_channelprofilenotificationtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilenotificationtemplate` |
| `msdyn_channelprofilenotificationtemplate_PrincipalObjectAttributeAccesses` | [msdyn_channelprofilenotificationtemplate](msdyn_channelprofilenotificationtemplate.md) | `objectid` | `objectid_msdyn_channelprofilenotificationtemplate` |


## Source

Generated from [msdyn_channelprofilenotificationtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelprofilenotificationtemplate')) on 2026-05-07.