---
logical: "msdyn_dataqualityreassignment"
display: "Riassegnazione qualità dati"
entitySetName: "msdyn_dataqualityreassignments"
primaryId: "msdyn_dataqualityreassignmentid"
primaryName: "msdyn_regardingid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Riassegnazione qualità dati

Questa tabella contiene record per le informazioni di riassegnazione della qualità dei dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataqualityreassignment` |
| Display name | Riassegnazione qualità dati |
| Display (plural) | Riassegnazioni qualità dati |
| Schema name | `msdyn_dataqualityreassignment` |
| Entity set (Web API) | `msdyn_dataqualityreassignments` |
| Primary id attribute | `msdyn_dataqualityreassignmentid` |
| Primary name attribute | `msdyn_regardingid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataqualityreassignments?$select=msdyn_regardingid&$top=10
GET /api/data/v9.2/msdyn_dataqualityreassignments(<guid>)
POST /api/data/v9.2/msdyn_dataqualityreassignments
PATCH /api/data/v9.2/msdyn_dataqualityreassignments(<guid>)
DELETE /api/data/v9.2/msdyn_dataqualityreassignments(<guid>)
```

## Attributes

Writable: **11** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_dataqualityreassignmentid`, `msdyn_regardingid`, `msdyn_regardingtype`, `msdyn_sourceid`, `msdyn_sourcetype`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataqualityreassignment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataqualityreassignment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataqualityreassignment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataqualityreassignment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataqualityreassignment_SyncErrors` | [msdyn_dataqualityreassignment](msdyn_dataqualityreassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualityreassignment` |
| `msdyn_dataqualityreassignment_AsyncOperations` | [msdyn_dataqualityreassignment](msdyn_dataqualityreassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualityreassignment` |
| `msdyn_dataqualityreassignment_MailboxTrackingFolders` | [msdyn_dataqualityreassignment](msdyn_dataqualityreassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualityreassignment` |
| `msdyn_dataqualityreassignment_UserEntityInstanceDatas` | [msdyn_dataqualityreassignment](msdyn_dataqualityreassignment.md) | `objectid` | `objectid_msdyn_dataqualityreassignment` |
| `msdyn_dataqualityreassignment_ProcessSession` | [msdyn_dataqualityreassignment](msdyn_dataqualityreassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualityreassignment` |
| `msdyn_dataqualityreassignment_BulkDeleteFailures` | [msdyn_dataqualityreassignment](msdyn_dataqualityreassignment.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualityreassignment` |
| `msdyn_dataqualityreassignment_PrincipalObjectAttributeAccesses` | [msdyn_dataqualityreassignment](msdyn_dataqualityreassignment.md) | `objectid` | `objectid_msdyn_dataqualityreassignment` |


## Source

Generated from [msdyn_dataqualityreassignment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataqualityreassignment')) on 2026-05-07.