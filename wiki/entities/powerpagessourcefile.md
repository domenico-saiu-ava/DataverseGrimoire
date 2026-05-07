---
logical: "powerpagessourcefile"
display: "Site Source File"
entitySetName: "powerpagessourcefiles"
primaryId: "powerpagessourcefileid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Site Source File

Power Pages Site Source File

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagessourcefile` |
| Display name | Site Source File |
| Display (plural) | Site Source Files |
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

Writable: **15** · Read-only: **20**

### Writable

`codetype`, `content`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `powerpagesiteid`, `powerpagessourcefileId`, `searchcontent`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `filecontent`, `filecontent_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpagessourcefile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_powerpagessourcefile_filecontent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `lk_powerpagessourcefile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagessourcefile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagessourcefile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagessourcefile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpagessourcefile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `powerpagesite_powerpagessourcefile_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `powerpagesiteid` |
| `team_powerpagessourcefile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpagessourcefile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagessourcefile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagessourcefile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagessourcefile_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `powerpagessourcefile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagessourcefile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerpagessourcefile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagessourcefile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerpagessourcefile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagessourcefile.md) on 2026-05-06.