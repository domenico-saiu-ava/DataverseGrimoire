---
logical: "msdyn_sciusersettings"
display: "UserSettings"
entitySetName: "msdyn_sciusersettings"
primaryId: "msdyn_sciusersettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# UserSettings

SCI user level settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sciusersettings` |
| Display name | UserSettings |
| Display (plural) | UserSettings |
| Schema name | `msdyn_sciusersettings` |
| Entity set (Web API) | `msdyn_sciusersettings` |
| Primary id attribute | `msdyn_sciusersettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sciusersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sciusersettings(<guid>)
POST /api/data/v9.2/msdyn_sciusersettings
PATCH /api/data/v9.2/msdyn_sciusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_sciusersettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Name`, `msdyn_sciusersettingsId`, `msdyn_TrackedCompetitors`, `msdyn_TrackedKeywords`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sciusersettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sciusersettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sciusersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sciusersettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sciusersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_sciusersettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sciusersettings` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sciusersettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sciusersettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sciusersettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sciusersettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sciusersettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sciusersettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sciusersettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sciusersettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sciusersettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sciusersettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sciusersettings.md) on 2026-05-06.