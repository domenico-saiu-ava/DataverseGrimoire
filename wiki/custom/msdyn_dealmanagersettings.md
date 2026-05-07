---
logical: "msdyn_dealmanagersettings"
display: "Impostazioni gestione transazioni"
entitySetName: "msdyn_dealmanagersettings"
primaryId: "msdyn_dealmanagersettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni gestione transazioni

Impostazioni gestione transazioni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dealmanagersettings` |
| Display name | Impostazioni gestione transazioni |
| Display (plural) | dealmanagersettings |
| Schema name | `msdyn_dealmanagersettings` |
| Entity set (Web API) | `msdyn_dealmanagersettings` |
| Primary id attribute | `msdyn_dealmanagersettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dealmanagersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dealmanagersettings(<guid>)
POST /api/data/v9.2/msdyn_dealmanagersettings
PATCH /api/data/v9.2/msdyn_dealmanagersettings(<guid>)
DELETE /api/data/v9.2/msdyn_dealmanagersettings(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_data`, `msdyn_dealmanagersettingsid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dealmanagersettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dealmanagersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dealmanagersettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dealmanagersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dealmanagersettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dealmanagersettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dealmanagersettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dealmanagersettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dealmanagersettings_SyncErrors` | [msdyn_dealmanagersettings](msdyn_dealmanagersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanagersettings` |
| `msdyn_dealmanagersettings_DuplicateMatchingRecord` | [msdyn_dealmanagersettings](msdyn_dealmanagersettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dealmanagersettings` |
| `msdyn_dealmanagersettings_DuplicateBaseRecord` | [msdyn_dealmanagersettings](msdyn_dealmanagersettings.md) | `baserecordid` | `baserecordid_msdyn_dealmanagersettings` |
| `msdyn_dealmanagersettings_AsyncOperations` | [msdyn_dealmanagersettings](msdyn_dealmanagersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanagersettings` |
| `msdyn_dealmanagersettings_MailboxTrackingFolders` | [msdyn_dealmanagersettings](msdyn_dealmanagersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanagersettings` |
| `msdyn_dealmanagersettings_UserEntityInstanceDatas` | [msdyn_dealmanagersettings](msdyn_dealmanagersettings.md) | `objectid` | `objectid_msdyn_dealmanagersettings` |
| `msdyn_dealmanagersettings_ProcessSession` | [msdyn_dealmanagersettings](msdyn_dealmanagersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanagersettings` |
| `msdyn_dealmanagersettings_BulkDeleteFailures` | [msdyn_dealmanagersettings](msdyn_dealmanagersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanagersettings` |
| `msdyn_dealmanagersettings_PrincipalObjectAttributeAccesses` | [msdyn_dealmanagersettings](msdyn_dealmanagersettings.md) | `objectid` | `objectid_msdyn_dealmanagersettings` |


## Source

Generated from [msdyn_dealmanagersettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dealmanagersettings')) on 2026-05-07.