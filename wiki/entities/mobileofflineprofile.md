---
logical: "mobileofflineprofile"
display: "Mobile Offline Profile"
entitySetName: "mobileofflineprofiles"
primaryId: "mobileofflineprofileid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Mobile Offline Profile

Information to administer and manage the data available to mobile devices in offline mode.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mobileofflineprofile` |
| Display name | Mobile Offline Profile |
| Display (plural) | Mobile Offline Profiles |
| Schema name | `MobileOfflineProfile` |
| Entity set (Web API) | `mobileofflineprofiles` |
| Primary id attribute | `mobileofflineprofileid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mobileofflineprofiles?$select=name&$top=10
GET /api/data/v9.2/mobileofflineprofiles(<guid>)
POST /api/data/v9.2/mobileofflineprofiles
PATCH /api/data/v9.2/mobileofflineprofiles(<guid>)
DELETE /api/data/v9.2/mobileofflineprofiles(<guid>)
```

## Attributes

Writable: **7** · Read-only: **17**

### Writable

`Description`, `IntroducedVersion`, `MobileOfflineProfileId`, `Name`, `ProcessId`, `StageId`, `TraversedPath`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `IsValidated`, `MobileOfflineProfileIdUnique`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `PublishedOn`, `SelectedEntityMetadata`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_MobileOfflineProfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_MobileOfflineProfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_MobileOfflineProfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_MobileOfflineProfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `MobileOfflineProfile_organization` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `DefaultMobileOfflineProfile_Organization` | _n/a_ | `defaultmobileofflineprofileid` | _n/a_ |
| `mobileofflineprofile_mobileofflineprofile` | _n/a_ | `mobileofflineprofileid` | _n/a_ |
| `MobileOfflineProfile_MobileOfflineProfileItem` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mobileofflineprofile_profileextension` | _n/a_ | `mobileofflineprofileid` | _n/a_ |
| `MobileOfflineProfile_SystemUser` | _n/a_ | `mobileofflineprofileid` | _n/a_ |
| `mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId` | _n/a_ | `mobileofflineprofileid` | _n/a_ |
| `mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId` | _n/a_ | `mobileofflineprofileid` | _n/a_ |


## Source

Generated from [mobileofflineprofile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mobileofflineprofile.md) on 2026-05-06.