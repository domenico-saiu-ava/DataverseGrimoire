---
logical: "msdyn_channelprofilesurveyconfig"
display: "Configurazione sondaggio nel profilo canale"
entitySetName: "msdyn_channelprofilesurveyconfigs"
primaryId: "msdyn_channelprofilesurveyconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione sondaggio nel profilo canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelprofilesurveyconfig` |
| Display name | Configurazione sondaggio nel profilo canale |
| Display (plural) | Configurazioni sondaggio nel profilo canale |
| Schema name | `msdyn_channelprofilesurveyconfig` |
| Entity set (Web API) | `msdyn_channelprofilesurveyconfigs` |
| Primary id attribute | `msdyn_channelprofilesurveyconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelprofilesurveyconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelprofilesurveyconfigs(<guid>)
POST /api/data/v9.2/msdyn_channelprofilesurveyconfigs
PATCH /api/data/v9.2/msdyn_channelprofilesurveyconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_channelprofilesurveyconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_botsurveyid`, `msdyn_channelprofilesurveyconfigid`, `msdyn_enablepostcall`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channelprofilesurveyconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelprofilesurveyconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelprofilesurveyconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelprofilesurveyconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelprofilesurveyconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelprofilesurveyconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelprofilesurveyconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelprofilesurveyconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_channelprofilesurveyconfig_msdyn_botsurveyid_msdyn_customerfeedbacksurvey` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_botsurveyid` | `msdyn_botsurveyid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprofilesurveyconfig_SyncErrors` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilesurveyconfig` |
| `msdyn_channelprofilesurveyconfig_DuplicateMatchingRecord` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelprofilesurveyconfig` |
| `msdyn_channelprofilesurveyconfig_DuplicateBaseRecord` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `baserecordid` | `baserecordid_msdyn_channelprofilesurveyconfig` |
| `msdyn_channelprofilesurveyconfig_AsyncOperations` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilesurveyconfig` |
| `msdyn_channelprofilesurveyconfig_MailboxTrackingFolders` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilesurveyconfig` |
| `msdyn_channelprofilesurveyconfig_UserEntityInstanceDatas` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `objectid` | `objectid_msdyn_channelprofilesurveyconfig` |
| `msdyn_channelprofilesurveyconfig_ProcessSession` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilesurveyconfig` |
| `msdyn_channelprofilesurveyconfig_BulkDeleteFailures` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofilesurveyconfig` |
| `msdyn_channelprofilesurveyconfig_PrincipalObjectAttributeAccesses` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `objectid` | `objectid_msdyn_channelprofilesurveyconfig` |
| `msdyn_channelprofile_msdyn_surveyconfigid_msdyn_channelprofilesurveyconfig` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `msdyn_surveyconfigid` | `msdyn_surveyconfigid` |


## Source

Generated from [msdyn_channelprofilesurveyconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelprofilesurveyconfig')) on 2026-05-07.