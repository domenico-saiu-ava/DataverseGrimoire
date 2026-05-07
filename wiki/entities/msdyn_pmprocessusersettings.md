---
logical: "msdyn_pmprocessusersettings"
display: "PM Process User Settings"
entitySetName: "msdyn_pmprocessusersettings"
primaryId: "msdyn_pmprocessusersettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Process User Settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmprocessusersettings` |
| Display name | PM Process User Settings |
| Display (plural) | PM Process User Settings |
| Schema name | `msdyn_pmprocessusersettings` |
| Entity set (Web API) | `msdyn_pmprocessusersettings` |
| Primary id attribute | `msdyn_pmprocessusersettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmprocessusersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmprocessusersettings(<guid>)
POST /api/data/v9.2/msdyn_pmprocessusersettings
PATCH /api/data/v9.2/msdyn_pmprocessusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_pmprocessusersettings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_parenttask`, `msdyn_pmprocessusersettingsId`, `msdyn_sendanalyticsemails`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmprocessusersettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmprocessusersettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmprocessusersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmprocessusersettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmprocessusersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_pminferredtask_msdyn_pmprocessusersettings_parenttask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_parenttask` | `msdyn_parenttask` |
| `owner_msdyn_pmprocessusersettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmprocessusersettings` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmprocessusersettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmprocessusersettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessusersettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessusersettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmprocessusersettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmprocessusersettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessusersettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmprocessusersettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocessusersettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmprocessusersettings.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmprocessusersettings.md) on 2026-05-06.