---
logical: "msdyn_upgraderun"
display: "Upgrade Run"
entitySetName: "msdyn_upgraderuns"
primaryId: "msdyn_upgraderunid"
primaryName: "msdyn_summary"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Upgrade Run

Contains logging information about a run of a Package Deployer package that upgrades a solution

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_upgraderun` |
| Display name | Upgrade Run |
| Display (plural) | Upgrade Runs |
| Schema name | `msdyn_upgraderun` |
| Entity set (Web API) | `msdyn_upgraderuns` |
| Primary id attribute | `msdyn_upgraderunid` |
| Primary name attribute | `msdyn_summary` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_upgraderuns?$select=msdyn_summary&$top=10
GET /api/data/v9.2/msdyn_upgraderuns(<guid>)
POST /api/data/v9.2/msdyn_upgraderuns
PATCH /api/data/v9.2/msdyn_upgraderuns(<guid>)
DELETE /api/data/v9.2/msdyn_upgraderuns(<guid>)
```

## Attributes

Writable: **16** · Read-only: **7**

### Writable

`CreatedOn`, `ImportSequenceNumber`, `msdyn_Error`, `msdyn_FinishedDate`, `msdyn_Package`, `msdyn_Solution`, `msdyn_StartingVersion`, `msdyn_Status`, `msdyn_Summary`, `msdyn_TargetVersion`, `msdyn_upgraderunId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_upgraderun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_upgraderun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_upgraderun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_upgraderun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_upgraderun` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun` | _n/a_ | `msdyn_upgraderun` | _n/a_ |
| `msdyn_upgraderun_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgraderun_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgraderun_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgraderun_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_upgraderun_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgraderun_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_upgraderun.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_upgraderun.md) on 2026-05-06.