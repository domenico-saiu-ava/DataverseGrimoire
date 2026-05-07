---
logical: "powerfxrule"
display: "PowerfxRule"
entitySetName: "powerfxrules"
primaryId: "powerfxruleid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **18** · Read-only: **16**

### Writable

`category`, `compiledexpression`, `dependencies`, `entitylogicalname`, `expression`, `importsequencenumber`, `iscustomizable`, `messagename`, `name`, `overriddencreatedon`, `ownerid`, `parameters`, `powerfxruleid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerfxrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerfxrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerfxrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerfxrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerfxrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerfxrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerfxrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerfxrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerfxrule_SyncErrors` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerfxrule_DuplicateMatchingRecord` | [powerfxrule](powerfxrule.md) | `duplicaterecordid` | `duplicaterecordid_powerfxrule` |
| `powerfxrule_DuplicateBaseRecord` | [powerfxrule](powerfxrule.md) | `baserecordid` | `baserecordid_powerfxrule` |
| `powerfxrule_AsyncOperations` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerfxrule_MailboxTrackingFolders` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerfxrule_UserEntityInstanceDatas` | [powerfxrule](powerfxrule.md) | `objectid` | `objectid_powerfxrule` |
| `powerfxrule_ProcessSession` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerfxrule_BulkDeleteFailures` | [powerfxrule](powerfxrule.md) | `regardingobjectid` | `regardingobjectid_powerfxrule` |
| `powerfxrule_PrincipalObjectAttributeAccesses` | [powerfxrule](powerfxrule.md) | `objectid` | `objectid_powerfxrule` |
| `powerfxrule_sdkmessageprocessingstep` | [powerfxrule](powerfxrule.md) | `powerfxruleid` | `powerfxrule` |
| `powerfxrule_customapi` | [powerfxrule](powerfxrule.md) | `powerfxruleid` | `powerfxrule` |


## Source

Generated from [powerfxrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerfxrule')) on 2026-05-07.