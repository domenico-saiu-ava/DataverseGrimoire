---
logical: "msdyn_ocpaymentprofile"
display: "OC Payment Profile"
entitySetName: "msdyn_ocpaymentprofiles"
primaryId: "msdyn_ocpaymentprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# OC Payment Profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocpaymentprofile` |
| Display name | OC Payment Profile |
| Display (plural) | OC Payment Profiles |
| Schema name | `msdyn_ocpaymentprofile` |
| Entity set (Web API) | `msdyn_ocpaymentprofiles` |
| Primary id attribute | `msdyn_ocpaymentprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocpaymentprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocpaymentprofiles(<guid>)
POST /api/data/v9.2/msdyn_ocpaymentprofiles
PATCH /api/data/v9.2/msdyn_ocpaymentprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_ocpaymentprofiles(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_occhanneltype`, `msdyn_ocpaymentprofileId`, `msdyn_ocpaymentprofilename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocpaymentprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocpaymentprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocpaymentprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocpaymentprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocpaymentprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_ocpaymentprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocpaymentprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocpaymentprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_ocpaymentprofile_msdyn_ocrichobjectmap_ocpaymentprofileid` | _n/a_ | `msdyn_ocpaymentprofileid` | _n/a_ |
| `msdyn_ocpaymentprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocpaymentprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocpaymentprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocpaymentprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocpaymentprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocpaymentprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocpaymentprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocpaymentprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocpaymentprofile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocpaymentprofile.md) on 2026-05-06.