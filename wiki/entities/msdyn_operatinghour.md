---
logical: "msdyn_operatinghour"
display: "Operating Hour"
entitySetName: "msdyn_operatinghours"
primaryId: "msdyn_operatinghourid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Operating Hour

Stores all the operating hours that are configured for an organization.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_operatinghour` |
| Display name | Operating Hour |
| Display (plural) | Operating Hours |
| Schema name | `msdyn_operatinghour` |
| Entity set (Web API) | `msdyn_operatinghours` |
| Primary id attribute | `msdyn_operatinghourid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_operatinghours?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_operatinghours(<guid>)
POST /api/data/v9.2/msdyn_operatinghours
PATCH /api/data/v9.2/msdyn_operatinghours(<guid>)
DELETE /api/data/v9.2/msdyn_operatinghours(<guid>)
```

## Attributes

Writable: **19** · Read-only: **19**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_calendarid`, `msdyn_Description`, `msdyn_EnableAllDays`, `msdyn_Endtimestring`, `msdyn_name`, `msdyn_oc_daysofweek`, `msdyn_operatinghourId`, `msdyn_starttimestring`, `msdyn_Timezone`, `msdyn_Totalworkhours`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_operatinghour` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_operatinghour_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_operatinghour_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_operatinghour_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_operatinghour_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_operatinghour` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_operatinghour` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_operatinghour` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_operatinghour_queue` | _n/a_ | `msdyn_operatinghourid` | _n/a_ |
| `msdyn_operatinghour_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_operatinghour_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_operatinghour_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_operatinghour_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_operatinghour_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_operatinghour_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_operatinghour.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_operatinghour.md) on 2026-05-06.