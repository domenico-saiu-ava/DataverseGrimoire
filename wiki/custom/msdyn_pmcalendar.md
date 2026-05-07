---
logical: "msdyn_pmcalendar"
display: "Calendario del mining di processo"
entitySetName: "msdyn_pmcalendars"
primaryId: "msdyn_pmcalendarid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Calendario del mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmcalendar` |
| Display name | Calendario del mining di processo |
| Display (plural) | Calendari del mining di processo |
| Schema name | `msdyn_pmcalendar` |
| Entity set (Web API) | `msdyn_pmcalendars` |
| Primary id attribute | `msdyn_pmcalendarid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmcalendars?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmcalendars(<guid>)
POST /api/data/v9.2/msdyn_pmcalendars
PATCH /api/data/v9.2/msdyn_pmcalendars(<guid>)
DELETE /api/data/v9.2/msdyn_pmcalendars(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_pmcalendarid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmcalendar_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmcalendar_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmcalendar_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmcalendar_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmcalendar` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmcalendar` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmcalendar` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmcalendar` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmcalendar_SyncErrors` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_DuplicateMatchingRecord` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_DuplicateBaseRecord` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `baserecordid` | `baserecordid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_AsyncOperations` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_MailboxTrackingFolders` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_UserEntityInstanceDatas` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `objectid` | `objectid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_ProcessSession` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_BulkDeleteFailures` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_PrincipalObjectAttributeAccesses` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `objectid` | `objectid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_msdyn_pmcalendarversion` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `msdyn_pmcalendarid` | `msdyn_pmcalendarid` |


## Source

Generated from [msdyn_pmcalendar (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmcalendar')) on 2026-05-07.