---
logical: "msdyn_upgraderun"
display: "Esecuzione aggiornamento"
entitySetName: "msdyn_upgraderuns"
primaryId: "msdyn_upgraderunid"
primaryName: "msdyn_summary"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Esecuzione aggiornamento

Contiene informazioni di registrazione sull'esecuzione di un pacchetto Package Deployer che aggiorna una soluzione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_upgraderun` |
| Display name | Esecuzione aggiornamento |
| Display (plural) | Esecuzioni aggiornamento |
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

`createdon`, `importsequencenumber`, `msdyn_error`, `msdyn_finished`, `msdyn_package`, `msdyn_solution`, `msdyn_startingversion`, `msdyn_status`, `msdyn_summary`, `msdyn_targetversion`, `msdyn_upgraderunid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_upgraderun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_upgraderun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_upgraderun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_upgraderun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_upgraderun` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_upgraderun_SyncErrors` | [msdyn_upgraderun](msdyn_upgraderun.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgraderun` |
| `msdyn_upgraderun_AsyncOperations` | [msdyn_upgraderun](msdyn_upgraderun.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgraderun` |
| `msdyn_upgraderun_MailboxTrackingFolders` | [msdyn_upgraderun](msdyn_upgraderun.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgraderun` |
| `msdyn_upgraderun_UserEntityInstanceDatas` | [msdyn_upgraderun](msdyn_upgraderun.md) | `objectid` | `objectid_msdyn_upgraderun` |
| `msdyn_upgraderun_ProcessSession` | [msdyn_upgraderun](msdyn_upgraderun.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgraderun` |
| `msdyn_upgraderun_BulkDeleteFailures` | [msdyn_upgraderun](msdyn_upgraderun.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgraderun` |
| `msdyn_upgraderun_PrincipalObjectAttributeAccesses` | [msdyn_upgraderun](msdyn_upgraderun.md) | `objectid` | `objectid_msdyn_upgraderun` |
| `msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun` | [msdyn_upgraderun](msdyn_upgraderun.md) | `msdyn_upgraderun` | `msdyn_UpgradeRun` |


## Source

Generated from [msdyn_upgraderun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_upgraderun')) on 2026-05-07.