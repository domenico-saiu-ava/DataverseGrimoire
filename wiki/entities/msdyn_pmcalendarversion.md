---
logical: "msdyn_pmcalendarversion"
display: "PM Calendar Version"
entitySetName: "msdyn_pmcalendarversions"
primaryId: "msdyn_pmcalendarversionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Calendar Version

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmcalendarversion` |
| Display name | PM Calendar Version |
| Display (plural) | PM Calendar Versions |
| Schema name | `msdyn_pmcalendarversion` |
| Entity set (Web API) | `msdyn_pmcalendarversions` |
| Primary id attribute | `msdyn_pmcalendarversionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmcalendarversions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmcalendarversions(<guid>)
POST /api/data/v9.2/msdyn_pmcalendarversions
PATCH /api/data/v9.2/msdyn_pmcalendarversions(<guid>)
DELETE /api/data/v9.2/msdyn_pmcalendarversions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_configuration`, `msdyn_name`, `msdyn_pmcalendarid`, `msdyn_pmcalendarversionId`, `msdyn_version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmcalendarversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmcalendarversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmcalendarversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmcalendarversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmcalendarversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_pmcalendar_msdyn_pmcalendarversion` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `msdyn_pmcalendarid` | `msdyn_pmcalendarid` |
| `owner_msdyn_pmcalendarversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmcalendarversion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmcalendarversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmcalendarversion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmcalendarversion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmcalendarversion_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmcalendarversion_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmcalendarversion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmcalendarversion_msdyn_pmview` | _n/a_ | `msdyn_pmcalendarversionid` | _n/a_ |
| `msdyn_pmcalendarversion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmcalendarversion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmcalendarversion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmcalendarversion.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmcalendarversion.md) on 2026-05-06.