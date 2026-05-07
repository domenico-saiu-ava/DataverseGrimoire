---
logical: "msdyn_accountresearchsummarytrigger"
display: "Trigger riepilogo ricerca account"
entitySetName: "msdyn_accountresearchsummarytriggers"
primaryId: "msdyn_accountresearchsummarytriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger riepilogo ricerca account

Tabella del trigger di riepilogo ricerca account

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_accountresearchsummarytrigger` |
| Display name | Trigger riepilogo ricerca account |
| Display (plural) | Trigger riepilogo ricerca account |
| Schema name | `msdyn_accountresearchsummarytrigger` |
| Entity set (Web API) | `msdyn_accountresearchsummarytriggers` |
| Primary id attribute | `msdyn_accountresearchsummarytriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_accountresearchsummarytriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_accountresearchsummarytriggers(<guid>)
POST /api/data/v9.2/msdyn_accountresearchsummarytriggers
PATCH /api/data/v9.2/msdyn_accountresearchsummarytriggers(<guid>)
DELETE /api/data/v9.2/msdyn_accountresearchsummarytriggers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accountresearchsummarytriggerid`, `msdyn_companyidentifier`, `msdyn_input`, `msdyn_name`, `msdyn_retrycount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_accountresearchsummarytrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_accountresearchsummarytrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_accountresearchsummarytrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_accountresearchsummarytrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_accountresearchsummarytrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_accountresearchsummarytrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_accountresearchsummarytrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_accountresearchsummarytrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_accountresearchsummarytrigger_SyncErrors` | [msdyn_accountresearchsummarytrigger](msdyn_accountresearchsummarytrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchsummarytrigger` |
| `msdyn_accountresearchsummarytrigger_DuplicateMatchingRecord` | [msdyn_accountresearchsummarytrigger](msdyn_accountresearchsummarytrigger.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_accountresearchsummarytrigger` |
| `msdyn_accountresearchsummarytrigger_DuplicateBaseRecord` | [msdyn_accountresearchsummarytrigger](msdyn_accountresearchsummarytrigger.md) | `baserecordid` | `baserecordid_msdyn_accountresearchsummarytrigger` |
| `msdyn_accountresearchsummarytrigger_AsyncOperations` | [msdyn_accountresearchsummarytrigger](msdyn_accountresearchsummarytrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchsummarytrigger` |
| `msdyn_accountresearchsummarytrigger_MailboxTrackingFolders` | [msdyn_accountresearchsummarytrigger](msdyn_accountresearchsummarytrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchsummarytrigger` |
| `msdyn_accountresearchsummarytrigger_UserEntityInstanceDatas` | [msdyn_accountresearchsummarytrigger](msdyn_accountresearchsummarytrigger.md) | `objectid` | `objectid_msdyn_accountresearchsummarytrigger` |
| `msdyn_accountresearchsummarytrigger_ProcessSession` | [msdyn_accountresearchsummarytrigger](msdyn_accountresearchsummarytrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchsummarytrigger` |
| `msdyn_accountresearchsummarytrigger_BulkDeleteFailures` | [msdyn_accountresearchsummarytrigger](msdyn_accountresearchsummarytrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchsummarytrigger` |
| `msdyn_accountresearchsummarytrigger_PrincipalObjectAttributeAccesses` | [msdyn_accountresearchsummarytrigger](msdyn_accountresearchsummarytrigger.md) | `objectid` | `objectid_msdyn_accountresearchsummarytrigger` |


## Source

Generated from [msdyn_accountresearchsummarytrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_accountresearchsummarytrigger')) on 2026-05-07.