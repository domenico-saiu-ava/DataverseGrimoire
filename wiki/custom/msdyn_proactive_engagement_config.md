---
logical: "msdyn_proactive_engagement_config"
display: "Configurazione interazione proattiva"
entitySetName: "msdyn_proactive_engagement_configs"
primaryId: "msdyn_proactive_engagement_configid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione interazione proattiva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_proactive_engagement_config` |
| Display name | Configurazione interazione proattiva |
| Display (plural) | Configurazione interazione proattiva |
| Schema name | `msdyn_proactive_engagement_config` |
| Entity set (Web API) | `msdyn_proactive_engagement_configs` |
| Primary id attribute | `msdyn_proactive_engagement_configid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_proactive_engagement_configs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_proactive_engagement_configs(<guid>)
POST /api/data/v9.2/msdyn_proactive_engagement_configs
PATCH /api/data/v9.2/msdyn_proactive_engagement_configs(<guid>)
DELETE /api/data/v9.2/msdyn_proactive_engagement_configs(<guid>)
```

## Attributes

Writable: **32** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_bot_failure_treatment_rate_threshold`, `msdyn_bot_failure_treatment_type`, `msdyn_description`, `msdyn_dialmode_type`, `msdyn_first_response_timeout_mins`, `msdyn_ignore_queue_hours`, `msdyn_max_calls_per_agent`, `msdyn_max_concurrent_calls`, `msdyn_name`, `msdyn_priority`, `msdyn_proactive_engagement_configid`, `msdyn_processing_order`, `msdyn_queue`, `msdyn_queue_allotment`, `msdyn_reserve_agent_capacity`, `msdyn_throttle_adjustment_percentage`, `msdyn_throttle_control_period`, `msdyn_throttle_control_period_2`, `msdyn_throttle_metric`, `msdyn_throttle_metric_2`, `msdyn_throttle_threshold`, `msdyn_throttle_threshold_2`, `msdyn_type`, `msdyn_workstream`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_proactive_engagement_config_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_proactive_engagement_config_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_proactive_engagement_config_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_proactive_engagement_config_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_proactive_engagement_config` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_proactive_engagement_config` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_proactive_engagement_config` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_proactive_engagement_config` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_liveworkstream_msdyn_proactive_engagement_config_workstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream` | `msdyn_workstream` |
| `msdyn_proactive_engagement_config_queue_queue` | [queue](queue.md) | `msdyn_queue` | `msdyn_queue` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_proactive_engagement_config_SyncErrors` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config` |
| `msdyn_proactive_engagement_config_DuplicateMatchingRecord` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_proactive_engagement_config` |
| `msdyn_proactive_engagement_config_DuplicateBaseRecord` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `baserecordid` | `baserecordid_msdyn_proactive_engagement_config` |
| `msdyn_proactive_engagement_config_AsyncOperations` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config` |
| `msdyn_proactive_engagement_config_MailboxTrackingFolders` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config` |
| `msdyn_proactive_engagement_config_UserEntityInstanceDatas` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `objectid` | `objectid_msdyn_proactive_engagement_config` |
| `msdyn_proactive_engagement_config_ProcessSession` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config` |
| `msdyn_proactive_engagement_config_BulkDeleteFailures` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_engagement_config` |
| `msdyn_proactive_engagement_config_PrincipalObjectAttributeAccesses` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `objectid` | `objectid_msdyn_proactive_engagement_config` |
| `msdyn_proactive_eng_config_characteristic_proactive_engagement_configuration_msdyn_proactive_engagem` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `msdyn_proactive_engagement_configuration` | `msdyn_proactive_engagement_configuration` |
| `msdyn_proactive_engagement_config_status_msdyn_proactive_engagement_config_msdyn_proactive` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `msdyn_proactive_engagement_config` | `msdyn_proactive_engagement_config` |
| `msdyn_proactive_engagement_config_msdyn_proactive_engagement_config_attribute` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `msdyn_proactive_engagement_config` | `msdyn_proactive_engagement_config` |


## Source

Generated from [msdyn_proactive_engagement_config (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_proactive_engagement_config')) on 2026-05-07.