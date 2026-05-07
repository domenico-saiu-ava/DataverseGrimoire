---
logical: "msdyn_wallsavedqueryusersettings"
display: "Filtro"
entitySetName: "msdyn_wallsavedqueryusersettingses"
primaryId: "msdyn_wallsavedqueryusersettingsid"
primaryName: "msdyn_entityname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Filtro

Contiene informazioni sulla personalizzazione dell'utente in merito alle visualizzazioni selezionate dell'amministratore da mostrare nella bacheca personale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wallsavedqueryusersettings` |
| Display name | Filtro |
| Display (plural) | Filtri |
| Schema name | `msdyn_wallsavedqueryusersettings` |
| Entity set (Web API) | `msdyn_wallsavedqueryusersettingses` |
| Primary id attribute | `msdyn_wallsavedqueryusersettingsid` |
| Primary name attribute | `msdyn_entityname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wallsavedqueryusersettingses?$select=msdyn_entityname&$top=10
GET /api/data/v9.2/msdyn_wallsavedqueryusersettingses(<guid>)
POST /api/data/v9.2/msdyn_wallsavedqueryusersettingses
PATCH /api/data/v9.2/msdyn_wallsavedqueryusersettingses(<guid>)
DELETE /api/data/v9.2/msdyn_wallsavedqueryusersettingses(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_data`, `msdyn_default`, `msdyn_entitydisplayname`, `msdyn_entityname`, `msdyn_includewallinresponse`, `msdyn_isfollowing`, `msdyn_isvirtual`, `msdyn_isvisible`, `msdyn_isvisiblebit`, `msdyn_otc`, `msdyn_savedqueryname`, `msdyn_sortorder`, `msdyn_type`, `msdyn_userid`, `msdyn_wallsavedqueryid`, `msdyn_wallsavedqueryusersettingsid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wallsavedqueryusersettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wallsavedqueryusersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wallsavedqueryusersettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wallsavedqueryusersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wallsavedqueryusersettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wallsavedqueryusersettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wallsavedqueryusersettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wallsavedqueryusersettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_wallsavedqueryusersettings_userid` | [systemuser](systemuser.md) | `msdyn_userid` | `msdyn_userid` |
| `msdyn_wallsavedquery_wallsavedqueryusersettings` | [msdyn_wallsavedquery](msdyn_wallsavedquery.md) | `msdyn_wallsavedqueryid` | `msdyn_wallsavedqueryid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wallsavedqueryusersettings_SyncErrors` | [msdyn_wallsavedqueryusersettings](msdyn_wallsavedqueryusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedqueryusersettings` |
| `msdyn_wallsavedqueryusersettings_AsyncOperations` | [msdyn_wallsavedqueryusersettings](msdyn_wallsavedqueryusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedqueryusersettings` |
| `msdyn_wallsavedqueryusersettings_MailboxTrackingFolders` | [msdyn_wallsavedqueryusersettings](msdyn_wallsavedqueryusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedqueryusersettings` |
| `msdyn_wallsavedqueryusersettings_UserEntityInstanceDatas` | [msdyn_wallsavedqueryusersettings](msdyn_wallsavedqueryusersettings.md) | `objectid` | `objectid_msdyn_wallsavedqueryusersettings` |
| `msdyn_wallsavedqueryusersettings_ProcessSession` | [msdyn_wallsavedqueryusersettings](msdyn_wallsavedqueryusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedqueryusersettings` |
| `msdyn_wallsavedqueryusersettings_BulkDeleteFailures` | [msdyn_wallsavedqueryusersettings](msdyn_wallsavedqueryusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_wallsavedqueryusersettings` |
| `msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses` | [msdyn_wallsavedqueryusersettings](msdyn_wallsavedqueryusersettings.md) | `objectid` | `objectid_msdyn_wallsavedqueryusersettings` |


## Source

Generated from [msdyn_wallsavedqueryusersettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wallsavedqueryusersettings')) on 2026-05-07.