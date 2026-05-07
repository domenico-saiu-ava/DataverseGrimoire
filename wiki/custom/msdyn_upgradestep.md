---
logical: "msdyn_upgradestep"
display: "Passaggio di aggiornamento"
entitySetName: "msdyn_upgradesteps"
primaryId: "msdyn_upgradestepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Passaggio di aggiornamento

Un passaggio durante l'aggiornamento, ad esempio un singolo metodo o una stored procedure.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_upgradestep` |
| Display name | Passaggio di aggiornamento |
| Display (plural) | Passaggi di aggiornamento |
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

`createdon`, `importsequencenumber`, `msdyn_dbversion`, `msdyn_details`, `msdyn_errors`, `msdyn_finished`, `msdyn_name`, `msdyn_status`, `msdyn_stepid`, `msdyn_upgradestepid`, `msdyn_upgradeversion`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_upgradestep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_upgradestep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_upgradestep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_upgradestep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_upgradestep` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion` | [msdyn_upgradeversion](msdyn_upgradeversion.md) | `msdyn_upgradeversion` | `msdyn_UpgradeVersion` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_upgradestep_SyncErrors` | [msdyn_upgradestep](msdyn_upgradestep.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradestep` |
| `msdyn_upgradestep_AsyncOperations` | [msdyn_upgradestep](msdyn_upgradestep.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradestep` |
| `msdyn_upgradestep_MailboxTrackingFolders` | [msdyn_upgradestep](msdyn_upgradestep.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradestep` |
| `msdyn_upgradestep_UserEntityInstanceDatas` | [msdyn_upgradestep](msdyn_upgradestep.md) | `objectid` | `objectid_msdyn_upgradestep` |
| `msdyn_upgradestep_ProcessSession` | [msdyn_upgradestep](msdyn_upgradestep.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradestep` |
| `msdyn_upgradestep_BulkDeleteFailures` | [msdyn_upgradestep](msdyn_upgradestep.md) | `regardingobjectid` | `regardingobjectid_msdyn_upgradestep` |
| `msdyn_upgradestep_PrincipalObjectAttributeAccesses` | [msdyn_upgradestep](msdyn_upgradestep.md) | `objectid` | `objectid_msdyn_upgradestep` |


## Source

Generated from [msdyn_upgradestep (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_upgradestep')) on 2026-05-07.