---
logical: "msdyn_kalanguagesetting"
display: "Knowledge article language setting"
entitySetName: "msdyn_kalanguagesettings"
primaryId: "msdyn_kalanguagesettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge article language setting

Allows you to select default language for knowledge authoring.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kalanguagesetting` |
| Display name | Knowledge article language setting |
| Display (plural) | Knowledge article language settings |
| Schema name | `msdyn_kalanguagesetting` |
| Entity set (Web API) | `msdyn_kalanguagesettings` |
| Primary id attribute | `msdyn_kalanguagesettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kalanguagesettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kalanguagesettings(<guid>)
POST /api/data/v9.2/msdyn_kalanguagesettings
PATCH /api/data/v9.2/msdyn_kalanguagesettings(<guid>)
DELETE /api/data/v9.2/msdyn_kalanguagesettings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_agentid`, `msdyn_kalanguagesettingId`, `msdyn_languagelocaleid`, `msdyn_name`, `msdyn_useOrgUILanguage`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_kalanguagesetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_kalanguagesetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kalanguagesetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kalanguagesetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kalanguagesetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_kalanguagesetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_kalanguagesetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_kalanguagesetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kalanguagesetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kalanguagesetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kalanguagesetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_kalanguagesetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_kalanguagesetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kalanguagesetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_kalanguagesetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kalanguagesetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_kalanguagesetting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_kalanguagesetting.md) on 2026-05-06.