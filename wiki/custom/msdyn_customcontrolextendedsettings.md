---
logical: "msdyn_customcontrolextendedsettings"
display: "Impostazione estesa controllo personalizzato"
entitySetName: "msdyn_customcontrolextendedsettingses"
primaryId: "msdyn_customcontrolextendedsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione estesa controllo personalizzato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customcontrolextendedsettings` |
| Display name | Impostazione estesa controllo personalizzato |
| Display (plural) | Impostazioni estese controllo personalizzato |
| Schema name | `msdyn_customcontrolextendedsettings` |
| Entity set (Web API) | `msdyn_customcontrolextendedsettingses` |
| Primary id attribute | `msdyn_customcontrolextendedsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customcontrolextendedsettingses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customcontrolextendedsettingses(<guid>)
POST /api/data/v9.2/msdyn_customcontrolextendedsettingses
PATCH /api/data/v9.2/msdyn_customcontrolextendedsettingses(<guid>)
DELETE /api/data/v9.2/msdyn_customcontrolextendedsettingses(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_copilothub_settings`, `msdyn_customcontrolextendedsettingsid`, `msdyn_name`, `msdyn_rte_userpersonalizationsettings`, `msdyn_timelineWall_bookmarks`, `msdyn_timelineWall_isAutoExpanded`, `msdyn_timelineWall_isFilterPaneOpen`, `msdyn_timelineWall_isSortOrderNewerToOlder`, `msdyn_timelineWall_searchTermApplied`, `msdyn_timelineWall_userFilters`, `msdyn_timeline_displaylayoutoption`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customcontrolextendedsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customcontrolextendedsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customcontrolextendedsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customcontrolextendedsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_customcontrolextendedsettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_customcontrolextendedsettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_customcontrolextendedsettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_customcontrolextendedsettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customcontrolextendedsettings_SyncErrors` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_customcontrolextendedsettings_DuplicateMatchingRecord` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customcontrolextendedsettings` |
| `msdyn_customcontrolextendedsettings_DuplicateBaseRecord` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `baserecordid` | `baserecordid_msdyn_customcontrolextendedsettings` |
| `msdyn_customcontrolextendedsettings_AsyncOperations` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_customcontrolextendedsettings_MailboxTrackingFolders` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_customcontrolextendedsettings_UserEntityInstanceDatas` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `objectid` | `objectid_msdyn_customcontrolextendedsettings` |
| `msdyn_customcontrolextendedsettings_ProcessSession` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_customcontrolextendedsettings_BulkDeleteFailures` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_customcontrolextendedsettings` |
| `msdyn_customcontrolextendedsettings_PrincipalObjectAttributeAccesses` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `objectid` | `objectid_msdyn_customcontrolextendedsettings` |


## Source

Generated from [msdyn_customcontrolextendedsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customcontrolextendedsettings')) on 2026-05-07.