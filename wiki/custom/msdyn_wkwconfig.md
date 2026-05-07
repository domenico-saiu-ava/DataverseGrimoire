---
logical: "msdyn_wkwconfig"
display: "wkwconfig"
entitySetName: "msdyn_wkwconfigs"
primaryId: "msdyn_wkwconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# wkwconfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wkwconfig` |
| Display name | wkwconfig |
| Display (plural) | wkwconfigs |
| Schema name | `msdyn_wkwconfig` |
| Entity set (Web API) | `msdyn_wkwconfigs` |
| Primary id attribute | `msdyn_wkwconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wkwconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wkwconfigs(<guid>)
POST /api/data/v9.2/msdyn_wkwconfigs
PATCH /api/data/v9.2/msdyn_wkwconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_wkwconfigs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_currentstatus`, `msdyn_emailtemplateid`, `msdyn_isfrecomplete`, `msdyn_iswkwenabled`, `msdyn_name`, `msdyn_wkwconfigid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wkwconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wkwconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wkwconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wkwconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wkwconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wkwconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wkwconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wkwconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wkwconfig_SyncErrors` | [msdyn_wkwconfig](msdyn_wkwconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwconfig` |
| `msdyn_wkwconfig_DuplicateMatchingRecord` | [msdyn_wkwconfig](msdyn_wkwconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_wkwconfig` |
| `msdyn_wkwconfig_DuplicateBaseRecord` | [msdyn_wkwconfig](msdyn_wkwconfig.md) | `baserecordid` | `baserecordid_msdyn_wkwconfig` |
| `msdyn_wkwconfig_AsyncOperations` | [msdyn_wkwconfig](msdyn_wkwconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwconfig` |
| `msdyn_wkwconfig_MailboxTrackingFolders` | [msdyn_wkwconfig](msdyn_wkwconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwconfig` |
| `msdyn_wkwconfig_UserEntityInstanceDatas` | [msdyn_wkwconfig](msdyn_wkwconfig.md) | `objectid` | `objectid_msdyn_wkwconfig` |
| `msdyn_wkwconfig_ProcessSession` | [msdyn_wkwconfig](msdyn_wkwconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwconfig` |
| `msdyn_wkwconfig_BulkDeleteFailures` | [msdyn_wkwconfig](msdyn_wkwconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_wkwconfig` |
| `msdyn_wkwconfig_PrincipalObjectAttributeAccesses` | [msdyn_wkwconfig](msdyn_wkwconfig.md) | `objectid` | `objectid_msdyn_wkwconfig` |


## Source

Generated from [msdyn_wkwconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wkwconfig')) on 2026-05-07.