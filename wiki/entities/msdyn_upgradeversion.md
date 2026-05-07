---
logical: "msdyn_upgradeversion"
display: "Upgrade Version"
entitySetName: "msdyn_upgradeversions"
primaryId: "msdyn_upgradeversionid"
primaryName: "msdyn_summary"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Upgrade Version

Information about upgrading from one release to the next release

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_upgradeversion` |
| Display name | Upgrade Version |
| Display (plural) | Upgrade Versions |
| Schema name | `msdyn_upgradeversion` |
| Entity set (Web API) | `msdyn_upgradeversions` |
| Primary id attribute | `msdyn_upgradeversionid` |
| Primary name attribute | `msdyn_summary` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_upgradeversions?$select=msdyn_summary&$top=10
GET /api/data/v9.2/msdyn_upgradeversions(<guid>)
POST /api/data/v9.2/msdyn_upgradeversions
PATCH /api/data/v9.2/msdyn_upgradeversions(<guid>)
DELETE /api/data/v9.2/msdyn_upgradeversions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **7**

### Writable

`CreatedOn`, `ImportSequenceNumber`, `msdyn_Finished`, `msdyn_StartingVersion`, `msdyn_Status`, `msdyn_summary`, `msdyn_TargetVersion`, `msdyn_UpgradeRun`, `msdyn_upgradeversionId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_upgradeversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_upgradeversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_upgradeversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_upgradeversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun` | [msdyn_upgraderun](msdyn_upgraderun.md) | `msdyn_upgraderun` | `msdyn_UpgradeRun` |
| `organization_msdyn_upgradeversion` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion` | _n/a_ | `msdyn_upgradeversion` | _n/a_ |
| `msdyn_upgradeversion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgradeversion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgradeversion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgradeversion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_upgradeversion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgradeversion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_upgradeversion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_upgradeversion.md) on 2026-05-06.