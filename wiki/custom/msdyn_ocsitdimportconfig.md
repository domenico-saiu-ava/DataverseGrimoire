---
logical: "msdyn_ocsitdimportconfig"
display: "Configurazione importazione dati di training"
entitySetName: "msdyn_ocsitdimportconfigs"
primaryId: "msdyn_ocsitdimportconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione importazione dati di training

Indica la configurazione dell'importazione dei dati di training

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsitdimportconfig` |
| Display name | Configurazione importazione dati di training |
| Display (plural) | Configurazioni importazione dati di training |
| Schema name | `msdyn_ocsitdimportconfig` |
| Entity set (Web API) | `msdyn_ocsitdimportconfigs` |
| Primary id attribute | `msdyn_ocsitdimportconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsitdimportconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsitdimportconfigs(<guid>)
POST /api/data/v9.2/msdyn_ocsitdimportconfigs
PATCH /api/data/v9.2/msdyn_ocsitdimportconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_ocsitdimportconfigs(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_cdsdataloadconfig`, `msdyn_importconfigtype`, `msdyn_loadstatus`, `msdyn_name`, `msdyn_ocsitdimportconfigid`, `msdyn_ocskillidentmlmodelid`, `msdyn_recordsimported`, `msdyn_recordsskipped`, `msdyn_totalrecordstoimport`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsitdimportconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsitdimportconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsitdimportconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsitdimportconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsitdimportconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsitdimportconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsitdimportconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsitdimportconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ocsitdimportconfig_ocskillidentmlmo` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `msdyn_ocskillidentmlmodelid` | `msdyn_ocskillidentmlmodelid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsitdimportconfig_SyncErrors` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdimportconfig` |
| `msdyn_ocsitdimportconfig_DuplicateMatchingRecord` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocsitdimportconfig` |
| `msdyn_ocsitdimportconfig_DuplicateBaseRecord` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `baserecordid` | `baserecordid_msdyn_ocsitdimportconfig` |
| `msdyn_ocsitdimportconfig_AsyncOperations` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdimportconfig` |
| `msdyn_ocsitdimportconfig_MailboxTrackingFolders` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdimportconfig` |
| `msdyn_ocsitdimportconfig_UserEntityInstanceDatas` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `objectid` | `objectid_msdyn_ocsitdimportconfig` |
| `msdyn_ocsitdimportconfig_ProcessSession` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdimportconfig` |
| `msdyn_ocsitdimportconfig_BulkDeleteFailures` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsitdimportconfig` |
| `msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `objectid` | `objectid_msdyn_ocsitdimportconfig` |
| `msdyn_ocsitrainingdata_ocsitdimportconfig` | [msdyn_ocsitdimportconfig](msdyn_ocsitdimportconfig.md) | `msdyn_ocsitdimportconfigid` | `msdyn_ocsitdimportconfigid` |


## Source

Generated from [msdyn_ocsitdimportconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsitdimportconfig')) on 2026-05-07.