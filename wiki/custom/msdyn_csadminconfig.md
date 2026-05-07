---
logical: "msdyn_csadminconfig"
display: "CSAdminConfig"
entitySetName: "msdyn_csadminconfigs"
primaryId: "msdyn_csadminconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CSAdminConfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_csadminconfig` |
| Display name | CSAdminConfig |
| Display (plural) | CSAdminConfigs |
| Schema name | `msdyn_csadminconfig` |
| Entity set (Web API) | `msdyn_csadminconfigs` |
| Primary id attribute | `msdyn_csadminconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_csadminconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_csadminconfigs(<guid>)
POST /api/data/v9.2/msdyn_csadminconfigs
PATCH /api/data/v9.2/msdyn_csadminconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_csadminconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_configdata`, `msdyn_configtype`, `msdyn_csadminconfigid`, `msdyn_name`, `msdyn_setupstatus`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_csadminconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_csadminconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_csadminconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_csadminconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_csadminconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_csadminconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_csadminconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_csadminconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_csadminconfig_SyncErrors` | [msdyn_csadminconfig](msdyn_csadminconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_csadminconfig` |
| `msdyn_csadminconfig_DuplicateMatchingRecord` | [msdyn_csadminconfig](msdyn_csadminconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_csadminconfig` |
| `msdyn_csadminconfig_DuplicateBaseRecord` | [msdyn_csadminconfig](msdyn_csadminconfig.md) | `baserecordid` | `baserecordid_msdyn_csadminconfig` |
| `msdyn_csadminconfig_AsyncOperations` | [msdyn_csadminconfig](msdyn_csadminconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_csadminconfig` |
| `msdyn_csadminconfig_MailboxTrackingFolders` | [msdyn_csadminconfig](msdyn_csadminconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_csadminconfig` |
| `msdyn_csadminconfig_UserEntityInstanceDatas` | [msdyn_csadminconfig](msdyn_csadminconfig.md) | `objectid` | `objectid_msdyn_csadminconfig` |
| `msdyn_csadminconfig_ProcessSession` | [msdyn_csadminconfig](msdyn_csadminconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_csadminconfig` |
| `msdyn_csadminconfig_BulkDeleteFailures` | [msdyn_csadminconfig](msdyn_csadminconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_csadminconfig` |
| `msdyn_csadminconfig_PrincipalObjectAttributeAccesses` | [msdyn_csadminconfig](msdyn_csadminconfig.md) | `objectid` | `objectid_msdyn_csadminconfig` |


## Source

Generated from [msdyn_csadminconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_csadminconfig')) on 2026-05-07.