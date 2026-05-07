---
logical: "msdyn_businessprofile"
display: "msdyn_businessprofile"
entitySetName: "msdyn_businessprofiles"
primaryId: "msdyn_businessprofileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# msdyn_businessprofile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_businessprofile` |
| Display name | msdyn_businessprofile |
| Display (plural) | msdyn_businessprofiles |
| Schema name | `msdyn_businessprofile` |
| Entity set (Web API) | `msdyn_businessprofiles` |
| Primary id attribute | `msdyn_businessprofileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_businessprofiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_businessprofiles(<guid>)
POST /api/data/v9.2/msdyn_businessprofiles
PATCH /api/data/v9.2/msdyn_businessprofiles(<guid>)
DELETE /api/data/v9.2/msdyn_businessprofiles(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_businessprofileId`, `msdyn_companyurl`, `msdyn_industry`, `msdyn_name`, `msdyn_otherindustryname`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_businessprofile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_businessprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_businessprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_businessprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_businessprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_businessprofile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_businessprofile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_businessprofile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_businessprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_businessprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_businessprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_businessprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_businessprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_businessprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_businessprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_businessprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_businessprofile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_businessprofile.md) on 2026-05-06.