---
logical: "msdyn_configuration"
display: "Configurazione"
entitySetName: "msdyn_configurations"
primaryId: "msdyn_configurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione

Questa entità viene usata per archiviare query e modelli.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_configuration` |
| Display name | Configurazione |
| Display (plural) | Configurazioni |
| Schema name | `msdyn_Configuration` |
| Entity set (Web API) | `msdyn_configurations` |
| Primary id attribute | `msdyn_configurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_configurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_configurations(<guid>)
POST /api/data/v9.2/msdyn_configurations
PATCH /api/data/v9.2/msdyn_configurations(<guid>)
DELETE /api/data/v9.2/msdyn_configurations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_configurationid`, `msdyn_name`, `msdyn_type`, `msdyn_value`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_configuration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_configuration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_configuration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_configuration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_configuration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_configuration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_configuration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_configuration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_cloneentityquery` | `msdyn_CloneEntityQuery` |
| `msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_retrieveconstraintsquery` | `msdyn_RetrieveConstraintsQuery` |
| `msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_retrieveresourcesquery` | `msdyn_RetrieveResourcesQuery` |
| `msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_filterlayout` | `msdyn_FilterLayout` |
| `msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_resourcecelltemplate` | `msdyn_ResourceCellTemplate` |
| `msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery` | [msdyn_configuration](msdyn_configuration.md) | `msdyn_retrieveresourcesquery` | `msdyn_RetrieveResourcesQuery` |
| `msdyn_configuration_SyncErrors` | [msdyn_configuration](msdyn_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_configuration` |
| `msdyn_configuration_AsyncOperations` | [msdyn_configuration](msdyn_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_configuration` |
| `msdyn_configuration_MailboxTrackingFolders` | [msdyn_configuration](msdyn_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_configuration` |
| `msdyn_configuration_UserEntityInstanceDatas` | [msdyn_configuration](msdyn_configuration.md) | `objectid` | `objectid_msdyn_configuration` |
| `msdyn_configuration_ProcessSession` | [msdyn_configuration](msdyn_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_configuration` |
| `msdyn_configuration_BulkDeleteFailures` | [msdyn_configuration](msdyn_configuration.md) | `regardingobjectid` | `regardingobjectid_msdyn_configuration` |
| `msdyn_configuration_PrincipalObjectAttributeAccesses` | [msdyn_configuration](msdyn_configuration.md) | `objectid` | `objectid_msdyn_configuration` |


## Source

Generated from [msdyn_configuration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_configuration')) on 2026-05-07.