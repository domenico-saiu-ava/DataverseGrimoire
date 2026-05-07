---
logical: "powerfxrule"
display: "PowerfxRule"
entitySetName: "powerfxrules"
primaryId: "powerfxruleid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# PowerfxRule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerfxrule` |
| Display name | PowerfxRule |
| Display (plural) | PowerfxRules |
| Schema name | `powerfxrule` |
| Entity set (Web API) | `powerfxrules` |
| Primary id attribute | `powerfxruleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerfxrules?$select=name&$top=10
GET /api/data/v9.2/powerfxrules(<guid>)
POST /api/data/v9.2/powerfxrules
PATCH /api/data/v9.2/powerfxrules(<guid>)
DELETE /api/data/v9.2/powerfxrules(<guid>)
```

## Attributes

Writable: **19** · Read-only: **18**

### Writable

`Category`, `CompiledExpression`, `Dependencies`, `EntityLogicalName`, `Expression`, `ImportSequenceNumber`, `IsCustomizable`, `MessageName`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Parameters`, `powerfxruleId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerfxrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_powerfxrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerfxrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerfxrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerfxrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerfxrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_powerfxrule` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerfxrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerfxrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerfxrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerfxrule_customapi` | _n/a_ | `powerfxruleid` | _n/a_ |
| `powerfxrule_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `powerfxrule_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `powerfxrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerfxrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerfxrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerfxrule_sdkmessageprocessingstep` | _n/a_ | `powerfxruleid` | _n/a_ |
| `powerfxrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerfxrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerfxrule.md) on 2026-05-06.