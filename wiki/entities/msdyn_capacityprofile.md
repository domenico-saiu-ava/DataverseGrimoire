---
logical: "msdyn_capacityprofile"
display: "Capacity Profile"
entitySetName: "msdyn_capacityprofiles"
primaryId: "msdyn_capacityprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Capacity Profile

Capacity Profiles

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_capacityprofile` |
| Display name | Capacity Profile |
| Display (plural) | Capacity Profiles |
| Schema name | `msdyn_capacityprofile` |
| Entity set (Web API) | `msdyn_capacityprofiles` |
| Primary id attribute | `msdyn_capacityprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_capacityprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_capacityprofiles(<guid>)
POST /api/data/v9.2/msdyn_capacityprofiles
PATCH /api/data/v9.2/msdyn_capacityprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_capacityprofiles(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_blockassignment`, `msdyn_capacityprofileId`, `msdyn_defaultmaxunits`, `msdyn_name`, `msdyn_resetduration`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_capacityprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_capacityprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_capacityprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_capacityprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_capacityprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_capacityprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_capacityprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_capacityprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_capacityprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_capacityprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_capacityprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_capacityprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_capacityprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_capacityprofile_msdyn_agentcapacityprofileunit_capacityprofileid` | _n/a_ | `msdyn_capacityprofileid` | _n/a_ |
| `msdyn_capacityprofile_msdyn_bookableresourcecapacityprofile` | _n/a_ | `msdyn_capacityprofileid` | _n/a_ |
| `msdyn_capacityprofile_msdyn_liveworkstreamcapacityprofileid` | _n/a_ | `msdyn_capacityprofile_id` | _n/a_ |
| `msdyn_capacityprofile_msdyn_ocliveworkitemcapacityprofile` | _n/a_ | `msdyn_capacityprofileid` | _n/a_ |
| `msdyn_capacityprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_capacityprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_capacityprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_capacityprofile_msdyn_agentcapacityupdatehistory_capacityprofileid` | _n/a_ | `msdyn_capacityprofileid` | _n/a_ |


## Source

Generated from [msdyn_capacityprofile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_capacityprofile.md) on 2026-05-06.