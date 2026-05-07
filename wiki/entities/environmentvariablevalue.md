---
logical: "environmentvariablevalue"
display: "Environment Variable Value"
entitySetName: "environmentvariablevalues"
primaryId: "environmentvariablevalueid"
primaryName: "schemaname"
tableType: "Standard"
ownership: "None"
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

Writable: **12** · Read-only: **18**

### Writable

`EnvironmentVariableDefinitionId`, `EnvironmentVariableValueId`, `ImportSequenceNumber`, `IntroducedVersion`, `IsCustomizable`, `OverriddenCreatedOn`, `SchemaName`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `Value`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EnvironmentVariableValueIdUnique`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `environmentvariabledefinition_environmentvariablevalue` | [environmentvariabledefinition](environmentvariabledefinition.md) | `environmentvariabledefinitionid` | `EnvironmentVariableDefinitionId` |
| `lk_environmentvariablevalue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_environmentvariablevalue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_environmentvariablevalue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_environmentvariablevalue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `environmentvariablevalue_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `environmentvariablevalue_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `environmentvariablevalue_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `environmentvariablevalue_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `environmentvariablevalue_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `environmentvariablevalue_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `environmentvariablevalue_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `environmentvariablevalue_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [environmentvariablevalue.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/environmentvariablevalue.md) on 2026-05-06.