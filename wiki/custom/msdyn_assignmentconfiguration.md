---
logical: "msdyn_assignmentconfiguration"
display: "Configurazione assegnazione"
entitySetName: "msdyn_assignmentconfigurations"
primaryId: "msdyn_assignmentconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione assegnazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assignmentconfiguration` |
| Display name | Configurazione assegnazione |
| Display (plural) | Configurazioni assegnazione |
| Schema name | `msdyn_assignmentconfiguration` |
| Entity set (Web API) | `msdyn_assignmentconfigurations` |
| Primary id attribute | `msdyn_assignmentconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assignmentconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assignmentconfigurations(<guid>)
POST /api/data/v9.2/msdyn_assignmentconfigurations
PATCH /api/data/v9.2/msdyn_assignmentconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_assignmentconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_assignmentconfigurationid`, `msdyn_description`, `msdyn_isactiveconfiguration`, `msdyn_name`, `msdyn_queueid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_queue_msdyn_assignmentconfiguration_queueid` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |
| `lk_msdyn_assignmentconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assignmentconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assignmentconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assignmentconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_assignmentconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_assignmentconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_assignmentconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_assignmentconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assignmentconfiguration_SyncErrors` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfiguration` |
| `msdyn_assignmentconfiguration_DuplicateMatchingRecord` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_assignmentconfiguration` |
| `msdyn_assignmentconfiguration_DuplicateBaseRecord` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `baserecordid` | `baserecordid_msdyn_assignmentconfiguration` |
| `msdyn_assignmentconfiguration_AsyncOperations` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfiguration` |
| `msdyn_assignmentconfiguration_MailboxTrackingFolders` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfiguration` |
| `msdyn_assignmentconfiguration_UserEntityInstanceDatas` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `objectid` | `objectid_msdyn_assignmentconfiguration` |
| `msdyn_assignmentconfiguration_ProcessSession` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfiguration` |
| `msdyn_assignmentconfiguration_BulkDeleteFailures` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentconfiguration` |
| `msdyn_assignmentconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `objectid` | `objectid_msdyn_assignmentconfiguration` |
| `msdyn_assignmentconfiguration_msdyn_assignmentconfigurationstep` | [msdyn_assignmentconfiguration](msdyn_assignmentconfiguration.md) | `msdyn_assignmentconfigurationid` | `msdyn_assignmentconfigurationid` |


## Source

Generated from [msdyn_assignmentconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_assignmentconfiguration')) on 2026-05-07.