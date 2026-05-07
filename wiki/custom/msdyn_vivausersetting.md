---
logical: "msdyn_vivausersetting"
display: "msdyn_vivausersetting"
entitySetName: "msdyn_vivausersettings"
primaryId: "msdyn_vivausersettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_vivausersetting

User level settings for Copilot for Sales

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_vivausersetting` |
| Display name | msdyn_vivausersetting |
| Display (plural) | msdyn_vivausersettings |
| Schema name | `msdyn_vivausersetting` |
| Entity set (Web API) | `msdyn_vivausersettings` |
| Primary id attribute | `msdyn_vivausersettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_vivausersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_vivausersettings(<guid>)
POST /api/data/v9.2/msdyn_vivausersettings
PATCH /api/data/v9.2/msdyn_vivausersettings(<guid>)
DELETE /api/data/v9.2/msdyn_vivausersettings(<guid>)
```

## Attributes

Writable: **16** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_featurename`, `msdyn_name`, `msdyn_orgid`, `msdyn_producttype`, `msdyn_settingscreatedby`, `msdyn_settingsmodifiedby`, `msdyn_userid`, `msdyn_usersettings`, `msdyn_vivausersettingid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_vivausersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_vivausersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_vivausersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_vivausersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_vivausersetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_vivausersetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_vivausersetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_vivausersetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_vivausersetting_SyncErrors` | [msdyn_vivausersetting](msdyn_vivausersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivausersetting` |
| `msdyn_vivausersetting_DuplicateMatchingRecord` | [msdyn_vivausersetting](msdyn_vivausersetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_vivausersetting` |
| `msdyn_vivausersetting_DuplicateBaseRecord` | [msdyn_vivausersetting](msdyn_vivausersetting.md) | `baserecordid` | `baserecordid_msdyn_vivausersetting` |
| `msdyn_vivausersetting_AsyncOperations` | [msdyn_vivausersetting](msdyn_vivausersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivausersetting` |
| `msdyn_vivausersetting_MailboxTrackingFolders` | [msdyn_vivausersetting](msdyn_vivausersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivausersetting` |
| `msdyn_vivausersetting_UserEntityInstanceDatas` | [msdyn_vivausersetting](msdyn_vivausersetting.md) | `objectid` | `objectid_msdyn_vivausersetting` |
| `msdyn_vivausersetting_ProcessSession` | [msdyn_vivausersetting](msdyn_vivausersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivausersetting` |
| `msdyn_vivausersetting_BulkDeleteFailures` | [msdyn_vivausersetting](msdyn_vivausersetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivausersetting` |
| `msdyn_vivausersetting_PrincipalObjectAttributeAccesses` | [msdyn_vivausersetting](msdyn_vivausersetting.md) | `objectid` | `objectid_msdyn_vivausersetting` |


## Source

Generated from [msdyn_vivausersetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_vivausersetting')) on 2026-05-07.