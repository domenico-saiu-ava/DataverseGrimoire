---
logical: "msdyn_pmview"
display: "PM View"
entitySetName: "msdyn_pmviews"
primaryId: "msdyn_pmviewid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM View

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmview` |
| Display name | PM View |
| Display (plural) | PM Views |
| Schema name | `msdyn_pmview` |
| Entity set (Web API) | `msdyn_pmviews` |
| Primary id attribute | `msdyn_pmviewid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmviews?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmviews(<guid>)
POST /api/data/v9.2/msdyn_pmviews
PATCH /api/data/v9.2/msdyn_pmviews(<guid>)
DELETE /api/data/v9.2/msdyn_pmviews(<guid>)
```

## Attributes

Writable: **19** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_configuration`, `msdyn_isprivate`, `msdyn_name`, `msdyn_outputdata`, `msdyn_parentpmviewid`, `msdyn_pmcalendarversionid`, `msdyn_pmprocessextendedmetadataversionid`, `msdyn_pmprocessversionid`, `msdyn_pmviewId`, `msdyn_type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmview` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmview_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmview_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmview_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmview_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_pmcalendarversion_msdyn_pmview` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `msdyn_pmcalendarversionid` | `msdyn_pmcalendarversionid` |
| `msdyn_pmprocessextendedmetadataversion_msdyn_vi` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `msdyn_pmprocessextendedmetadataversionid` | `msdyn_pmprocessextendedmetadataversionid` |
| `msdyn_pmprocessversion_msdyn_pmview` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `msdyn_pmprocessversionid` | `msdyn_pmprocessversionid` |
| `msdyn_pmview_msdyn_pmview` | [msdyn_pmview](msdyn_pmview.md) | `msdyn_parentpmviewid` | `msdyn_parentpmviewid` |
| `owner_msdyn_pmview` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmview` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmview` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmsimulation_pmviewid_msdyn_pmview` | _n/a_ | `msdyn_pmviewid` | _n/a_ |
| `msdyn_pmtab_pmviewid_msdyn_pmview` | _n/a_ | `msdyn_pmviewid` | _n/a_ |
| `msdyn_pmview_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmview_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmview_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmview_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmview_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmview_msdyn_pmview` | _n/a_ | `msdyn_parentpmviewid` | _n/a_ |
| `msdyn_pmview_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmview_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmview_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmview.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmview.md) on 2026-05-06.