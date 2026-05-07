---
logical: "msdyn_shiftplan"
display: "Piano di turni"
entitySetName: "msdyn_shiftplans"
primaryId: "msdyn_shiftplanid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Piano di turni

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_shiftplan` |
| Display name | Piano di turni |
| Display (plural) | Piani di turni |
| Schema name | `msdyn_shiftplan` |
| Entity set (Web API) | `msdyn_shiftplans` |
| Primary id attribute | `msdyn_shiftplanid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_shiftplans?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_shiftplans(<guid>)
POST /api/data/v9.2/msdyn_shiftplans
PATCH /api/data/v9.2/msdyn_shiftplans(<guid>)
DELETE /api/data/v9.2/msdyn_shiftplans(<guid>)
```

## Attributes

Writable: **26** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bidexpiration`, `msdyn_capacityplan`, `msdyn_description`, `msdyn_endtime`, `msdyn_fromdate`, `msdyn_holidaycalendar`, `msdyn_name`, `msdyn_queues`, `msdyn_releasedforbid`, `msdyn_requiredstaff`, `msdyn_shiftactivities`, `msdyn_shiftplanid`, `msdyn_shifttype`, `msdyn_skills`, `msdyn_starttime`, `msdyn_status`, `msdyn_timezone`, `msdyn_todate`, `msdyn_weeklyrecurrence`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_shiftplan_capacityplan_msdyn_capacityplan` | [msdyn_capacityplanning](msdyn_capacityplanning.md) | `msdyn_capacityplan` | `msdyn_capacityplan` |
| `lk_msdyn_shiftplan_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_shiftplan_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_shiftplan_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_shiftplan_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_shiftplan` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_shiftplan` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_shiftplan` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_shiftplan` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_shiftplan_bookableresourcebooking_msdyn_shiftplan` | [msdyn_shiftplan](msdyn_shiftplan.md) | `msdyn_shiftplan` | `msdyn_shiftplan` |
| `msdyn_shiftplan_msdyn_resourcerequirement_msdyn_shiftplan` | [msdyn_shiftplan](msdyn_shiftplan.md) | `msdyn_shiftplan` | `msdyn_shiftplan` |
| `msdyn_wemrequest_shiftplan_msdyn_shiftplan` | [msdyn_shiftplan](msdyn_shiftplan.md) | `msdyn_shiftplan` | `msdyn_shiftplan` |
| `msdyn_wemrequest_swapforshiftplan_msdyn_shiftpl` | [msdyn_shiftplan](msdyn_shiftplan.md) | `msdyn_swapforshiftplan` | `msdyn_swapforshiftplan` |
| `msdyn_shiftplan_SyncErrors` | [msdyn_shiftplan](msdyn_shiftplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftplan` |
| `msdyn_shiftplan_AsyncOperations` | [msdyn_shiftplan](msdyn_shiftplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftplan` |
| `msdyn_shiftplan_MailboxTrackingFolders` | [msdyn_shiftplan](msdyn_shiftplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftplan` |
| `msdyn_shiftplan_UserEntityInstanceDatas` | [msdyn_shiftplan](msdyn_shiftplan.md) | `objectid` | `objectid_msdyn_shiftplan` |
| `msdyn_shiftplan_ProcessSession` | [msdyn_shiftplan](msdyn_shiftplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftplan` |
| `msdyn_shiftplan_BulkDeleteFailures` | [msdyn_shiftplan](msdyn_shiftplan.md) | `regardingobjectid` | `regardingobjectid_msdyn_shiftplan` |
| `msdyn_shiftplan_PrincipalObjectAttributeAccesses` | [msdyn_shiftplan](msdyn_shiftplan.md) | `objectid` | `objectid_msdyn_shiftplan` |
| `msdyn_shiftplan_DuplicateMatchingRecord` | [msdyn_shiftplan](msdyn_shiftplan.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_shiftplan` |
| `msdyn_shiftplan_DuplicateBaseRecord` | [msdyn_shiftplan](msdyn_shiftplan.md) | `baserecordid` | `baserecordid_msdyn_shiftplan` |


## Source

Generated from [msdyn_shiftplan (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_shiftplan')) on 2026-05-07.