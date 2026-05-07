---
logical: "msdyn_knowledgemanagementsetting"
display: "Knowledge Management Setting"
entitySetName: "msdyn_knowledgemanagementsettings"
primaryId: "msdyn_knowledgemanagementsettingid"
primaryName: "msdyn_entityname"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Management Setting

Setup knowledge management for your organization.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgemanagementsetting` |
| Display name | Knowledge Management Setting |
| Display (plural) | Knowledge Management Settings |
| Schema name | `msdyn_knowledgemanagementsetting` |
| Entity set (Web API) | `msdyn_knowledgemanagementsettings` |
| Primary id attribute | `msdyn_knowledgemanagementsettingid` |
| Primary name attribute | `msdyn_entityname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgemanagementsettings?$select=msdyn_entityname&$top=10
GET /api/data/v9.2/msdyn_knowledgemanagementsettings(<guid>)
POST /api/data/v9.2/msdyn_knowledgemanagementsettings
PATCH /api/data/v9.2/msdyn_knowledgemanagementsettings(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgemanagementsettings(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_actionlist`, `msdyn_autosuggestionfield`, `msdyn_defaultemailrecipient`, `msdyn_entityname`, `msdyn_isautosuggestionsenabled`, `msdyn_knowledgemanagementsettingId`, `msdyn_showcontextualactions`, `msdyn_status`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_knowledgemanagementsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_knowledgemanagementsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgemanagementsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgemanagementsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgemanagementsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_knowledgemanagementsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_knowledgemanagementsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_knowledgemanagementsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgemanagementsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgemanagementsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgemanagementsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_knowledgemanagementsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_knowledgemanagementsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgemanagementsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgemanagementsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgemanagementsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgemanagementsetting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgemanagementsetting.md) on 2026-05-06.