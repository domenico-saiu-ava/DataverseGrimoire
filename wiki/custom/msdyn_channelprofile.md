---
logical: "msdyn_channelprofile"
display: "Profilo di canale"
entitySetName: "msdyn_channelprofiles"
primaryId: "msdyn_channelprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo di canale

Configurazione del profilo di canale per multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelprofile` |
| Display name | Profilo di canale |
| Display (plural) | Profili di canale |
| Schema name | `msdyn_channelprofile` |
| Entity set (Web API) | `msdyn_channelprofiles` |
| Primary id attribute | `msdyn_channelprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelprofiles(<guid>)
POST /api/data/v9.2/msdyn_channelprofiles
PATCH /api/data/v9.2/msdyn_channelprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_channelprofiles(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_capacitywrapuptimeid`, `msdyn_channelprofileid`, `msdyn_conversationmode`, `msdyn_name`, `msdyn_streamsource`, `msdyn_surveyconfigid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprofile_msdyn_surveyconfigid_msdyn_channelprofilesurveyconfig` | [msdyn_channelprofilesurveyconfig](msdyn_channelprofilesurveyconfig.md) | `msdyn_surveyconfigid` | `msdyn_surveyconfigid` |
| `lk_msdyn_channelprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_channelprofile_msdyn_capacitywrapuptimeid_msdyn_capacitywrapuptime` | [msdyn_capacitywrapuptime](msdyn_capacitywrapuptime.md) | `msdyn_capacitywrapuptimeid` | `msdyn_capacitywrapuptimeid` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelprofileaiagent_msdyn_channelprofileid_msdyn_channelprofile` | [msdyn_channelprofile](msdyn_channelprofile.md) | `msdyn_channelprofileid` | `msdyn_channelprofileid` |
| `msdyn_channelprofilenotificationtemplate_msdyn_channelprofileid_msdyn_channelprofile` | [msdyn_channelprofile](msdyn_channelprofile.md) | `msdyn_channelprofileid` | `msdyn_channelprofileid` |
| `msdyn_channelprofile_SyncErrors` | [msdyn_channelprofile](msdyn_channelprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofile` |
| `msdyn_channelprofile_DuplicateMatchingRecord` | [msdyn_channelprofile](msdyn_channelprofile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelprofile` |
| `msdyn_channelprofile_DuplicateBaseRecord` | [msdyn_channelprofile](msdyn_channelprofile.md) | `baserecordid` | `baserecordid_msdyn_channelprofile` |
| `msdyn_channelprofile_AsyncOperations` | [msdyn_channelprofile](msdyn_channelprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofile` |
| `msdyn_channelprofile_MailboxTrackingFolders` | [msdyn_channelprofile](msdyn_channelprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofile` |
| `msdyn_channelprofile_UserEntityInstanceDatas` | [msdyn_channelprofile](msdyn_channelprofile.md) | `objectid` | `objectid_msdyn_channelprofile` |
| `msdyn_channelprofile_ProcessSession` | [msdyn_channelprofile](msdyn_channelprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofile` |
| `msdyn_channelprofile_BulkDeleteFailures` | [msdyn_channelprofile](msdyn_channelprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelprofile` |
| `msdyn_channelprofile_PrincipalObjectAttributeAccesses` | [msdyn_channelprofile](msdyn_channelprofile.md) | `objectid` | `objectid_msdyn_channelprofile` |
| `msdyn_ocsession_msdyn_channelprofileid_msdyn_channelprofile` | [msdyn_channelprofile](msdyn_channelprofile.md) | `msdyn_channelprofileid` | `msdyn_channelprofileid` |
| `Queue_msdyn_channelprofileid_msdyn_channelprofile` | [msdyn_channelprofile](msdyn_channelprofile.md) | `msdyn_channelprofileid` | `msdyn_channelprofileid` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_channelprofile_msdyn_ocautomatedactionrule` | [msdyn_ocautomatedactionrule](msdyn_ocautomatedactionrule.md) | _n/a_ | `msdyn_msdyn_channelprofile_msdyn_ocautomatedactionrule` |
| `msdyn_msdyn_channelprofile_msdyn_ocsystemmessage` | [msdyn_ocsystemmessage](msdyn_ocsystemmessage.md) | _n/a_ | `msdyn_msdyn_channelprofile_msdyn_ocsystemmessage` |

## Source

Generated from [msdyn_channelprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelprofile')) on 2026-05-07.