---
logical: "msdyn_businessprofile"
display: "msdyn_businessprofile "
entitySetName: "msdyn_businessprofiles"
primaryId: "msdyn_businessprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_businessprofile 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_businessprofile` |
| Display name | msdyn_businessprofile  |
| Display (plural) | msdyn_businessprofiles |
| Schema name | `msdyn_businessprofile` |
| Entity set (Web API) | `msdyn_businessprofiles` |
| Primary id attribute | `msdyn_businessprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_businessprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_businessprofiles(<guid>)
POST /api/data/v9.2/msdyn_businessprofiles
PATCH /api/data/v9.2/msdyn_businessprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_businessprofiles(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_businessprofileid`, `msdyn_companyurl`, `msdyn_industry`, `msdyn_name`, `msdyn_otherindustryname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_businessprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_businessprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_businessprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_businessprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_businessprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_businessprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_businessprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_businessprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_businessprofile_SyncErrors` | [msdyn_businessprofile](msdyn_businessprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessprofile` |
| `msdyn_businessprofile_DuplicateMatchingRecord` | [msdyn_businessprofile](msdyn_businessprofile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_businessprofile` |
| `msdyn_businessprofile_DuplicateBaseRecord` | [msdyn_businessprofile](msdyn_businessprofile.md) | `baserecordid` | `baserecordid_msdyn_businessprofile` |
| `msdyn_businessprofile_AsyncOperations` | [msdyn_businessprofile](msdyn_businessprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessprofile` |
| `msdyn_businessprofile_MailboxTrackingFolders` | [msdyn_businessprofile](msdyn_businessprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessprofile` |
| `msdyn_businessprofile_UserEntityInstanceDatas` | [msdyn_businessprofile](msdyn_businessprofile.md) | `objectid` | `objectid_msdyn_businessprofile` |
| `msdyn_businessprofile_ProcessSession` | [msdyn_businessprofile](msdyn_businessprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessprofile` |
| `msdyn_businessprofile_BulkDeleteFailures` | [msdyn_businessprofile](msdyn_businessprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_businessprofile` |
| `msdyn_businessprofile_PrincipalObjectAttributeAccesses` | [msdyn_businessprofile](msdyn_businessprofile.md) | `objectid` | `objectid_msdyn_businessprofile` |


## Source

Generated from [msdyn_businessprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_businessprofile')) on 2026-05-07.