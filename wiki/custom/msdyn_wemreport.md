---
logical: "msdyn_wemreport"
display: "Report WEM"
entitySetName: "msdyn_wemreports"
primaryId: "msdyn_wemreportid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Report WEM

Entità per report WEM che contengono relazioni e attributi di report principali per report basati su funzionalità e scenari.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemreport` |
| Display name | Report WEM |
| Display (plural) | Report WEM |
| Schema name | `msdyn_wemreport` |
| Entity set (Web API) | `msdyn_wemreports` |
| Primary id attribute | `msdyn_wemreportid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemreports?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemreports(<guid>)
POST /api/data/v9.2/msdyn_wemreports
PATCH /api/data/v9.2/msdyn_wemreports(<guid>)
DELETE /api/data/v9.2/msdyn_wemreports(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_mefdataprocessingconfiguration`, `msdyn_name`, `msdyn_originatingreportid`, `msdyn_provisionreportinstance`, `msdyn_reportcurrentversion`, `msdyn_reportmetadata`, `msdyn_reportstatus`, `msdyn_wemreportid`, `msdyn_wemreporttemplate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemreporttemplate_msdyn_wemreport_wemreporttemplate` | [msdyn_wemreporttemplate](msdyn_wemreporttemplate.md) | `msdyn_wemreporttemplate` | `msdyn_wemreporttemplate` |
| `msdyn_dataprocessingconfiguration_msdyn_wemreport_mefdataprocessingconfiguration` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `msdyn_mefdataprocessingconfiguration` | `msdyn_mefdataprocessingconfiguration` |
| `lk_msdyn_wemreport_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemreport_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemreport_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemreport_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemreport` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemreport` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemreport` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemreport` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemforecast_msdyn_wemreportforforecast_msdyn_wemreport` | [msdyn_wemreport](msdyn_wemreport.md) | `msdyn_wemreportforforecast` | `msdyn_wemreportforforecast` |
| `msdyn_capacityplanning_msdyn_wemreportforcapacityplan_msdyn_wemreport` | [msdyn_wemreport](msdyn_wemreport.md) | `msdyn_wemreportforcapacityplan` | `msdyn_wemreportforcapacityplan` |
| `msdyn_wemreport_SyncErrors` | [msdyn_wemreport](msdyn_wemreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreport` |
| `msdyn_wemreport_AsyncOperations` | [msdyn_wemreport](msdyn_wemreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreport` |
| `msdyn_wemreport_MailboxTrackingFolders` | [msdyn_wemreport](msdyn_wemreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreport` |
| `msdyn_wemreport_UserEntityInstanceDatas` | [msdyn_wemreport](msdyn_wemreport.md) | `objectid` | `objectid_msdyn_wemreport` |
| `msdyn_wemreport_ProcessSession` | [msdyn_wemreport](msdyn_wemreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreport` |
| `msdyn_wemreport_BulkDeleteFailures` | [msdyn_wemreport](msdyn_wemreport.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemreport` |
| `msdyn_wemreport_PrincipalObjectAttributeAccesses` | [msdyn_wemreport](msdyn_wemreport.md) | `objectid` | `objectid_msdyn_wemreport` |
| `msdyn_wemreport_DuplicateMatchingRecord` | [msdyn_wemreport](msdyn_wemreport.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_wemreport` |
| `msdyn_wemreport_DuplicateBaseRecord` | [msdyn_wemreport](msdyn_wemreport.md) | `baserecordid` | `baserecordid_msdyn_wemreport` |


## Source

Generated from [msdyn_wemreport (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemreport')) on 2026-05-07.