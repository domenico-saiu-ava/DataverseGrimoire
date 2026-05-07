---
logical: "msdyn_paneconfiguration"
display: "Configurazione riquadro di produttività"
entitySetName: "msdyn_paneconfigurations"
primaryId: "msdyn_paneconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione riquadro di produttività

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_paneconfiguration` |
| Display name | Configurazione riquadro di produttività |
| Display (plural) | Configurazioni riquadro di produttività |
| Schema name | `msdyn_paneconfiguration` |
| Entity set (Web API) | `msdyn_paneconfigurations` |
| Primary id attribute | `msdyn_paneconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_paneconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_paneconfigurations(<guid>)
POST /api/data/v9.2/msdyn_paneconfigurations
PATCH /api/data/v9.2/msdyn_paneconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_paneconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_paneconfigurationid`, `msdyn_panemode`, `msdyn_panestate`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_paneconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_paneconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_paneconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_paneconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_paneconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_paneconfiguration_SyncErrors` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_paneconfiguration` |
| `msdyn_paneconfiguration_DuplicateMatchingRecord` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_paneconfiguration` |
| `msdyn_paneconfiguration_DuplicateBaseRecord` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `baserecordid` | `baserecordid_msdyn_paneconfiguration` |
| `msdyn_paneconfiguration_AsyncOperations` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_paneconfiguration` |
| `msdyn_paneconfiguration_MailboxTrackingFolders` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_paneconfiguration` |
| `msdyn_paneconfiguration_UserEntityInstanceDatas` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `objectid` | `objectid_msdyn_paneconfiguration` |
| `msdyn_paneconfiguration_ProcessSession` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_paneconfiguration` |
| `msdyn_paneconfiguration_BulkDeleteFailures` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_paneconfiguration` |
| `msdyn_paneconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `objectid` | `objectid_msdyn_paneconfiguration` |
| `msdyn_msdyn_paneconfig_msdyn_tabconfig` | [msdyn_paneconfiguration](msdyn_paneconfiguration.md) | `msdyn_productivitypaneid` | `msdyn_ProductivityPaneId` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_paneconfig_msdyn_appconfig` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | _n/a_ | `msdyn_msdyn_paneconfig_msdyn_appconfig` |

## Source

Generated from [msdyn_paneconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_paneconfiguration')) on 2026-05-07.