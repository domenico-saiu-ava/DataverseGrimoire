---
logical: "msdyn_searchconfiguration"
display: "Configurazione della ricerca"
entitySetName: "msdyn_searchconfigurations"
primaryId: "msdyn_searchconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione della ricerca

Entità di configurazione per la schermata di ricerca agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_searchconfiguration` |
| Display name | Configurazione della ricerca |
| Display (plural) | Configurazioni della ricerca |
| Schema name | `msdyn_searchconfiguration` |
| Entity set (Web API) | `msdyn_searchconfigurations` |
| Primary id attribute | `msdyn_searchconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_searchconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_searchconfigurations(<guid>)
POST /api/data/v9.2/msdyn_searchconfigurations
PATCH /api/data/v9.2/msdyn_searchconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_searchconfigurations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_configblob`, `msdyn_name`, `msdyn_searchconfigurationid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_searchconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_searchconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_searchconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_searchconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_searchconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_searchconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_searchconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_searchconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_searchconfiguration_SyncErrors` | [msdyn_searchconfiguration](msdyn_searchconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_searchconfiguration` |
| `msdyn_searchconfiguration_AsyncOperations` | [msdyn_searchconfiguration](msdyn_searchconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_searchconfiguration` |
| `msdyn_searchconfiguration_MailboxTrackingFolders` | [msdyn_searchconfiguration](msdyn_searchconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_searchconfiguration` |
| `msdyn_searchconfiguration_UserEntityInstanceDatas` | [msdyn_searchconfiguration](msdyn_searchconfiguration.md) | `objectid` | `objectid_msdyn_searchconfiguration` |
| `msdyn_searchconfiguration_ProcessSession` | [msdyn_searchconfiguration](msdyn_searchconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_searchconfiguration` |
| `msdyn_searchconfiguration_BulkDeleteFailures` | [msdyn_searchconfiguration](msdyn_searchconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_searchconfiguration` |
| `msdyn_searchconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_searchconfiguration](msdyn_searchconfiguration.md) | `objectid` | `objectid_msdyn_searchconfiguration` |


## Source

Generated from [msdyn_searchconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_searchconfiguration')) on 2026-05-07.