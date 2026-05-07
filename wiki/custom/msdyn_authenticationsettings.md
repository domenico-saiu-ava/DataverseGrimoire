---
logical: "msdyn_authenticationsettings"
display: "Impostazioni di autenticazione"
entitySetName: "msdyn_authenticationsettingses"
primaryId: "msdyn_authenticationsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni di autenticazione

Archivia le impostazioni per l'autenticazione utente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_authenticationsettings` |
| Display name | Impostazioni di autenticazione |
| Display (plural) | Impostazioni di autenticazione |
| Schema name | `msdyn_authenticationsettings` |
| Entity set (Web API) | `msdyn_authenticationsettingses` |
| Primary id attribute | `msdyn_authenticationsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_authenticationsettingses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_authenticationsettingses(<guid>)
POST /api/data/v9.2/msdyn_authenticationsettingses
PATCH /api/data/v9.2/msdyn_authenticationsettingses(<guid>)
DELETE /api/data/v9.2/msdyn_authenticationsettingses(<guid>)
```

## Attributes

Writable: **24** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_accesstokenurl`, `msdyn_actionname`, `msdyn_additionalparams`, `msdyn_authenticationclientid`, `msdyn_authenticationclientsecret`, `msdyn_authenticationscopes`, `msdyn_authenticationsettingsid`, `msdyn_authenticationtype`, `msdyn_decryptedtokenurl`, `msdyn_endpointregion`, `msdyn_javascriptclientfunction`, `msdyn_name`, `msdyn_ocauthchanneltype`, `msdyn_publickeyurl`, `msdyn_redirecturi`, `msdyn_useauthcodeflow`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_authenticationsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_authenticationsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_authenticationsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_authenticationsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_authenticationsettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_authenticationsettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_authenticationsettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_authenticationsettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_authenticationsettings_msdyn_entr` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `msdyn_authsettingsentid` | `msdyn_authsettingsentid` |
| `msdyn_authenticationsettings_msdyn_ocrichobjectmap` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `msdyn_authsettingsmapid` | `msdyn_authsettingsmapid` |
| `msdyn_authenticationsettings_SyncErrors` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_authenticationsettings` |
| `msdyn_authenticationsettings_AsyncOperations` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_authenticationsettings` |
| `msdyn_authenticationsettings_MailboxTrackingFolders` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_authenticationsettings` |
| `msdyn_authenticationsettings_UserEntityInstanceDatas` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `objectid` | `objectid_msdyn_authenticationsettings` |
| `msdyn_authenticationsettings_ProcessSession` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_authenticationsettings` |
| `msdyn_authenticationsettings_BulkDeleteFailures` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_authenticationsettings` |
| `msdyn_authenticationsettings_PrincipalObjectAttributeAccesses` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `objectid` | `objectid_msdyn_authenticationsettings` |


## Source

Generated from [msdyn_authenticationsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_authenticationsettings')) on 2026-05-07.