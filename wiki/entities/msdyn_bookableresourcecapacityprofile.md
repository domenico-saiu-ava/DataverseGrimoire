---
logical: "msdyn_bookableresourcecapacityprofile"
display: "Bookable Resource Capacity Profile"
entitySetName: "msdyn_bookableresourcecapacityprofiles"
primaryId: "msdyn_bookableresourcecapacityprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bookable Resource Capacity Profile

Bookable Resource Capacity Profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bookableresourcecapacityprofile` |
| Display name | Bookable Resource Capacity Profile |
| Display (plural) | Bookable Resource Capacity Profiles |
| Schema name | `msdyn_bookableresourcecapacityprofile` |
| Entity set (Web API) | `msdyn_bookableresourcecapacityprofiles` |
| Primary id attribute | `msdyn_bookableresourcecapacityprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bookableresourcecapacityprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bookableresourcecapacityprofiles(<guid>)
POST /api/data/v9.2/msdyn_bookableresourcecapacityprofiles
PATCH /api/data/v9.2/msdyn_bookableresourcecapacityprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_bookableresourcecapacityprofiles(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_bookableresourcecapacityprofileId`, `msdyn_bookableresourceid`, `msdyn_capacityprofileid`, `msdyn_maxunits`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_bookableresourcecapacityprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_bookableresourcecapacityprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bookableresourcecapacityprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bookableresourcecapacityprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bookableresourcecapacityprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_bookableresource_msdyn_bookableresourcecapacityprofile` | [bookableresource](bookableresource.md) | `msdyn_bookableresourceid` | `msdyn_bookableresourceid` |
| `msdyn_capacityprofile_msdyn_bookableresourcecapacityprofile` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofileid` | `msdyn_capacityprofileid` |
| `owner_msdyn_bookableresourcecapacityprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_bookableresourcecapacityprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_bookableresourcecapacityprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookableresourcecapacityprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bookableresourcecapacityprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bookableresourcecapacityprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_bookableresourcecapacityprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_bookableresourcecapacityprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bookableresourcecapacityprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_bookableresourcecapacityprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bookableresourcecapacityprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_bookableresourcecapacityprofile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_bookableresourcecapacityprofile.md) on 2026-05-06.