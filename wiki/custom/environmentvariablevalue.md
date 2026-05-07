---
logical: "environmentvariablevalue"
display: "Environment Variable Value"
entitySetName: "environmentvariablevalues"
primaryId: "environmentvariablevalueid"
primaryName: "schemaname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Environment Variable Value

Holds the value for the associated EnvironmentVariableDefinition entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `environmentvariablevalue` |
| Display name | Environment Variable Value |
| Display (plural) | Environment Variable Values |
| Schema name | `EnvironmentVariableValue` |
| Entity set (Web API) | `environmentvariablevalues` |
| Primary id attribute | `environmentvariablevalueid` |
| Primary name attribute | `schemaname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/environmentvariablevalues?$select=schemaname&$top=10
GET /api/data/v9.2/environmentvariablevalues(<guid>)
POST /api/data/v9.2/environmentvariablevalues
PATCH /api/data/v9.2/environmentvariablevalues(<guid>)
DELETE /api/data/v9.2/environmentvariablevalues(<guid>)
```

## Attributes

Writable: **12** · Read-only: **17**

### Writable

`environmentvariabledefinitionid`, `environmentvariablevalueid`, `importsequencenumber`, `introducedversion`, `iscustomizable`, `overriddencreatedon`, `schemaname`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `value`

### Read-only

`componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `environmentvariablevalueidunique`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `ownerid`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_environmentvariablevalue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_environmentvariablevalue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_environmentvariablevalue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_environmentvariablevalue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `environmentvariabledefinition_environmentvariablevalue` | [environmentvariabledefinition](environmentvariabledefinition.md) | `environmentvariabledefinitionid` | `EnvironmentVariableDefinitionId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `environmentvariablevalue_SyncErrors` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `environmentvariablevalue_DuplicateMatchingRecord` | [environmentvariablevalue](environmentvariablevalue.md) | `duplicaterecordid` | `duplicaterecordid_environmentvariablevalue` |
| `environmentvariablevalue_DuplicateBaseRecord` | [environmentvariablevalue](environmentvariablevalue.md) | `baserecordid` | `baserecordid_environmentvariablevalue` |
| `environmentvariablevalue_AsyncOperations` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `environmentvariablevalue_MailboxTrackingFolders` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `environmentvariablevalue_UserEntityInstanceDatas` | [environmentvariablevalue](environmentvariablevalue.md) | `objectid` | `objectid_environmentvariablevalue` |
| `environmentvariablevalue_ProcessSession` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `environmentvariablevalue_BulkDeleteFailures` | [environmentvariablevalue](environmentvariablevalue.md) | `regardingobjectid` | `regardingobjectid_environmentvariablevalue` |
| `environmentvariablevalue_PrincipalObjectAttributeAccesses` | [environmentvariablevalue](environmentvariablevalue.md) | `objectid` | `objectid_environmentvariablevalue` |


## Source

Generated from [environmentvariablevalue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='environmentvariablevalue')) on 2026-05-07.