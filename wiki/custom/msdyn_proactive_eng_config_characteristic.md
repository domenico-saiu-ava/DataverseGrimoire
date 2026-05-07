---
logical: "msdyn_proactive_eng_config_characteristic"
display: "Caratteristica di configurazione dell'interazione proattiva"
entitySetName: "msdyn_proactive_eng_config_characteristics"
primaryId: "msdyn_proactive_eng_config_characteristicid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Caratteristica di configurazione dell'interazione proattiva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_proactive_eng_config_characteristic` |
| Display name | Caratteristica di configurazione dell'interazione proattiva |
| Display (plural) | Caratteristiche di configurazione dell'interazione proattiva |
| Schema name | `msdyn_proactive_eng_config_characteristic` |
| Entity set (Web API) | `msdyn_proactive_eng_config_characteristics` |
| Primary id attribute | `msdyn_proactive_eng_config_characteristicid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_proactive_eng_config_characteristics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_proactive_eng_config_characteristics(<guid>)
POST /api/data/v9.2/msdyn_proactive_eng_config_characteristics
PATCH /api/data/v9.2/msdyn_proactive_eng_config_characteristics(<guid>)
DELETE /api/data/v9.2/msdyn_proactive_eng_config_characteristics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_characteristic`, `msdyn_name`, `msdyn_proactive_eng_config_characteristicid`, `msdyn_proactive_engagement_configuration`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_proactive_eng_config_characteristic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_proactive_eng_config_characteristic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_proactive_eng_config_characteristic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_proactive_eng_config_characteristic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_proactive_eng_config_characteristic` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_proactive_eng_config_characteristic` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_proactive_eng_config_characteristic` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_proactive_eng_config_characteristic` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_proactive_eng_config_characteristic_characteristic_characteristic` | [characteristic](characteristic.md) | `msdyn_characteristic` | `msdyn_characteristic` |
| `msdyn_proactive_eng_config_characteristic_proactive_engagement_configuration_msdyn_proactive_engagem` | [msdyn_proactive_engagement_config](msdyn_proactive_engagement_config.md) | `msdyn_proactive_engagement_configuration` | `msdyn_proactive_engagement_configuration` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_proactive_eng_config_characteristic_SyncErrors` | [msdyn_proactive_eng_config_characteristic](msdyn_proactive_eng_config_characteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_eng_config_characteristic` |
| `msdyn_proactive_eng_config_characteristic_DuplicateMatchingRecord` | [msdyn_proactive_eng_config_characteristic](msdyn_proactive_eng_config_characteristic.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_proactive_eng_config_characteristic` |
| `msdyn_proactive_eng_config_characteristic_DuplicateBaseRecord` | [msdyn_proactive_eng_config_characteristic](msdyn_proactive_eng_config_characteristic.md) | `baserecordid` | `baserecordid_msdyn_proactive_eng_config_characteristic` |
| `msdyn_proactive_eng_config_characteristic_AsyncOperations` | [msdyn_proactive_eng_config_characteristic](msdyn_proactive_eng_config_characteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_eng_config_characteristic` |
| `msdyn_proactive_eng_config_characteristic_MailboxTrackingFolders` | [msdyn_proactive_eng_config_characteristic](msdyn_proactive_eng_config_characteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_eng_config_characteristic` |
| `msdyn_proactive_eng_config_characteristic_UserEntityInstanceDatas` | [msdyn_proactive_eng_config_characteristic](msdyn_proactive_eng_config_characteristic.md) | `objectid` | `objectid_msdyn_proactive_eng_config_characteristic` |
| `msdyn_proactive_eng_config_characteristic_ProcessSession` | [msdyn_proactive_eng_config_characteristic](msdyn_proactive_eng_config_characteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_eng_config_characteristic` |
| `msdyn_proactive_eng_config_characteristic_BulkDeleteFailures` | [msdyn_proactive_eng_config_characteristic](msdyn_proactive_eng_config_characteristic.md) | `regardingobjectid` | `regardingobjectid_msdyn_proactive_eng_config_characteristic` |
| `msdyn_proactive_eng_config_characteristic_PrincipalObjectAttributeAccesses` | [msdyn_proactive_eng_config_characteristic](msdyn_proactive_eng_config_characteristic.md) | `objectid` | `objectid_msdyn_proactive_eng_config_characteristic` |


## Source

Generated from [msdyn_proactive_eng_config_characteristic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_proactive_eng_config_characteristic')) on 2026-05-07.