---
logical: "msdyn_accountresearchagenttrigger"
display: "Trigger dell'agente di ricerca account"
entitySetName: "msdyn_accountresearchagenttriggers"
primaryId: "msdyn_accountresearchagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger dell'agente di ricerca account

Entità trigger dell'agente di ricerca account.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_accountresearchagenttrigger` |
| Display name | Trigger dell'agente di ricerca account |
| Display (plural) | Trigger dell'agente di ricerca account |
| Schema name | `msdyn_accountresearchagenttrigger` |
| Entity set (Web API) | `msdyn_accountresearchagenttriggers` |
| Primary id attribute | `msdyn_accountresearchagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_accountresearchagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_accountresearchagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_accountresearchagenttriggers
PATCH /api/data/v9.2/msdyn_accountresearchagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_accountresearchagenttriggers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accountresearchagenttriggerid`, `msdyn_companyidentifier`, `msdyn_input`, `msdyn_name`, `msdyn_retrycount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_accountresearchagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_accountresearchagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_accountresearchagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_accountresearchagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_accountresearchagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_accountresearchagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_accountresearchagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_accountresearchagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_accountresearchagenttrigger_SyncErrors` | [msdyn_accountresearchagenttrigger](msdyn_accountresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchagenttrigger` |
| `msdyn_accountresearchagenttrigger_DuplicateMatchingRecord` | [msdyn_accountresearchagenttrigger](msdyn_accountresearchagenttrigger.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_accountresearchagenttrigger` |
| `msdyn_accountresearchagenttrigger_DuplicateBaseRecord` | [msdyn_accountresearchagenttrigger](msdyn_accountresearchagenttrigger.md) | `baserecordid` | `baserecordid_msdyn_accountresearchagenttrigger` |
| `msdyn_accountresearchagenttrigger_AsyncOperations` | [msdyn_accountresearchagenttrigger](msdyn_accountresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchagenttrigger` |
| `msdyn_accountresearchagenttrigger_MailboxTrackingFolders` | [msdyn_accountresearchagenttrigger](msdyn_accountresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchagenttrigger` |
| `msdyn_accountresearchagenttrigger_UserEntityInstanceDatas` | [msdyn_accountresearchagenttrigger](msdyn_accountresearchagenttrigger.md) | `objectid` | `objectid_msdyn_accountresearchagenttrigger` |
| `msdyn_accountresearchagenttrigger_ProcessSession` | [msdyn_accountresearchagenttrigger](msdyn_accountresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchagenttrigger` |
| `msdyn_accountresearchagenttrigger_BulkDeleteFailures` | [msdyn_accountresearchagenttrigger](msdyn_accountresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchagenttrigger` |
| `msdyn_accountresearchagenttrigger_PrincipalObjectAttributeAccesses` | [msdyn_accountresearchagenttrigger](msdyn_accountresearchagenttrigger.md) | `objectid` | `objectid_msdyn_accountresearchagenttrigger` |


## Source

Generated from [msdyn_accountresearchagenttrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_accountresearchagenttrigger')) on 2026-05-07.