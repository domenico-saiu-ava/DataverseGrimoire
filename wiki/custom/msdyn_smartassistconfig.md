---
logical: "msdyn_smartassistconfig"
display: "Configurazione Smart Assist"
entitySetName: "msdyn_smartassistconfigs"
primaryId: "msdyn_smartassistconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione Smart Assist

Archivia le configurazioni Smart Assist

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_smartassistconfig` |
| Display name | Configurazione Smart Assist |
| Display (plural) | Configurazioni Smart Assist |
| Schema name | `msdyn_smartassistconfig` |
| Entity set (Web API) | `msdyn_smartassistconfigs` |
| Primary id attribute | `msdyn_smartassistconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_smartassistconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_smartassistconfigs(<guid>)
POST /api/data/v9.2/msdyn_smartassistconfigs
PATCH /api/data/v9.2/msdyn_smartassistconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_smartassistconfigs(<guid>)
```

## Attributes

Writable: **21** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_iconurl`, `msdyn_isdefault`, `msdyn_maxsuggestioncount`, `msdyn_name`, `msdyn_order`, `msdyn_smartassistconfigid`, `msdyn_sourceentityname`, `msdyn_suggestioncontainertitle`, `msdyn_suggestioncontrolconfiguniquename`, `msdyn_suggestioncontroltype`, `msdyn_suggestionprovider`, `msdyn_suggestiontype`, `msdyn_suggestionwebresourceurl`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_smartassistconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_smartassistconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_smartassistconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_smartassistconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_smartassistconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_smartassistconfig_SyncErrors` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_smartassistconfig` |
| `msdyn_smartassistconfig_DuplicateMatchingRecord` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_smartassistconfig` |
| `msdyn_smartassistconfig_DuplicateBaseRecord` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | `baserecordid` | `baserecordid_msdyn_smartassistconfig` |
| `msdyn_smartassistconfig_AsyncOperations` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_smartassistconfig` |
| `msdyn_smartassistconfig_MailboxTrackingFolders` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_smartassistconfig` |
| `msdyn_smartassistconfig_UserEntityInstanceDatas` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | `objectid` | `objectid_msdyn_smartassistconfig` |
| `msdyn_smartassistconfig_ProcessSession` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_smartassistconfig` |
| `msdyn_smartassistconfig_BulkDeleteFailures` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_smartassistconfig` |
| `msdyn_smartassistconfig_PrincipalObjectAttributeAccesses` | [msdyn_smartassistconfig](msdyn_smartassistconfig.md) | `objectid` | `objectid_msdyn_smartassistconfig` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_smartassistconfig_msdyn_appconfig` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | _n/a_ | `msdyn_smartassistconfig_msdyn_appconfig` |

## Source

Generated from [msdyn_smartassistconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_smartassistconfig')) on 2026-05-07.