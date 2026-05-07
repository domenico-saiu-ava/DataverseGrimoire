---
logical: "msdyn_soundnotificationsetting"
display: "Impostazione notifica audio"
entitySetName: "msdyn_soundnotificationsettings"
primaryId: "msdyn_soundnotificationsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione notifica audio

Entità per archiviare i record delle impostazioni di notifica audio per i canali e altri scenari. 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_soundnotificationsetting` |
| Display name | Impostazione notifica audio |
| Display (plural) | Impostazioni notifica audio |
| Schema name | `msdyn_soundnotificationsetting` |
| Entity set (Web API) | `msdyn_soundnotificationsettings` |
| Primary id attribute | `msdyn_soundnotificationsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_soundnotificationsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_soundnotificationsettings(<guid>)
POST /api/data/v9.2/msdyn_soundnotificationsettings
PATCH /api/data/v9.2/msdyn_soundnotificationsettings(<guid>)
DELETE /api/data/v9.2/msdyn_soundnotificationsettings(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_enablesound`, `msdyn_isdefaultrecord`, `msdyn_linkchannel`, `msdyn_linksoundfile`, `msdyn_loopsound`, `msdyn_name`, `msdyn_soundnotificationsettingid`, `msdyn_volume`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_soundnotificationsetting_linksoundf` | [msdyn_soundfile](msdyn_soundfile.md) | `msdyn_linksoundfile` | `msdyn_linksoundfile` |
| `lk_msdyn_soundnotificationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_soundnotificationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_soundnotificationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_soundnotificationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_soundnotificationsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_soundnotificationsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_soundnotificationsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_soundnotificationsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_soundnotificationsetting_SyncErrors` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundnotificationsetting` |
| `msdyn_soundnotificationsetting_DuplicateMatchingRecord` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_soundnotificationsetting` |
| `msdyn_soundnotificationsetting_DuplicateBaseRecord` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `baserecordid` | `baserecordid_msdyn_soundnotificationsetting` |
| `msdyn_soundnotificationsetting_AsyncOperations` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundnotificationsetting` |
| `msdyn_soundnotificationsetting_MailboxTrackingFolders` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundnotificationsetting` |
| `msdyn_soundnotificationsetting_UserEntityInstanceDatas` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `objectid` | `objectid_msdyn_soundnotificationsetting` |
| `msdyn_soundnotificationsetting_ProcessSession` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundnotificationsetting` |
| `msdyn_soundnotificationsetting_BulkDeleteFailures` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundnotificationsetting` |
| `msdyn_soundnotificationsetting_PrincipalObjectAttributeAccesses` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `objectid` | `objectid_msdyn_soundnotificationsetting` |
| `msdyn_soundnotificationsetting_Annotations` | [msdyn_soundnotificationsetting](msdyn_soundnotificationsetting.md) | `objectid` | `objectid_msdyn_soundnotificationsetting` |


## Source

Generated from [msdyn_soundnotificationsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_soundnotificationsetting')) on 2026-05-07.