---
logical: "msdyn_appprofilerolemapping"
display: "Mapping ruoli profilo app"
entitySetName: "msdyn_appprofilerolemappings"
primaryId: "msdyn_appprofilerolemappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping ruoli profilo app

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appprofilerolemapping` |
| Display name | Mapping ruoli profilo app |
| Display (plural) | Mapping ruoli profilo app |
| Schema name | `msdyn_appprofilerolemapping` |
| Entity set (Web API) | `msdyn_appprofilerolemappings` |
| Primary id attribute | `msdyn_appprofilerolemappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appprofilerolemappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_appprofilerolemappings(<guid>)
POST /api/data/v9.2/msdyn_appprofilerolemappings
PATCH /api/data/v9.2/msdyn_appprofilerolemappings(<guid>)
DELETE /api/data/v9.2/msdyn_appprofilerolemappings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_appprofileid`, `msdyn_appprofilerolemappingid`, `msdyn_name`, `msdyn_securityroleid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_appprofilerolemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appprofilerolemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appprofilerolemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appprofilerolemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_appprofilerolemapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_appprofilerolemapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_appprofilerolemapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_appprofilerolemapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_appconfiguration_msdyn_appprofilerolemapping` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appprofileid` | `msdyn_appprofileid` |
| `role_msdyn_appprofilerolemapping` | [role](role.md) | `msdyn_securityroleid` | `msdyn_securityroleid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appprofilerolemapping_SyncErrors` | [msdyn_appprofilerolemapping](msdyn_appprofilerolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_appprofilerolemapping` |
| `msdyn_appprofilerolemapping_DuplicateMatchingRecord` | [msdyn_appprofilerolemapping](msdyn_appprofilerolemapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_appprofilerolemapping` |
| `msdyn_appprofilerolemapping_DuplicateBaseRecord` | [msdyn_appprofilerolemapping](msdyn_appprofilerolemapping.md) | `baserecordid` | `baserecordid_msdyn_appprofilerolemapping` |
| `msdyn_appprofilerolemapping_AsyncOperations` | [msdyn_appprofilerolemapping](msdyn_appprofilerolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_appprofilerolemapping` |
| `msdyn_appprofilerolemapping_MailboxTrackingFolders` | [msdyn_appprofilerolemapping](msdyn_appprofilerolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_appprofilerolemapping` |
| `msdyn_appprofilerolemapping_UserEntityInstanceDatas` | [msdyn_appprofilerolemapping](msdyn_appprofilerolemapping.md) | `objectid` | `objectid_msdyn_appprofilerolemapping` |
| `msdyn_appprofilerolemapping_ProcessSession` | [msdyn_appprofilerolemapping](msdyn_appprofilerolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_appprofilerolemapping` |
| `msdyn_appprofilerolemapping_BulkDeleteFailures` | [msdyn_appprofilerolemapping](msdyn_appprofilerolemapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_appprofilerolemapping` |
| `msdyn_appprofilerolemapping_PrincipalObjectAttributeAccesses` | [msdyn_appprofilerolemapping](msdyn_appprofilerolemapping.md) | `objectid` | `objectid_msdyn_appprofilerolemapping` |


## Source

Generated from [msdyn_appprofilerolemapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_appprofilerolemapping')) on 2026-05-07.