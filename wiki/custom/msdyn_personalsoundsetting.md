---
logical: "msdyn_personalsoundsetting"
display: "Impostazione audio personale"
entitySetName: "msdyn_personalsoundsettings"
primaryId: "msdyn_personalsoundsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione audio personale

Entità per archiviare record audio personalizzati per gli utenti.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_personalsoundsetting` |
| Display name | Impostazione audio personale |
| Display (plural) | Impostazione audio personali |
| Schema name | `msdyn_Personalsoundsetting` |
| Entity set (Web API) | `msdyn_personalsoundsettings` |
| Primary id attribute | `msdyn_personalsoundsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_personalsoundsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_personalsoundsettings(<guid>)
POST /api/data/v9.2/msdyn_personalsoundsettings
PATCH /api/data/v9.2/msdyn_personalsoundsettings(<guid>)
DELETE /api/data/v9.2/msdyn_personalsoundsettings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_enablesound`, `msdyn_isdefaultrecord`, `msdyn_linkchannel`, `msdyn_linksoundfile`, `msdyn_loopsound`, `msdyn_name`, `msdyn_personalsoundsettingid`, `msdyn_volume`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_Personalsoundsetting_msdyn_linksoun` | [msdyn_soundfile](msdyn_soundfile.md) | `msdyn_linksoundfile` | `msdyn_linksoundfile` |
| `lk_msdyn_personalsoundsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_personalsoundsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_personalsoundsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_personalsoundsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_personalsoundsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_personalsoundsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_personalsoundsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_personalsoundsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_personalsoundsetting_SyncErrors` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalsoundsetting` |
| `msdyn_personalsoundsetting_DuplicateMatchingRecord` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_personalsoundsetting` |
| `msdyn_personalsoundsetting_DuplicateBaseRecord` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `baserecordid` | `baserecordid_msdyn_personalsoundsetting` |
| `msdyn_personalsoundsetting_AsyncOperations` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalsoundsetting` |
| `msdyn_personalsoundsetting_MailboxTrackingFolders` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalsoundsetting` |
| `msdyn_personalsoundsetting_UserEntityInstanceDatas` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `objectid` | `objectid_msdyn_personalsoundsetting` |
| `msdyn_personalsoundsetting_ProcessSession` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalsoundsetting` |
| `msdyn_personalsoundsetting_BulkDeleteFailures` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_personalsoundsetting` |
| `msdyn_personalsoundsetting_PrincipalObjectAttributeAccesses` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `objectid` | `objectid_msdyn_personalsoundsetting` |
| `msdyn_personalsoundsetting_Annotations` | [msdyn_personalsoundsetting](msdyn_personalsoundsetting.md) | `objectid` | `objectid_msdyn_personalsoundsetting` |


## Source

Generated from [msdyn_personalsoundsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_personalsoundsetting')) on 2026-05-07.