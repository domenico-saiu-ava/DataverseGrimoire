---
logical: "msdyn_dataanalyticsworkspace"
display: "Data Analytics Workspace"
entitySetName: "msdyn_dataanalyticsworkspaces"
primaryId: "msdyn_dataanalyticsworkspaceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Analytics Workspace

Data Analytics Power BI Workspaces

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataanalyticsworkspace` |
| Display name | Data Analytics Workspace |
| Display (plural) | Data Analytics Workspaces |
| Schema name | `msdyn_dataanalyticsworkspace` |
| Entity set (Web API) | `msdyn_dataanalyticsworkspaces` |
| Primary id attribute | `msdyn_dataanalyticsworkspaceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataanalyticsworkspaces?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataanalyticsworkspaces(<guid>)
POST /api/data/v9.2/msdyn_dataanalyticsworkspaces
PATCH /api/data/v9.2/msdyn_dataanalyticsworkspaces(<guid>)
DELETE /api/data/v9.2/msdyn_dataanalyticsworkspaces(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_configuredby`, `msdyn_dataanalyticsworkspaceId`, `msdyn_datainsightsandanalyticsfeatureid`, `msdyn_name`, `msdyn_workspaceid`, `msdyn_workspacetype`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dataanalyticsworkspace` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dataanalyticsworkspace_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataanalyticsworkspace_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataanalyticsworkspace_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataanalyticsworkspace_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_dataanalyticsworkspace_datainsightsandanalyticsfeatureid` | [msdyn_datainsightsandanalyticsfeature](msdyn_datainsightsandanalyticsfeature.md) | `msdyn_datainsightsandanalyticsfeatureid` | `msdyn_datainsightsandanalyticsfeatureid` |
| `msdyn_systemuser_msdyn_dataanalyticsworkspace_configuredby` | [systemuser](systemuser.md) | `msdyn_configuredby` | `msdyn_configuredby` |
| `owner_msdyn_dataanalyticsworkspace` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dataanalyticsworkspace` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dataanalyticsworkspace` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataanalyticsworkspace_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsworkspace_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsworkspace_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dataanalyticsworkspace_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dataanalyticsworkspace_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsworkspace_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataanalyticsworkspace_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataanalyticsworkspace_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_dataanalyticsworkspace_msdyn_dataanalyticsdataset_dataanalyticsworkspaceid` | _n/a_ | `msdyn_dataanalyticsworkspaceid` | _n/a_ |


## Source

Generated from [msdyn_dataanalyticsworkspace.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_dataanalyticsworkspace.md) on 2026-05-06.