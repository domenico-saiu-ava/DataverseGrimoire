---
logical: "msdyn_surveyconfig"
display: "msdyn_surveyconfig"
entitySetName: "msdyn_surveyconfigs"
primaryId: "msdyn_surveyconfigid"
primaryName: "msdyn_surveyconfigname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_surveyconfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_surveyconfig` |
| Display name | msdyn_surveyconfig |
| Display (plural) | msdyn_surveyconfigs |
| Schema name | `msdyn_surveyconfig` |
| Entity set (Web API) | `msdyn_surveyconfigs` |
| Primary id attribute | `msdyn_surveyconfigid` |
| Primary name attribute | `msdyn_surveyconfigname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_surveyconfigs?$select=msdyn_surveyconfigname&$top=10
GET /api/data/v9.2/msdyn_surveyconfigs(<guid>)
POST /api/data/v9.2/msdyn_surveyconfigs
PATCH /api/data/v9.2/msdyn_surveyconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_surveyconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentsurveyid`, `msdyn_botsurveyid`, `msdyn_surveyconfigid`, `msdyn_surveyconfigname`, `msdyn_targetchannelid`, `msdyn_targetchannellogicalname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_surveyconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_surveyconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_surveyconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_surveyconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_surveyconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_surveyconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_surveyconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_surveyconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_customerfeedbacksurvey_msdyn_surveyconfig_msdyn_agentsurveyid` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_agentsurveyid` | `msdyn_agentsurveyid` |
| `msdyn_customerfeedbacksurvey_msdyn_surveyconfig_msdyn_botsurveyid` | [msdyn_customerfeedbacksurvey](msdyn_customerfeedbacksurvey.md) | `msdyn_botsurveyid` | `msdyn_botsurveyid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_surveyconfig_SyncErrors` | [msdyn_surveyconfig](msdyn_surveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveyconfig` |
| `msdyn_surveyconfig_DuplicateMatchingRecord` | [msdyn_surveyconfig](msdyn_surveyconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_surveyconfig` |
| `msdyn_surveyconfig_DuplicateBaseRecord` | [msdyn_surveyconfig](msdyn_surveyconfig.md) | `baserecordid` | `baserecordid_msdyn_surveyconfig` |
| `msdyn_surveyconfig_AsyncOperations` | [msdyn_surveyconfig](msdyn_surveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveyconfig` |
| `msdyn_surveyconfig_MailboxTrackingFolders` | [msdyn_surveyconfig](msdyn_surveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveyconfig` |
| `msdyn_surveyconfig_UserEntityInstanceDatas` | [msdyn_surveyconfig](msdyn_surveyconfig.md) | `objectid` | `objectid_msdyn_surveyconfig` |
| `msdyn_surveyconfig_ProcessSession` | [msdyn_surveyconfig](msdyn_surveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveyconfig` |
| `msdyn_surveyconfig_BulkDeleteFailures` | [msdyn_surveyconfig](msdyn_surveyconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_surveyconfig` |
| `msdyn_surveyconfig_PrincipalObjectAttributeAccesses` | [msdyn_surveyconfig](msdyn_surveyconfig.md) | `objectid` | `objectid_msdyn_surveyconfig` |


## Source

Generated from [msdyn_surveyconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_surveyconfig')) on 2026-05-07.