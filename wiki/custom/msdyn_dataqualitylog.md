---
logical: "msdyn_dataqualitylog"
display: "Registro qualità dati"
entitySetName: "msdyn_dataqualitylogs"
primaryId: "msdyn_dataqualitylogid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Registro qualità dati

Registri generati dall'Agente di qualità dati di vendita

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataqualitylog` |
| Display name | Registro qualità dati |
| Display (plural) | Registri qualità dati |
| Schema name | `msdyn_dataqualitylog` |
| Entity set (Web API) | `msdyn_dataqualitylogs` |
| Primary id attribute | `msdyn_dataqualitylogid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataqualitylogs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataqualitylogs(<guid>)
POST /api/data/v9.2/msdyn_dataqualitylogs
PATCH /api/data/v9.2/msdyn_dataqualitylogs(<guid>)
DELETE /api/data/v9.2/msdyn_dataqualitylogs(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actionedby`, `msdyn_dataqualitylogid`, `msdyn_logtype`, `msdyn_logvalue`, `msdyn_name`, `msdyn_regardingid`, `msdyn_regardingtype`, `msdyn_relatedid`, `msdyn_relatedtype`, `msdyn_suggestionid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataqualitylog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataqualitylog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataqualitylog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataqualitylog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataqualitylog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataqualitylog` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataqualitylog` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataqualitylog` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_dataqualitylog_suggestionid_msdyn_dataqualitysuggestion` | [msdyn_dataqualitysuggestion](msdyn_dataqualitysuggestion.md) | `msdyn_suggestionid` | `msdyn_suggestionid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataqualitylog_SyncErrors` | [msdyn_dataqualitylog](msdyn_dataqualitylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitylog` |
| `msdyn_dataqualitylog_DuplicateMatchingRecord` | [msdyn_dataqualitylog](msdyn_dataqualitylog.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataqualitylog` |
| `msdyn_dataqualitylog_DuplicateBaseRecord` | [msdyn_dataqualitylog](msdyn_dataqualitylog.md) | `baserecordid` | `baserecordid_msdyn_dataqualitylog` |
| `msdyn_dataqualitylog_AsyncOperations` | [msdyn_dataqualitylog](msdyn_dataqualitylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitylog` |
| `msdyn_dataqualitylog_MailboxTrackingFolders` | [msdyn_dataqualitylog](msdyn_dataqualitylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitylog` |
| `msdyn_dataqualitylog_UserEntityInstanceDatas` | [msdyn_dataqualitylog](msdyn_dataqualitylog.md) | `objectid` | `objectid_msdyn_dataqualitylog` |
| `msdyn_dataqualitylog_ProcessSession` | [msdyn_dataqualitylog](msdyn_dataqualitylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitylog` |
| `msdyn_dataqualitylog_BulkDeleteFailures` | [msdyn_dataqualitylog](msdyn_dataqualitylog.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitylog` |
| `msdyn_dataqualitylog_PrincipalObjectAttributeAccesses` | [msdyn_dataqualitylog](msdyn_dataqualitylog.md) | `objectid` | `objectid_msdyn_dataqualitylog` |


## Source

Generated from [msdyn_dataqualitylog (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataqualitylog')) on 2026-05-07.