---
logical: "msdyn_function"
display: "Function"
entitySetName: "msdyn_functions"
primaryId: "msdyn_functionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Function

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_function` |
| Display name | Function |
| Display (plural) | Functions |
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

Writable: **13** · Read-only: **18**

### Writable

`customapi`, `ImportSequenceNumber`, `IsCustomizable`, `language`, `msdyn_functionId`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_function` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `customapi_msdyn_function_customapi` | [customapi](customapi.md) | `customapi` | `customapi` |
| `lk_msdyn_function_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_function_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_function_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_function_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_function` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_function` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_function` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_function_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_function_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_function_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_function_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_function_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_function_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_function_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_function_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_function.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_function.md) on 2026-05-06.