---
logical: "msdyn_intentfeature_configuration"
display: "msdyn_intentfeature_configuration"
entitySetName: "msdyn_intentfeature_configurations"
primaryId: "msdyn_intentfeature_configurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_intentfeature_configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentfeature_configuration` |
| Display name | msdyn_intentfeature_configuration |
| Display (plural) | msdyn_intentfeature_configurations |
| Schema name | `msdyn_intentfeature_configuration` |
| Entity set (Web API) | `msdyn_intentfeature_configurations` |
| Primary id attribute | `msdyn_intentfeature_configurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentfeature_configurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentfeature_configurations(<guid>)
POST /api/data/v9.2/msdyn_intentfeature_configurations
PATCH /api/data/v9.2/msdyn_intentfeature_configurations(<guid>)
DELETE /api/data/v9.2/msdyn_intentfeature_configurations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_batchjob_runstatus`, `msdyn_copilotprovisioning_status`, `msdyn_feature_status`, `msdyn_intentfamilycopilotprovisioning_status`, `msdyn_intentfeature_configurationid`, `msdyn_isenabled`, `msdyn_kbcopilotprovisioning_status`, `msdyn_name`, `msdyn_packageprovisioning_status`, `msdyn_provision_trigger_time`, `msdyn_target_entity_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentfeature_configuration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentfeature_configuration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentfeature_configuration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentfeature_configuration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentfeature_configuration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentfeature_configuration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentfeature_configuration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentfeature_configuration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentfeature_configuration_SyncErrors` | [msdyn_intentfeature_configuration](msdyn_intentfeature_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfeature_configuration` |
| `msdyn_intentfeature_configuration_DuplicateMatchingRecord` | [msdyn_intentfeature_configuration](msdyn_intentfeature_configuration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentfeature_configuration` |
| `msdyn_intentfeature_configuration_DuplicateBaseRecord` | [msdyn_intentfeature_configuration](msdyn_intentfeature_configuration.md) | `baserecordid` | `baserecordid_msdyn_intentfeature_configuration` |
| `msdyn_intentfeature_configuration_AsyncOperations` | [msdyn_intentfeature_configuration](msdyn_intentfeature_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfeature_configuration` |
| `msdyn_intentfeature_configuration_MailboxTrackingFolders` | [msdyn_intentfeature_configuration](msdyn_intentfeature_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfeature_configuration` |
| `msdyn_intentfeature_configuration_UserEntityInstanceDatas` | [msdyn_intentfeature_configuration](msdyn_intentfeature_configuration.md) | `objectid` | `objectid_msdyn_intentfeature_configuration` |
| `msdyn_intentfeature_configuration_ProcessSession` | [msdyn_intentfeature_configuration](msdyn_intentfeature_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfeature_configuration` |
| `msdyn_intentfeature_configuration_BulkDeleteFailures` | [msdyn_intentfeature_configuration](msdyn_intentfeature_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfeature_configuration` |
| `msdyn_intentfeature_configuration_PrincipalObjectAttributeAccesses` | [msdyn_intentfeature_configuration](msdyn_intentfeature_configuration.md) | `objectid` | `objectid_msdyn_intentfeature_configuration` |


## Source

Generated from [msdyn_intentfeature_configuration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentfeature_configuration')) on 2026-05-07.