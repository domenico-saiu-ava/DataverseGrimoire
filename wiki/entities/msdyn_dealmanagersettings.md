---
logical: "msdyn_dealmanagersettings"
display: "Deal manager settings"
entitySetName: "msdyn_dealmanagersettings"
primaryId: "msdyn_dealmanagersettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Deal manager settings

Deal manager settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dealmanagersettings` |
| Display name | Deal manager settings |
| Display (plural) | dealmanagersettings |
| Schema name | `msdyn_dealmanagersettings` |
| Entity set (Web API) | `msdyn_dealmanagersettings` |
| Primary id attribute | `msdyn_dealmanagersettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dealmanagersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dealmanagersettings(<guid>)
POST /api/data/v9.2/msdyn_dealmanagersettings
PATCH /api/data/v9.2/msdyn_dealmanagersettings(<guid>)
DELETE /api/data/v9.2/msdyn_dealmanagersettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_data`, `msdyn_dealmanagersettingsId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dealmanagersettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dealmanagersettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dealmanagersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dealmanagersettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dealmanagersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_dealmanagersettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dealmanagersettings` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dealmanagersettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dealmanagersettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dealmanagersettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dealmanagersettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dealmanagersettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dealmanagersettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dealmanagersettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dealmanagersettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dealmanagersettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dealmanagersettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dealmanagersettings.md) on 2026-05-06.