---
logical: "msdyn_dataflowconnectionreference"
display: "Riferimento a una connessione flusso di dati"
entitySetName: "msdyn_dataflowconnectionreferences"
primaryId: "msdyn_dataflowconnectionreferenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Riferimento a una connessione flusso di dati

Tabella di intersezione tra flusso di dati e riferimento a una connessione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataflowconnectionreference` |
| Display name | Riferimento a una connessione flusso di dati |
| Display (plural) | Riferimenti a una connessione flusso di dati |
| Schema name | `msdyn_DataflowConnectionReference` |
| Entity set (Web API) | `msdyn_dataflowconnectionreferences` |
| Primary id attribute | `msdyn_dataflowconnectionreferenceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataflowconnectionreferences?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataflowconnectionreferences(<guid>)
POST /api/data/v9.2/msdyn_dataflowconnectionreferences
PATCH /api/data/v9.2/msdyn_dataflowconnectionreferences(<guid>)
DELETE /api/data/v9.2/msdyn_dataflowconnectionreferences(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_connectionreference`, `msdyn_connectionreferencedescription`, `msdyn_dataflow`, `msdyn_dataflowconnectiondetails`, `msdyn_dataflowconnectionreferenceid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataflowconnectionreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflowconnectionreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflowconnectionreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflowconnectionreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataflowconnectionreference` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataflowconnectionreference` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataflowconnectionreference` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataflowconnectionreference` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_dfcr_cr_connect` | [connectionreference](connectionreference.md) | `msdyn_connectionreference` | `msdyn_ConnectionReference` |
| `msdyn_dfcr_dataflow_connect` | [msdyn_dataflow](msdyn_dataflow.md) | `msdyn_dataflow` | `msdyn_Dataflow` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflowconnectionreference_SyncErrors` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowconnectionreference_DuplicateMatchingRecord` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowconnectionreference_DuplicateBaseRecord` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `baserecordid` | `baserecordid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowconnectionreference_AsyncOperations` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowconnectionreference_MailboxTrackingFolders` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowconnectionreference_UserEntityInstanceDatas` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `objectid` | `objectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowconnectionreference_ProcessSession` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowconnectionreference_BulkDeleteFailures` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowconnectionreference_PrincipalObjectAttributeAccesses` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `objectid` | `objectid_msdyn_dataflowconnectionreference` |


## Source

Generated from [msdyn_dataflowconnectionreference (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataflowconnectionreference')) on 2026-05-07.