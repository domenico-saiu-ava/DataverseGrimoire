---
logical: "msdyn_occhannelstateconfiguration"
display: "Configurazione stato del canale"
entitySetName: "msdyn_occhannelstateconfigurations"
primaryId: "msdyn_occhannelstateconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione stato del canale

Configurazione stato del canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelstateconfiguration` |
| Display name | Configurazione stato del canale |
| Display (plural) | Configurazioni dello stato canale |
| Schema name | `msdyn_occhannelstateconfiguration` |
| Entity set (Web API) | `msdyn_occhannelstateconfigurations` |
| Primary id attribute | `msdyn_occhannelstateconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelstateconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelstateconfigurations(<guid>)
POST /api/data/v9.2/msdyn_occhannelstateconfigurations
PATCH /api/data/v9.2/msdyn_occhannelstateconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelstateconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_autocloseliveworkitemafter`, `msdyn_name`, `msdyn_occhannelconfigurationid`, `msdyn_occhannelstateconfigurationid`, `msdyn_ocliveworkitemstate`, `msdyn_showconfirmationonsessionclose`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_occhannelstateconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelstateconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelstateconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelstateconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_occhannelstateconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_occhannelconfiguration_msdyn_occhannelstateconfiguration_occhannelconfigurationid` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `msdyn_occhannelconfigurationid` | `msdyn_occhannelconfigurationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_occhannelstateconfiguration_SyncErrors` | [msdyn_occhannelstateconfiguration](msdyn_occhannelstateconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelstateconfiguration` |
| `msdyn_occhannelstateconfiguration_DuplicateMatchingRecord` | [msdyn_occhannelstateconfiguration](msdyn_occhannelstateconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_occhannelstateconfiguration` |
| `msdyn_occhannelstateconfiguration_DuplicateBaseRecord` | [msdyn_occhannelstateconfiguration](msdyn_occhannelstateconfiguration.md) | `baserecordid` | `baserecordid_msdyn_occhannelstateconfiguration` |
| `msdyn_occhannelstateconfiguration_AsyncOperations` | [msdyn_occhannelstateconfiguration](msdyn_occhannelstateconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelstateconfiguration` |
| `msdyn_occhannelstateconfiguration_MailboxTrackingFolders` | [msdyn_occhannelstateconfiguration](msdyn_occhannelstateconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelstateconfiguration` |
| `msdyn_occhannelstateconfiguration_UserEntityInstanceDatas` | [msdyn_occhannelstateconfiguration](msdyn_occhannelstateconfiguration.md) | `objectid` | `objectid_msdyn_occhannelstateconfiguration` |
| `msdyn_occhannelstateconfiguration_ProcessSession` | [msdyn_occhannelstateconfiguration](msdyn_occhannelstateconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelstateconfiguration` |
| `msdyn_occhannelstateconfiguration_BulkDeleteFailures` | [msdyn_occhannelstateconfiguration](msdyn_occhannelstateconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelstateconfiguration` |
| `msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_occhannelstateconfiguration](msdyn_occhannelstateconfiguration.md) | `objectid` | `objectid_msdyn_occhannelstateconfiguration` |


## Source

Generated from [msdyn_occhannelstateconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_occhannelstateconfiguration')) on 2026-05-07.