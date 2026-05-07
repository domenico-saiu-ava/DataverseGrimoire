---
logical: "msdyn_workqueueusersetting"
display: "Impostazione utente elenco di lavoro"
entitySetName: "msdyn_workqueueusersettings"
primaryId: "msdyn_workqueueusersettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione utente elenco di lavoro

Entità creata per archiviare l'impostazione utente elenco di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workqueueusersetting` |
| Display name | Impostazione utente elenco di lavoro |
| Display (plural) | Impostazioni utente elenco di lavoro |
| Schema name | `msdyn_workqueueusersetting` |
| Entity set (Web API) | `msdyn_workqueueusersettings` |
| Primary id attribute | `msdyn_workqueueusersettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workqueueusersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_workqueueusersettings(<guid>)
POST /api/data/v9.2/msdyn_workqueueusersettings
PATCH /api/data/v9.2/msdyn_workqueueusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_workqueueusersettings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actiononmarkcomplete`, `msdyn_actiononskip`, `msdyn_linkingconfiguration`, `msdyn_name`, `msdyn_sellercardlayout`, `msdyn_sellerfilterconfiguration`, `msdyn_sellersortconfiguration`, `msdyn_suggestionsellerfilterconfiguration`, `msdyn_userid`, `msdyn_workqueueusersettingid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_workqueueusersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_workqueueusersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_workqueueusersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_workqueueusersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_workqueueusersetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_workqueueusersetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_workqueueusersetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_workqueueusersetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workqueueusersetting_SyncErrors` | [msdyn_workqueueusersetting](msdyn_workqueueusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueueusersetting` |
| `msdyn_workqueueusersetting_DuplicateMatchingRecord` | [msdyn_workqueueusersetting](msdyn_workqueueusersetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_workqueueusersetting` |
| `msdyn_workqueueusersetting_DuplicateBaseRecord` | [msdyn_workqueueusersetting](msdyn_workqueueusersetting.md) | `baserecordid` | `baserecordid_msdyn_workqueueusersetting` |
| `msdyn_workqueueusersetting_AsyncOperations` | [msdyn_workqueueusersetting](msdyn_workqueueusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueueusersetting` |
| `msdyn_workqueueusersetting_MailboxTrackingFolders` | [msdyn_workqueueusersetting](msdyn_workqueueusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueueusersetting` |
| `msdyn_workqueueusersetting_UserEntityInstanceDatas` | [msdyn_workqueueusersetting](msdyn_workqueueusersetting.md) | `objectid` | `objectid_msdyn_workqueueusersetting` |
| `msdyn_workqueueusersetting_ProcessSession` | [msdyn_workqueueusersetting](msdyn_workqueueusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueueusersetting` |
| `msdyn_workqueueusersetting_BulkDeleteFailures` | [msdyn_workqueueusersetting](msdyn_workqueueusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_workqueueusersetting` |
| `msdyn_workqueueusersetting_PrincipalObjectAttributeAccesses` | [msdyn_workqueueusersetting](msdyn_workqueueusersetting.md) | `objectid` | `objectid_msdyn_workqueueusersetting` |


## Source

Generated from [msdyn_workqueueusersetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_workqueueusersetting')) on 2026-05-07.