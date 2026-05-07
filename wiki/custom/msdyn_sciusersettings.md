---
logical: "msdyn_sciusersettings"
display: "UserSettings"
entitySetName: "msdyn_sciusersettings"
primaryId: "msdyn_sciusersettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# UserSettings

SCI user level settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sciusersettings` |
| Display name | UserSettings |
| Display (plural) | UserSettings |
| Schema name | `msdyn_sciusersettings` |
| Entity set (Web API) | `msdyn_sciusersettings` |
| Primary id attribute | `msdyn_sciusersettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sciusersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sciusersettings(<guid>)
POST /api/data/v9.2/msdyn_sciusersettings
PATCH /api/data/v9.2/msdyn_sciusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_sciusersettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_sciusersettingsid`, `msdyn_trackedcompetitors`, `msdyn_trackedkeywords`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sciusersettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sciusersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sciusersettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sciusersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sciusersettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sciusersettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sciusersettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sciusersettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sciusersettings_SyncErrors` | [msdyn_sciusersettings](msdyn_sciusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciusersettings` |
| `msdyn_sciusersettings_DuplicateMatchingRecord` | [msdyn_sciusersettings](msdyn_sciusersettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sciusersettings` |
| `msdyn_sciusersettings_DuplicateBaseRecord` | [msdyn_sciusersettings](msdyn_sciusersettings.md) | `baserecordid` | `baserecordid_msdyn_sciusersettings` |
| `msdyn_sciusersettings_AsyncOperations` | [msdyn_sciusersettings](msdyn_sciusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciusersettings` |
| `msdyn_sciusersettings_MailboxTrackingFolders` | [msdyn_sciusersettings](msdyn_sciusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciusersettings` |
| `msdyn_sciusersettings_UserEntityInstanceDatas` | [msdyn_sciusersettings](msdyn_sciusersettings.md) | `objectid` | `objectid_msdyn_sciusersettings` |
| `msdyn_sciusersettings_ProcessSession` | [msdyn_sciusersettings](msdyn_sciusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciusersettings` |
| `msdyn_sciusersettings_BulkDeleteFailures` | [msdyn_sciusersettings](msdyn_sciusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_sciusersettings` |
| `msdyn_sciusersettings_PrincipalObjectAttributeAccesses` | [msdyn_sciusersettings](msdyn_sciusersettings.md) | `objectid` | `objectid_msdyn_sciusersettings` |


## Source

Generated from [msdyn_sciusersettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sciusersettings')) on 2026-05-07.