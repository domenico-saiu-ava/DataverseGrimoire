---
logical: "msdyn_worklistviewconfiguration"
display: "Configurazione visualizzazione dell'elenco di lavoro"
entitySetName: "msdyn_worklistviewconfigurations"
primaryId: "msdyn_worklistviewconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione visualizzazione dell'elenco di lavoro

Entità per archiviare le configurazioni della visualizzazione dell'elenco di lavoro per filtro, icone, ordinamento e così via

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_worklistviewconfiguration` |
| Display name | Configurazione visualizzazione dell'elenco di lavoro |
| Display (plural) | Configurazioni visualizzazione dell'elenco di lavoro |
| Schema name | `msdyn_worklistviewconfiguration` |
| Entity set (Web API) | `msdyn_worklistviewconfigurations` |
| Primary id attribute | `msdyn_worklistviewconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_worklistviewconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_worklistviewconfigurations(<guid>)
POST /api/data/v9.2/msdyn_worklistviewconfigurations
PATCH /api/data/v9.2/msdyn_worklistviewconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_worklistviewconfigurations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_adminsortconfiguration`, `msdyn_autorefreshenable`, `msdyn_autorefreshinterval`, `msdyn_cardlayout`, `msdyn_defaultsortconfiguration`, `msdyn_entityconfiguration`, `msdyn_filterconfiguration`, `msdyn_inheritrolesfromparentsettings`, `msdyn_name`, `msdyn_salesaccelerationsettingsid`, `msdyn_securityrolelist`, `msdyn_tagsconfiguration`, `msdyn_viewtype`, `msdyn_worklistviewconfigurationid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_worklistviewconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_worklistviewconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_worklistviewconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_worklistviewconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_worklistviewconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_worklistviewconfig_salesaccelerationsettingsid` | [msdyn_salesaccelerationsettings](msdyn_salesaccelerationsettings.md) | `msdyn_salesaccelerationsettingsid` | `msdyn_salesaccelerationsettingsid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_worklistviewconfiguration_SyncErrors` | [msdyn_worklistviewconfiguration](msdyn_worklistviewconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_worklistviewconfiguration` |
| `msdyn_worklistviewconfiguration_DuplicateMatchingRecord` | [msdyn_worklistviewconfiguration](msdyn_worklistviewconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_worklistviewconfiguration` |
| `msdyn_worklistviewconfiguration_DuplicateBaseRecord` | [msdyn_worklistviewconfiguration](msdyn_worklistviewconfiguration.md) | `baserecordid` | `baserecordid_msdyn_worklistviewconfiguration` |
| `msdyn_worklistviewconfiguration_AsyncOperations` | [msdyn_worklistviewconfiguration](msdyn_worklistviewconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_worklistviewconfiguration` |
| `msdyn_worklistviewconfiguration_MailboxTrackingFolders` | [msdyn_worklistviewconfiguration](msdyn_worklistviewconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_worklistviewconfiguration` |
| `msdyn_worklistviewconfiguration_UserEntityInstanceDatas` | [msdyn_worklistviewconfiguration](msdyn_worklistviewconfiguration.md) | `objectid` | `objectid_msdyn_worklistviewconfiguration` |
| `msdyn_worklistviewconfiguration_ProcessSession` | [msdyn_worklistviewconfiguration](msdyn_worklistviewconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_worklistviewconfiguration` |
| `msdyn_worklistviewconfiguration_BulkDeleteFailures` | [msdyn_worklistviewconfiguration](msdyn_worklistviewconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_worklistviewconfiguration` |
| `msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_worklistviewconfiguration](msdyn_worklistviewconfiguration.md) | `objectid` | `objectid_msdyn_worklistviewconfiguration` |


## Source

Generated from [msdyn_worklistviewconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_worklistviewconfiguration')) on 2026-05-07.