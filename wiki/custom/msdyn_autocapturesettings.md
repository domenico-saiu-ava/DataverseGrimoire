---
logical: "msdyn_autocapturesettings"
display: "Impostazioni di acquisizione automatica"
entitySetName: "msdyn_autocapturesettingses"
primaryId: "msdyn_autocapturesettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni di acquisizione automatica

Auto Capture Settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_autocapturesettings` |
| Display name | Impostazioni di acquisizione automatica |
| Display (plural) | Auto Capture Settings |
| Schema name | `msdyn_autocapturesettings` |
| Entity set (Web API) | `msdyn_autocapturesettingses` |
| Primary id attribute | `msdyn_autocapturesettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_autocapturesettingses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_autocapturesettingses(<guid>)
POST /api/data/v9.2/msdyn_autocapturesettingses
PATCH /api/data/v9.2/msdyn_autocapturesettingses(<guid>)
DELETE /api/data/v9.2/msdyn_autocapturesettingses(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_DontShowSettingStatus`, `msdyn_autocapture`, `msdyn_autocapturesettingsid`, `msdyn_autocapturev1`, `msdyn_automaticactivityupdate`, `msdyn_calendar`, `msdyn_contacts`, `msdyn_defaultassociation`, `msdyn_emails`, `msdyn_meetings`, `msdyn_name`, `msdyn_organizationid`, `msdyn_settingsuiaction`, `msdyn_userid`, `msdyn_v1termsandconditionscount`, `msdyn_v2termsandconditionscount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_autocapturesettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_autocapturesettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_autocapturesettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_autocapturesettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_autocapturesettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_autocapturesettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_autocapturesettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_autocapturesettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_autocapturesettings_SyncErrors` | [msdyn_autocapturesettings](msdyn_autocapturesettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturesettings` |
| `msdyn_autocapturesettings_DuplicateMatchingRecord` | [msdyn_autocapturesettings](msdyn_autocapturesettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_autocapturesettings` |
| `msdyn_autocapturesettings_DuplicateBaseRecord` | [msdyn_autocapturesettings](msdyn_autocapturesettings.md) | `baserecordid` | `baserecordid_msdyn_autocapturesettings` |
| `msdyn_autocapturesettings_AsyncOperations` | [msdyn_autocapturesettings](msdyn_autocapturesettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturesettings` |
| `msdyn_autocapturesettings_MailboxTrackingFolders` | [msdyn_autocapturesettings](msdyn_autocapturesettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturesettings` |
| `msdyn_autocapturesettings_UserEntityInstanceDatas` | [msdyn_autocapturesettings](msdyn_autocapturesettings.md) | `objectid` | `objectid_msdyn_autocapturesettings` |
| `msdyn_autocapturesettings_ProcessSession` | [msdyn_autocapturesettings](msdyn_autocapturesettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturesettings` |
| `msdyn_autocapturesettings_BulkDeleteFailures` | [msdyn_autocapturesettings](msdyn_autocapturesettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_autocapturesettings` |
| `msdyn_autocapturesettings_PrincipalObjectAttributeAccesses` | [msdyn_autocapturesettings](msdyn_autocapturesettings.md) | `objectid` | `objectid_msdyn_autocapturesettings` |


## Source

Generated from [msdyn_autocapturesettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_autocapturesettings')) on 2026-05-07.