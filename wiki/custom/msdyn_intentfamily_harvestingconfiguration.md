---
logical: "msdyn_intentfamily_harvestingconfiguration"
display: "msdyn_intentfamily_harvestingconfiguration"
entitySetName: "msdyn_intentfamily_harvestingconfigurations"
primaryId: "msdyn_intentfamily_harvestingconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_intentfamily_harvestingconfiguration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentfamily_harvestingconfiguration` |
| Display name | msdyn_intentfamily_harvestingconfiguration |
| Display (plural) | msdyn_intentfamily_harvestingconfigurations |
| Schema name | `msdyn_intentfamily_harvestingconfiguration` |
| Entity set (Web API) | `msdyn_intentfamily_harvestingconfigurations` |
| Primary id attribute | `msdyn_intentfamily_harvestingconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentfamily_harvestingconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentfamily_harvestingconfigurations(<guid>)
POST /api/data/v9.2/msdyn_intentfamily_harvestingconfigurations
PATCH /api/data/v9.2/msdyn_intentfamily_harvestingconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_intentfamily_harvestingconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_configurationstatus`, `msdyn_harvestinglocalecode`, `msdyn_harvestingstate`, `msdyn_intentfamily_harvestingconfigurationid`, `msdyn_intentfamilyid`, `msdyn_name`, `msdyn_runconfiguration`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentfamily_harvestingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentfamily_harvestingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentfamily_harvestingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentfamily_harvestingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentfamily_harvestingconfiguration` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentfamily_harvestingconfiguration` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentfamily_harvestingconfiguration` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentfamily_harvestingconfiguration` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentfamily_harvestingconfiguration_msdyn_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentfamily_harvestingconfiguration_SyncErrors` | [msdyn_intentfamily_harvestingconfiguration](msdyn_intentfamily_harvestingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_harvestingconfiguration` |
| `msdyn_intentfamily_harvestingconfiguration_DuplicateMatchingRecord` | [msdyn_intentfamily_harvestingconfiguration](msdyn_intentfamily_harvestingconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentfamily_harvestingconfiguration` |
| `msdyn_intentfamily_harvestingconfiguration_DuplicateBaseRecord` | [msdyn_intentfamily_harvestingconfiguration](msdyn_intentfamily_harvestingconfiguration.md) | `baserecordid` | `baserecordid_msdyn_intentfamily_harvestingconfiguration` |
| `msdyn_intentfamily_harvestingconfiguration_AsyncOperations` | [msdyn_intentfamily_harvestingconfiguration](msdyn_intentfamily_harvestingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_harvestingconfiguration` |
| `msdyn_intentfamily_harvestingconfiguration_MailboxTrackingFolders` | [msdyn_intentfamily_harvestingconfiguration](msdyn_intentfamily_harvestingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_harvestingconfiguration` |
| `msdyn_intentfamily_harvestingconfiguration_UserEntityInstanceDatas` | [msdyn_intentfamily_harvestingconfiguration](msdyn_intentfamily_harvestingconfiguration.md) | `objectid` | `objectid_msdyn_intentfamily_harvestingconfiguration` |
| `msdyn_intentfamily_harvestingconfiguration_ProcessSession` | [msdyn_intentfamily_harvestingconfiguration](msdyn_intentfamily_harvestingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_harvestingconfiguration` |
| `msdyn_intentfamily_harvestingconfiguration_BulkDeleteFailures` | [msdyn_intentfamily_harvestingconfiguration](msdyn_intentfamily_harvestingconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentfamily_harvestingconfiguration` |
| `msdyn_intentfamily_harvestingconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_intentfamily_harvestingconfiguration](msdyn_intentfamily_harvestingconfiguration.md) | `objectid` | `objectid_msdyn_intentfamily_harvestingconfiguration` |


## Source

Generated from [msdyn_intentfamily_harvestingconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentfamily_harvestingconfiguration')) on 2026-05-07.