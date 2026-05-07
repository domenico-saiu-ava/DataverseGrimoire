---
logical: "msdyn_productivitymacrosolutionconfiguration"
display: "Configurazione soluzione macro"
entitySetName: "msdyn_productivitymacrosolutionconfigurations"
primaryId: "msdyn_productivitymacrosolutionconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione soluzione macro

Configurazioni correlate alla soluzione macro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivitymacrosolutionconfiguration` |
| Display name | Configurazione soluzione macro |
| Display (plural) | Configurazioni soluzione macro |
| Schema name | `msdyn_productivitymacrosolutionconfiguration` |
| Entity set (Web API) | `msdyn_productivitymacrosolutionconfigurations` |
| Primary id attribute | `msdyn_productivitymacrosolutionconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations(<guid>)
POST /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations
PATCH /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_productivitymacrosolutionconfigurations(<guid>)
```

## Attributes

Writable: **21** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_designerfallbackurl`, `msdyn_designerurlconfigentity`, `msdyn_designerurlconfigentityattrib`, `msdyn_designerurlconfigentityid`, `msdyn_designerurlconfigentityquery`, `msdyn_designerurlrelativepath`, `msdyn_macrosversion`, `msdyn_name`, `msdyn_productivitymacrosolutionconfigurationid`, `msdyn_searchhint`, `msdyn_uniquename`, `msdyn_uservoicelink`, `msdyn_uservoicetext`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productivitymacrosolutionconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivitymacrosolutionconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivitymacrosolutionconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivitymacrosolutionconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_productivitymacrosolutionconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_productivitymacrosolutionconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_productivitymacrosolutionconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_productivitymacrosolutionconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivitymacrosolutionconfiguration_SyncErrors` | [msdyn_productivitymacrosolutionconfiguration](msdyn_productivitymacrosolutionconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacrosolutionconfiguration` |
| `msdyn_productivitymacrosolutionconfiguration_DuplicateMatchingRecord` | [msdyn_productivitymacrosolutionconfiguration](msdyn_productivitymacrosolutionconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_productivitymacrosolutionconfiguration` |
| `msdyn_productivitymacrosolutionconfiguration_DuplicateBaseRecord` | [msdyn_productivitymacrosolutionconfiguration](msdyn_productivitymacrosolutionconfiguration.md) | `baserecordid` | `baserecordid_msdyn_productivitymacrosolutionconfiguration` |
| `msdyn_productivitymacrosolutionconfiguration_AsyncOperations` | [msdyn_productivitymacrosolutionconfiguration](msdyn_productivitymacrosolutionconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacrosolutionconfiguration` |
| `msdyn_productivitymacrosolutionconfiguration_MailboxTrackingFolders` | [msdyn_productivitymacrosolutionconfiguration](msdyn_productivitymacrosolutionconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacrosolutionconfiguration` |
| `msdyn_productivitymacrosolutionconfiguration_UserEntityInstanceDatas` | [msdyn_productivitymacrosolutionconfiguration](msdyn_productivitymacrosolutionconfiguration.md) | `objectid` | `objectid_msdyn_productivitymacrosolutionconfiguration` |
| `msdyn_productivitymacrosolutionconfiguration_ProcessSession` | [msdyn_productivitymacrosolutionconfiguration](msdyn_productivitymacrosolutionconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacrosolutionconfiguration` |
| `msdyn_productivitymacrosolutionconfiguration_BulkDeleteFailures` | [msdyn_productivitymacrosolutionconfiguration](msdyn_productivitymacrosolutionconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivitymacrosolutionconfiguration` |
| `msdyn_productivitymacrosolutionconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_productivitymacrosolutionconfiguration](msdyn_productivitymacrosolutionconfiguration.md) | `objectid` | `objectid_msdyn_productivitymacrosolutionconfiguration` |


## Source

Generated from [msdyn_productivitymacrosolutionconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_productivitymacrosolutionconfiguration')) on 2026-05-07.