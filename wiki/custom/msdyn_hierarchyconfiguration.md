---
logical: "msdyn_hierarchyconfiguration"
display: "Configurazione della gerarchia"
entitySetName: "msdyn_hierarchyconfigurations"
primaryId: "msdyn_hierarchyconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione della gerarchia

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_hierarchyconfiguration` |
| Display name | Configurazione della gerarchia |
| Display (plural) | Configurazioni della gerarchia |
| Schema name | `msdyn_hierarchyconfiguration` |
| Entity set (Web API) | `msdyn_hierarchyconfigurations` |
| Primary id attribute | `msdyn_hierarchyconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_hierarchyconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_hierarchyconfigurations(<guid>)
POST /api/data/v9.2/msdyn_hierarchyconfigurations
PATCH /api/data/v9.2/msdyn_hierarchyconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_hierarchyconfigurations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_configuration`, `msdyn_hierarchyconfigurationid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_hierarchyconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_hierarchyconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_hierarchyconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_hierarchyconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_hierarchyconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_hierarchyconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_hierarchyconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_hierarchyconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_hierarchyconfiguration_SyncErrors` | [msdyn_hierarchyconfiguration](msdyn_hierarchyconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_hierarchyconfiguration` |
| `msdyn_hierarchyconfiguration_AsyncOperations` | [msdyn_hierarchyconfiguration](msdyn_hierarchyconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_hierarchyconfiguration` |
| `msdyn_hierarchyconfiguration_MailboxTrackingFolders` | [msdyn_hierarchyconfiguration](msdyn_hierarchyconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_hierarchyconfiguration` |
| `msdyn_hierarchyconfiguration_UserEntityInstanceDatas` | [msdyn_hierarchyconfiguration](msdyn_hierarchyconfiguration.md) | `objectid` | `objectid_msdyn_hierarchyconfiguration` |
| `msdyn_hierarchyconfiguration_ProcessSession` | [msdyn_hierarchyconfiguration](msdyn_hierarchyconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_hierarchyconfiguration` |
| `msdyn_hierarchyconfiguration_BulkDeleteFailures` | [msdyn_hierarchyconfiguration](msdyn_hierarchyconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_hierarchyconfiguration` |
| `msdyn_hierarchyconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_hierarchyconfiguration](msdyn_hierarchyconfiguration.md) | `objectid` | `objectid_msdyn_hierarchyconfiguration` |


## Source

Generated from [msdyn_hierarchyconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_hierarchyconfiguration')) on 2026-05-07.