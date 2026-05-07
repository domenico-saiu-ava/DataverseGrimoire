---
logical: "msdyn_bot_variable"
display: "Variabile bot"
entitySetName: "msdyn_bot_variables"
primaryId: "msdyn_bot_variableid"
primaryName: "msdyn_label"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Variabile bot

Questa opzione viene usata per archiviare le variabili del bot MCS.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bot_variable` |
| Display name | Variabile bot |
| Display (plural) | Variabili bot |
| Schema name | `msdyn_bot_variable` |
| Entity set (Web API) | `msdyn_bot_variables` |
| Primary id attribute | `msdyn_bot_variableid` |
| Primary name attribute | `msdyn_label` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bot_variables?$select=msdyn_label&$top=10
GET /api/data/v9.2/msdyn_bot_variables(<guid>)
POST /api/data/v9.2/msdyn_bot_variables
PATCH /api/data/v9.2/msdyn_bot_variables(<guid>)
DELETE /api/data/v9.2/msdyn_bot_variables(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bot_variableid`, `msdyn_description`, `msdyn_label`, `msdyn_name`, `msdyn_variable`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_bot_variable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bot_variable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bot_variable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bot_variable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bot_variable` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bot_variable` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bot_variable` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bot_variable` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bot_variable_SyncErrors` | [msdyn_bot_variable](msdyn_bot_variable.md) | `regardingobjectid` | `regardingobjectid_msdyn_bot_variable` |
| `msdyn_bot_variable_AsyncOperations` | [msdyn_bot_variable](msdyn_bot_variable.md) | `regardingobjectid` | `regardingobjectid_msdyn_bot_variable` |
| `msdyn_bot_variable_MailboxTrackingFolders` | [msdyn_bot_variable](msdyn_bot_variable.md) | `regardingobjectid` | `regardingobjectid_msdyn_bot_variable` |
| `msdyn_bot_variable_UserEntityInstanceDatas` | [msdyn_bot_variable](msdyn_bot_variable.md) | `objectid` | `objectid_msdyn_bot_variable` |
| `msdyn_bot_variable_ProcessSession` | [msdyn_bot_variable](msdyn_bot_variable.md) | `regardingobjectid` | `regardingobjectid_msdyn_bot_variable` |
| `msdyn_bot_variable_BulkDeleteFailures` | [msdyn_bot_variable](msdyn_bot_variable.md) | `regardingobjectid` | `regardingobjectid_msdyn_bot_variable` |
| `msdyn_bot_variable_PrincipalObjectAttributeAccesses` | [msdyn_bot_variable](msdyn_bot_variable.md) | `objectid` | `objectid_msdyn_bot_variable` |
| `msdyn_bot_variable_DuplicateMatchingRecord` | [msdyn_bot_variable](msdyn_bot_variable.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_bot_variable` |
| `msdyn_bot_variable_DuplicateBaseRecord` | [msdyn_bot_variable](msdyn_bot_variable.md) | `baserecordid` | `baserecordid_msdyn_bot_variable` |


## Source

Generated from [msdyn_bot_variable (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bot_variable')) on 2026-05-07.