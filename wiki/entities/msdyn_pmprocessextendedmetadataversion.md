---
logical: "msdyn_pmprocessextendedmetadataversion"
display: "PM Process Extended Metadata Version"
entitySetName: "msdyn_pmprocessextendedmetadataversions"
primaryId: "msdyn_pmprocessextendedmetadataversionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Process Extended Metadata Version

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmprocessextendedmetadataversion` |
| Display name | PM Process Extended Metadata Version |
| Display (plural) | PM Process Extended Metadata Versions |
| Schema name | `msdyn_pmprocessextendedmetadataversion` |
| Entity set (Web API) | `msdyn_pmprocessextendedmetadataversions` |
| Primary id attribute | `msdyn_pmprocessextendedmetadataversionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmprocessextendedmetadataversions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmprocessextendedmetadataversions(<guid>)
POST /api/data/v9.2/msdyn_pmprocessextendedmetadataversions
PATCH /api/data/v9.2/msdyn_pmprocessextendedmetadataversions(<guid>)
DELETE /api/data/v9.2/msdyn_pmprocessextendedmetadataversions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_configuration`, `msdyn_name`, `msdyn_pmprocessextendedmetadataversionId`, `msdyn_pmprocessversionid`, `msdyn_version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmprocessextendedmetadataversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmprocessextendedmetadataversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmprocessextendedmetadataversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmprocessextendedmetadataversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmprocessextendedmetadataversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_pmprocessversion_msdyn_pmprocessext` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `msdyn_pmprocessversionid` | `msdyn_pmprocessversionid` |
| `owner_msdyn_pmprocessextendedmetadataversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmprocessextendedmetadataversion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmprocessextendedmetadataversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmprocessextendedmetadataversion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessextendedmetadataversion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessextendedmetadataversion_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmprocessextendedmetadataversion_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmprocessextendedmetadataversion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessextendedmetadataversion_msdyn_vi` | _n/a_ | `msdyn_pmprocessextendedmetadataversionid` | _n/a_ |
| `msdyn_pmprocessextendedmetadataversion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmprocessextendedmetadataversion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessextendedmetadataversion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmprocessextendedmetadataversion.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmprocessextendedmetadataversion.md) on 2026-05-06.