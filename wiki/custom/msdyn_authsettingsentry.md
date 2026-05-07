---
logical: "msdyn_authsettingsentry"
display: "Voce impostazioni di autenticazione"
entitySetName: "msdyn_authsettingsentries"
primaryId: "msdyn_authsettingsentryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Voce impostazioni di autenticazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_authsettingsentry` |
| Display name | Voce impostazioni di autenticazione |
| Display (plural) | Voci impostazioni di autenticazione |
| Schema name | `msdyn_authsettingsentry` |
| Entity set (Web API) | `msdyn_authsettingsentries` |
| Primary id attribute | `msdyn_authsettingsentryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_authsettingsentries?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_authsettingsentries(<guid>)
POST /api/data/v9.2/msdyn_authsettingsentries
PATCH /api/data/v9.2/msdyn_authsettingsentries(<guid>)
DELETE /api/data/v9.2/msdyn_authsettingsentries(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_authsettingsentid`, `msdyn_authsettingsentryid`, `msdyn_key`, `msdyn_name`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_authenticationsettings_msdyn_entr` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `msdyn_authsettingsentid` | `msdyn_authsettingsentid` |
| `lk_msdyn_authsettingsentry_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_authsettingsentry_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_authsettingsentry_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_authsettingsentry_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_authsettingsentry` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_authsettingsentry` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_authsettingsentry` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_authsettingsentry` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_authsettingsentry_SyncErrors` | [msdyn_authsettingsentry](msdyn_authsettingsentry.md) | `regardingobjectid` | `regardingobjectid_msdyn_authsettingsentry` |
| `msdyn_authsettingsentry_DuplicateMatchingRecord` | [msdyn_authsettingsentry](msdyn_authsettingsentry.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_authsettingsentry` |
| `msdyn_authsettingsentry_DuplicateBaseRecord` | [msdyn_authsettingsentry](msdyn_authsettingsentry.md) | `baserecordid` | `baserecordid_msdyn_authsettingsentry` |
| `msdyn_authsettingsentry_AsyncOperations` | [msdyn_authsettingsentry](msdyn_authsettingsentry.md) | `regardingobjectid` | `regardingobjectid_msdyn_authsettingsentry` |
| `msdyn_authsettingsentry_MailboxTrackingFolders` | [msdyn_authsettingsentry](msdyn_authsettingsentry.md) | `regardingobjectid` | `regardingobjectid_msdyn_authsettingsentry` |
| `msdyn_authsettingsentry_UserEntityInstanceDatas` | [msdyn_authsettingsentry](msdyn_authsettingsentry.md) | `objectid` | `objectid_msdyn_authsettingsentry` |
| `msdyn_authsettingsentry_ProcessSession` | [msdyn_authsettingsentry](msdyn_authsettingsentry.md) | `regardingobjectid` | `regardingobjectid_msdyn_authsettingsentry` |
| `msdyn_authsettingsentry_BulkDeleteFailures` | [msdyn_authsettingsentry](msdyn_authsettingsentry.md) | `regardingobjectid` | `regardingobjectid_msdyn_authsettingsentry` |
| `msdyn_authsettingsentry_PrincipalObjectAttributeAccesses` | [msdyn_authsettingsentry](msdyn_authsettingsentry.md) | `objectid` | `objectid_msdyn_authsettingsentry` |


## Source

Generated from [msdyn_authsettingsentry (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_authsettingsentry')) on 2026-05-07.