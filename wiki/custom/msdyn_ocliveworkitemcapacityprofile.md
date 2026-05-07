---
logical: "msdyn_ocliveworkitemcapacityprofile"
display: "Profilo capacità conversazione"
entitySetName: "msdyn_ocliveworkitemcapacityprofiles"
primaryId: "msdyn_ocliveworkitemcapacityprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo capacità conversazione

Profilo capacità conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemcapacityprofile` |
| Display name | Profilo capacità conversazione |
| Display (plural) | Profilo capacità conversazione |
| Schema name | `msdyn_ocliveworkitemcapacityprofile` |
| Entity set (Web API) | `msdyn_ocliveworkitemcapacityprofiles` |
| Primary id attribute | `msdyn_ocliveworkitemcapacityprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles
PATCH /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemcapacityprofiles(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_capacityprofileid`, `msdyn_name`, `msdyn_ocliveworkitemcapacityprofileid`, `msdyn_ocliveworkitemid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkitemcapacityprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemcapacityprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemcapacityprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemcapacityprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocliveworkitemcapacityprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocliveworkitemcapacityprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocliveworkitemcapacityprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocliveworkitemcapacityprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_capacityprofile_msdyn_ocliveworkitemcapacityprofile` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `msdyn_ocliveworkitem_msdyn_ocliveworkitemcapacityprofile` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemcapacityprofile_SyncErrors` | [msdyn_ocliveworkitemcapacityprofile](msdyn_ocliveworkitemcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcapacityprofile` |
| `msdyn_ocliveworkitemcapacityprofile_DuplicateMatchingRecord` | [msdyn_ocliveworkitemcapacityprofile](msdyn_ocliveworkitemcapacityprofile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocliveworkitemcapacityprofile` |
| `msdyn_ocliveworkitemcapacityprofile_DuplicateBaseRecord` | [msdyn_ocliveworkitemcapacityprofile](msdyn_ocliveworkitemcapacityprofile.md) | `baserecordid` | `baserecordid_msdyn_ocliveworkitemcapacityprofile` |
| `msdyn_ocliveworkitemcapacityprofile_AsyncOperations` | [msdyn_ocliveworkitemcapacityprofile](msdyn_ocliveworkitemcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcapacityprofile` |
| `msdyn_ocliveworkitemcapacityprofile_MailboxTrackingFolders` | [msdyn_ocliveworkitemcapacityprofile](msdyn_ocliveworkitemcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcapacityprofile` |
| `msdyn_ocliveworkitemcapacityprofile_UserEntityInstanceDatas` | [msdyn_ocliveworkitemcapacityprofile](msdyn_ocliveworkitemcapacityprofile.md) | `objectid` | `objectid_msdyn_ocliveworkitemcapacityprofile` |
| `msdyn_ocliveworkitemcapacityprofile_ProcessSession` | [msdyn_ocliveworkitemcapacityprofile](msdyn_ocliveworkitemcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcapacityprofile` |
| `msdyn_ocliveworkitemcapacityprofile_BulkDeleteFailures` | [msdyn_ocliveworkitemcapacityprofile](msdyn_ocliveworkitemcapacityprofile.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemcapacityprofile` |
| `msdyn_ocliveworkitemcapacityprofile_PrincipalObjectAttributeAccesses` | [msdyn_ocliveworkitemcapacityprofile](msdyn_ocliveworkitemcapacityprofile.md) | `objectid` | `objectid_msdyn_ocliveworkitemcapacityprofile` |


## Source

Generated from [msdyn_ocliveworkitemcapacityprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkitemcapacityprofile')) on 2026-05-07.