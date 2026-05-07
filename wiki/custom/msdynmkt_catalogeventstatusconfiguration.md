---
logical: "msdynmkt_catalogeventstatusconfiguration"
display: "Configurazione stato evento catalogo"
entitySetName: "msdynmkt_catalogeventstatusconfigurations"
primaryId: "msdynmkt_catalogeventstatusconfigurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione stato evento catalogo

Configurazione dello stato per gli eventi in un catalogo.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_catalogeventstatusconfiguration` |
| Display name | Configurazione stato evento catalogo |
| Display (plural) | Configurazioni stato evento catalogo |
| Schema name | `msdynmkt_catalogeventstatusconfiguration` |
| Entity set (Web API) | `msdynmkt_catalogeventstatusconfigurations` |
| Primary id attribute | `msdynmkt_catalogeventstatusconfigurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations(<guid>)
POST /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations
PATCH /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_catalogeventstatusconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdynmkt_catalogeventstatusconfigurationid`, `msdynmkt_catalogid`, `msdynmkt_eventmetadatastatus`, `msdynmkt_iconwebresourceid`, `msdynmkt_name`, `msdynmkt_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_catalogeventstatusconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_catalogeventstatusconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_catalogeventstatusconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_catalogeventstatusconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_catalogeventstatusconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_catalogeventstatusconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_catalogeventstatusconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_catalogeventstatusconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdynmkt_catalog_catalogeventstatusconfiguration` | [catalog](catalog.md) | `msdynmkt_catalogid` | `msdynmkt_catalogid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_catalogeventstatusconfiguration_SyncErrors` | [msdynmkt_catalogeventstatusconfiguration](msdynmkt_catalogeventstatusconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_catalogeventstatusconfiguration` |
| `msdynmkt_catalogeventstatusconfiguration_DuplicateMatchingRecord` | [msdynmkt_catalogeventstatusconfiguration](msdynmkt_catalogeventstatusconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_catalogeventstatusconfiguration` |
| `msdynmkt_catalogeventstatusconfiguration_DuplicateBaseRecord` | [msdynmkt_catalogeventstatusconfiguration](msdynmkt_catalogeventstatusconfiguration.md) | `baserecordid` | `baserecordid_msdynmkt_catalogeventstatusconfiguration` |
| `msdynmkt_catalogeventstatusconfiguration_AsyncOperations` | [msdynmkt_catalogeventstatusconfiguration](msdynmkt_catalogeventstatusconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_catalogeventstatusconfiguration` |
| `msdynmkt_catalogeventstatusconfiguration_MailboxTrackingFolders` | [msdynmkt_catalogeventstatusconfiguration](msdynmkt_catalogeventstatusconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_catalogeventstatusconfiguration` |
| `msdynmkt_catalogeventstatusconfiguration_UserEntityInstanceDatas` | [msdynmkt_catalogeventstatusconfiguration](msdynmkt_catalogeventstatusconfiguration.md) | `objectid` | `objectid_msdynmkt_catalogeventstatusconfiguration` |
| `msdynmkt_catalogeventstatusconfiguration_ProcessSession` | [msdynmkt_catalogeventstatusconfiguration](msdynmkt_catalogeventstatusconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_catalogeventstatusconfiguration` |
| `msdynmkt_catalogeventstatusconfiguration_BulkDeleteFailures` | [msdynmkt_catalogeventstatusconfiguration](msdynmkt_catalogeventstatusconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_catalogeventstatusconfiguration` |
| `msdynmkt_catalogeventstatusconfiguration_PrincipalObjectAttributeAccesses` | [msdynmkt_catalogeventstatusconfiguration](msdynmkt_catalogeventstatusconfiguration.md) | `objectid` | `objectid_msdynmkt_catalogeventstatusconfiguration` |


## Source

Generated from [msdynmkt_catalogeventstatusconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_catalogeventstatusconfiguration')) on 2026-05-07.