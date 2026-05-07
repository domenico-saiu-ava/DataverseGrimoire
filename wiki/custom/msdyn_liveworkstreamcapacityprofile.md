---
logical: "msdyn_liveworkstreamcapacityprofile"
display: "Profilo capacità flusso di lavoro"
entitySetName: "msdyn_liveworkstreamcapacityprofiles"
primaryId: "msdyn_liveworkstreamcapacityprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo capacità flusso di lavoro

Profilo capacità flusso di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_liveworkstreamcapacityprofile` |
| Display name | Profilo capacità flusso di lavoro |
| Display (plural) | Profilo capacità flusso di lavoro |
| Schema name | `msdyn_liveworkstreamcapacityprofile` |
| Entity set (Web API) | `msdyn_liveworkstreamcapacityprofiles` |
| Primary id attribute | `msdyn_liveworkstreamcapacityprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles(<guid>)
POST /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles
PATCH /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_capacityprofile_id`, `msdyn_liveworkstreamcapacityprofileid`, `msdyn_name`, `msdyn_workstream_id`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_liveworkstreamcapacityprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_liveworkstreamcapacityprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_liveworkstreamcapacityprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_liveworkstreamcapacityprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_liveworkstreamcapacityprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_liveworkstreamcapacityprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_liveworkstreamcapacityprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_liveworkstreamcapacityprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream_id` | `msdyn_workstream_id` |
| `msdyn_capacityprofile_msdyn_liveworkstreamcapacityprofileid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofile_id` | `msdyn_capacityProfile_id` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveworkstreamcapacityprofile_SyncErrors` | [msdyn_liveworkstreamcapacityprofile](msdyn_liveworkstreamcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstreamcapacityprofile` |
| `msdyn_liveworkstreamcapacityprofile_DuplicateMatchingRecord` | [msdyn_liveworkstreamcapacityprofile](msdyn_liveworkstreamcapacityprofile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_liveworkstreamcapacityprofile` |
| `msdyn_liveworkstreamcapacityprofile_DuplicateBaseRecord` | [msdyn_liveworkstreamcapacityprofile](msdyn_liveworkstreamcapacityprofile.md) | `baserecordid` | `baserecordid_msdyn_liveworkstreamcapacityprofile` |
| `msdyn_liveworkstreamcapacityprofile_AsyncOperations` | [msdyn_liveworkstreamcapacityprofile](msdyn_liveworkstreamcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstreamcapacityprofile` |
| `msdyn_liveworkstreamcapacityprofile_MailboxTrackingFolders` | [msdyn_liveworkstreamcapacityprofile](msdyn_liveworkstreamcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstreamcapacityprofile` |
| `msdyn_liveworkstreamcapacityprofile_UserEntityInstanceDatas` | [msdyn_liveworkstreamcapacityprofile](msdyn_liveworkstreamcapacityprofile.md) | `objectid` | `objectid_msdyn_liveworkstreamcapacityprofile` |
| `msdyn_liveworkstreamcapacityprofile_ProcessSession` | [msdyn_liveworkstreamcapacityprofile](msdyn_liveworkstreamcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstreamcapacityprofile` |
| `msdyn_liveworkstreamcapacityprofile_BulkDeleteFailures` | [msdyn_liveworkstreamcapacityprofile](msdyn_liveworkstreamcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstreamcapacityprofile` |
| `msdyn_liveworkstreamcapacityprofile_PrincipalObjectAttributeAccesses` | [msdyn_liveworkstreamcapacityprofile](msdyn_liveworkstreamcapacityprofile.md) | `objectid` | `objectid_msdyn_liveworkstreamcapacityprofile` |


## Source

Generated from [msdyn_liveworkstreamcapacityprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_liveworkstreamcapacityprofile')) on 2026-05-07.