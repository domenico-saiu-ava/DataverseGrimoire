---
logical: "msdyn_qualificationagenttrigger"
display: "Trigger dell'agente di qualificazione"
entitySetName: "msdyn_qualificationagenttriggers"
primaryId: "msdyn_qualificationagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger dell'agente di qualificazione

Entità trigger dell'agente di qualificazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_qualificationagenttrigger` |
| Display name | Trigger dell'agente di qualificazione |
| Display (plural) | Trigger dell'agente di qualificazione |
| Schema name | `msdyn_qualificationagenttrigger` |
| Entity set (Web API) | `msdyn_qualificationagenttriggers` |
| Primary id attribute | `msdyn_qualificationagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_qualificationagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_qualificationagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_qualificationagenttriggers
PATCH /api/data/v9.2/msdyn_qualificationagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_qualificationagenttriggers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_input`, `msdyn_leadid`, `msdyn_name`, `msdyn_qualificationagenttriggerid`, `msdyn_retrycount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_qualificationagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_qualificationagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_qualificationagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_qualificationagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_qualificationagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_qualificationagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_qualificationagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_qualificationagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_qualificationagenttrigger_SyncErrors` | [msdyn_qualificationagenttrigger](msdyn_qualificationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_qualificationagenttrigger` |
| `msdyn_qualificationagenttrigger_DuplicateMatchingRecord` | [msdyn_qualificationagenttrigger](msdyn_qualificationagenttrigger.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_qualificationagenttrigger` |
| `msdyn_qualificationagenttrigger_DuplicateBaseRecord` | [msdyn_qualificationagenttrigger](msdyn_qualificationagenttrigger.md) | `baserecordid` | `baserecordid_msdyn_qualificationagenttrigger` |
| `msdyn_qualificationagenttrigger_AsyncOperations` | [msdyn_qualificationagenttrigger](msdyn_qualificationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_qualificationagenttrigger` |
| `msdyn_qualificationagenttrigger_MailboxTrackingFolders` | [msdyn_qualificationagenttrigger](msdyn_qualificationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_qualificationagenttrigger` |
| `msdyn_qualificationagenttrigger_UserEntityInstanceDatas` | [msdyn_qualificationagenttrigger](msdyn_qualificationagenttrigger.md) | `objectid` | `objectid_msdyn_qualificationagenttrigger` |
| `msdyn_qualificationagenttrigger_ProcessSession` | [msdyn_qualificationagenttrigger](msdyn_qualificationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_qualificationagenttrigger` |
| `msdyn_qualificationagenttrigger_BulkDeleteFailures` | [msdyn_qualificationagenttrigger](msdyn_qualificationagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_qualificationagenttrigger` |
| `msdyn_qualificationagenttrigger_PrincipalObjectAttributeAccesses` | [msdyn_qualificationagenttrigger](msdyn_qualificationagenttrigger.md) | `objectid` | `objectid_msdyn_qualificationagenttrigger` |


## Source

Generated from [msdyn_qualificationagenttrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_qualificationagenttrigger')) on 2026-05-07.