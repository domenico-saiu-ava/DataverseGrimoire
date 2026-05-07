---
logical: "powerpagesitelanguage"
display: "Lingua sito"
entitySetName: "powerpagesitelanguages"
primaryId: "powerpagesitelanguageid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Lingua sito

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesitelanguage` |
| Display name | Lingua sito |
| Display (plural) | Lingue sito |
| Schema name | `powerpagesitelanguage` |
| Entity set (Web API) | `powerpagesitelanguages` |
| Primary id attribute | `powerpagesitelanguageid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagesitelanguages?$select=name&$top=10
GET /api/data/v9.2/powerpagesitelanguages(<guid>)
POST /api/data/v9.2/powerpagesitelanguages
PATCH /api/data/v9.2/powerpagesitelanguages(<guid>)
DELETE /api/data/v9.2/powerpagesitelanguages(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`content`, `displayname`, `importsequencenumber`, `iscustomizable`, `languagecode`, `lcid`, `name`, `overriddencreatedon`, `ownerid`, `powerpagesiteid`, `powerpagesitelanguageid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerpagesitelanguage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesitelanguage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesitelanguage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesitelanguage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpagesitelanguage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpagesitelanguage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpagesitelanguage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpagesitelanguage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `powerpagesite_powerpagesitelanguage_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `powerpagesiteid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesitelanguage_SyncErrors` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitelanguage_AsyncOperations` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitelanguage_MailboxTrackingFolders` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitelanguage_UserEntityInstanceDatas` | [powerpagesitelanguage](powerpagesitelanguage.md) | `objectid` | `objectid_powerpagesitelanguage` |
| `powerpagesitelanguage_ProcessSession` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitelanguage_BulkDeleteFailures` | [powerpagesitelanguage](powerpagesitelanguage.md) | `regardingobjectid` | `regardingobjectid_powerpagesitelanguage` |
| `powerpagesitelanguage_PrincipalObjectAttributeAccesses` | [powerpagesitelanguage](powerpagesitelanguage.md) | `objectid` | `objectid_powerpagesitelanguage` |
| `powerpagesitelanguage_powerpagecomponent_powerpagesitelanguageid` | [powerpagesitelanguage](powerpagesitelanguage.md) | `powerpagesitelanguageid` | `powerpagesitelanguageid` |


## Source

Generated from [powerpagesitelanguage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagesitelanguage')) on 2026-05-07.