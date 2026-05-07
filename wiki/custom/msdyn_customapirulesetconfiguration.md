---
logical: "msdyn_customapirulesetconfiguration"
display: "Configurazione set di regole API personalizzata"
entitySetName: "msdyn_customapirulesetconfigurations"
primaryId: "msdyn_customapirulesetconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione set di regole API personalizzata

Tabella di configurazione per la configurazione di API personalizzate da utilizzare nel sistema di distribuzione unificata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customapirulesetconfiguration` |
| Display name | Configurazione set di regole API personalizzata |
| Display (plural) | Configurazioni set di regole API personalizzata |
| Schema name | `msdyn_customapirulesetconfiguration` |
| Entity set (Web API) | `msdyn_customapirulesetconfigurations` |
| Primary id attribute | `msdyn_customapirulesetconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customapirulesetconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customapirulesetconfigurations(<guid>)
POST /api/data/v9.2/msdyn_customapirulesetconfigurations
PATCH /api/data/v9.2/msdyn_customapirulesetconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_customapirulesetconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_customapi`, `msdyn_customapirequestparameter`, `msdyn_customapiresponseproperty`, `msdyn_customapirulesetconfigurationid`, `msdyn_name`, `msdyn_persistoutputdata`, `msdyn_refreshinputdata`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customapirulesetconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customapirulesetconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customapirulesetconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customapirulesetconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_customapirulesetconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_customapirulesetconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_customapirulesetconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_customapirulesetconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_customapi_msdyn_customapirulesetconfiguration_CustomAPI` | [customapi](customapi.md) | `msdyn_customapi` | `msdyn_CustomAPI` |
| `msdyn_customapirequestparameter_msdyn_customapirulesetconfiguration_CustomAPIRequestParameter` | [customapirequestparameter](customapirequestparameter.md) | `msdyn_customapirequestparameter` | `msdyn_CustomAPIRequestParameter` |
| `msdyn_customapiresponseproperty_msdyn_customapirulesetconfiguration_CustomAPIResponseProperty` | [customapiresponseproperty](customapiresponseproperty.md) | `msdyn_customapiresponseproperty` | `msdyn_CustomAPIResponseProperty` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customapirulesetconfiguration_SyncErrors` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_customapirulesetconfiguration` |
| `msdyn_customapirulesetconfiguration_DuplicateMatchingRecord` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customapirulesetconfiguration` |
| `msdyn_customapirulesetconfiguration_DuplicateBaseRecord` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `baserecordid` | `baserecordid_msdyn_customapirulesetconfiguration` |
| `msdyn_customapirulesetconfiguration_AsyncOperations` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_customapirulesetconfiguration` |
| `msdyn_customapirulesetconfiguration_MailboxTrackingFolders` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_customapirulesetconfiguration` |
| `msdyn_customapirulesetconfiguration_UserEntityInstanceDatas` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `objectid` | `objectid_msdyn_customapirulesetconfiguration` |
| `msdyn_customapirulesetconfiguration_ProcessSession` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_customapirulesetconfiguration` |
| `msdyn_customapirulesetconfiguration_BulkDeleteFailures` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_customapirulesetconfiguration` |
| `msdyn_customapirulesetconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `objectid` | `objectid_msdyn_customapirulesetconfiguration` |
| `msdyn_rulesetdependencymapping_msdyn_customapirulesetconfig_msdyn_referencedpolymorphicentityid` | [msdyn_customapirulesetconfiguration](msdyn_customapirulesetconfiguration.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_customapirulesetconfig` |


## Source

Generated from [msdyn_customapirulesetconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customapirulesetconfiguration')) on 2026-05-07.