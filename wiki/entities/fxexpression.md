---
logical: "fxexpression"
display: "FxExpression"
entitySetName: "fxexpressions"
primaryId: "fxexpressionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# FxExpression

## Identity

| Property | Value |
| --- | --- |
| Logical name | `fxexpression` |
| Display name | FxExpression |
| Display (plural) | FxExpressions |
| Schema name | `fxexpression` |
| Entity set (Web API) | `fxexpressions` |
| Primary id attribute | `fxexpressionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/fxexpressions?$select=name&$top=10
GET /api/data/v9.2/fxexpressions(<guid>)
POST /api/data/v9.2/fxexpressions
PATCH /api/data/v9.2/fxexpressions(<guid>)
DELETE /api/data/v9.2/fxexpressions(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`Category`, `CompiledExpression`, `Context`, `Dependencies`, `EntityLogicalName`, `Expression`, `fxexpressionId`, `ImportSequenceNumber`, `IsCustomizable`, `MessageName`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Parameters`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_fxexpression` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_fxexpression_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_fxexpression_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_fxexpression_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_fxexpression_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_fxexpression` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_fxexpression` | [team](team.md) | `owningteam` | `owningteam` |
| `user_fxexpression` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `fxexpression_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fxexpression_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fxexpression_customapi` | _n/a_ | `fxexpressionid` | _n/a_ |
| `fxexpression_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `fxexpression_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `fxexpression_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fxexpression_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `fxexpression_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fxexpression_sdkmessageprocessingstep` | _n/a_ | `fxexpressionid` | _n/a_ |
| `fxexpression_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [fxexpression.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/fxexpression.md) on 2026-05-06.