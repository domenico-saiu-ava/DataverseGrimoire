---
logical: "msdyn_pmcalendarversion"
display: "Versione calendario mining di processo"
entitySetName: "msdyn_pmcalendarversions"
primaryId: "msdyn_pmcalendarversionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione calendario mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmcalendarversion` |
| Display name | Versione calendario mining di processo |
| Display (plural) | Versioni calendario mining di processo |
| Schema name | `msdyn_pmcalendarversion` |
| Entity set (Web API) | `msdyn_pmcalendarversions` |
| Primary id attribute | `msdyn_pmcalendarversionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmcalendarversions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmcalendarversions(<guid>)
POST /api/data/v9.2/msdyn_pmcalendarversions
PATCH /api/data/v9.2/msdyn_pmcalendarversions(<guid>)
DELETE /api/data/v9.2/msdyn_pmcalendarversions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_configuration`, `msdyn_name`, `msdyn_pmcalendarid`, `msdyn_pmcalendarversionid`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmcalendarversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmcalendarversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmcalendarversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmcalendarversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmcalendarversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmcalendarversion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmcalendarversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmcalendarversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_pmcalendar_msdyn_pmcalendarversion` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `msdyn_pmcalendarid` | `msdyn_pmcalendarid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmcalendarversion_SyncErrors` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_DuplicateMatchingRecord` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_DuplicateBaseRecord` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `baserecordid` | `baserecordid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_AsyncOperations` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_MailboxTrackingFolders` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_UserEntityInstanceDatas` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `objectid` | `objectid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_ProcessSession` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_BulkDeleteFailures` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_PrincipalObjectAttributeAccesses` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `objectid` | `objectid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_msdyn_pmview` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `msdyn_pmcalendarversionid` | `msdyn_pmcalendarversionid` |


## Source

Generated from [msdyn_pmcalendarversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmcalendarversion')) on 2026-05-07.