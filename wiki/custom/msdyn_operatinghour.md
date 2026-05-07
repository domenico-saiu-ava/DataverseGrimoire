---
logical: "msdyn_operatinghour"
display: "Ora di attività"
entitySetName: "msdyn_operatinghours"
primaryId: "msdyn_operatinghourid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ora di attività

Archivia tutte le ore di attività configurate per un'organizzazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_operatinghour` |
| Display name | Ora di attività |
| Display (plural) | Ore di attività |
| Schema name | `msdyn_operatinghour` |
| Entity set (Web API) | `msdyn_operatinghours` |
| Primary id attribute | `msdyn_operatinghourid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_operatinghours?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_operatinghours(<guid>)
POST /api/data/v9.2/msdyn_operatinghours
PATCH /api/data/v9.2/msdyn_operatinghours(<guid>)
DELETE /api/data/v9.2/msdyn_operatinghours(<guid>)
```

## Attributes

Writable: **18** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_calendarid`, `msdyn_description`, `msdyn_enablealldays`, `msdyn_endtimestring`, `msdyn_name`, `msdyn_oc_daysofweek`, `msdyn_operatinghourid`, `msdyn_starttimestring`, `msdyn_timezone`, `msdyn_totalworkhours`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_operatinghour_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_operatinghour_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_operatinghour_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_operatinghour_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_operatinghour` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_operatinghour` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_operatinghour` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_operatinghour` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_operatinghour_queue` | [msdyn_operatinghour](msdyn_operatinghour.md) | `msdyn_operatinghourid` | `msdyn_operatinghourid` |
| `msdyn_operatinghour_SyncErrors` | [msdyn_operatinghour](msdyn_operatinghour.md) | `regardingobjectid` | `regardingobjectid_msdyn_operatinghour` |
| `msdyn_operatinghour_AsyncOperations` | [msdyn_operatinghour](msdyn_operatinghour.md) | `regardingobjectid` | `regardingobjectid_msdyn_operatinghour` |
| `msdyn_operatinghour_MailboxTrackingFolders` | [msdyn_operatinghour](msdyn_operatinghour.md) | `regardingobjectid` | `regardingobjectid_msdyn_operatinghour` |
| `msdyn_operatinghour_UserEntityInstanceDatas` | [msdyn_operatinghour](msdyn_operatinghour.md) | `objectid` | `objectid_msdyn_operatinghour` |
| `msdyn_operatinghour_ProcessSession` | [msdyn_operatinghour](msdyn_operatinghour.md) | `regardingobjectid` | `regardingobjectid_msdyn_operatinghour` |
| `msdyn_operatinghour_BulkDeleteFailures` | [msdyn_operatinghour](msdyn_operatinghour.md) | `regardingobjectid` | `regardingobjectid_msdyn_operatinghour` |
| `msdyn_operatinghour_PrincipalObjectAttributeAccesses` | [msdyn_operatinghour](msdyn_operatinghour.md) | `objectid` | `objectid_msdyn_operatinghour` |


## Source

Generated from [msdyn_operatinghour (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_operatinghour')) on 2026-05-07.