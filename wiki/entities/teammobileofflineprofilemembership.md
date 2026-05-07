---
logical: "teammobileofflineprofilemembership"
display: "TeamMobileOfflineProfileMembership"
entitySetName: "teammobileofflineprofilememberships"
primaryId: "teammobileofflineprofilemembershipid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# TeamMobileOfflineProfileMembership

## Identity

| Property | Value |
| --- | --- |
| Logical name | `teammobileofflineprofilemembership` |
| Display name | TeamMobileOfflineProfileMembership |
| Display (plural) | TeamMobileOfflineProfileMemberships |
| Schema name | `teammobileofflineprofilemembership` |
| Entity set (Web API) | `teammobileofflineprofilememberships` |
| Primary id attribute | `teammobileofflineprofilemembershipid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/teammobileofflineprofilememberships?$select=name&$top=10
GET /api/data/v9.2/teammobileofflineprofilememberships(<guid>)
POST /api/data/v9.2/teammobileofflineprofilememberships
PATCH /api/data/v9.2/teammobileofflineprofilememberships(<guid>)
DELETE /api/data/v9.2/teammobileofflineprofilememberships(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `MobileOfflineProfileId`, `name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TeamId`, `teammobileofflineprofilemembershipId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_teammobileofflineprofilemembership_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_teammobileofflineprofilemembership_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_teammobileofflineprofilemembership_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_teammobileofflineprofilemembership_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId` | [mobileofflineprofile](mobileofflineprofile.md) | `mobileofflineprofileid` | `MobileOfflineProfileId` |
| `organization_teammobileofflineprofilemembership` | [organization](organization.md) | `organizationid` | `organizationid` |
| `team_teammobileofflineprofilemembership_TeamId` | [team](team.md) | `teamid` | `TeamId` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `teammobileofflineprofilemembership_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `teammobileofflineprofilemembership_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `teammobileofflineprofilemembership_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `teammobileofflineprofilemembership_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `teammobileofflineprofilemembership_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [teammobileofflineprofilemembership.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/teammobileofflineprofilemembership.md) on 2026-05-06.