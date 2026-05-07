---
logical: "msdyn_intentmetrics_jobdata"
display: "msdyn_intentmetrics_jobdata"
entitySetName: "msdyn_intentmetrics_jobdatas"
primaryId: "msdyn_intentmetrics_jobdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_intentmetrics_jobdata

Tabella utilizzata nel processo di aggiornamento delle metriche delle finalità per archiviare temporaneamente i dati delle metriche delle finalità per l'elaborazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentmetrics_jobdata` |
| Display name | msdyn_intentmetrics_jobdata |
| Display (plural) | msdyn_intentmetrics_jobdatas |
| Schema name | `msdyn_intentmetrics_jobdata` |
| Entity set (Web API) | `msdyn_intentmetrics_jobdatas` |
| Primary id attribute | `msdyn_intentmetrics_jobdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentmetrics_jobdatas?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentmetrics_jobdatas(<guid>)
POST /api/data/v9.2/msdyn_intentmetrics_jobdatas
PATCH /api/data/v9.2/msdyn_intentmetrics_jobdatas(<guid>)
DELETE /api/data/v9.2/msdyn_intentmetrics_jobdatas(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_intentdata`, `msdyn_intentmetrics_jobdataid`, `msdyn_name`, `msdyn_shouldupdateintents`, `msdyn_trackingdate`, `msdyn_trackingid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentmetrics_jobdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentmetrics_jobdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentmetrics_jobdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentmetrics_jobdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentmetrics_jobdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentmetrics_jobdata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentmetrics_jobdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentmetrics_jobdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentmetrics_jobdata_SyncErrors` | [msdyn_intentmetrics_jobdata](msdyn_intentmetrics_jobdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics_jobdata` |
| `msdyn_intentmetrics_jobdata_DuplicateMatchingRecord` | [msdyn_intentmetrics_jobdata](msdyn_intentmetrics_jobdata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentmetrics_jobdata` |
| `msdyn_intentmetrics_jobdata_DuplicateBaseRecord` | [msdyn_intentmetrics_jobdata](msdyn_intentmetrics_jobdata.md) | `baserecordid` | `baserecordid_msdyn_intentmetrics_jobdata` |
| `msdyn_intentmetrics_jobdata_AsyncOperations` | [msdyn_intentmetrics_jobdata](msdyn_intentmetrics_jobdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics_jobdata` |
| `msdyn_intentmetrics_jobdata_MailboxTrackingFolders` | [msdyn_intentmetrics_jobdata](msdyn_intentmetrics_jobdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics_jobdata` |
| `msdyn_intentmetrics_jobdata_UserEntityInstanceDatas` | [msdyn_intentmetrics_jobdata](msdyn_intentmetrics_jobdata.md) | `objectid` | `objectid_msdyn_intentmetrics_jobdata` |
| `msdyn_intentmetrics_jobdata_ProcessSession` | [msdyn_intentmetrics_jobdata](msdyn_intentmetrics_jobdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics_jobdata` |
| `msdyn_intentmetrics_jobdata_BulkDeleteFailures` | [msdyn_intentmetrics_jobdata](msdyn_intentmetrics_jobdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics_jobdata` |
| `msdyn_intentmetrics_jobdata_PrincipalObjectAttributeAccesses` | [msdyn_intentmetrics_jobdata](msdyn_intentmetrics_jobdata.md) | `objectid` | `objectid_msdyn_intentmetrics_jobdata` |


## Source

Generated from [msdyn_intentmetrics_jobdata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentmetrics_jobdata')) on 2026-05-07.