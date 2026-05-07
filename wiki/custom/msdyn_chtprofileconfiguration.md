---
logical: "msdyn_chtprofileconfiguration"
display: "Configurazione profilo app CHT"
entitySetName: "msdyn_chtprofileconfigurations"
primaryId: "msdyn_chtprofileconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione profilo app CHT

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_chtprofileconfiguration` |
| Display name | Configurazione profilo app CHT |
| Display (plural) | Configurazione profilo app CHT |
| Schema name | `msdyn_chtprofileconfiguration` |
| Entity set (Web API) | `msdyn_chtprofileconfigurations` |
| Primary id attribute | `msdyn_chtprofileconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_chtprofileconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_chtprofileconfigurations(<guid>)
POST /api/data/v9.2/msdyn_chtprofileconfigurations
PATCH /api/data/v9.2/msdyn_chtprofileconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_chtprofileconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_appconfigurationid`, `msdyn_chtfeature`, `msdyn_chtprofileconfigurationid`, `msdyn_enabled`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_chtprofileconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_chtprofileconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_chtprofileconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_chtprofileconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_chtprofileconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_chtappcopilotconfig_msdyn_appconfig` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appconfigurationid` | `msdyn_appconfigurationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_chtprofileconfiguration_SyncErrors` | [msdyn_chtprofileconfiguration](msdyn_chtprofileconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_chtprofileconfiguration` |
| `msdyn_chtprofileconfiguration_DuplicateMatchingRecord` | [msdyn_chtprofileconfiguration](msdyn_chtprofileconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_chtprofileconfiguration` |
| `msdyn_chtprofileconfiguration_DuplicateBaseRecord` | [msdyn_chtprofileconfiguration](msdyn_chtprofileconfiguration.md) | `baserecordid` | `baserecordid_msdyn_chtprofileconfiguration` |
| `msdyn_chtprofileconfiguration_AsyncOperations` | [msdyn_chtprofileconfiguration](msdyn_chtprofileconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_chtprofileconfiguration` |
| `msdyn_chtprofileconfiguration_MailboxTrackingFolders` | [msdyn_chtprofileconfiguration](msdyn_chtprofileconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_chtprofileconfiguration` |
| `msdyn_chtprofileconfiguration_UserEntityInstanceDatas` | [msdyn_chtprofileconfiguration](msdyn_chtprofileconfiguration.md) | `objectid` | `objectid_msdyn_chtprofileconfiguration` |
| `msdyn_chtprofileconfiguration_ProcessSession` | [msdyn_chtprofileconfiguration](msdyn_chtprofileconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_chtprofileconfiguration` |
| `msdyn_chtprofileconfiguration_BulkDeleteFailures` | [msdyn_chtprofileconfiguration](msdyn_chtprofileconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_chtprofileconfiguration` |
| `msdyn_chtprofileconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_chtprofileconfiguration](msdyn_chtprofileconfiguration.md) | `objectid` | `objectid_msdyn_chtprofileconfiguration` |


## Source

Generated from [msdyn_chtprofileconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_chtprofileconfiguration')) on 2026-05-07.