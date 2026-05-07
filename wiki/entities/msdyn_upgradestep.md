---
logical: "msdyn_upgradestep"
display: "Upgrade Step"
entitySetName: "msdyn_upgradesteps"
primaryId: "msdyn_upgradestepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Upgrade Step

One step during an upgrade, such as a single method or stored procedure.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_upgradestep` |
| Display name | Upgrade Step |
| Display (plural) | Upgrade Steps |
| Schema name | `msdyn_upgradestep` |
| Entity set (Web API) | `msdyn_upgradesteps` |
| Primary id attribute | `msdyn_upgradestepid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_upgradesteps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_upgradesteps(<guid>)
POST /api/data/v9.2/msdyn_upgradesteps
PATCH /api/data/v9.2/msdyn_upgradesteps(<guid>)
DELETE /api/data/v9.2/msdyn_upgradesteps(<guid>)
```

## Attributes

Writable: **16** · Read-only: **7**

### Writable

`CreatedOn`, `ImportSequenceNumber`, `msdyn_dbversion`, `msdyn_Details`, `msdyn_Errors`, `msdyn_FinishedDate`, `msdyn_Name`, `msdyn_Status`, `msdyn_StepID`, `msdyn_upgradestepId`, `msdyn_UpgradeVersion`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_upgradestep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_upgradestep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_upgradestep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_upgradestep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `msdyn_upgradeversion` | `msdyn_UpgradeVersion` |
| `organization_msdyn_upgradestep` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_upgradestep_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgradestep_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgradestep_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgradestep_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_upgradestep_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_upgradestep_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_upgradestep.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_upgradestep.md) on 2026-05-06.