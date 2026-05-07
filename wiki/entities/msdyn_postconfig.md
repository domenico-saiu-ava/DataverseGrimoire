---
logical: "msdyn_postconfig"
display: "Post Configuration"
entitySetName: "msdyn_postconfigs"
primaryId: "msdyn_postconfigid"
primaryName: "msdyn_entitydisplayname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Post Configuration

Enable or disable entities for Activity Feeds and Yammer collaboration.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_postconfig` |
| Display name | Post Configuration |
| Display (plural) | Post Configurations |
| Schema name | `msdyn_PostConfig` |
| Entity set (Web API) | `msdyn_postconfigs` |
| Primary id attribute | `msdyn_postconfigid` |
| Primary name attribute | `msdyn_entitydisplayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_postconfigs?$select=msdyn_entitydisplayname&$top=10
GET /api/data/v9.2/msdyn_postconfigs(<guid>)
POST /api/data/v9.2/msdyn_postconfigs
PATCH /api/data/v9.2/msdyn_postconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_postconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_ConfigureWall`, `msdyn_EntityDisplayName`, `msdyn_EntityName`, `msdyn_FollowingViewId`, `msdyn_FollowingViewId2`, `msdyn_Otc`, `msdyn_PostConfigId`, `msdyn_Status`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_postconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_postconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_postconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_postconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_postconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_postconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postconfig_msdyn_postruleconfig` | _n/a_ | `msdyn_postconfigid` | _n/a_ |
| `msdyn_postconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_postconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_postconfig_wallsavedquery` | _n/a_ | `msdyn_postconfigurationid` | _n/a_ |


## Source

Generated from [msdyn_postconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_postconfig.md) on 2026-05-06.