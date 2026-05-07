---
logical: "fxexpression"
display: "FxExpression"
entitySetName: "fxexpressions"
primaryId: "fxexpressionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **19** · Read-only: **16**

### Writable

`category`, `compiledexpression`, `context`, `dependencies`, `entitylogicalname`, `expression`, `fxexpressionid`, `importsequencenumber`, `iscustomizable`, `messagename`, `name`, `overriddencreatedon`, `ownerid`, `parameters`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_fxexpression_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_fxexpression_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_fxexpression_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_fxexpression_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_fxexpression` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_fxexpression` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_fxexpression` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_fxexpression` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `fxexpression_SyncErrors` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `fxexpression_DuplicateMatchingRecord` | [fxexpression](fxexpression.md) | `duplicaterecordid` | `duplicaterecordid_fxexpression` |
| `fxexpression_DuplicateBaseRecord` | [fxexpression](fxexpression.md) | `baserecordid` | `baserecordid_fxexpression` |
| `fxexpression_AsyncOperations` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `fxexpression_MailboxTrackingFolders` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `fxexpression_UserEntityInstanceDatas` | [fxexpression](fxexpression.md) | `objectid` | `objectid_fxexpression` |
| `fxexpression_ProcessSession` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `fxexpression_BulkDeleteFailures` | [fxexpression](fxexpression.md) | `regardingobjectid` | `regardingobjectid_fxexpression` |
| `fxexpression_PrincipalObjectAttributeAccesses` | [fxexpression](fxexpression.md) | `objectid` | `objectid_fxexpression` |
| `fxexpression_sdkmessageprocessingstep` | [fxexpression](fxexpression.md) | `fxexpressionid` | `fxexpression` |
| `fxexpression_customapi` | [fxexpression](fxexpression.md) | `fxexpressionid` | `fxexpression` |


## Source

Generated from [fxexpression (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='fxexpression')) on 2026-05-07.