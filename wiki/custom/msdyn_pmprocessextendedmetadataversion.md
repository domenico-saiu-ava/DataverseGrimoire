---
logical: "msdyn_pmprocessextendedmetadataversion"
display: "Versione metadati estesi processo mining di processo"
entitySetName: "msdyn_pmprocessextendedmetadataversions"
primaryId: "msdyn_pmprocessextendedmetadataversionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione metadati estesi processo mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmprocessextendedmetadataversion` |
| Display name | Versione metadati estesi processo mining di processo |
| Display (plural) | Versioni metadati estesi processo mining di processo |
| Schema name | `msdyn_pmprocessextendedmetadataversion` |
| Entity set (Web API) | `msdyn_pmprocessextendedmetadataversions` |
| Primary id attribute | `msdyn_pmprocessextendedmetadataversionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmprocessextendedmetadataversions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmprocessextendedmetadataversions(<guid>)
POST /api/data/v9.2/msdyn_pmprocessextendedmetadataversions
PATCH /api/data/v9.2/msdyn_pmprocessextendedmetadataversions(<guid>)
DELETE /api/data/v9.2/msdyn_pmprocessextendedmetadataversions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_configuration`, `msdyn_name`, `msdyn_pmprocessextendedmetadataversionid`, `msdyn_pmprocessversionid`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmprocessextendedmetadataversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmprocessextendedmetadataversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmprocessextendedmetadataversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmprocessextendedmetadataversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmprocessextendedmetadataversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmprocessextendedmetadataversion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmprocessextendedmetadataversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmprocessextendedmetadataversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_pmprocessversion_msdyn_pmprocessext` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `msdyn_pmprocessversionid` | `msdyn_pmprocessversionid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmprocessextendedmetadataversion_SyncErrors` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_DuplicateMatchingRecord` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_DuplicateBaseRecord` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `baserecordid` | `baserecordid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_AsyncOperations` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_MailboxTrackingFolders` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_UserEntityInstanceDatas` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `objectid` | `objectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_ProcessSession` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_BulkDeleteFailures` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_PrincipalObjectAttributeAccesses` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `objectid` | `objectid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_msdyn_vi` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `msdyn_pmprocessextendedmetadataversionid` | `msdyn_pmprocessextendedmetadataversionid` |


## Source

Generated from [msdyn_pmprocessextendedmetadataversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmprocessextendedmetadataversion')) on 2026-05-07.