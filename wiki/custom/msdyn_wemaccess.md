---
logical: "msdyn_wemaccess"
display: "Accesso WEM"
entitySetName: "msdyn_wemaccesses"
primaryId: "msdyn_wemaccessid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Accesso WEM

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemaccess` |
| Display name | Accesso WEM |
| Display (plural) | Accessi WEM |
| Schema name | `msdyn_wemaccess` |
| Entity set (Web API) | `msdyn_wemaccesses` |
| Primary id attribute | `msdyn_wemaccessid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemaccesses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemaccesses(<guid>)
POST /api/data/v9.2/msdyn_wemaccesses
PATCH /api/data/v9.2/msdyn_wemaccesses(<guid>)
DELETE /api/data/v9.2/msdyn_wemaccesses(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_wemaccessid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wemaccess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemaccess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemaccess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemaccess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemaccess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemaccess` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemaccess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemaccess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemaccess_SyncErrors` | [msdyn_wemaccess](msdyn_wemaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemaccess` |
| `msdyn_wemaccess_DuplicateMatchingRecord` | [msdyn_wemaccess](msdyn_wemaccess.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_wemaccess` |
| `msdyn_wemaccess_DuplicateBaseRecord` | [msdyn_wemaccess](msdyn_wemaccess.md) | `baserecordid` | `baserecordid_msdyn_wemaccess` |
| `msdyn_wemaccess_AsyncOperations` | [msdyn_wemaccess](msdyn_wemaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemaccess` |
| `msdyn_wemaccess_MailboxTrackingFolders` | [msdyn_wemaccess](msdyn_wemaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemaccess` |
| `msdyn_wemaccess_UserEntityInstanceDatas` | [msdyn_wemaccess](msdyn_wemaccess.md) | `objectid` | `objectid_msdyn_wemaccess` |
| `msdyn_wemaccess_ProcessSession` | [msdyn_wemaccess](msdyn_wemaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemaccess` |
| `msdyn_wemaccess_BulkDeleteFailures` | [msdyn_wemaccess](msdyn_wemaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemaccess` |
| `msdyn_wemaccess_PrincipalObjectAttributeAccesses` | [msdyn_wemaccess](msdyn_wemaccess.md) | `objectid` | `objectid_msdyn_wemaccess` |


## Source

Generated from [msdyn_wemaccess (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemaccess')) on 2026-05-07.