---
logical: "msdyn_pmprocessversion"
display: "Versione processo mining di processo"
entitySetName: "msdyn_pmprocessversions"
primaryId: "msdyn_pmprocessversionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione processo mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmprocessversion` |
| Display name | Versione processo mining di processo |
| Display (plural) | Versioni processo mining di processo |
| Schema name | `msdyn_pmprocessversion` |
| Entity set (Web API) | `msdyn_pmprocessversions` |
| Primary id attribute | `msdyn_pmprocessversionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmprocessversions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmprocessversions(<guid>)
POST /api/data/v9.2/msdyn_pmprocessversions
PATCH /api/data/v9.2/msdyn_pmprocessversions(<guid>)
DELETE /api/data/v9.2/msdyn_pmprocessversions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_configuration`, `msdyn_inputbookmark`, `msdyn_name`, `msdyn_pminferredtaskid`, `msdyn_pmprocessversionid`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmprocessversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmprocessversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmprocessversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmprocessversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmprocessversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmprocessversion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmprocessversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmprocessversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_pminferredtask_msdyn_pmprocessversion` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_pminferredtaskid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmprocessversion_SyncErrors` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_DuplicateMatchingRecord` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_DuplicateBaseRecord` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `baserecordid` | `baserecordid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_AsyncOperations` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_MailboxTrackingFolders` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_UserEntityInstanceDatas` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `objectid` | `objectid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_ProcessSession` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_BulkDeleteFailures` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_PrincipalObjectAttributeAccesses` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `objectid` | `objectid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_msdyn_pmprocessext` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `msdyn_pmprocessversionid` | `msdyn_pmprocessversionid` |
| `msdyn_pmprocessversion_msdyn_pmview` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `msdyn_pmprocessversionid` | `msdyn_pmprocessversionid` |


## Source

Generated from [msdyn_pmprocessversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmprocessversion')) on 2026-05-07.