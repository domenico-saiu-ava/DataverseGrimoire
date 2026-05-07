---
logical: "msdyn_dealmanageraccess"
display: "dealmanageraccess"
entitySetName: "msdyn_dealmanageraccesses"
primaryId: "msdyn_dealmanageraccessid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# dealmanageraccess

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dealmanageraccess` |
| Display name | dealmanageraccess |
| Display (plural) | dealmanageraccesses |
| Schema name | `msdyn_dealmanageraccess` |
| Entity set (Web API) | `msdyn_dealmanageraccesses` |
| Primary id attribute | `msdyn_dealmanageraccessid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dealmanageraccesses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dealmanageraccesses(<guid>)
POST /api/data/v9.2/msdyn_dealmanageraccesses
PATCH /api/data/v9.2/msdyn_dealmanageraccesses(<guid>)
DELETE /api/data/v9.2/msdyn_dealmanageraccesses(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_dealmanageraccessid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dealmanageraccess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dealmanageraccess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dealmanageraccess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dealmanageraccess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dealmanageraccess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dealmanageraccess` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dealmanageraccess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dealmanageraccess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dealmanageraccess_SyncErrors` | [msdyn_dealmanageraccess](msdyn_dealmanageraccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanageraccess` |
| `msdyn_dealmanageraccess_DuplicateMatchingRecord` | [msdyn_dealmanageraccess](msdyn_dealmanageraccess.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dealmanageraccess` |
| `msdyn_dealmanageraccess_DuplicateBaseRecord` | [msdyn_dealmanageraccess](msdyn_dealmanageraccess.md) | `baserecordid` | `baserecordid_msdyn_dealmanageraccess` |
| `msdyn_dealmanageraccess_AsyncOperations` | [msdyn_dealmanageraccess](msdyn_dealmanageraccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanageraccess` |
| `msdyn_dealmanageraccess_MailboxTrackingFolders` | [msdyn_dealmanageraccess](msdyn_dealmanageraccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanageraccess` |
| `msdyn_dealmanageraccess_UserEntityInstanceDatas` | [msdyn_dealmanageraccess](msdyn_dealmanageraccess.md) | `objectid` | `objectid_msdyn_dealmanageraccess` |
| `msdyn_dealmanageraccess_ProcessSession` | [msdyn_dealmanageraccess](msdyn_dealmanageraccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanageraccess` |
| `msdyn_dealmanageraccess_BulkDeleteFailures` | [msdyn_dealmanageraccess](msdyn_dealmanageraccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_dealmanageraccess` |
| `msdyn_dealmanageraccess_PrincipalObjectAttributeAccesses` | [msdyn_dealmanageraccess](msdyn_dealmanageraccess.md) | `objectid` | `objectid_msdyn_dealmanageraccess` |


## Source

Generated from [msdyn_dealmanageraccess (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dealmanageraccess')) on 2026-05-07.