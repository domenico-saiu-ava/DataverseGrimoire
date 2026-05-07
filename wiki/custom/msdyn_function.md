---
logical: "msdyn_function"
display: "Funzione"
entitySetName: "msdyn_functions"
primaryId: "msdyn_functionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Funzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_function` |
| Display name | Funzione |
| Display (plural) | Funzioni |
| Schema name | `msdyn_function` |
| Entity set (Web API) | `msdyn_functions` |
| Primary id attribute | `msdyn_functionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_functions?$select=name&$top=10
GET /api/data/v9.2/msdyn_functions(<guid>)
POST /api/data/v9.2/msdyn_functions
PATCH /api/data/v9.2/msdyn_functions(<guid>)
DELETE /api/data/v9.2/msdyn_functions(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`customapi`, `importsequencenumber`, `iscustomizable`, `language`, `msdyn_functionid`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_function_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_function_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_function_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_function_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_function` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_function` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_function` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_function` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `customapi_msdyn_function_customapi` | [customapi](customapi.md) | `customapi` | `customapi` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_function_SyncErrors` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_function_DuplicateMatchingRecord` | [msdyn_function](msdyn_function.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_function` |
| `msdyn_function_DuplicateBaseRecord` | [msdyn_function](msdyn_function.md) | `baserecordid` | `baserecordid_msdyn_function` |
| `msdyn_function_AsyncOperations` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_function_MailboxTrackingFolders` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_function_UserEntityInstanceDatas` | [msdyn_function](msdyn_function.md) | `objectid` | `objectid_msdyn_function` |
| `msdyn_function_ProcessSession` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_function_BulkDeleteFailures` | [msdyn_function](msdyn_function.md) | `regardingobjectid` | `regardingobjectid_msdyn_function` |
| `msdyn_function_PrincipalObjectAttributeAccesses` | [msdyn_function](msdyn_function.md) | `objectid` | `objectid_msdyn_function` |


## Source

Generated from [msdyn_function (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_function')) on 2026-05-07.