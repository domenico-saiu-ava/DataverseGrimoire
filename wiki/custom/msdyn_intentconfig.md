---
logical: "msdyn_intentconfig"
display: "Configurazione finalità"
entitySetName: "msdyn_intentconfigs"
primaryId: "msdyn_intentconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione finalità

Configurazione che acquisisce i campi necessari per la determinazione della finalità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentconfig` |
| Display name | Configurazione finalità |
| Display (plural) | Configurazioni finalità |
| Schema name | `msdyn_intentconfig` |
| Entity set (Web API) | `msdyn_intentconfigs` |
| Primary id attribute | `msdyn_intentconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentconfigs(<guid>)
POST /api/data/v9.2/msdyn_intentconfigs
PATCH /api/data/v9.2/msdyn_intentconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_intentconfigs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_entitytype`, `msdyn_intentconfigid`, `msdyn_intentfamilyid`, `msdyn_intentfieldspec`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentconfig_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentconfig_SyncErrors` | [msdyn_intentconfig](msdyn_intentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentconfig` |
| `msdyn_intentconfig_DuplicateMatchingRecord` | [msdyn_intentconfig](msdyn_intentconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentconfig` |
| `msdyn_intentconfig_DuplicateBaseRecord` | [msdyn_intentconfig](msdyn_intentconfig.md) | `baserecordid` | `baserecordid_msdyn_intentconfig` |
| `msdyn_intentconfig_AsyncOperations` | [msdyn_intentconfig](msdyn_intentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentconfig` |
| `msdyn_intentconfig_MailboxTrackingFolders` | [msdyn_intentconfig](msdyn_intentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentconfig` |
| `msdyn_intentconfig_UserEntityInstanceDatas` | [msdyn_intentconfig](msdyn_intentconfig.md) | `objectid` | `objectid_msdyn_intentconfig` |
| `msdyn_intentconfig_ProcessSession` | [msdyn_intentconfig](msdyn_intentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentconfig` |
| `msdyn_intentconfig_BulkDeleteFailures` | [msdyn_intentconfig](msdyn_intentconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentconfig` |
| `msdyn_intentconfig_PrincipalObjectAttributeAccesses` | [msdyn_intentconfig](msdyn_intentconfig.md) | `objectid` | `objectid_msdyn_intentconfig` |


## Source

Generated from [msdyn_intentconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentconfig')) on 2026-05-07.