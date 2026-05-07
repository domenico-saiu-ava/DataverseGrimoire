---
logical: "msdyn_extendedusersetting"
display: "Impostazione utente estesa"
entitySetName: "msdyn_extendedusersettings"
primaryId: "msdyn_extendedusersettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione utente estesa

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_extendedusersetting` |
| Display name | Impostazione utente estesa |
| Display (plural) | Impostazioni utente estese |
| Schema name | `msdyn_extendedusersetting` |
| Entity set (Web API) | `msdyn_extendedusersettings` |
| Primary id attribute | `msdyn_extendedusersettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_extendedusersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_extendedusersettings(<guid>)
POST /api/data/v9.2/msdyn_extendedusersettings
PATCH /api/data/v9.2/msdyn_extendedusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_extendedusersettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_calendarid`, `msdyn_extendedusersettingid`, `msdyn_name`, `msdyn_userid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_extendedusersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_extendedusersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_extendedusersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_extendedusersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_extendedusersetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_extendedusersetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_extendedusersetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_extendedusersetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_extendedusersetting_SyncErrors` | [msdyn_extendedusersetting](msdyn_extendedusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_extendedusersetting` |
| `msdyn_extendedusersetting_AsyncOperations` | [msdyn_extendedusersetting](msdyn_extendedusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_extendedusersetting` |
| `msdyn_extendedusersetting_MailboxTrackingFolders` | [msdyn_extendedusersetting](msdyn_extendedusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_extendedusersetting` |
| `msdyn_extendedusersetting_UserEntityInstanceDatas` | [msdyn_extendedusersetting](msdyn_extendedusersetting.md) | `objectid` | `objectid_msdyn_extendedusersetting` |
| `msdyn_extendedusersetting_ProcessSession` | [msdyn_extendedusersetting](msdyn_extendedusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_extendedusersetting` |
| `msdyn_extendedusersetting_BulkDeleteFailures` | [msdyn_extendedusersetting](msdyn_extendedusersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_extendedusersetting` |
| `msdyn_extendedusersetting_PrincipalObjectAttributeAccesses` | [msdyn_extendedusersetting](msdyn_extendedusersetting.md) | `objectid` | `objectid_msdyn_extendedusersetting` |


## Source

Generated from [msdyn_extendedusersetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_extendedusersetting')) on 2026-05-07.