---
logical: "msdyncrm_digitalassetsconfiguration"
display: "Configurazione degli asset digitali"
entitySetName: "msdyncrm_digitalassetsconfigurations"
primaryId: "msdyncrm_digitalassetsconfigurationid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione degli asset digitali

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_digitalassetsconfiguration` |
| Display name | Configurazione degli asset digitali |
| Display (plural) | Configurazioni degli asset digitali |
| Schema name | `msdyncrm_digitalassetsconfiguration` |
| Entity set (Web API) | `msdyncrm_digitalassetsconfigurations` |
| Primary id attribute | `msdyncrm_digitalassetsconfigurationid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_digitalassetsconfigurations?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_digitalassetsconfigurations(<guid>)
POST /api/data/v9.2/msdyncrm_digitalassetsconfigurations
PATCH /api/data/v9.2/msdyncrm_digitalassetsconfigurations(<guid>)
DELETE /api/data/v9.2/msdyncrm_digitalassetsconfigurations(<guid>)
```

## Attributes

Writable: **22** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyncrm_configcacheexpirationdate`, `msdyncrm_configcacheexpirationperiodinms`, `msdyncrm_default`, `msdyncrm_digitalassetsconfigurationid`, `msdyncrm_discoveryendpointurl`, `msdyncrm_httptimeout`, `msdyncrm_iscxpflowenabled`, `msdyncrm_isinstallcomplete`, `msdyncrm_librarystatus`, `msdyncrm_maxretryattempts`, `msdyncrm_migrationstatus`, `msdyncrm_name`, `msdyncrm_organization_config`, `msdyncrm_tokenauthenticationresource`, `msdyncrm_usebasicauth`, `msdyncrm_usedlibrary`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_digitalassetsconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_digitalassetsconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_digitalassetsconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_digitalassetsconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyncrm_digitalassetsconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_digitalassetsconfiguration_SyncErrors` | [msdyncrm_digitalassetsconfiguration](msdyncrm_digitalassetsconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_digitalassetsconfiguration` |
| `msdyncrm_digitalassetsconfiguration_DuplicateMatchingRecord` | [msdyncrm_digitalassetsconfiguration](msdyncrm_digitalassetsconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_digitalassetsconfiguration` |
| `msdyncrm_digitalassetsconfiguration_DuplicateBaseRecord` | [msdyncrm_digitalassetsconfiguration](msdyncrm_digitalassetsconfiguration.md) | `baserecordid` | `baserecordid_msdyncrm_digitalassetsconfiguration` |
| `msdyncrm_digitalassetsconfiguration_AsyncOperations` | [msdyncrm_digitalassetsconfiguration](msdyncrm_digitalassetsconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_digitalassetsconfiguration` |
| `msdyncrm_digitalassetsconfiguration_MailboxTrackingFolders` | [msdyncrm_digitalassetsconfiguration](msdyncrm_digitalassetsconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_digitalassetsconfiguration` |
| `msdyncrm_digitalassetsconfiguration_UserEntityInstanceDatas` | [msdyncrm_digitalassetsconfiguration](msdyncrm_digitalassetsconfiguration.md) | `objectid` | `objectid_msdyncrm_digitalassetsconfiguration` |
| `msdyncrm_digitalassetsconfiguration_ProcessSession` | [msdyncrm_digitalassetsconfiguration](msdyncrm_digitalassetsconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_digitalassetsconfiguration` |
| `msdyncrm_digitalassetsconfiguration_BulkDeleteFailures` | [msdyncrm_digitalassetsconfiguration](msdyncrm_digitalassetsconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_digitalassetsconfiguration` |
| `msdyncrm_digitalassetsconfiguration_PrincipalObjectAttributeAccesses` | [msdyncrm_digitalassetsconfiguration](msdyncrm_digitalassetsconfiguration.md) | `objectid` | `objectid_msdyncrm_digitalassetsconfiguration` |


## Source

Generated from [msdyncrm_digitalassetsconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_digitalassetsconfiguration')) on 2026-05-07.