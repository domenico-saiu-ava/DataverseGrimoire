---
logical: "msdyn_panetoolconfiguration"
display: "Configurazione strumento Riquadro"
entitySetName: "msdyn_panetoolconfigurations"
primaryId: "msdyn_panetoolconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione strumento Riquadro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_panetoolconfiguration` |
| Display name | Configurazione strumento Riquadro |
| Display (plural) | Configurazioni strumento Riquadro |
| Schema name | `msdyn_panetoolconfiguration` |
| Entity set (Web API) | `msdyn_panetoolconfigurations` |
| Primary id attribute | `msdyn_panetoolconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_panetoolconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_panetoolconfigurations(<guid>)
POST /api/data/v9.2/msdyn_panetoolconfigurations
PATCH /api/data/v9.2/msdyn_panetoolconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_panetoolconfigurations(<guid>)
```

## Attributes

Writable: **21** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_category`, `msdyn_controlname`, `msdyn_data`, `msdyn_defaulticon`, `msdyn_description`, `msdyn_icon`, `msdyn_isconfigurable`, `msdyn_isglobal`, `msdyn_learnmorelink`, `msdyn_name`, `msdyn_panetoolconfigurationid`, `msdyn_toolconfigurationentity`, `msdyn_type`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_panetoolconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_panetoolconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_panetoolconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_panetoolconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_panetoolconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_webresource_msdyn_toolconfig_icon` | [webresource](webresource.md) | `msdyn_icon` | `msdyn_icon` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_panetoolconfiguration_SyncErrors` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetoolconfiguration` |
| `msdyn_panetoolconfiguration_DuplicateMatchingRecord` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_panetoolconfiguration` |
| `msdyn_panetoolconfiguration_DuplicateBaseRecord` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `baserecordid` | `baserecordid_msdyn_panetoolconfiguration` |
| `msdyn_panetoolconfiguration_AsyncOperations` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetoolconfiguration` |
| `msdyn_panetoolconfiguration_MailboxTrackingFolders` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetoolconfiguration` |
| `msdyn_panetoolconfiguration_UserEntityInstanceDatas` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `objectid` | `objectid_msdyn_panetoolconfiguration` |
| `msdyn_panetoolconfiguration_ProcessSession` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetoolconfiguration` |
| `msdyn_panetoolconfiguration_BulkDeleteFailures` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_panetoolconfiguration` |
| `msdyn_panetoolconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `objectid` | `objectid_msdyn_panetoolconfiguration` |
| `msdyn_msdyn_toolconfig_msdyn_tabconfig` | [msdyn_panetoolconfiguration](msdyn_panetoolconfiguration.md) | `msdyn_toolid` | `msdyn_ToolId` |


## Source

Generated from [msdyn_panetoolconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_panetoolconfiguration')) on 2026-05-07.