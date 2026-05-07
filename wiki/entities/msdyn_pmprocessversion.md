---
logical: "msdyn_pmprocessversion"
display: "PM Process Version"
entitySetName: "msdyn_pmprocessversions"
primaryId: "msdyn_pmprocessversionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Process Version

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmprocessversion` |
| Display name | PM Process Version |
| Display (plural) | PM Process Versions |
| Schema name | `msdyn_pmprocessversion` |
| Entity set (Web API) | `msdyn_pmprocessversions` |
| Primary id attribute | `msdyn_pmprocessversionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmprocessversions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmprocessversions(<guid>)
POST /api/data/v9.2/msdyn_pmprocessversions
PATCH /api/data/v9.2/msdyn_pmprocessversions(<guid>)
DELETE /api/data/v9.2/msdyn_pmprocessversions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_configuration`, `msdyn_inputbookmark`, `msdyn_name`, `msdyn_pminferredtaskid`, `msdyn_pmprocessversionId`, `msdyn_version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmprocessversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmprocessversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmprocessversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmprocessversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmprocessversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_pminferredtask_msdyn_pmprocessversion` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_pminferredtaskid` |
| `owner_msdyn_pmprocessversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmprocessversion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmprocessversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmprocessversion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessversion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessversion_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmprocessversion_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmprocessversion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessversion_msdyn_pmprocessext` | _n/a_ | `msdyn_pmprocessversionid` | _n/a_ |
| `msdyn_pmprocessversion_msdyn_pmview` | _n/a_ | `msdyn_pmprocessversionid` | _n/a_ |
| `msdyn_pmprocessversion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmprocessversion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessversion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmprocessversion.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmprocessversion.md) on 2026-05-06.