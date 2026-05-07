---
logical: "msdyn_wallsavedquery"
display: "Wall View"
entitySetName: "msdyn_wallsavedqueries"
primaryId: "msdyn_wallsavedqueryid"
primaryName: "msdyn_entityname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Wall View

Contains information regarding which views are available for users to display on their personal walls. Only an administrator can specify the views that users can choose from to display on their personal walls.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wallsavedquery` |
| Display name | Wall View |
| Display (plural) | Wall Views |
| Schema name | `msdyn_wallsavedquery` |
| Entity set (Web API) | `msdyn_wallsavedqueries` |
| Primary id attribute | `msdyn_wallsavedqueryid` |
| Primary name attribute | `msdyn_entityname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wallsavedqueries?$select=msdyn_entityname&$top=10
GET /api/data/v9.2/msdyn_wallsavedqueries(<guid>)
POST /api/data/v9.2/msdyn_wallsavedqueries
PATCH /api/data/v9.2/msdyn_wallsavedqueries(<guid>)
DELETE /api/data/v9.2/msdyn_wallsavedqueries(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_entitydisplayname`, `msdyn_entityname`, `msdyn_IsVirtual`, `msdyn_IsVisible`, `msdyn_isvisiblebit`, `msdyn_otc`, `msdyn_postconfigurationid`, `msdyn_SavedQueryId`, `msdyn_savedqueryname`, `msdyn_wallsavedqueryId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wallsavedquery_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wallsavedquery_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wallsavedquery_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wallsavedquery_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_postconfig_wallsavedquery` | [msdyn_postconfig](msdyn_postconfig.md) | `msdyn_postconfigurationid` | `msdyn_postconfigurationid` |
| `organization_msdyn_wallsavedquery` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wallsavedquery_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wallsavedquery_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wallsavedquery_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wallsavedquery_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_wallsavedquery_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wallsavedquery_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wallsavedquery_wallsavedqueryusersettings` | _n/a_ | `msdyn_wallsavedqueryid` | _n/a_ |


## Source

Generated from [msdyn_wallsavedquery.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_wallsavedquery.md) on 2026-05-06.