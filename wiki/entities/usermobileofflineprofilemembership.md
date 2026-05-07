---
logical: "usermobileofflineprofilemembership"
display: "UserMobileOfflineProfileMembership"
entitySetName: "usermobileofflineprofilememberships"
primaryId: "usermobileofflineprofilemembershipid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# UserMobileOfflineProfileMembership

## Identity

| Property | Value |
| --- | --- |
| Logical name | `usermobileofflineprofilemembership` |
| Display name | UserMobileOfflineProfileMembership |
| Display (plural) | UserMobileOfflineProfileMemberships |
| Schema name | `usermobileofflineprofilemembership` |
| Entity set (Web API) | `usermobileofflineprofilememberships` |
| Primary id attribute | `usermobileofflineprofilemembershipid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/usermobileofflineprofilememberships?$select=name&$top=10
GET /api/data/v9.2/usermobileofflineprofilememberships(<guid>)
POST /api/data/v9.2/usermobileofflineprofilememberships
PATCH /api/data/v9.2/usermobileofflineprofilememberships(<guid>)
DELETE /api/data/v9.2/usermobileofflineprofilememberships(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`HasMobileOfflineProfileIdConflict`, `ImportSequenceNumber`, `MobileOfflineProfileId`, `name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `SystemUserId`, `TimeZoneRuleVersionNumber`, `usermobileofflineprofilemembershipId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_usermobileofflineprofilemembership_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_usermobileofflineprofilemembership_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_usermobileofflineprofilemembership_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_usermobileofflineprofilemembership_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId` | [mobileofflineprofile](mobileofflineprofile.md) | `mobileofflineprofileid` | `MobileOfflineProfileId` |
| `organization_usermobileofflineprofilemembership` | [organization](organization.md) | `organizationid` | `organizationid` |
| `systemuser_usermobileofflineprofilemembership_SystemUserId` | [systemuser](systemuser.md) | `systemuserid` | `SystemUserId` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `usermobileofflineprofilemembership_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `usermobileofflineprofilemembership_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `usermobileofflineprofilemembership_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `usermobileofflineprofilemembership_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `usermobileofflineprofilemembership_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `usermobileofflineprofilemembership_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [usermobileofflineprofilemembership.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/usermobileofflineprofilemembership.md) on 2026-05-06.