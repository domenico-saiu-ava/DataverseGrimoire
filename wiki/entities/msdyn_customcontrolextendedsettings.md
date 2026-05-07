---
logical: "msdyn_customcontrolextendedsettings"
display: "Custom Control Extended Setting"
entitySetName: "msdyn_customcontrolextendedsettingses"
primaryId: "msdyn_customcontrolextendedsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Custom Control Extended Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customcontrolextendedsettings` |
| Display name | Custom Control Extended Setting |
| Display (plural) | CustomControl Extended Settings |
| Schema name | `msdyn_customcontrolextendedsettings` |
| Entity set (Web API) | `msdyn_customcontrolextendedsettingses` |
| Primary id attribute | `msdyn_customcontrolextendedsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customcontrolextendedsettingses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customcontrolextendedsettingses(<guid>)
POST /api/data/v9.2/msdyn_customcontrolextendedsettingses
PATCH /api/data/v9.2/msdyn_customcontrolextendedsettingses(<guid>)
DELETE /api/data/v9.2/msdyn_customcontrolextendedsettingses(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_copilothub_settings`, `msdyn_customcontrolextendedsettingsId`, `msdyn_name`, `msdyn_rte_userpersonalizationsettings`, `msdyn_timeline_displaylayoutoption`, `msdyn_timelineWall_bookmarks`, `msdyn_timelineWall_isAutoExpanded`, `msdyn_timelineWall_isFilterPaneOpen`, `msdyn_timelineWall_isSortOrderNewerToOlder`, `msdyn_timelineWall_searchTermApplied`, `msdyn_timelineWall_userFilters`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_customcontrolextendedsettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_customcontrolextendedsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customcontrolextendedsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customcontrolextendedsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customcontrolextendedsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_customcontrolextendedsettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_customcontrolextendedsettings` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_customcontrolextendedsettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customcontrolextendedsettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customcontrolextendedsettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customcontrolextendedsettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customcontrolextendedsettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customcontrolextendedsettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customcontrolextendedsettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customcontrolextendedsettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customcontrolextendedsettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customcontrolextendedsettings.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_customcontrolextendedsettings.md) on 2026-05-06.