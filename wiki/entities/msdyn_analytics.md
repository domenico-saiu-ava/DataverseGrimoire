---
logical: "msdyn_analytics"
display: "Power BI Configuration"
entitySetName: "msdyn_analyticses"
primaryId: "msdyn_analyticsid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "UserOwned"
---

# Power BI Configuration

Stores the Power BI configurations for supervisor experience

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analytics` |
| Display name | Power BI Configuration |
| Display (plural) | Power BI Configurations |
| Schema name | `msdyn_analytics` |
| Entity set (Web API) | `msdyn_analyticses` |
| Primary id attribute | `msdyn_analyticsid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analyticses?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_analyticses(<guid>)
POST /api/data/v9.2/msdyn_analyticses
PATCH /api/data/v9.2/msdyn_analyticses(<guid>)
DELETE /api/data/v9.2/msdyn_analyticses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **13**

### Writable

`ImportSequenceNumber`, `msdyn_analyticsId`, `msdyn_ispaasenabled`, `msdyn_KeyvaultUri`, `msdyn_nativeappid`, `msdyn_ocanalyticspreviewenable`, `msdyn_Title`, `msdyn_WorkspaceId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_analytics` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_analytics_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analytics_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analytics_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analytics_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_analytics` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_analytics` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_analytics` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analytics_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analytics_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analytics_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_analytics_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_analytics_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analytics_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_analytics_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_analytics_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_analytics.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_analytics.md) on 2026-05-06.