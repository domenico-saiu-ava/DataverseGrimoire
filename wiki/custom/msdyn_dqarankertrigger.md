---
logical: "msdyn_dqarankertrigger"
display: "Trigger classificatore DQA"
entitySetName: "msdyn_dqarankertriggers"
primaryId: "msdyn_dqarankertriggerid"
primaryName: "msdyn_uniqueid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger classificatore DQA

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dqarankertrigger` |
| Display name | Trigger classificatore DQA |
| Display (plural) | Trigger classificatore DQA |
| Schema name | `msdyn_DQARankerTrigger` |
| Entity set (Web API) | `msdyn_dqarankertriggers` |
| Primary id attribute | `msdyn_dqarankertriggerid` |
| Primary name attribute | `msdyn_uniqueid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dqarankertriggers?$select=msdyn_uniqueid&$top=10
GET /api/data/v9.2/msdyn_dqarankertriggers(<guid>)
POST /api/data/v9.2/msdyn_dqarankertriggers
PATCH /api/data/v9.2/msdyn_dqarankertriggers(<guid>)
DELETE /api/data/v9.2/msdyn_dqarankertriggers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_dqarankertriggerid`, `msdyn_emailpayload`, `msdyn_emailsource`, `msdyn_opportunitypayload`, `msdyn_uniqueid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dqarankertrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dqarankertrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dqarankertrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dqarankertrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dqarankertrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dqarankertrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dqarankertrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dqarankertrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dqarankertrigger_SyncErrors` | [msdyn_dqarankertrigger](msdyn_dqarankertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_dqarankertrigger` |
| `msdyn_dqarankertrigger_DuplicateMatchingRecord` | [msdyn_dqarankertrigger](msdyn_dqarankertrigger.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dqarankertrigger` |
| `msdyn_dqarankertrigger_DuplicateBaseRecord` | [msdyn_dqarankertrigger](msdyn_dqarankertrigger.md) | `baserecordid` | `baserecordid_msdyn_dqarankertrigger` |
| `msdyn_dqarankertrigger_AsyncOperations` | [msdyn_dqarankertrigger](msdyn_dqarankertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_dqarankertrigger` |
| `msdyn_dqarankertrigger_MailboxTrackingFolders` | [msdyn_dqarankertrigger](msdyn_dqarankertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_dqarankertrigger` |
| `msdyn_dqarankertrigger_UserEntityInstanceDatas` | [msdyn_dqarankertrigger](msdyn_dqarankertrigger.md) | `objectid` | `objectid_msdyn_dqarankertrigger` |
| `msdyn_dqarankertrigger_ProcessSession` | [msdyn_dqarankertrigger](msdyn_dqarankertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_dqarankertrigger` |
| `msdyn_dqarankertrigger_BulkDeleteFailures` | [msdyn_dqarankertrigger](msdyn_dqarankertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_dqarankertrigger` |
| `msdyn_dqarankertrigger_PrincipalObjectAttributeAccesses` | [msdyn_dqarankertrigger](msdyn_dqarankertrigger.md) | `objectid` | `objectid_msdyn_dqarankertrigger` |


## Source

Generated from [msdyn_dqarankertrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dqarankertrigger')) on 2026-05-07.