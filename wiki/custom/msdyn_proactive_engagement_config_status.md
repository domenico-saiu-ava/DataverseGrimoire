---
logical: "msdyn_proactive_engagement_config_status"
display: "Stato configurazione interazione proattiva"
entitySetName: "msdyn_proactive_engagement_config_statuses"
primaryId: "msdyn_proactive_engagement_config_statusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato configurazione interazione proattiva

Questa tabella ospita lo stato della configurazione dell'interazione proattiva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_proactive_engagement_config_status` |
| Display name | Stato configurazione interazione proattiva |
| Display (plural) | Stati configurazione interazione proattiva |
| Schema name | `msdyn_proactive_engagement_config_status` |
| Entity set (Web API) | `msdyn_proactive_engagement_config_statuses` |
| Primary id attribute | `msdyn_proactive_engagement_config_statusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_proactive_engagement_config_statuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_proactive_engagement_config_statuses(<guid>)
POST /api/data/v9.2/msdyn_proactive_engagement_config_statuses
PATCH /api/data/v9.2/msdyn_proactive_engagement_config_statuses(<guid>)
DELETE /api/data/v9.2/msdyn_proactive_engagement_config_statuses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_proactive_engagement_config`, `msdyn_proactive_engagement_config_statusid`, `msdyn_suspended`, `msdyn_suspension_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_proactive_engagement_config_status_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_proactive_engagement_config_status_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_proactive_engagement_config_status_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_proactive_engagement_config_status_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_proactive_engagement_config_status` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_proactive_engagement_config_status` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_proactive_engagement_config_status` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_proactive_engagement_config_status` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_proactive_engagement_config_status_msdyn_proactive_engagement_config_msdyn_proactive` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `msdyn_proactive_engagement_config` | `msdyn_proactive_engagement_config` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_proactive_engagement_config_status_SyncErrors` | [msdyn_proactive_engagement_config_status](msdyn_proactive_engagement_config_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_status` |
| `msdyn_proactive_engagement_config_status_DuplicateMatchingRecord` | [msdyn_proactive_engagement_config_status](msdyn_proactive_engagement_config_status.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_proactive_engagement_config_status` |
| `msdyn_proactive_engagement_config_status_DuplicateBaseRecord` | [msdyn_proactive_engagement_config_status](msdyn_proactive_engagement_config_status.md) | `baserecordid` | `baserecordid_msdyn_proactive_engagement_config_status` |
| `msdyn_proactive_engagement_config_status_AsyncOperations` | [msdyn_proactive_engagement_config_status](msdyn_proactive_engagement_config_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_status` |
| `msdyn_proactive_engagement_config_status_MailboxTrackingFolders` | [msdyn_proactive_engagement_config_status](msdyn_proactive_engagement_config_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_status` |
| `msdyn_proactive_engagement_config_status_UserEntityInstanceDatas` | [msdyn_proactive_engagement_config_status](msdyn_proactive_engagement_config_status.md) | `objectid` | `objectid_msdyn_proactive_engagement_config_status` |
| `msdyn_proactive_engagement_config_status_ProcessSession` | [msdyn_proactive_engagement_config_status](msdyn_proactive_engagement_config_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_status` |
| `msdyn_proactive_engagement_config_status_BulkDeleteFailures` | [msdyn_proactive_engagement_config_status](msdyn_proactive_engagement_config_status.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config_status` |
| `msdyn_proactive_engagement_config_status_PrincipalObjectAttributeAccesses` | [msdyn_proactive_engagement_config_status](msdyn_proactive_engagement_config_status.md) | `objectid` | `objectid_msdyn_proactive_engagement_config_status` |


## Source

Generated from [msdyn_proactive_engagement_config_status (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_proactive_engagement_config_status')) on 2026-05-07.