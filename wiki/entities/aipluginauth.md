---
logical: "aipluginauth"
display: "AIPluginAuth"
entitySetName: "aipluginauths"
primaryId: "aipluginauthid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# AIPluginAuth

Entity to store AIPlugin Auth Information

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginauth` |
| Display name | AIPluginAuth |
| Display (plural) | AIPluginAuths |
| Schema name | `AIPluginAuth` |
| Entity set (Web API) | `aipluginauths` |
| Primary id attribute | `aipluginauthid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginauths?$select=name&$top=10
GET /api/data/v9.2/aipluginauths(<guid>)
POST /api/data/v9.2/aipluginauths
PATCH /api/data/v9.2/aipluginauths(<guid>)
DELETE /api/data/v9.2/aipluginauths(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`AIPluginAuthId`, `AuthReferenceId`, `AuthType`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_aipluginauth` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aipluginauth_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginauth_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginauth_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginauth_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aipluginauth` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aipluginauth` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aipluginauth` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginAuth_AIPlugin` | _n/a_ | `pluginauthid` | _n/a_ |
| `aipluginauth_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginauth_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginauth_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `aipluginauth_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `aipluginauth_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginauth_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aipluginauth_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginauth_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aipluginauth.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aipluginauth.md) on 2026-05-06.