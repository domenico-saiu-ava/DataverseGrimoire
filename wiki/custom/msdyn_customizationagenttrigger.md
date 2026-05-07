---
logical: "msdyn_customizationagenttrigger"
display: "Trigger agente di personalizzazione"
entitySetName: "msdyn_customizationagenttriggers"
primaryId: "msdyn_customizationagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger agente di personalizzazione

Entità trigger dell'agente di personalizzazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customizationagenttrigger` |
| Display name | Trigger agente di personalizzazione |
| Display (plural) | Trigger agente di personalizzazione |
| Schema name | `msdyn_customizationagenttrigger` |
| Entity set (Web API) | `msdyn_customizationagenttriggers` |
| Primary id attribute | `msdyn_customizationagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customizationagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customizationagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_customizationagenttriggers
PATCH /api/data/v9.2/msdyn_customizationagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_customizationagenttriggers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_companyidentifier`, `msdyn_customaccountinsightsconfigid`, `msdyn_customizationagenttriggerid`, `msdyn_input`, `msdyn_name`, `msdyn_retrycount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customizationagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customizationagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customizationagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customizationagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_customizationagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_customizationagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_customizationagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_customizationagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customizationagenttrigger_SyncErrors` | [msdyn_customizationagenttrigger](msdyn_customizationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_customizationagenttrigger` |
| `msdyn_customizationagenttrigger_DuplicateMatchingRecord` | [msdyn_customizationagenttrigger](msdyn_customizationagenttrigger.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customizationagenttrigger` |
| `msdyn_customizationagenttrigger_DuplicateBaseRecord` | [msdyn_customizationagenttrigger](msdyn_customizationagenttrigger.md) | `baserecordid` | `baserecordid_msdyn_customizationagenttrigger` |
| `msdyn_customizationagenttrigger_AsyncOperations` | [msdyn_customizationagenttrigger](msdyn_customizationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_customizationagenttrigger` |
| `msdyn_customizationagenttrigger_MailboxTrackingFolders` | [msdyn_customizationagenttrigger](msdyn_customizationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_customizationagenttrigger` |
| `msdyn_customizationagenttrigger_UserEntityInstanceDatas` | [msdyn_customizationagenttrigger](msdyn_customizationagenttrigger.md) | `objectid` | `objectid_msdyn_customizationagenttrigger` |
| `msdyn_customizationagenttrigger_ProcessSession` | [msdyn_customizationagenttrigger](msdyn_customizationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_customizationagenttrigger` |
| `msdyn_customizationagenttrigger_BulkDeleteFailures` | [msdyn_customizationagenttrigger](msdyn_customizationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_customizationagenttrigger` |
| `msdyn_customizationagenttrigger_PrincipalObjectAttributeAccesses` | [msdyn_customizationagenttrigger](msdyn_customizationagenttrigger.md) | `objectid` | `objectid_msdyn_customizationagenttrigger` |


## Source

Generated from [msdyn_customizationagenttrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customizationagenttrigger')) on 2026-05-07.