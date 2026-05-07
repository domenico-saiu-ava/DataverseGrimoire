---
logical: "powerpagesitelanguage"
display: "Site Language"
entitySetName: "powerpagesitelanguages"
primaryId: "powerpagesitelanguageid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Site Language

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesitelanguage` |
| Display name | Site Language |
| Display (plural) | Site Languages |
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

Writable: **16** · Read-only: **18**

### Writable

`content`, `displayname`, `ImportSequenceNumber`, `IsCustomizable`, `languagecode`, `lcid`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `powerpagesiteid`, `powerpagesitelanguageId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpagesitelanguage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_powerpagesitelanguage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesitelanguage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesitelanguage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesitelanguage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpagesitelanguage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `powerpagesite_powerpagesitelanguage_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `powerpagesiteid` |
| `team_powerpagesitelanguage` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpagesitelanguage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesitelanguage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesitelanguage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesitelanguage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesitelanguage_powerpagecomponent_powerpagesitelanguageid` | _n/a_ | `powerpagesitelanguageid` | _n/a_ |
| `powerpagesitelanguage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerpagesitelanguage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesitelanguage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerpagesitelanguage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagesitelanguage.md) on 2026-05-06.