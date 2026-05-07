---
logical: "msdyn_authsettingsentry"
display: "Auth Settings Entry"
entitySetName: "msdyn_authsettingsentries"
primaryId: "msdyn_authsettingsentryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Auth Settings Entry

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_authsettingsentry` |
| Display name | Auth Settings Entry |
| Display (plural) | Auth Settings Entries |
| Schema name | `msdyn_authsettingsentry` |
| Entity set (Web API) | `msdyn_authsettingsentries` |
| Primary id attribute | `msdyn_authsettingsentryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_authsettingsentries?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_authsettingsentries(<guid>)
POST /api/data/v9.2/msdyn_authsettingsentries
PATCH /api/data/v9.2/msdyn_authsettingsentries(<guid>)
DELETE /api/data/v9.2/msdyn_authsettingsentries(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_authsettingsentid`, `msdyn_authsettingsentryId`, `msdyn_key`, `msdyn_name`, `msdyn_value`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_authsettingsentry` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_authsettingsentry_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_authsettingsentry_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_authsettingsentry_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_authsettingsentry_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_authenticationsettings_msdyn_entr` | [msdyn_authenticationsettings](msdyn_authenticationsettings.md) | `msdyn_authsettingsentid` | `msdyn_authsettingsentid` |
| `owner_msdyn_authsettingsentry` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_authsettingsentry` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_authsettingsentry` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_authsettingsentry_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_authsettingsentry_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_authsettingsentry_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_authsettingsentry_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_authsettingsentry_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_authsettingsentry_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_authsettingsentry_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_authsettingsentry_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_authsettingsentry.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_authsettingsentry.md) on 2026-05-06.