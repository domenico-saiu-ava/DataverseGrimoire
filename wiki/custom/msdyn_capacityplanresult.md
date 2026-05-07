---
logical: "msdyn_capacityplanresult"
display: "Risultato piano di capacità"
entitySetName: "msdyn_capacityplanresults"
primaryId: "msdyn_capacityplanresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato piano di capacità

Contiene gli output del piano di capacità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_capacityplanresult` |
| Display name | Risultato piano di capacità |
| Display (plural) | Risultati piano di capacità |
| Schema name | `msdyn_capacityplanresult` |
| Entity set (Web API) | `msdyn_capacityplanresults` |
| Primary id attribute | `msdyn_capacityplanresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_capacityplanresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_capacityplanresults(<guid>)
POST /api/data/v9.2/msdyn_capacityplanresults
PATCH /api/data/v9.2/msdyn_capacityplanresults(<guid>)
DELETE /api/data/v9.2/msdyn_capacityplanresults(<guid>)
```

## Attributes

Writable: **15** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_capacityplanchannel`, `msdyn_capacityplanid`, `msdyn_capacityplanqueue`, `msdyn_capacityplanresultid`, `msdyn_dateandslottime`, `msdyn_featureversion`, `msdyn_forecastcapacityvalue`, `msdyn_name`, `msdyn_scheduleruntime`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_capacityplanresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_capacityplanresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_capacityplanresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_capacityplanresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_capacityplanresult_SyncErrors` | [msdyn_capacityplanresult](msdyn_capacityplanresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanresult` |
| `msdyn_capacityplanresult_DuplicateMatchingRecord` | [msdyn_capacityplanresult](msdyn_capacityplanresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_capacityplanresult` |
| `msdyn_capacityplanresult_DuplicateBaseRecord` | [msdyn_capacityplanresult](msdyn_capacityplanresult.md) | `baserecordid` | `baserecordid_msdyn_capacityplanresult` |
| `msdyn_capacityplanresult_AsyncOperations` | [msdyn_capacityplanresult](msdyn_capacityplanresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanresult` |
| `msdyn_capacityplanresult_MailboxTrackingFolders` | [msdyn_capacityplanresult](msdyn_capacityplanresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanresult` |
| `msdyn_capacityplanresult_UserEntityInstanceDatas` | [msdyn_capacityplanresult](msdyn_capacityplanresult.md) | `objectid` | `objectid_msdyn_capacityplanresult` |
| `msdyn_capacityplanresult_ProcessSession` | [msdyn_capacityplanresult](msdyn_capacityplanresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanresult` |
| `msdyn_capacityplanresult_BulkDeleteFailures` | [msdyn_capacityplanresult](msdyn_capacityplanresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_capacityplanresult` |
| `msdyn_capacityplanresult_PrincipalObjectAttributeAccesses` | [msdyn_capacityplanresult](msdyn_capacityplanresult.md) | `objectid` | `objectid_msdyn_capacityplanresult` |


## Source

Generated from [msdyn_capacityplanresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_capacityplanresult')) on 2026-05-07.