---
logical: "mobileofflineprofileextension"
display: "MobileOfflineProfileExtension"
entitySetName: "mobileofflineprofileextensions"
primaryId: "mobileofflineprofileextensionid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# MobileOfflineProfileExtension

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mobileofflineprofileextension` |
| Display name | MobileOfflineProfileExtension |
| Display (plural) | MobileOfflineProfileExtensions |
| Schema name | `mobileofflineprofileextension` |
| Entity set (Web API) | `mobileofflineprofileextensions` |
| Primary id attribute | `mobileofflineprofileextensionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mobileofflineprofileextensions?$select=name&$top=10
GET /api/data/v9.2/mobileofflineprofileextensions(<guid>)
POST /api/data/v9.2/mobileofflineprofileextensions
PATCH /api/data/v9.2/mobileofflineprofileextensions(<guid>)
DELETE /api/data/v9.2/mobileofflineprofileextensions(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`FilterVersion`, `ImportSequenceNumber`, `mobileofflineprofileextensionId`, `mobileofflineprofileid`, `name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mobileofflineprofileextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mobileofflineprofileextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mobileofflineprofileextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mobileofflineprofileextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `mobileofflineprofile_profileextension` | [mobileofflineprofile](mobileofflineprofile.md) | `mobileofflineprofileid` | `mobileofflineprofileid` |
| `organization_mobileofflineprofileextension` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mobileofflineprofileextension_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mobileofflineprofileextension_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mobileofflineprofileextension_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mobileofflineprofileextension_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `mobileofflineprofileextension_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mobileofflineprofileextension_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mobileofflineprofileextension.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mobileofflineprofileextension.md) on 2026-05-06.