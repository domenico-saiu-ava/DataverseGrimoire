---
logical: "msdyn_summarysynthesizertrigger"
display: "Trigger dell'agente del sintetizzatore di riepilogo"
entitySetName: "msdyn_summarysynthesizertriggers"
primaryId: "msdyn_summarysynthesizertriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger dell'agente del sintetizzatore di riepilogo

Entità agente trigger del sintetizzatore di riepilogo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_summarysynthesizertrigger` |
| Display name | Trigger dell'agente del sintetizzatore di riepilogo |
| Display (plural) | msdyn_summarysynthesizertriggers |
| Schema name | `msdyn_summarysynthesizertrigger` |
| Entity set (Web API) | `msdyn_summarysynthesizertriggers` |
| Primary id attribute | `msdyn_summarysynthesizertriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_summarysynthesizertriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_summarysynthesizertriggers(<guid>)
POST /api/data/v9.2/msdyn_summarysynthesizertriggers
PATCH /api/data/v9.2/msdyn_summarysynthesizertriggers(<guid>)
DELETE /api/data/v9.2/msdyn_summarysynthesizertriggers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_input`, `msdyn_leadid`, `msdyn_name`, `msdyn_retrycount`, `msdyn_summarysynthesizertriggerid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_summarysynthesizertrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_summarysynthesizertrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_summarysynthesizertrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_summarysynthesizertrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_summarysynthesizertrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_summarysynthesizertrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_summarysynthesizertrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_summarysynthesizertrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_summarysynthesizertrigger_SyncErrors` | [msdyn_summarysynthesizertrigger](msdyn_summarysynthesizertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizertrigger` |
| `msdyn_summarysynthesizertrigger_DuplicateMatchingRecord` | [msdyn_summarysynthesizertrigger](msdyn_summarysynthesizertrigger.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_summarysynthesizertrigger` |
| `msdyn_summarysynthesizertrigger_DuplicateBaseRecord` | [msdyn_summarysynthesizertrigger](msdyn_summarysynthesizertrigger.md) | `baserecordid` | `baserecordid_msdyn_summarysynthesizertrigger` |
| `msdyn_summarysynthesizertrigger_AsyncOperations` | [msdyn_summarysynthesizertrigger](msdyn_summarysynthesizertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizertrigger` |
| `msdyn_summarysynthesizertrigger_MailboxTrackingFolders` | [msdyn_summarysynthesizertrigger](msdyn_summarysynthesizertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizertrigger` |
| `msdyn_summarysynthesizertrigger_UserEntityInstanceDatas` | [msdyn_summarysynthesizertrigger](msdyn_summarysynthesizertrigger.md) | `objectid` | `objectid_msdyn_summarysynthesizertrigger` |
| `msdyn_summarysynthesizertrigger_ProcessSession` | [msdyn_summarysynthesizertrigger](msdyn_summarysynthesizertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizertrigger` |
| `msdyn_summarysynthesizertrigger_BulkDeleteFailures` | [msdyn_summarysynthesizertrigger](msdyn_summarysynthesizertrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_summarysynthesizertrigger` |
| `msdyn_summarysynthesizertrigger_PrincipalObjectAttributeAccesses` | [msdyn_summarysynthesizertrigger](msdyn_summarysynthesizertrigger.md) | `objectid` | `objectid_msdyn_summarysynthesizertrigger` |


## Source

Generated from [msdyn_summarysynthesizertrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_summarysynthesizertrigger')) on 2026-05-07.