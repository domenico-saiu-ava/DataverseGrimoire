---
logical: "msdyn_agentsetting"
display: "msdyn_agentsetting"
entitySetName: "msdyn_agentsettings"
primaryId: "msdyn_agentsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_agentsetting

Questa tabella contiene le impostazioni per la configurazione dell'agente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentsetting` |
| Display name | msdyn_agentsetting |
| Display (plural) | msdyn_agentsettings |
| Schema name | `msdyn_agentsetting` |
| Entity set (Web API) | `msdyn_agentsettings` |
| Primary id attribute | `msdyn_agentsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentsettings(<guid>)
POST /api/data/v9.2/msdyn_agentsettings
PATCH /api/data/v9.2/msdyn_agentsettings(<guid>)
DELETE /api/data/v9.2/msdyn_agentsettings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentsettingid`, `msdyn_iscopilotstudioknowledgeenabled`, `msdyn_isd365knowledgesourceenabled`, `msdyn_kbfilter`, `msdyn_name`, `msdyn_scenario`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentsetting_SyncErrors` | [msdyn_agentsetting](msdyn_agentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsetting` |
| `msdyn_agentsetting_DuplicateMatchingRecord` | [msdyn_agentsetting](msdyn_agentsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentsetting` |
| `msdyn_agentsetting_DuplicateBaseRecord` | [msdyn_agentsetting](msdyn_agentsetting.md) | `baserecordid` | `baserecordid_msdyn_agentsetting` |
| `msdyn_agentsetting_AsyncOperations` | [msdyn_agentsetting](msdyn_agentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsetting` |
| `msdyn_agentsetting_MailboxTrackingFolders` | [msdyn_agentsetting](msdyn_agentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsetting` |
| `msdyn_agentsetting_UserEntityInstanceDatas` | [msdyn_agentsetting](msdyn_agentsetting.md) | `objectid` | `objectid_msdyn_agentsetting` |
| `msdyn_agentsetting_ProcessSession` | [msdyn_agentsetting](msdyn_agentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsetting` |
| `msdyn_agentsetting_BulkDeleteFailures` | [msdyn_agentsetting](msdyn_agentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentsetting` |
| `msdyn_agentsetting_PrincipalObjectAttributeAccesses` | [msdyn_agentsetting](msdyn_agentsetting.md) | `objectid` | `objectid_msdyn_agentsetting` |


## Source

Generated from [msdyn_agentsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentsetting')) on 2026-05-07.