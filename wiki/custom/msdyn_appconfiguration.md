---
logical: "msdyn_appconfiguration"
display: "Profilo app"
entitySetName: "msdyn_appconfigurations"
primaryId: "msdyn_appconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo app

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appconfiguration` |
| Display name | Profilo app |
| Display (plural) | Profili app |
| Schema name | `msdyn_appconfiguration` |
| Entity set (Web API) | `msdyn_appconfigurations` |
| Primary id attribute | `msdyn_appconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_appconfigurations(<guid>)
POST /api/data/v9.2/msdyn_appconfigurations
PATCH /api/data/v9.2/msdyn_appconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_appconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_appconfigurationid`, `msdyn_appmoduleuniquename`, `msdyn_description`, `msdyn_name`, `msdyn_productivitypaneuniquename`, `msdyn_profileorder`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_appconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_appconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_appconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_appconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_appconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfiguration_msdyn_inboxconfiguration` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appconfigurationid` | `msdyn_appconfigurationid` |
| `msdyn_chtappcopilotconfig_msdyn_appconfig` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appconfigurationid` | `msdyn_appconfigurationid` |
| `msdyn_appcopilotconfig_msdyn_appconfig` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appconfigurationid` | `msdyn_appconfigurationid` |
| `msdyn_appconfiguration_SyncErrors` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appconfiguration` |
| `msdyn_appconfiguration_DuplicateMatchingRecord` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_appconfiguration` |
| `msdyn_appconfiguration_DuplicateBaseRecord` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `baserecordid` | `baserecordid_msdyn_appconfiguration` |
| `msdyn_appconfiguration_AsyncOperations` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appconfiguration` |
| `msdyn_appconfiguration_MailboxTrackingFolders` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appconfiguration` |
| `msdyn_appconfiguration_UserEntityInstanceDatas` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `objectid` | `objectid_msdyn_appconfiguration` |
| `msdyn_appconfiguration_ProcessSession` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appconfiguration` |
| `msdyn_appconfiguration_BulkDeleteFailures` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appconfiguration` |
| `msdyn_appconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `objectid` | `objectid_msdyn_appconfiguration` |
| `msdyn_appconfiguration_msdyn_appprofilerolemapping` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appprofileid` | `msdyn_appprofileid` |

### Many-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appconfiguration_applicationextension` | [msdyn_applicationextension](msdyn_applicationextension.md) | _n/a_ | `msdyn_appconfiguration_applicationextension` |
| `msdyn_appconfiguration_sessiontemplate` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | _n/a_ | `msdyn_appconfiguration_sessiontemplate` |
| `msdyn_appconfiguration_systemuser` | [systemuser](systemuser.md) | _n/a_ | `msdyn_appconfiguration_systemuser` |
| `msdyn_appconfig_msdyn_channelprovider` | [msdyn_channelprovider](msdyn_channelprovider.md) | _n/a_ | `msdyn_appconfig_msdyn_channelprovider` |
| `msdyn_msdyn_paneconfig_msdyn_appconfig` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | _n/a_ | `msdyn_msdyn_paneconfig_msdyn_appconfig` |
| `msdyn_smartassistconfig_msdyn_appconfig` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | _n/a_ | `msdyn_smartassistconfig_msdyn_appconfig` |

## Source

Generated from [msdyn_appconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_appconfiguration')) on 2026-05-07.