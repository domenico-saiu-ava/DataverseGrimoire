---
logical: "msdyn_language"
display: "Language Hierarchy"
entitySetName: "msdyn_languages"
primaryId: "msdyn_languageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Language Hierarchy

This entity is used to identify the language preference of end customers. Users and user groups are decorated with language, and matched with conversations to route them. Users and user groups decoration also supports hierarchy

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_language` |
| Display name | Language Hierarchy |
| Display (plural) | Language Hierarchies |
| Schema name | `msdyn_language` |
| Entity set (Web API) | `msdyn_languages` |
| Primary id attribute | `msdyn_languageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_languages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_languages(<guid>)
POST /api/data/v9.2/msdyn_languages
PATCH /api/data/v9.2/msdyn_languages(<guid>)
DELETE /api/data/v9.2/msdyn_languages(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_languageId`, `msdyn_languageName`, `msdyn_localecode`, `msdyn_localeid`, `msdyn_name`, `msdyn_parentlanguageid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_language` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_language_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_language_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_language_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_language_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_language_msdyn_language_parentlanguageid` | [msdyn_language](msdyn_language.md) | `msdyn_parentlanguageid` | `msdyn_parentlanguageid` |
| `owner_msdyn_language` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_language` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_language` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_language_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_language_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_language_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_language_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_language_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_language_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_language_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_language_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_language_msdyn_agentgrouplanguage_languageid` | _n/a_ | `msdyn_languageid` | _n/a_ |
| `msdyn_msdyn_language_msdyn_agentlanguage_languageid` | _n/a_ | `msdyn_languageid` | _n/a_ |
| `msdyn_msdyn_language_msdyn_language_parentlanguageid` | _n/a_ | `msdyn_parentlanguageid` | _n/a_ |
| `msdyn_msdyn_language_msdyn_ocliveworkitem_msdyn_languageid` | _n/a_ | `msdyn_languageid` | _n/a_ |


## Source

Generated from [msdyn_language.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_language.md) on 2026-05-06.