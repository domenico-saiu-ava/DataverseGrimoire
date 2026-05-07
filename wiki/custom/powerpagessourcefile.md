---
logical: "powerpagessourcefile"
display: "File di origine del sito"
entitySetName: "powerpagessourcefiles"
primaryId: "powerpagessourcefileid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# File di origine del sito

File di origine del sito di Power Pages

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagessourcefile` |
| Display name | File di origine del sito |
| Display (plural) | File di origine del sito |
| Schema name | `powerpagessourcefile` |
| Entity set (Web API) | `powerpagessourcefiles` |
| Primary id attribute | `powerpagessourcefileid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagessourcefiles?$select=name&$top=10
GET /api/data/v9.2/powerpagessourcefiles(<guid>)
POST /api/data/v9.2/powerpagessourcefiles
PATCH /api/data/v9.2/powerpagessourcefiles(<guid>)
DELETE /api/data/v9.2/powerpagessourcefiles(<guid>)
```

## Attributes

Writable: **14** · Read-only: **17**

### Writable

`codetype`, `content`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `powerpagesiteid`, `powerpagessourcefileid`, `searchcontent`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `filecontent`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_powerpagessourcefile_filecontent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `lk_powerpagessourcefile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagessourcefile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagessourcefile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagessourcefile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpagessourcefile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpagessourcefile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpagessourcefile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpagessourcefile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `powerpagesite_powerpagessourcefile_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `powerpagesiteid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagessourcefile_FileAttachments` | [powerpagessourcefile](powerpagessourcefile.md) | `objectid` | `objectid_powerpagessourcefile` |
| `powerpagessourcefile_SyncErrors` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `powerpagessourcefile_AsyncOperations` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `powerpagessourcefile_MailboxTrackingFolders` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `powerpagessourcefile_UserEntityInstanceDatas` | [powerpagessourcefile](powerpagessourcefile.md) | `objectid` | `objectid_powerpagessourcefile` |
| `powerpagessourcefile_ProcessSession` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `powerpagessourcefile_BulkDeleteFailures` | [powerpagessourcefile](powerpagessourcefile.md) | `regardingobjectid` | `regardingobjectid_powerpagessourcefile` |
| `powerpagessourcefile_PrincipalObjectAttributeAccesses` | [powerpagessourcefile](powerpagessourcefile.md) | `objectid` | `objectid_powerpagessourcefile` |


## Source

Generated from [powerpagessourcefile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagessourcefile')) on 2026-05-07.