---
logical: "msdyn_serviceconfiguration"
display: "Configurazione servizio"
entitySetName: "msdyn_serviceconfigurations"
primaryId: "msdyn_serviceconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione servizio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_serviceconfiguration` |
| Display name | Configurazione servizio |
| Display (plural) | Configurazioni servizio |
| Schema name | `msdyn_serviceconfiguration` |
| Entity set (Web API) | `msdyn_serviceconfigurations` |
| Primary id attribute | `msdyn_serviceconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_serviceconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_serviceconfigurations(<guid>)
POST /api/data/v9.2/msdyn_serviceconfigurations
PATCH /api/data/v9.2/msdyn_serviceconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_serviceconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_entitylogicalname`, `msdyn_lookupattributeforsla`, `msdyn_name`, `msdyn_organizationid`, `msdyn_pausestate`, `msdyn_serviceconfigurationid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_serviceconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_serviceconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_serviceconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_serviceconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_serviceconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_serviceconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_serviceconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_serviceconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_serviceconfiguration_SyncErrors` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_serviceconfiguration_DuplicateMatchingRecord` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_serviceconfiguration` |
| `msdyn_serviceconfiguration_DuplicateBaseRecord` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `baserecordid` | `baserecordid_msdyn_serviceconfiguration` |
| `msdyn_serviceconfiguration_AsyncOperations` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_serviceconfiguration_MailboxTrackingFolders` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_serviceconfiguration_UserEntityInstanceDatas` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `objectid` | `objectid_msdyn_serviceconfiguration` |
| `msdyn_serviceconfiguration_ProcessSession` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_serviceconfiguration_BulkDeleteFailures` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_serviceconfiguration` |
| `msdyn_serviceconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `objectid` | `objectid_msdyn_serviceconfiguration` |


## Source

Generated from [msdyn_serviceconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_serviceconfiguration')) on 2026-05-07.