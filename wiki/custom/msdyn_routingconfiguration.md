---
logical: "msdyn_routingconfiguration"
display: "Configurazione distribuzione"
entitySetName: "msdyn_routingconfigurations"
primaryId: "msdyn_routingconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione distribuzione

Definisce i dettagli di distribuzione per il flusso di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_routingconfiguration` |
| Display name | Configurazione distribuzione |
| Display (plural) | Configurazioni distribuzione |
| Schema name | `msdyn_routingconfiguration` |
| Entity set (Web API) | `msdyn_routingconfigurations` |
| Primary id attribute | `msdyn_routingconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_routingconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_routingconfigurations(<guid>)
POST /api/data/v9.2/msdyn_routingconfigurations
PATCH /api/data/v9.2/msdyn_routingconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_routingconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_isactiveconfiguration`, `msdyn_liveworkstreamid`, `msdyn_name`, `msdyn_routingconfigurationid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `lk_msdyn_routingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_routingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_routingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_routingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_routingconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_routingconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_routingconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_routingconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_routingconfiguration_SyncErrors` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfiguration` |
| `msdyn_routingconfiguration_DuplicateMatchingRecord` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_routingconfiguration` |
| `msdyn_routingconfiguration_DuplicateBaseRecord` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `baserecordid` | `baserecordid_msdyn_routingconfiguration` |
| `msdyn_routingconfiguration_AsyncOperations` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfiguration` |
| `msdyn_routingconfiguration_MailboxTrackingFolders` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfiguration` |
| `msdyn_routingconfiguration_UserEntityInstanceDatas` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `objectid` | `objectid_msdyn_routingconfiguration` |
| `msdyn_routingconfiguration_ProcessSession` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfiguration` |
| `msdyn_routingconfiguration_BulkDeleteFailures` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingconfiguration` |
| `msdyn_routingconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `objectid` | `objectid_msdyn_routingconfiguration` |
| `msdyn_routingconfiguration_msdyn_routingconfigurationstep_routingconfigurationid` | [msdyn_routingconfiguration](msdyn_routingconfiguration.md) | `msdyn_routingconfigurationid` | `msdyn_routingconfigurationid` |


## Source

Generated from [msdyn_routingconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_routingconfiguration')) on 2026-05-07.