---
logical: "msdyn_wemmonitor"
display: "Monitoraggio WEM"
entitySetName: "msdyn_wemmonitors"
primaryId: "msdyn_wemmonitorid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Monitoraggio WEM

Monitoraggio per WEM.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemmonitor` |
| Display name | Monitoraggio WEM |
| Display (plural) | Monitoraggi WEM |
| Schema name | `msdyn_wemmonitor` |
| Entity set (Web API) | `msdyn_wemmonitors` |
| Primary id attribute | `msdyn_wemmonitorid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemmonitors?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemmonitors(<guid>)
POST /api/data/v9.2/msdyn_wemmonitors
PATCH /api/data/v9.2/msdyn_wemmonitors(<guid>)
DELETE /api/data/v9.2/msdyn_wemmonitors(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_batchjobserialnumber`, `msdyn_expireson`, `msdyn_forecastscenarioid`, `msdyn_monitortype`, `msdyn_name`, `msdyn_queueid`, `msdyn_threshold`, `msdyn_wemmonitorid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wemmonitor_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemmonitor_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemmonitor_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemmonitor_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemmonitor` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemmonitor` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemmonitor` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemmonitor` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_wemmonitor_msdyn_forecastscenarioid_msdyn_wemforecast` | [msdyn_wemforecast](msdyn_wemforecast.md) | `msdyn_forecastscenarioid` | `msdyn_forecastscenarioid` |
| `msdyn_wemmonitor_queue_queue` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemmonitor_SyncErrors` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitor` |
| `msdyn_wemmonitor_AsyncOperations` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitor` |
| `msdyn_wemmonitor_MailboxTrackingFolders` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitor` |
| `msdyn_wemmonitor_UserEntityInstanceDatas` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `objectid` | `objectid_msdyn_wemmonitor` |
| `msdyn_wemmonitor_ProcessSession` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitor` |
| `msdyn_wemmonitor_BulkDeleteFailures` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitor` |
| `msdyn_wemmonitor_PrincipalObjectAttributeAccesses` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `objectid` | `objectid_msdyn_wemmonitor` |
| `msdyn_wemmonitoruser_msdyn_wemmonitor_msdyn_wemmonitor` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `msdyn_wemmonitor` | `msdyn_wemmonitor` |
| `msdyn_wemmonitor_DuplicateMatchingRecord` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_wemmonitor` |
| `msdyn_wemmonitor_DuplicateBaseRecord` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `baserecordid` | `baserecordid_msdyn_wemmonitor` |


## Source

Generated from [msdyn_wemmonitor (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemmonitor')) on 2026-05-07.