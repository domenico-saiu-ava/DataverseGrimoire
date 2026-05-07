---
logical: "msdyn_upgradeversion"
display: "Versione aggiornamento"
entitySetName: "msdyn_upgradeversions"
primaryId: "msdyn_upgradeversionid"
primaryName: "msdyn_summary"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Versione aggiornamento

Informazioni sull'aggiornamento da una versione alla versione successiva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_upgradeversion` |
| Display name | Versione aggiornamento |
| Display (plural) | Versioni aggiornamento |
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

`createdon`, `importsequencenumber`, `msdyn_finished`, `msdyn_startingversion`, `msdyn_status`, `msdyn_summary`, `msdyn_targetversion`, `msdyn_upgraderun`, `msdyn_upgradeversionid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_upgradeversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_upgradeversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_upgradeversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_upgradeversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_upgradeversion` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun` | [msdyn_upgraderun](msdyn_upgraderun.md) | `msdyn_upgraderun` | `msdyn_UpgradeRun` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_upgradeversion_SyncErrors` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradeversion` |
| `msdyn_upgradeversion_AsyncOperations` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradeversion` |
| `msdyn_upgradeversion_MailboxTrackingFolders` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradeversion` |
| `msdyn_upgradeversion_UserEntityInstanceDatas` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `objectid` | `objectid_msdyn_upgradeversion` |
| `msdyn_upgradeversion_ProcessSession` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradeversion` |
| `msdyn_upgradeversion_BulkDeleteFailures` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradeversion` |
| `msdyn_upgradeversion_PrincipalObjectAttributeAccesses` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `objectid` | `objectid_msdyn_upgradeversion` |
| `msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `msdyn_upgradeversion` | `msdyn_UpgradeVersion` |


## Source

Generated from [msdyn_upgradeversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_upgradeversion')) on 2026-05-07.