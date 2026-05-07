---
logical: "msdyn_liveworkstreamcapacityprofile"
display: "Work stream capacity profile"
entitySetName: "msdyn_liveworkstreamcapacityprofiles"
primaryId: "msdyn_liveworkstreamcapacityprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Work stream capacity profile

Work stream capacity profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_liveworkstreamcapacityprofile` |
| Display name | Work stream capacity profile |
| Display (plural) | Work stream capacity profile |
| Schema name | `msdyn_liveworkstreamcapacityprofile` |
| Entity set (Web API) | `msdyn_liveworkstreamcapacityprofiles` |
| Primary id attribute | `msdyn_liveworkstreamcapacityprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles(<guid>)
POST /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles
PATCH /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_liveworkstreamcapacityprofiles(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_capacityProfile_id`, `msdyn_liveworkstreamcapacityprofileId`, `msdyn_name`, `msdyn_workstream_id`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_liveworkstreamcapacityprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_liveworkstreamcapacityprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_liveworkstreamcapacityprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_liveworkstreamcapacityprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_liveworkstreamcapacityprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_capacityprofile_msdyn_liveworkstreamcapacityprofileid` | [msdyn_capacityprofile](msdyn_capacityprofile.md) | `msdyn_capacityprofile_id` | `msdyn_capacityProfile_id` |
| `msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream_id` | `msdyn_workstream_id` |
| `owner_msdyn_liveworkstreamcapacityprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_liveworkstreamcapacityprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_liveworkstreamcapacityprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveworkstreamcapacityprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveworkstreamcapacityprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveworkstreamcapacityprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_liveworkstreamcapacityprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_liveworkstreamcapacityprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveworkstreamcapacityprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_liveworkstreamcapacityprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_liveworkstreamcapacityprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_liveworkstreamcapacityprofile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_liveworkstreamcapacityprofile.md) on 2026-05-06.