---
logical: "msdyn_panetabconfiguration"
display: "Configurazione scheda Riquadro"
entitySetName: "msdyn_panetabconfigurations"
primaryId: "msdyn_panetabconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione scheda Riquadro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_panetabconfiguration` |
| Display name | Configurazione scheda Riquadro |
| Display (plural) | Configurazioni scheda Riquadro |
| Schema name | `msdyn_panetabconfiguration` |
| Entity set (Web API) | `msdyn_panetabconfigurations` |
| Primary id attribute | `msdyn_panetabconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_panetabconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_panetabconfigurations(<guid>)
POST /api/data/v9.2/msdyn_panetabconfigurations
PATCH /api/data/v9.2/msdyn_panetabconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_panetabconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_iconpath`, `msdyn_isenabled`, `msdyn_name`, `msdyn_order`, `msdyn_panetabconfigurationid`, `msdyn_productivitypaneid`, `msdyn_toolid`, `msdyn_tooltip`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_panetabconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_panetabconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_panetabconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_panetabconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_panetabconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_paneconfig_msdyn_tabconfig` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `msdyn_productivitypaneid` | `msdyn_ProductivityPaneId` |
| `msdyn_msdyn_toolconfig_msdyn_tabconfig` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `msdyn_toolid` | `msdyn_ToolId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_panetabconfiguration_SyncErrors` | [msdyn_panetabconfiguration](msdyn_panetabconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetabconfiguration` |
| `msdyn_panetabconfiguration_DuplicateMatchingRecord` | [msdyn_panetabconfiguration](msdyn_panetabconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_panetabconfiguration` |
| `msdyn_panetabconfiguration_DuplicateBaseRecord` | [msdyn_panetabconfiguration](msdyn_panetabconfiguration.md) | `baserecordid` | `baserecordid_msdyn_panetabconfiguration` |
| `msdyn_panetabconfiguration_AsyncOperations` | [msdyn_panetabconfiguration](msdyn_panetabconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetabconfiguration` |
| `msdyn_panetabconfiguration_MailboxTrackingFolders` | [msdyn_panetabconfiguration](msdyn_panetabconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetabconfiguration` |
| `msdyn_panetabconfiguration_UserEntityInstanceDatas` | [msdyn_panetabconfiguration](msdyn_panetabconfiguration.md) | `objectid` | `objectid_msdyn_panetabconfiguration` |
| `msdyn_panetabconfiguration_ProcessSession` | [msdyn_panetabconfiguration](msdyn_panetabconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetabconfiguration` |
| `msdyn_panetabconfiguration_BulkDeleteFailures` | [msdyn_panetabconfiguration](msdyn_panetabconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetabconfiguration` |
| `msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_panetabconfiguration](msdyn_panetabconfiguration.md) | `objectid` | `objectid_msdyn_panetabconfiguration` |


## Source

Generated from [msdyn_panetabconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_panetabconfiguration')) on 2026-05-07.