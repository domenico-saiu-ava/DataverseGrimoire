---
logical: "msdynmkt_configuration"
display: "Configurazione"
entitySetName: "msdynmkt_configurations"
primaryId: "msdynmkt_configurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_configuration` |
| Display name | Configurazione |
| Display (plural) | Configurazioni |
| Schema name | `msdynmkt_configuration` |
| Entity set (Web API) | `msdynmkt_configurations` |
| Primary id attribute | `msdynmkt_configurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_configurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_configurations(<guid>)
POST /api/data/v9.2/msdynmkt_configurations
PATCH /api/data/v9.2/msdynmkt_configurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_configurations(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_ciconnectedon`, `msdynmkt_ciprovisionjobid`, `msdynmkt_cistatus`, `msdynmkt_configcacheexpirationdate`, `msdynmkt_configcacheexpirationperiodinms`, `msdynmkt_configurationid`, `msdynmkt_default`, `msdynmkt_discoveryendpointurl`, `msdynmkt_httptimeout`, `msdynmkt_maxretryattempts`, `msdynmkt_name`, `msdynmkt_organization_config`, `msdynmkt_tokenauthenticationresource`, `msdynmkt_usebasicauth`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_configuration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_configuration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_configuration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_configuration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_configuration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_configuration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_configuration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_configuration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_configuration_SyncErrors` | [msdynmkt_configuration](msdynmkt_configuration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_configuration` |
| `msdynmkt_configuration_DuplicateMatchingRecord` | [msdynmkt_configuration](msdynmkt_configuration.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_configuration` |
| `msdynmkt_configuration_DuplicateBaseRecord` | [msdynmkt_configuration](msdynmkt_configuration.md) | `baserecordid` | `baserecordid_msdynmkt_configuration` |
| `msdynmkt_configuration_AsyncOperations` | [msdynmkt_configuration](msdynmkt_configuration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_configuration` |
| `msdynmkt_configuration_MailboxTrackingFolders` | [msdynmkt_configuration](msdynmkt_configuration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_configuration` |
| `msdynmkt_configuration_UserEntityInstanceDatas` | [msdynmkt_configuration](msdynmkt_configuration.md) | `objectid` | `objectid_msdynmkt_configuration` |
| `msdynmkt_configuration_ProcessSession` | [msdynmkt_configuration](msdynmkt_configuration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_configuration` |
| `msdynmkt_configuration_BulkDeleteFailures` | [msdynmkt_configuration](msdynmkt_configuration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_configuration` |
| `msdynmkt_configuration_PrincipalObjectAttributeAccesses` | [msdynmkt_configuration](msdynmkt_configuration.md) | `objectid` | `objectid_msdynmkt_configuration` |


## Source

Generated from [msdynmkt_configuration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_configuration')) on 2026-05-07.